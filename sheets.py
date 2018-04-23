#!env/bin/python3

import yaml
import sys
import json
from serverboards_google import get_service, async_execute
from urllib.parse import urlparse
from pcolor import printc
import serverboards_aio as serverboards

def get_spreadsheet_id(url):
    if url.startswith("https://"):
        id = urlparse(url).path.split('/')[3]
        return id
    return url


@serverboards.cache_ttl(60)
@serverboards.rpc_method
async def schema_sheets(config, table=None):
    config = config.get("config", config)
    sheets = await get_service(config["service_id"], "sheets", "v4")
    spreadsheetid = get_spreadsheet_id(config["spreadsheet"])
    printc("Real id is ", spreadsheetid)
    if not table:
        data = await async_execute(sheets.spreadsheets().get(spreadsheetId=spreadsheetid))
        tables = [x["properties"]["title"].replace(" ", "_") for x in data.get("sheets", [])]
        return tables
    data = await async_execute(sheets.spreadsheets().values().get(spreadsheetId=spreadsheetid, range=("%s!A1:Z1" % table)))
    printc(data)
    if not 'values' in data: # bad formed
        return {
            "columns": []
        }
    return {
        "columns": data["values"][0]
    }

@serverboards.cache_ttl(30)
@serverboards.rpc_method
async def extractor_sheets(config, table, quals, columns):
    config = config.get("config", config)
    sheets = await get_service(config["service_id"], "sheets", "v4")
    spreadsheetid = get_spreadsheet_id(config["spreadsheet"])
    data = await async_execute(sheets.spreadsheets().values().get(spreadsheetId=spreadsheetid, range=("%s!A1:Z10000" % table)))
    return {
        "columns": data["values"][0],
        "rows": data["values"][1:],
    }


async def test():
    mock_data = yaml.load(open("mock.yaml"))
    config = mock_data["config"]
    res = await schema_sheets(config)
    printc("tables", res)

    res = await schema_sheets(config, "Sheet1")
    printc("columns Sheet1", res)

    res = await extractor_sheets(config, "Sheet1", [], [])
    printc("Result", json.dumps(res, indent=2))

    printc("ALL OK", color="green")
    sys.exit(0)

if __name__ == '__main__':
    argv = sys.argv[1:]
    if argv and argv[0] == "test":
        mock_data = yaml.load(open("mock.yaml"))
        serverboards.test_mode(test, mock_data)
        printc("Failure", color="red")
        sys.exit(1)

    serverboards.loop()
