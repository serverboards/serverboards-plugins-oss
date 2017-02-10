#!/usr/bin/python3

import serverboards, urllib, sys, subprocess
sys.path.append('env/lib/python3.5/site-packages/')

from urllib.parse import urlparse
from dateutil.parser import parse as dateparse
import concurrent.futures
from serverboards import rpc, Plugin

TIMEOUT=5

def merge_expirations(all_expirations):
    ret=[]
    ids = set([])

    print(all_expirations)
    for expirations in all_expirations:
        for e in (expirations or []):
            id=e.get('id')
            if id:
                if id in ids:
                    continue
                ids.add(id)

            ret.append(e)
    return ret

def url_expiration(service):
    expirations=[]

    expirations+=ssl_expiration(service)
    expirations+=dns_expiration(service)
    expirations+=imaps_expiration(service)

    return [e for e in expirations if e]

def service_url(service):
    url = urlparse( service.get("config", {}).get("url", "") )
    if "'" in url.hostname or ';' in url.hostname or '\\' in url.hostname:
        serverboards.error("Invalid domain name %s"%domain)
        return []
    return url

@serverboards.rpc_method
def imaps_expiration(service):
    return ssl_expiration(service, 993, "imaps")

@serverboards.rpc_method
def ssl_expiration(service, defport=443, scheme="https"):
    serverboards.debug("Check SSL ", service)
    url = service_url(service)
    if url.scheme != scheme:
        return []
    domain = url.hostname
    port = url.port or defport
    try:
        port=int(port)
    except:
        serverboards.error("Invalid port: %s"%port)
        return []

    try:
        cmd =("/usr/bin/timeout {timeout} /usr/bin/openssl s_client -connect '{domain}:{port}' -servername '{domain}' 2>/dev/null | /usr/bin/openssl x509 -noout -dates"
            .format(domain=domain, port=port, timeout=TIMEOUT))
        cp=subprocess.run(cmd, shell=True, stdout=subprocess.PIPE )

        not_after = next(x[9:] for x in cp.stdout.split(b'\n') if x.startswith(b"notAfter="))
        date=(dateparse(not_after))
        return [{"date":str(date), "name":"%s SSL Certificate"%scheme.upper()}]
    except StopIteration: # not marked? bad cert?
        return []

@serverboards.rpc_method
def dns_expiration(service):
    serverboards.debug("Check DNS ", service)
    domain = service_url(service).hostname
    def decorate(l, d):
        try:
            e = l.split(':')
            date = str(dateparse(e[1]))
            desc = e[0].strip()
            if desc=="Registrar Registration Expiration Date":
                desc = "Expiration Date"
            if d != domain:
                desc += " (%s)"%d
            return {"name":"DNS %s"%desc, "date": date, "id": "dns/%s"%d}
        except:
            import traceback; traceback.print_exc()
            return None
    def maybe_domains(domain): # removes trailing subdomains to get to proper company.TLD
        dom=domain.split('.')[:-1]
        s=0
        for i in dom:
            yield domain[s:]
            s+=len(i)+1

    for d in maybe_domains(domain):
        try:
            cp=subprocess.run(
                ["/usr/bin/whois",d],
                stdout=subprocess.PIPE, timeout=TIMEOUT
                )
        except:
            import traceback; traceback.print_exc()
            return []
        lines=str(cp.stdout, 'utf8').split('\n')
        expirations = [l for l in lines if 'free' in l or 'Exp' in l]
        if expirations:
            return [decorate(l, d) for l in expirations]
    return []

def compatible_traits(service, component):
    straits=set(service.get("traits"))
    ctraits=set(component.get("traits"))
    if straits.intersection(ctraits):
        return True
    return False

def slimmed_service(s):
    return {
        "uuid" : s["uuid"],
        "name" : s["name"],
        "type" : s["type"],
        "config" : s["config"]
    }

@serverboards.rpc_method
def update_expirations(**kwfilter):
    """
    Gathers a list of all services from the server, and runs all known
    expiration checkers on all of them.

    This may take some time.

    Data is later stored into the plugin database.
    """
    services = rpc.call("service.list", **kwfilter)
    checkers = rpc.call("plugin.list_components", {"type": "serverboards.expiration"})

    def check_service(sc):
        s,c = sc
        serverboards.debug("Check ",s["name"], c["name"])
        try:
            ret = []
            expirations_raw = Plugin.start_call_stop(c["extra"]["command"], c["extra"]["call"], slimmed_service(s))
            for r in expirations_raw:
                r["service"]=s["uuid"]
                r["check"]=c["id"]
                r["serverboards"]=s["serverboards"]
                ret.append( r )
            serverboards.debug("Expirations: %s"%repr(ret))
            return ret
        except:
            import traceback; traceback.print_exc()
            serverboards.error("Could not check %s"%s["name"])
            return []


    checks = []
    # I calculate possible combinations
    for s in services:
        for c in checkers:
            if compatible_traits(s,c):
                checks.append( (s,c) )
    # And now go for it
    serverboards.debug("%d checks"%len(checks))
    expirations = []
    #with concurrent.futures.ThreadPoolExecutor() as executor:
    #    expirations = merge_expirations( executor.map(check_service, checks) )
    expirations = merge_expirations( [check_service(sc) for sc in checks] )
    expirations.sort(key=lambda x: x["date"])

    rpc.call("plugin.data_set", "expirations", expirations)

    return expirations

@serverboards.rpc_method
def list_expirations():
    return rpc.call("plugin.data_get", "expirations") or []


if __name__=='__main__':
    if len(sys.argv)>1:
        exps=[]
        def do_url(s):
            return url_expiration( {"config":{"url":s}} )
        with concurrent.futures.ProcessPoolExecutor() as executor:
            print( merge_expirations( executor.map(do_url, sys.argv[1:]) ) )
    else:
        serverboards.loop()
