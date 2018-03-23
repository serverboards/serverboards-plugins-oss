#!env/bin/python3

import serverboards
import sys
import subprocess
import concurrent.futures
import datetime
import pytz
import dateutil
from dateutil.parser import parse as dateparse
from urllib.parse import urlparse
from serverboards import rpc, Plugin, print

TIMEOUT = 5


def merge_expirations(all_expirations):
    ret = []
    ids = set([])

    for expirations in all_expirations:
        for e in (expirations or []):
            id = e.get('id')
            if id:
                if id in ids:
                    continue
                ids.add(id)

            ret.append(e)
    return ret


def url_expiration(service):
    expirations = []

    expirations += ssl_expiration(service)
    expirations += dns_expiration(service)
    expirations += imaps_expiration(service)

    return [e for e in expirations if e]


def service_url(service):
    domain = service.get("config", {}).get("url", "")
    url = urlparse(domain)
    # print( service.get("config", {}).get("url", ""), url)
    if url.hostname and (
            ("'" in url.hostname) or
            (';' in url.hostname) or
            ('\\' in url.hostname)):
        serverboards.error("Invalid domain name %s" % domain)
        return []
    return url


@serverboards.rpc_method
def imaps_expiration(service):
    return ssl_expiration(service, 993, "imaps")


@serverboards.rpc_method
def ssl_expiration(service, defport=443, scheme="https"):
    serverboards.debug("Check SSL %s" % service)
    url = service_url(service)
    if url.scheme != scheme:
        return []
    domain = url.hostname
    port = url.port or defport
    try:
        port = int(port)
    except Exception:
        serverboards.error("Invalid port: %s" % port)
        return []

    try:
        cmd = ("""\
/usr/bin/timeout {timeout} \
/usr/bin/openssl s_client \
  -connect '{domain}:{port}'\
  -servername '{domain}' \
  2>/dev/null | /usr/bin/openssl x509 -noout -dates
                """.format(domain=domain, port=port, timeout=TIMEOUT))
        cp = subprocess.run(cmd, shell=True, stdout=subprocess.PIPE)

        not_after = next(
            x[9:]
            for x in cp.stdout.split(b'\n')
            if x.startswith(b"notAfter=")
        )
        date = (dateparse(not_after))
        return [{
            "date": str(date),
            "name": "%s SSL Certificate" % scheme.upper()
        }]
    except StopIteration:  # not marked? bad cert?
        return []


@serverboards.rpc_method
def dns_expiration(service):
    # serverboards.debug("Check DNS %s "%service)
    domain = service_url(service).hostname

    def decorate(line, d):
        line = line.strip()
        try:
            print(line)
            e = line.split(':')
            if not e[1]:
                return None
            date = str(dateparse(e[1]))
            desc = e[0].strip()
            if desc == "Registrar Registration Expiration Date":
                desc = "Expiration Date"
            if d != domain:
                desc += " (%s)" % d
            return {
                "name": "DNS %s" % desc,
                "date": date,
                "id": "dns/%s" % d
            }
        except Exception:
            import traceback
            traceback.print_exc(file=serverboards.error)
            return None

    # removes trailing subdomains to get to proper company.TLD
    def maybe_domains(domain):
        if domain:
            dom = domain.split('.')[:-1]
            s = 0
            for i in dom:
                yield domain[s:]
                s += len(i) + 1

    for d in maybe_domains(domain):
        try:
            cp = subprocess.run(
                ["/usr/bin/whois", d],
                stdout=subprocess.PIPE, timeout=TIMEOUT
            )
        except Exception:
            import traceback
            traceback.print_exc()
            return []

        lines = str(cp.stdout, 'utf8').split('\n')
        expirations = [l for l in lines if 'free' in l or 'Exp' in l]
        if expirations:
            return [x for x in (decorate(l, d) for l in expirations) if x]
    return []


def compatible_traits(service, component):
    straits = set(service.get("traits"))
    ctraits = set(component.get("traits"))
    if straits.intersection(ctraits):
        return True
    return False


def slimmed_service(s):
    return {
        "uuid": s["uuid"],
        "name": s["name"],
        "type": s["type"],
        "config": s["config"]
    }


def matching_rules(exp, status, rules):
    print("Matching rules", exp, status, rules)
    # serverboards.debug(', '.join( repr(x) for x in [exp, status, rules]))
    for r in rules:
        # serverboards.debug("%s %s"%(repr(r), repr(exp)))
        rservice = r.get("when", {}).get("params", {}).get("service")
        if not rservice or rservice == exp.get("service"):
            yield r


ORDER_ST = {"": -1, "ok": 0, "warning": 1, "expired": 2}


@serverboards.rpc_method
def update_expirations(action_id=None, **kwfilter):
    """
    Gathers a list of all services from the server, and runs all known
    expiration checkers on all of them.

    This may take some time.

    Data is later stored into the plugin database.
    """
    services = rpc.call("service.list", **kwfilter)
    checkers = rpc.call("plugin.component.catalog",
                        {"type": "serverboards.expiration"})

    def check_service(sc):
        s, c = sc
        # serverboards.debug("Check %s %s"%(s["name"], c["name"]))
        try:
            ret = []
            with Plugin(c["extra"]["command"]) as plugin:
                expirations_raw = plugin.call(c["extra"]["call"],
                                              slimmed_service(s))
                for r in expirations_raw:
                    r["service"] = {
                        "uuid": s["uuid"],
                        "name": s["name"],
                        "type": s["type"]}
                    r["check"] = c["id"]
                    r["projects"] = s["projects"]
                    ret.append(r)
            # serverboards.debug("Expirations: %s"%repr(ret))
            return ret
        except Exception:
            import traceback
            traceback.print_exc()
            serverboards.error("Could not check %s" % s["name"])
            return []

    rule_updates = {}
    rules = serverboards.rpc.call(
        "rules_v2.list",
        trigger="serverboards.expiration/trigger",
        is_active=True
    )
    # print(rules)
    now = datetime.datetime.now(tz=dateutil.tz.tzutc())

    def update_rules_status(exp):
        for e in exp:  # exp is a list of expirations
            st = "ok"
            date = dateparse(e["date"])
            if date.tzname() is None:
                date = pytz.utc.localize(date)  # suppose it was originally UTC
            days = (date - now).days
            if days < 0:
                st = "expired"
            elif days <= 14:
                st = "warning"

            service_uuid = e.get("service", {}).get("uuid", "")
            for r in matching_rules(e, st, rules):
                rule_uuid = r.get("uuid")
                key = (service_uuid, rule_uuid)
                (cst, _) = rule_updates.get(key, ("", None))
                # get if the new state is more grave than earlier.
                # Initial is OK.
                mst = max((ORDER_ST[cst], cst), (ORDER_ST[st], st))[1]
                if cst != mst:  # if so, set gravity here
                    rule_updates[key] = (mst, e)

    checks = []
    count = 0
    progress = 0.01  # to show
    # I calculate possible combinations
    # and count to get proper progress bar
    for s in services:
        for c in checkers:
            if compatible_traits(s, c):
                count += 1
                checks.append((s, c))
    checkers_delta = 100.0 / count

    # And now go for it
    serverboards.debug("%d checks" % len(checks))
    expirations = []
    for sc in checks:
        if action_id:
            serverboards.rpc.call("action.update", action_id, {
                "progress": progress,
                "label": "%s - %s" % (sc[0]["name"], sc[1]["name"])
            })
            progress += checkers_delta
        exp = check_service(sc)
        expirations.append(exp)

        update_rules_status(exp)

    expirations = merge_expirations(expirations)
    expirations.sort(key=lambda x: x["date"])
    rpc.call("plugin.data.update", "expirations", expirations)

    serverboards.debug("Got this updates to rules: %s" % repr(rule_updates))
    for uuid, v in rule_updates.items():
        _service_uuid, rule_uuid = uuid
        state, expiration = v
        print("Trigger expiration: %s %s %s" % (rule_uuid, state, expiration))
        serverboards.rpc.call(
            "rules_v2.trigger_wait", uuid=rule_uuid,
            state=state, expiration=expiration)

    return expirations


@serverboards.rpc_method
def list_expirations(project=None):
    expirations = rpc.call("plugin.data.get", "expirations")
    if expirations == {}:
        id = rpc.call("action.trigger", "serverboards.expiration/update", {})
        rpc.call("plugin.data.update", "expirations", {"updating": id})
        return {"updating": id}

    if project:  # filter by project
        print("project:", project)
        print(expirations)
        return [e for e in expirations if project in e["projects"]]
    else:
        return expirations


if __name__ == '__main__':
    if len(sys.argv) > 1:
        exps = []

        def do_url(s):
            return url_expiration({"config": {"url": s}})

        with concurrent.futures.ProcessPoolExecutor() as executor:
            print(merge_expirations(executor.map(do_url, sys.argv[1:])))
    else:
        serverboards.loop()
