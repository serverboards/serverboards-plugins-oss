#!env/bin/python3

import docker, json
import serverboards
from serverboards import print

ssh = serverboards.Plugin("serverboards.core.ssh/daemon")

def get_deep(d, data):
    if isinstance(d, dict):
        if data in d:
            return [d[data]]
        return [
            y
            for x in d.values()
            for y in get_deep(x, data)
            ]
    if isinstance(d, list):
        return [
            y
            for x in d
            for y in get_deep(x, data)
            ]

    return []

dstate2sstate = {
    "exited" : "stopped",
    "running" : "running"
}

def get_client(service):
    if service:
        port = ssh.open_port(service=service.get("config",{}).get("server"), unix="/var/run/docker.sock")
        client = docker.DockerClient(base_url="tcp://localhost:%d"%port)
    else:
        client = docker.DockerClient(base_url="unix://var/run/docker.sock")
    return client

@serverboards.rpc_method("list")
def _list(service=None, *args, **kwargs):
    client = get_client(service)
    containers = []
    for craw in client.api.containers(all=True):
        c = {
            "id": craw["Id"],
            "name": craw["Names"][0],
            "ip_address": get_deep(craw["NetworkSettings"], "IPAddress"),
            "state": dstate2sstate[craw["State"]],
        }
        containers.append(c)
    return containers

@serverboards.rpc_method
def details(service, vmc):
    client = get_client(service)
    craw = client.api.inspect_container(vmc)
    c = {
        "id": craw["Id"],
        "name": craw["Name"],
        "ip_address": get_deep(craw["NetworkSettings"], "IPAddress"),
        "state": dstate2sstate[craw["State"]["Status"]],
        "description": "Docker container",
        "icon": "docker-plain.svg",
        "props": craw
    }

    return c

@serverboards.rpc_method
def start(service, vmc):
    client = get_client(service)
    client.api.start(vmc)
    return True

@serverboards.rpc_method
def stop(service, vmc, force=None):
    client = get_client(service)
    client.api.stop(vmc)
    return True

serverboards.loop()
