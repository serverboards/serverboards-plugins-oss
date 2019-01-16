#!env/bin/python3

import yaml
import sys
import json
import datetime
from serverboards_google import get_service, async_execute
from urllib.parse import urlparse
from pcolor import printc
import serverboards_aio as serverboards


def get_spreadsheet_id(url):
    if url.startswith("https://"):
        id = urlparse(url).path.split('/')[3]
        return id
    return url


@serverboards.rpc_method("schema_sheets")
@serverboards.cache_ttl(60)
async def schema_sheets(config, table=None):
    config = config.get("config", config)
    sheets = await get_service(config["service_id"], "sheets", "v4")
    spreadsheetid = get_spreadsheet_id(config["spreadsheet"])
    # printc("Real id is ", spreadsheetid)
    if not table:
        data = await async_execute(sheets.spreadsheets().get(spreadsheetId=spreadsheetid))
        tables = [x["properties"]["title"].replace(" ", "_") for x in data.get("sheets", [])]
        return tables
    data = await async_execute(sheets.spreadsheets().values().get(spreadsheetId=spreadsheetid, range=("%s!A1:Z1" % table)))
    # printc(data)
    if not 'values' in data: # bad formed
        return {
            "columns": []
        }
    return {
        "columns": data["values"][0]
    }


@serverboards.rpc_method("extractor_sheets")
@serverboards.cache_ttl(30)
async def extractor_sheets(config, table, quals, columns):
    config = config.get("config", config)
    sheets = await get_service(config["service_id"], "sheets", "v4")
    spreadsheetid = get_spreadsheet_id(config["spreadsheet"])
    data = await async_execute(sheets.spreadsheets().values().get(spreadsheetId=spreadsheetid, range=("%s!A1:Z10000" % table)))
    return {
        "columns": data["values"][0],
        "rows": data["values"][1:],
    }


@serverboards.rpc_method
async def insert_sheets(config, table, columns, values):
    config = config.get("config", config)
    sheets = await get_service(config["service_id"], "sheets", "v4")
    spreadsheetid = get_spreadsheet_id(config["spreadsheet"])

    rcolumns = await async_execute(sheets.spreadsheets().values().get(spreadsheetId=spreadsheetid, range=("%s!A1:Z1" % table)))
    if not 'values' in rcolumns: # bad formed
        raise Exception("bad-formed-table")
    else:
        rcolumns = rcolumns["values"][0]

    # This is an array with the position on the final table of original columns
    orderedcols = [None] * len(rcolumns)
    for (i,c) in enumerate(columns):
        try:
            n = rcolumns.index(c)
            orderedcols[n] = i
        except:
            pass
    # printc(rcolumns, orderedcols)

    # we move them there
    ordered_values = []
    for row in values:
        r = [''] * len(rcolumns)
        for n, pos in enumerate(orderedcols):
            if pos is not None:
                v = row[pos]
                r[n] = v
        ordered_values.append(r)

    data = await async_execute(
        sheets.
            spreadsheets().
            values().
            append(
                spreadsheetId=spreadsheetid,
                range=("%s!A1:Z10000" % table),
                body={"values": ordered_values},
                valueInputOption="RAW"
            )
        )
    # printc(data)
    return {"inserted": len(values)}

@serverboards.rpc_method
async def append_to_sheet(service_id, spreadsheet, table, data, *args, **kwargs):
    table = table or "Sheet1"
    printc("Append ", service_id, spreadsheet, data, color="yellow")

    data = yaml.load(data)
    columns = list(data.keys())
    values = []
    for v in data.values():
        if v == "NOW":
            values.append(datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S"))
        else:
            values.append(v)

    await insert_sheets(
        {"service_id": service_id, "spreadsheet": spreadsheet},
        table, columns, [values]
    )
    return True


async def test():
    mock_data = yaml.load(open("mock.yaml"))
    config = mock_data["config"]
    # res = await schema_sheets(config)
    # printc("tables", res)
    #
    # res = await schema_sheets(config, "Sheet1")
    # printc("columns Sheet1", res)
    #
    # res = await extractor_sheets(config, "Sheet1", [], [])
    # printc("Result", json.dumps(res, indent=2))

    res = await insert_sheets(config, "Sheet1", ["email", "name"], [["Test email", "name test"]])
    printc("Result", json.dumps(res, indent=2))

    printc("ALL OK", color="green")
    sys.exit(0)

if __name__ == '__main__':
    argv = sys.argv[1:]
    if argv and argv[0] == "test":
        import os
        if os.path.exists("extramock.yaml"):
            mock_data = yaml.load(open("extramock.yaml"))
        else:
            mock_data = yaml.load(open("mock.yaml"))
        serverboards.test_mode(test, mock_data)
        printc("Failure", color="red")
        sys.exit(1)

    serverboards.loop()
