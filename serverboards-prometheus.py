#!/usr/bin/python3

import serverboards, sys, requests, time, json

def decorate_serie(serie):
    """
    Returns the series decorated as Serverboards likes it, not as Prometheus
    returns it.
    """
    return {
        "name": serie.get("metric",{}).get("__name__",None),
        "values": serie.get("values",[])
    }

@serverboards.rpc_method
def get(expression, service=None, url=None, start=None, end=None, step=None):
    if not expression:
        raise Exception("An expression is required")
    if not url:
        url="http://localhost:9090"
    if service:
        raise Exception("Not service proxying yet")

    now=int(time.time())

    if not start:
        start=now-600
    if not end:
        end=now
    if not step:
        step=14

    params = {
        "query": expression,
        "start": start,
        "end": end,
        "step": step,
        "_": now
    }
    res = requests.get(url+"/api/v1/query_range", params=params)
    if res.status_code!=200:
        raise Exception(res.text)

    js = res.json()
    if js.get("status")=="success":
        return [decorate_serie(x) for x in js.get("data",{}).get("result",[])]
    print(json.dumps(js, indent=2))
    raise Exception("Unknown response from prometheus")

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
