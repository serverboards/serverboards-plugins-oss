#!/usr/bin/python3

import serverboards_aio as serverboards
# from serverboards import print
from cache import Cache
cache = Cache('views.db')


@serverboards.rpc_method
def schema(config, table=None):
    if not table:
        return [config.get("config", {}).get("name")]
    return {
        "columns": [x.strip() for x in config.get("config", {}).get("columns", "").split(',')]
    }


@serverboards.rpc_method
async def extractor(config, table, quals, columns):
    return (await extractor_cached(config, table))


@cache.a(ttl=300)
async def extractor_cached(config, table):
    rconfig = config.get("config")

    query = rconfig.get("query")
    context = {e["id"]: e for e in rconfig.get("extractors", []) if 'id' in e}
    context["__vars__"] = next((e for e in rconfig.get("extractors", []) if 'id' not in e), {})

    res = await serverboards.query.query(query=query, context=context)
    ret = {
        "columns": schema(config, table).get("columns"),
        "rows": res.get("rows")
    }
    return ret


serverboards.loop()
