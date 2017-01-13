#!/usr/bin/python3

import serverboards, sys, requests, time, json, urllib
from serverboards import rpc

def decorate_serie(serie):
    """
    Returns the series decorated as Serverboards likes it, not as Prometheus
    returns it.
    """
    return {
        "name": serie.get("metric",{}).get("__name__",None),
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
        if not expr:
            continue
        params = {
            "query": expr,
            "start": start,
            "end": end,
            "step": step,
            "_": now
        }
        serverboards.debug("Get data from %s, %s"%(url,repr(ssh_proxy)))
        res = requests.get(url+"/api/v1/query_range", params=params)
        if res.status_code!=200:
            raise Exception(res.text)

        js = res.json()
        if js.get("status")!="success":
            raise Exception("Unknown response from prometheus")
        for x in js.get("data",{}).get("result",[]):
            ret.append(decorate_serie(x))
    return ret

def test():
    assert True
    res=get(expression="prometheus_rule_evaluation_failures_total")
    print(json.dumps(res, indent=2))

    print("Success")

if __name__=='__main__':
    if len(sys.argv)==2 and sys.argv[1]=='test':
        test()
    else:
        serverboards.loop()
