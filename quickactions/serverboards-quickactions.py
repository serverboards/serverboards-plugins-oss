#!/usr/bin/python3

import uuid
import serverboards
from serverboards import rpc, print

service_projects_cache = {}


def service_in_project(service, project):
    print("service is", service)
    if not service:
        return True
    projects = service_projects_cache.get(service)
    if not projects:
        try:
            projects = rpc.call("service.get", service)["projects"]
            service_projects_cache[service] = projects
        except Exception as e:
            serverboards.log_traceback(e)
            projects = []
    return project in projects


@serverboards.rpc_method
def list_actions(project=None, service=None, star=None):
    items = rpc.call("plugin.data.items", "action.")
    items = [x[1] for x in items]
    if star:
        items = [x for x in items if x.get("star")]
    if project:
        items = [x for x in items if service_in_project(x.get("service"), project)]
    return items


@serverboards.rpc_method
def list_actions_select(**kwargs):
    serverboards.debug(kwargs)
    items = rpc.call("plugin.data.items", "action.")
    ret = [{"value": k[7:], "name": v["name"]} for k, v in items]
    serverboards.debug(ret)
    return sorted(ret, key=lambda x: x["name"])


@serverboards.rpc_method
def add_action(action):
    print(action)
    muuid = uuid.uuid4().hex
    action["id"] = muuid
    rpc.call("plugin.data.update", "action."+muuid, action)
    return muuid


@serverboards.rpc_method
def update_action(action):
    rpc.call("plugin.data.update", "action."+action["id"], action)
    return True


@serverboards.rpc_method
def run_action(actionid):
    action = rpc.call("plugin.data.get", "action."+actionid)
    serverboards.debug(actionid)
    serverboards.debug(action)
    params = action["params"]
    if action.get("service"):
        service = rpc.call("service.get", action.get("service"))
        params.update(service["config"])
    # print(action["action"], params)
    return rpc.call("action.trigger", action["action"], params)


serverboards.loop()
