#!/usr/bin/python3

import csv
import serverboards


TABLES = {
    "countries": "countries.iso3166.csv",
    "regions": "regions.iso3166.csv",
    "languages": "languages.iso639-2.csv"
}


@serverboards.rpc_method
def schema(config, table=None):
    if not table:
        return list(TABLES.keys())
    else:
        with open(TABLES[table]) as fd:
            reader = csv.reader(fd)
            columns = next(reader)
        return {
            "columns": columns
        }


@serverboards.rpc_method
def extractor(config, table, quals, columns):
    with open(TABLES[table]) as fd:
        reader = csv.reader(fd)
        columns = next(reader)

        rows = []
        for r in reader:
            rows.append(r)

    return {
        "columns": columns,
        "rows": rows,
    }


serverboards.loop()
