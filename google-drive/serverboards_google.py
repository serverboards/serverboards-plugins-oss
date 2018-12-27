#!env/bin/python

import serverboards_aio as serverboards
import requests
import json
from serverboards_aio import rpc, curio
from urllib.parse import urlencode, urljoin
from oauth2client import client
import threading
import datetime
from pcolor import printc
from googleapiclient import discovery


OAUTH_AUTH_URL = "https://accounts.google.com/o/oauth2/auth"
OAUTH_AUTH_TOKEN_URL = "https://accounts.google.com/o/oauth2/token"
OAUTH_AUTH_REVOKE_URL = "https://accounts.google.com/o/oauth2/token"
SCOPES = []
settings = {}
PLUGIN_ID = None


def setup(plugin_id=None, **kwargs):
    if plugin_id:
        global PLUGIN_ID
        PLUGIN_ID = plugin_id
    if kwargs.get("settings") is not None:
        global settings
        settings.update(kwargs.get("settings"))
    if kwargs.get("scopes"):
        global SCOPES
        SCOPES = kwargs.get("scopes")


async def ensure_settings():
    if "client_id" not in settings:
        data = await serverboards.rpc.call("settings.get", PLUGIN_ID + "/settings")
        if not data:
            raise Exception(
                "Google API Integration not configured. Check system settings."
            )
        settings.update(data)

        base = await serverboards.rpc.call(
            "settings.get",
            "serverboards.core.settings/base",
            {"base_url": "http://localhost:8080"}
        )
        settings.update(base)


@serverboards.cache_ttl(30)
async def get_config(uuid):
    service = await serverboards.rpc.call("service.get", uuid)
    return service.get("config", {})


@serverboards.cache_ttl(300)
async def get_service(service_id, type, version):
    def threaded():
        storage = ServerboardsStorage(service_id)
        credentials = storage.get()
        if not credentials:
            raise Exception("invalid_grant")
        return discovery.build(type, version, credentials=credentials)

    drive = await serverboards.sync(threaded)
    return drive


async def get_drive(service_id):
    return await get_service(service_id, "drive", "v3")


class ServerboardsStorage(client.Storage):
    def __init__(self, id=None):
        assert id
        self.id = id
        super(ServerboardsStorage, self).__init__()

    def locked_get(self):
        try:
            content = serverboards.run_async(get_config, self.id)
            if not content:
                return None

            content = json.dumps(content)
            # printc("Auth code:", content)
            if 'access_token' not in content:
                return None
            credentials = client.OAuth2Credentials.from_json(content)
            credentials.set_store(self)
            return credentials
        except Exception as e:
            serverboards.log_traceback(e)
            # printc("Invalid credentials", file=sys.stderr)
            pass
        return None

    def locked_put(self, credentials):
        get_config.invalidate_cache()
        # printc("Update refresh token:", credentials.to_json())
        data = {"config": json.loads(credentials.to_json())}
        serverboards.run_async(rpc.call, "service.update", self.id, data)

    def locked_delete(self):
        get_config.invalidate_cache()
        serverboards.run_async(rpc.call, "service.update", self.id, {"config": {}})


@serverboards.rpc_method
async def authorize_url(service=None, **kwargs):
    if not service:
        return ""
    service_id = service["uuid"]
    await ensure_settings()

    params = {
        "response_type": "code",
        "client_id": settings["client_id"].strip(),
        "redirect_uri":
            urljoin(settings["base_url"], "/static/%s/auth.html" % PLUGIN_ID),
        "scope": ' '.join(SCOPES),
        "state": service_id,
        "access_type": "offline",
        "approval_prompt": "force"
    }
    url = OAUTH_AUTH_URL + "?" + urlencode(params)
    return url


@serverboards.rpc_method
async def store_code(service_id, code):
    """
    Stores the code and get a refresh token and a access token
    """
    printc("settings")
    await ensure_settings()
    printc("settings ok")

    def at_thread():
        params = {
            "code": code,
            "client_id": settings["client_id"].strip(),
            "client_secret": settings["client_secret"].strip(),
            "redirect_uri":
                urljoin(settings["base_url"], "/static/%s/auth.html" % PLUGIN_ID),
            "grant_type": "authorization_code",
        }
        printc("validate")
        response = requests.post(OAUTH_AUTH_TOKEN_URL, params)
        js = response.json()
        if 'error' in js:
            raise Exception(js['error_description'])
        printc("ok")
        storage = ServerboardsStorage(service_id)
        credentials = client.OAuth2Credentials(
            access_token=js["access_token"],
            client_id=settings["client_id"].strip(),
            client_secret=settings["client_secret"].strip(),
            refresh_token=js.get("refresh_token"),
            token_expiry=(datetime.datetime.utcnow() +
                          datetime.timedelta(seconds=int(js["expires_in"]))),
            token_uri=OAUTH_AUTH_TOKEN_URL,
            user_agent=None,
            revoke_uri=OAUTH_AUTH_REVOKE_URL,
            token_response=js,
            scopes=SCOPES,
            token_info_uri="https://www.googleapis.com/oauth2/v3/tokeninfo"
        )
        credentials.set_store(storage)
        printc("store creds")
        storage.put(credentials)
        printc("stored")

    printc("Run at thread")
    await serverboards.sync(at_thread)
    printc("done")

    await serverboards.info(
        "Client authorized Google Drive. OAuth2 credentials saved.",
        service_id=service_id)
    printc("done")

    return "ok"


execute_lock = curio.Lock()

async def async_execute(cmd):
    async with execute_lock:
        res = await curio.run_in_thread(lambda: cmd.execute())
        return res
