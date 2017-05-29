#!/usr/bin/python3

import serverboards, sys, requests, time, json, urllib, os, shutil, yaml, sh
from serverboards import rpc

ssh=serverboards.Plugin("serverboards.core.ssh/daemon")
port_map={} # uuid to port, to know when to close and open again at updates

def cwd(*filenames):
    return os.path.join(os.environ["HOME"], *filenames)

@serverboards.rpc_method
def node_exporter_updated(service):
    serverboards.info("Updating prometheus config file.")
    print(service)
    ssh.run(service=service["config"]["server"], command="mkdir -p /opt/serverboards/bin/")
    ssh.scp(None, cwd("node_exporter/node_exporter"), service["config"]["server"], "/opt/serverboards/bin/")
    ssh.scp(None, os.path.join(os.path.dirname(__file__), "node_exporter.service"), service["config"]["server"], "/etc/systemd/system/")
    ssh.run(service=service["config"]["server"], command="systemctl node_exporter enable")
    ssh.run(service=service["config"]["server"], command="systemctl node_exporter start")
    update_promservices_yaml()

serverboards.rpc.subscribe("service.updated[serverboards.prometheus/node_exporter]", node_exporter_updated)
serverboards.rpc.subscribe("service.updated[serverboards.prometheus/service]", node_exporter_updated)

@serverboards.rpc_method
def start_prometheus():
    serverboards.info("Starting prometheus")
    try:
        sh.fuser("-n", "tcp", "9090","-k")
    except:
        pass # not really running
    try:
        update_promservices_yaml() # first update, maybe something changed when asleep
    except Exception as e:
        import traceback; traceback.print_exc()
        serverboards.error("Could not update promservices!")
    try:
        sh.Command(cwd("prometheus/prometheus"))("-web.listen-address", ":9090","-config.file", cwd("prometheus.yml"), _bg=True, _cwd=cwd("."))
    except:
        import traceback; traceback.print_exc()
        serverboards.error("Prometheus could not be started. Check installation.")
    return 365*24*60*60 # restart in a year

@serverboards.rpc_method
def update_promservices_yaml():
    serverboards.debug("Update the prometheus services yaml file")
    promservices=[]
    services = serverboards.rpc.call("service.list", type="serverboards.prometheus/node_exporter")
    services += serverboards.rpc.call("service.list", type="serverboards.prometheus/agent")

    for n, s in enumerate(services):
        try:
            config = s["config"]
            if not config:
                continue
            hostname = config.get("hostname","localhost")
            port = config.get("port", "9100")
            server = config.get("server")
            serverboards.debug("Opening SSH tunnel to %s:%s:%s"%(server, hostname, port))
            if server:
                newport = ssh.open_port(ssh_service=server, hostname=hostname, port=port)
                port_map[s["uuid"]]=newport # FIXME, use for closing ports and so on.
                target = "localhost:%d"%newport
                serverboards.debug("Added prometheus managed node_exporter at %s via %s"%(newport, server))
            else:
                target = config.get("url")
                if target.startswith('http://'):
                    target=target[7:]

            if target:
                promservices.append({
                    "targets": [target],
                    "labels" : {
                        "uuid": s["uuid"],
                        "projects" : ','.join(s["projects"]),
                        "tags": ','.join(s["tags"]),
                        "name": s["name"]
                     }
                })
        except:
            serverboards.error("Could not open port to service %s/%s."%(s["uuid"], s["name"]), extra=dict(service_id = s["uuid"]))

    serverboards.info("Updated prometheus service list with %d remote services"%(len(promservices)))
    with open(cwd("promservices.yaml"),"wt") as wd:
        wd.write(yaml.dump(promservices))
    return True


if __name__=='__main__':
    if len(sys.argv)==2 and sys.argv[1]=='test':
        test()
    else:
        serverboards.loop()
