#!/usr/bin/python3

import serverboards

@serverboards.rpc_method
def calculate_logmap():
    logs=serverboards.rpc.call("logs.history",{})
    serverboards.debug(logs)
