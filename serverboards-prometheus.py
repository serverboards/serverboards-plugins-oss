#!/usr/bin/python3

import serverboards, sys, requests, time, json, urllib
from serverboards import rpc, print

IGNORE_METRIC_NAMES=set(['node','instance','job'])

td_to_s_multiplier=[
    ("ms", 0.001),
    ("s", 1),
    ("m", 60),
    ("h", 60*60),
    ("d", 24*60*60),
]

uuid_to_timer={}

def time_description_to_seconds(td):
    if type(td) in (int, float):
        return float(td)
    for sufix, multiplier in td_to_s_multiplier:
        if td.endswith(sufix):
            return float(td[:-len(sufix)])*multiplier
    return float(td)

def decorate_serie(serie, name=None):
    """
    Returns the series decorated as Serverboards likes it, not as Prometheus
    returns it.
    """
    metric = serie.get("metric",{})
    name = name or metric.get("__name__",None)
    if not name:
        name = ', '.join("%s: %s"%(k,v) for k,v in metric.items() if not k in IGNORE_METRIC_NAMES)
    return {
        "name": name,
        "values": serie.get("values",[])
    }

open_ports={}
ssh_id=None
def port_tunnel(ssh_url, hostname, port):
    rpc.debug("Open at tunel %s"%ssh_url)
    global ssh_id
    ret = open_ports.get( (ssh_url, hostname, port) )
    if ret:
        serverboards.debug("Using local port from cache: %s"% port)
        return ret
    if ssh_id is None:
        ssh_id=rpc.call("plugin.start","serverboards.core.ssh/daemon")
    newport = rpc.call(ssh_id+".open_port", url=ssh_url, hostname=hostname, port=port)
    open_ports[ (ssh_url, hostname, port) ] = newport
    serverboards.debug("Opened new port: %s"% newport)
    return newport

@serverboards.rpc_method
def get(expression, ssh_proxy=None, url=None, start=None, end=None, step=None):
    if not expression:
        raise Exception("An expression is required")
    if not url:
        url="http://localhost:9090"
    if ssh_proxy:
        url=urllib.parse.urlparse(url)
        port=port_tunnel(ssh_proxy, url.hostname, url.port)
        url="http://localhost:%d"%port

    now=int(time.time())

    if not start:
        start=now-600
    if not end:
        end=now
    if not step:
        step=14

    ret=[]
    for expr in expression.split('\n'): # maybe several expresions, one per line
        expr=expr.strip()
        name=None
        if ':' in expr:
            d=expr.split(':')
            name=d[0]
            expr=d[1].strip()
        if not expr:
            continue
        params = {
            "query": expr,
            "start": start,
            "end": end,
            "step": step,
            "_": now
        }
        serverboards.debug("Get data from %s, %s: %s"%(url,repr(ssh_proxy), expr))
        try:
            res = requests.get(url+"/api/v1/query_range", params=params)
        except:
            raise Exception("Coult not connect to the Prometheus server. Is it running?")
        if res.status_code!=200:
            raise Exception(res.text)

        js = res.json()
        if js.get("status")!="success":
            raise Exception("Unknown response from prometheus")
        for x in js.get("data",{}).get("result",[]):
            ret.append(decorate_serie(x, name=name))
    return ret

def get_points(ssh_proxy=None, url=None, expression=None):
    if not url:
        url="http://localhost:9090"
    if ssh_proxy:
        url=urllib.parse.urlparse(url)
        port=port_tunnel(ssh_proxy, url.hostname, url.port)
        url="http://localhost:%d"%port
    now=int(time.time())
    params = {
        "query": expression,
        "time": now,
        "_": now
    }
    res = requests.get(url+"/api/v1/query", params=params)
    return res.json()["data"]["result"]

@serverboards.rpc_method
def watch_start(id=None, period=None, service=None, expression=None, **kwargs):
    state = None
    ssh_proxy=service.get("config", {}).get("ssh_proxy")
    url=service.get("config", {}).get("url")
    period_s = time_description_to_seconds(period or "5m")

    def check_ok():
        serverboards.debug("Checking expression: %s"%(expression))
        p = get_points(ssh_proxy=ssh_proxy, url=url, expression=expression)
        nstate = "ok" if bool(p) else "nok"
        if state != nstate:
            serverboards.rpc.event("trigger", {"id":id, "state": nstate})
        return True

    check_ok()
    timer_id = serverboards.rpc.add_timer(period_s, check_ok)
    serverboards.info("Start Prometheus watch %s"%timer_id)
    return timer_id

@serverboards.rpc_method
def watch_stop(id):
    serverboards.info("Stop Prometheus watch %s"%(id))
    serverboards.rpc.remove_timer(id)
    return "ok"

@serverboards.cache_ttl(30)
def get_values(ssh_proxy=None, url=None):
    if not url:
        url="http://localhost:9090"
    if ssh_proxy:
        url=urllib.parse.urlparse(url)
        port=port_tunnel(ssh_proxy, url.hostname, url.port)
        url="http://localhost:%d"%port
    res = requests.get(url+"/api/v1/label/__name__/values")
    return res.json()["data"]

@serverboards.cache_ttl(30)
def get_tags(ssh_proxy=None, url=None, value="", tag=None):
    if not url:
        url="http://localhost:9090"
    if ssh_proxy:
        url=urllib.parse.urlparse(url)
        port=port_tunnel(ssh_proxy, url.hostname, url.port)
        url="http://localhost:%d"%port
    res = requests.get(url+"/api/v1/series?match[]=%s"%value)
    data = res.json()["data"]
    print("value", value, data)
    if not tag:
        ret = set()
        for d in data:
            ret.update(d.keys())
        return sorted([x for x in ret if not x.startswith('__')])
    else:
        ret = set()
        for d in data:
            ret.add(d.get(tag))
        return [x for x in ret if x and not x.startswith('__')]

BUILTINS = ["sum(","min(","max(","avg(","stddev(","stdvar(","count(","count_values(","bottomk(","topk(", "quantile("]

@serverboards.rpc_method
def autocomplete_values(current="", ssh_proxy=None, url=None, **kwargs):
    if not current:
        return []
    if '=' in current:
        prefix,suffix = current.split('{')
        tag, suffix = suffix.split('=')
        if suffix.startswith('"'):
            suffix = suffix[1:]
        options = ['%s{%s="%s"}'%(prefix, tag, x)
            for x in get_tags(ssh_proxy, url, prefix, tag)
            if x.startswith(suffix)
            ]
    elif '{' in current:
        prefix,suffix = current.split('{')
        options = ['%s{%s="'%(prefix, x)
            for x in get_tags(ssh_proxy, url, prefix)
            if x.startswith(suffix)
            ]
    else:
        options = get_values(ssh_proxy, url) + BUILTINS
    print(options)
    for cpart in current.lower().replace('{','_').replace('=','_').split('_'):
        options = [x for x in options if cpart in x.lower()]
    return sorted(options)

def test():
    #res=get(expression="prometheus_rule_evaluation_failures_total")
    #print(json.dumps(res, indent=2))

    res=get_points(expression="up == 1")
    print(json.dumps(res, indent=2))

    print("Success")

if __name__=='__main__':
    if len(sys.argv)==2 and sys.argv[1]=='test':
        test()
    else:
        serverboards.loop()
