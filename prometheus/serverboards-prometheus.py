#!env/bin/python3

import serverboards_aio as serverboards
import sys
import asks
import time
import json
import urllib
import curio
from serverboards_aio import print
from pcolor import printc

asks.init('curio')
IGNORE_METRIC_NAMES = set(['instance', 'job'])

td_to_s_multiplier = [
    ("ms", 0.001),
    ("s", 1),
    ("m", 60),
    ("h", 60 * 60),
    ("d", 24 * 60 * 60),
]

uuid_to_timer = {}


def time_description_to_seconds(td):
    if type(td) in (int, float):
        return float(td)
    for sufix, multiplier in td_to_s_multiplier:
        if td.endswith(sufix):
            return float(td[:-len(sufix)]) * multiplier
    return float(td)


def decorate_serie(serie, name=None):
    """
    Returns the series decorated as Serverboards likes it, not as Prometheus
    returns it.
    """
    metric = serie.get("metric", {})
    name = name or metric.get("__name__", None)
    if not name:
        name = ', '.join("%s: %s" % (k, v)
                         for k, v in metric.items()
                         if k not in IGNORE_METRIC_NAMES)
    return {
        "name": name,
        "values": serie.get("values", [])
    }


ssh = serverboards.Plugin("serverboards.core.ssh/daemon")


@serverboards.cache_ttl(3000)
async def port_tunnel(via, hostname, port):
    newport = await ssh.open_port(service=via, hostname=hostname, port=port)
    await serverboards.debug("Opened new port: %s" % newport)
    return newport


@serverboards.cache_ttl(300)
async def service_get(service_id):
    if not service_id:
        return {"config": {}}
    return await serverboards.service.get(service_id)


@serverboards.rpc_method
async def get(expression, service=None, start=None, end=None, step=None):
    if not expression:
        raise Exception("An expression is required")
    service = await service_get(service)
    url = service.get("config", {}).get("url", "http://localhost:9090")
    via = service.get("config", {}).get("via")
    if via:
        url = urllib.parse.urlparse(url)
        port = await port_tunnel(via, url.hostname, url.port)
        url = "http://localhost:%d" % port

    now = int(time.time())

    if not start:
        start = now - 600
    if not end:
        end = now
    if not step:
        step = 14

    ret = []
    # maybe several expresions, one per line
    for expr in expression.split('\n'):
        expr = expr.strip()
        name = None
        if ':' in expr:
            d = expr.split(':')
            name = d[0]
            expr = d[1].strip()
        if not expr:
            continue
        params = {
            "query": expr,
            "start": start,
            "end": end,
            "step": step,
            "_": now
        }
        # serverboards.debug("Get data from %s, %s: %s"%(url,repr(via), expr))
        try:
            res = await asks.get(url + "/api/v1/query_range", params=params)
        except Exception:
            raise Exception(
                "Coult not connect to the Prometheus server. Is it running?")
        if res.status_code != 200:
            raise Exception(res.text)

        js = res.json()
        if js.get("status") != "success":
            raise Exception("Unknown response from prometheus")
        for x in js.get("data", {}).get("result", []):
            ret.append(decorate_serie(x, name=name))
    return ret


async def get_points(via=None, url=None, expression=None):
    if not url:
        url = "http://localhost:9090"
    if via:
        url = urllib.parse.urlparse(url)
        port = await port_tunnel(via, url.hostname, url.port)
        url = "http://localhost:%d" % port
    now = int(time.time())
    params = {
        "query": expression,
        "time": now,
        "_": now
    }
    printc(url + "/api/v1/query", params)
    res = await asks.get(url + "/api/v1/query", params=params)
    return res.json()["data"]["result"]


watch_tasks = {}


@serverboards.rpc_method
async def watch_start(id=None, period=None, service=None, expression=None, **kwargs):
    state = None
    via = service.get("config", {}).get("via")
    url = service.get("config", {}).get("url")
    period_s = time_description_to_seconds(period or "5m")
    nstate = None

    async def check_ok():
        while True:
            await serverboards.debug("Checking expression: %s" % (expression))
            p = await get_points(via=via, url=url, expression=expression)
            if state != nstate:
                await serverboards.rpc.event("trigger", {"id": id, "value": p})
            await curio.sleep(period_s)

    await serverboards.info("Start Prometheus watch %s" % timer_id)
    watch_tasks[id] = curio.spawn(check_ok)
    return id


@serverboards.rpc_method
async def watch_stop(id):
    await serverboards.info("Stop Prometheus watch %s" % (id))
    await watch_tasks[id].cancel()
    watch_tasks[id].join()
    del watch_tasks[id]
    return "ok"


@serverboards.cache_ttl(30)
async def get_values(via=None, url=None):
    if not url:
        url = "http://localhost:9090"
    if via:
        url = urllib.parse.urlparse(url)
        port = await port_tunnel(via, url.hostname, url.port)
        url = "http://localhost:%d" % port
    res = await asks.get(url + "/api/v1/label/__name__/values")
    return res.json()["data"]


@serverboards.cache_ttl(30)
async def get_tags(via=None, url=None, value="", tag=None):
    if not url:
        url = "http://localhost:9090"
    if via:
        url = urllib.parse.urlparse(url)
        port = await port_tunnel(via, url.hostname, url.port)
        url = "http://localhost:%d" % port
    res = await asks.get(url + "/api/v1/series?match[]=%s" % value)
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


BUILTINS = ["sum(", "min(", "max(", "avg(", "stddev(", "stdvar(",
            "count(", "count_values(", "bottomk(", "topk(", "quantile("]


@serverboards.rpc_method
async def autocomplete_values(current="", via=None, url=None, **kwargs):
    if not current:
        return []
    if '=' in current:
        prefix, suffix = current.split('{')
        tag, suffix = suffix.split('=')
        if suffix.startswith('"'):
            suffix = suffix[1:]
        options = ['%s{%s="%s"}' % (prefix, tag, x)
                   for x in (await get_tags(via, url, prefix, tag))
                   if x.startswith(suffix)
                   ]
    elif '{' in current:
        prefix, suffix = current.split('{')
        options = ['%s{%s="' % (prefix, x)
                   for x in (await get_tags(via, url, prefix))
                   if x.startswith(suffix)
                   ]
    else:
        options = (await get_values(via, url)) + BUILTINS
    for cpart in \
            current.lower().replace('{', '_').replace('=', '_').split('_'):
        options = [x for x in options if cpart in x.lower()]
    return sorted(options)


async def connect_url_via_status(url, via):
    # print("Check ", url, via)
    if via:
        url = urllib.parse.urlparse(url)
        print("Tunel to", url.hostname, url.port)
        try:
            port = await port_tunnel(via, url.hostname, url.port)
        except Exception:
            return "ssh-proxy-error"
        url = "http://localhost:%d" % port
    # print("Check url", url)
    try:
        res = await asks.get(url)
    except Exception as e:
        return "down"
    if res.status_code == 200:
        return "ok"
    else:
        return "nok"


@serverboards.rpc_method
async def prometheus_is_up(service):
    return await connect_url_via_status(
        url=service["config"].get("url") or "http://localhost:9090",
        via=service["config"]["via"])


@serverboards.rpc_method
async def agent_is_up(service):
    return await connect_url_via_status(
        url=service["config"].get("url") or "http://localhost:9090",
        via=service["config"]["via"])


@serverboards.rpc_method
async def node_exporter_is_up(service):
    return await connect_url_via_status(
        url=service["config"].get("url") or "http://localhost:9100",
        via=service["config"]["server"])


async def test():
    # res=get(expression="prometheus_rule_evaluation_failures_total")
    # print(json.dumps(res, indent=2))
    printc("START")
    try:
        res = await autocomplete_values("up")
        printc(json.dumps(res, indent=2))

        res = await get_points(expression="up == 1")
        assert res

        res = await get(service="XXX", expression="up")
        assert res

        res = await node_exporter_is_up({
            "config": {
                "url": None,
                "server": None,
            }
        })
        printc(res)
        assert res == "ok"

        res = await node_exporter_is_up({
            "config": {
                "url": "https://127.255.255.255:1000/",
                "server": None,
            }
        })
        printc(res)
        assert res == "down"

    except Exception as e:
        import traceback
        traceback.print_exc()
        sys.exit(1)
    printc("Success")


if __name__ == '__main__':
    if len(sys.argv) == 2 and sys.argv[1] == 'test':
        import yaml
        serverboards.test_mode(test, yaml.load(open("mock.yaml")))
        print("Failed!")
        sys.exit(1)
    else:
        serverboards.loop()
