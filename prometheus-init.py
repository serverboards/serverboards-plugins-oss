#!/usr/bin/python3

import serverboards, sys, requests, time, json, urllib, os, shutil, yaml, sh, re
from serverboards import rpc, action, print
import socket
from contextlib import closing
#sys.stderr=serverboards.error

ssh=serverboards.Plugin("serverboards.core.ssh/daemon")

def cwd(*filenames):
    return os.path.join(os.environ["HOME"], *filenames)

def socket_is_open(host, port):
    with closing(socket.socket(socket.AF_INET, socket.SOCK_STREAM)) as sock:
        if sock.connect_ex((host, port)) == 0:
            return True
        return False

def open_node_port(uuid, config, context={}):
    server = config.get("server")
    hostname = config.get("hostname","localhost")
    port = int(config.get("port", "9100"))
    if not server:
        target = config.get("url")
        if target.startswith('http://'):
            target=target[7:]

        if ':' in target:
            return target.split(':')[:2]
        return (target, 9100)

    serverboards.debug("Opening SSH tunnel to %s:%s:%s"%(server, hostname, port), service_id=uuid, **context)

    newport = ssh.open_port(service=server, hostname=hostname, port=port)

    return ("localhost", newport)


@serverboards.rpc_method
def node_exporter_updated(service):
    config = service["config"]

    # no remote SSH server, will not try to install
    if not config.get("server"):
        update_promservices_yaml()
        return

    (host, port) = open_node_port(service["uuid"], config, context={"task":"prometheus.node_exporter_updated"})

    # Already running, no install neede.
    if socket_is_open(host, port):
        update_promservices_yaml()
        return

    context = dict( task="prometheus.node_exporter_update", service_id=service["uuid"] )
    server_uuid = service["config"]["server"]
    serverboards.info("Updating prometheus config file.", **context)
    try:
        ssh.run(
            service=server_uuid,
            command="mkdir -p /opt/serverboards/bin/",
            context=context)
        ssh.scp(
            fromservice=None, fromfile=cwd("node_exporter/node_exporter"),
            toservice=server_uuid, tofile="/opt/serverboards/bin/",
            context=context)
        ssh.scp(
            fromservice=None, fromfile=os.path.join(os.path.dirname(__file__), "node_exporter.service"),
            toservice=server_uuid, tofile="/etc/systemd/system/",
            context=context)
        ssh.run(service=server_uuid, command="systemctl enable node_exporter", context=context)
        ssh.run(service=server_uuid, command="systemctl start node_exporter", context=context)
    except:
        serverboards.error("Could not install prometheus node_exporter at the remote server.", **context)
    update_promservices_yaml()

ASNI_TERM_CODES=re.compile("\033.*?m")
class PrometheusOutputParse:
    INFO="INFO"
    WARN="ERRO"
    ERRO="WARN"

    EXTRA={"file":"prometheus/prometheus", "line":"--", "task": "prometheus.init"}
    def write(self, alldata, *args, **kwargs):
        alldata = alldata.decode('utf8')
        alldata = ASNI_TERM_CODES.sub("", alldata)
        for data in alldata.split('\n'):
            if not data:
                continue
            if data.startswith(PrometheusOutputParse.INFO):
                pid=data[5:9]
                rpc.info(data[11:], pid=pid, **PrometheusOutputParse.EXTRA)
            elif data.startswith(PrometheusOutputParse.WARN):
                pid=data[5:9]
                rpc.warning(data[11:], pid=pid, **PrometheusOutputParse.EXTRA)
            elif data.startswith(PrometheusOutputParse.ERRO):
                pid=data[5:9]
                rpc.error(data[11:], pid=pid, **PrometheusOutputParse.EXTRA)
            else:
                rpc.error(repr(data), **PrometheusOutputParse.EXTRA)
    def flush(*args, **kwargs):
        pass

@serverboards.rpc_method
def start_prometheus():
    serverboards.rpc.subscribe("service.updated[serverboards.prometheus/node_exporter]", node_exporter_updated)
    serverboards.rpc.subscribe("service.updated[serverboards.prometheus/service]", node_exporter_updated)
    context = dict( task="prometheus.init" )

    # Update the service list
    update_promservices_yaml()

    if not os.path.exists(cwd("prometheus/prometheus")):
        serverboards.error("Prometheus binary not available, trying to install", **context)
        from setup import setup
        setup()
        update_promservices_yaml()

    serverboards.info("Starting prometheus", **context)

    # If prometheus already running, do nothing.
    if socket_is_open("localhost", 9090):
        print("Prometheus already running, do nothing.")
        return 365*24*60*60 # restart in a year

    try:
        update_promservices_yaml() # first update, maybe something changed when asleep
    except Exception as e:
        import traceback; traceback.print_exc()
        serverboards.error("Could not update promservices!", **context)

    try:
        prometheus = sh.Command(cwd("prometheus/prometheus"))
        prom = prometheus(
            "-web.listen-address", ":9090",
            "-config.file", cwd("prometheus.yml"),
            _bg=True, _cwd=cwd("."), _out=PrometheusOutputParse(), _err_to_out=True,
            )
        time.sleep(3)
        if os.waitpid(prom.pid, os.WNOHANG) != (0,0):
            serverboards.error("Serverboards not running (3 sec wait).")
            raise Exception("Could not start prometheus.")
        action.trigger("serverboards.core.actions/close-issue", issue="prometheus.norun")
    except ChildProcessError:
        serverboards.error("Started but finished early. Check installation. Command was: %s: %s"%(cwd('.'), prom.ran), **context)
        action.trigger("serverboards.core.actions/open-issue",
            issue="prometheus.norun",
            title="Prometheus failed to start",
            description="Trying to start prometheus, but exited too early. Maybe broken database?\n\nCheck [Serverboards Forum](https://forum.serverboards.io)."
            )
        return 30*60 # try in 30 min.
    except Exception:
        import traceback
        e=traceback.format_exc()
        serverboards.error("Prometheus could not be started. Check installation. %s"%(e), **context)
        action.trigger("serverboards.core.actions/open-issue",
            issue="prometheus.norun",
            title="Prometheus failed to start",
            description="Trying to start prometheus failed with:\n\n```\n%s\n```"%(e)
            )
        return 30*60 # try in 30 min.

    return 365*24*60*60 # restart in a year

@serverboards.rpc_method
def update_promservices_yaml():
    context = dict( task="prometheus.update-yaml" )

    serverboards.debug("Update the prometheus services yaml file", **context)
    promservices=[]
    services = serverboards.rpc.call("service.list", type="serverboards.prometheus/node_exporter")
    services += serverboards.rpc.call("service.list", type="serverboards.prometheus/agent")

    for n, s in enumerate(services):
        try:
            config = s["config"]
            if not config:
                continue
            server = config.get("server")
            (host, port)=open_node_port(s["uuid"], config, context=context)
            target="%s:%s"%(host, port)
            serverboards.debug("Added prometheus managed node_exporter at %s:%s via %s"%(host, port, server), service_id=s["uuid"], **context)

            labels = {
                "projects" : ','.join(s["projects"]),
                "instance": s["uuid"]
                }
            tags = s["tags"]
            if tags:
                labels["tags"] = ','.join(tags)

            promservices.append({
                "targets": [target],
                "labels" : labels
            })
        except:
            serverboards.error("Could not open port to service %s/%s."%(s["uuid"], s["name"]), service_id = s["uuid"], **context)

    with open(cwd("promservices.yaml"),"wt") as wd:
        wd.write(yaml.dump(promservices))
    serverboards.info("Updated prometheus service list with %d remote services"%(len(promservices)), **context)
    return True


if __name__=='__main__':
    if len(sys.argv)==2 and sys.argv[1]=='test':
        test()
    else:
        serverboards.loop()
