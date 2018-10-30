#!env/bin/python

from serverboards_google import setup, get_drive
from serverboards_google import async_execute
from serverboards_aio import curio
from pcolor import printc
import serverboards_aio as serverboards
import sys
import yaml
import time
from cache import Cache
from sheets import extractor_sheets, schema_sheets, append_to_sheet
_ = str
cache = Cache("~/google-drive.db")

setup(
    "serverboards.google.drive",
    scopes=[
        "https://www.googleapis.com/auth/drive.metadata.readonly",
        "https://www.googleapis.com/auth/spreadsheets"
    ]
)


async def get_file_info(drive_service, fileid, fields=None):
    def threaded():
        fieldsl = None
        if fields:
            fieldsl = ','.join(fields)
        try:
            printc("Get info from file ", fileid)
            return drive_service.files().get(
                fileId=fileid, fields=fieldsl).execute()
        except Exception as e:
            serverboards.log_traceback(e)
            return {}
    return (await serverboards.sync(threaded))


@cache.a(ttl=30000)
async def get_file_data(service_id, file):
    drive_service = await get_drive(service_id)
    datetime = file["time"]
    kind = file["kind"]
    if file["removed"]:
        what = "removed"
    elif kind == "drive#change":
        what = "updated"
    elif kind == "drive#file":
        what = "added"
    else:
        what = kind

    more_info = await get_file_info(drive_service, file.get("fileId"), [
        "mimeType", "name", "lastModifyingUser", "modifiedTime",
        "webViewLink", "webContentLink", "parents"])
    parents = more_info.get("parents", [])
    if parents:
        folder_info = await get_file_info(drive_service, parents[0], [
            "name",
            "webViewLink"
        ])
    else:
        folder_info = {}
    return [
        more_info.get("lastModifyingUser", {}).get("displayName"),
        what,
        more_info.get("mimeType"),
        more_info.get("name"),
        folder_info.get("name"),
        folder_info.get("webViewLink"),
        datetime,
        more_info.get("webContentLink"),
        more_info.get("webViewLink"),
        file.get("removed")
    ]


@serverboards.cache_ttl(300)
async def get_changes_raw(service_id):
    drive_service = await get_drive(service_id)

    page_token = (await async_execute(
        drive_service.changes().getStartPageToken()
    )).get('startPageToken')
    # hack, show something
    page_token = int(page_token) - 1000
    changes = []
    while page_token is not None:
        response = await async_execute(
            drive_service.changes().list(pageToken=page_token,
                                         spaces='drive')
        )
        for change in response.get('changes'):
            # Process change
            changes.append(change)
        page_token = response.get('nextPageToken')

        # max 100 changes
        if len(changes) > 100:
            page_token = None

    ret = []
    for x in changes:
        ret.append(await get_file_data(service_id, x))
    return ret


@serverboards.rpc_method
async def get_changes(service_id, folder_filter=None):
    grouped = []
    lastd = None
    lastv = None

    changes = await get_changes_raw(service_id)
    for x in changes:
        row = {
            "author": x[0],
            "what": x[1],
            "type": x[2],
            "file": x[3],
            "to": x[4],
            "to_link": x[5],
            "time": x[6][11:16],
            "date": x[6][:10],
            "downloadLink": x[7],
            "viewLink": x[8],
            "removed": x[9]
        }

        # in some cases may be empty, because it was not a file update
        if not row:
            continue
        # skip if not at filtered folders
        if folder_filter and row.get("to") not in folder_filter:
            # serverboards.debug("Skip %s as not in %s"%(x, folder_filter))
            continue
        if lastd != row["date"]:
            lastd = row["date"]
            lastv = {"entries": [row], "date": row["date"]}
            grouped.append(lastv)
        else:
            lastv["entries"].append(row)

    grouped.reverse()
    return grouped


watcher = None


class DriveWatcher:
    def __init__(self):
        self.watcher_id = None
        self.page_tokens = {}
        self.watchs = {}
        self.running = False

    def __del__(self):
        self.running = False

    async def loop(self):
        self.running = True
        while self.running:
            await self.watch_check()
            await curio.sleep(300)
            await serverboards.rpc.call("ping", True)

    async def watch_check(self):
        # to prevent death of server at 5m timeout
        changes = await self.get_all_changes()
        for service_id, c in changes:
            for k, sv in self.watchs.items():
                s, v = sv
                if s != service_id:
                    continue  # this watch was not for this service
                extra_info = await self.match(service_id, c, v)
                if extra_info:
                    await serverboards.info("Trigger changes at rule %s" %
                                      (k), service_id=service_id, rule_id=k)
                    user = extra_info.get("lastModifyingUser") or {}
                    await serverboards.rpc.event("trigger", {
                        "type": "drive_change",
                        "id": k,
                        "author": {
                            "name": user.get("displayName"),
                            "email": user.get("emailAddress"),
                            "avatar": user.get("photoLink"),
                        },
                        "datetime": c.get("time"),
                        "filename": c.get("file", {}).get("name", "")
                    })

    async def match(self, service_id, change, expr):
        # maybe at parent?
        drive = await get_drive(service_id)
        more_info = await get_file_info(drive, change.get("fileId"), [
            "parents",
            "lastModifyingUser"
        ])

        if expr in change.get("file", {}).get("name", ""):
            return more_info

        for parent in more_info.get("parents", []):
            folder_info = await get_file_info(drive, parent, ["name"])

            if expr in folder_info.get("name"):
                return more_info

        return False

    async def add_trigger(self, ruleid, service_id, expression):
        self.watchs[ruleid] = (service_id, expression)
        if service_id not in self.page_tokens:
            await self.add_start_page_token(service_id)

    async def add_start_page_token(self, service_id):
        drive_service = await get_drive(service_id)
        pt = await async_execute(
            drive_service.changes().getStartPageToken()
        ).get('startPageToken')
        self.page_tokens[service_id] = pt

    def remove_trigger(self, ruleid):
        del self.watchs[ruleid]

    async def get_all_changes(self):
        for service_id, page_token in self.page_tokens.items():
            drive_service = await get_drive(service_id)
            response = await async_execute(
                drive_service.changes().list(pageToken=page_token,
                                             spaces='drive')
            )
            changes = []
            for change in response.get('changes'):
                changes.append((service_id, change))

            if 'newStartPageToken' in response:
                # Last page, save this token for the next polling interval
                self.page_tokens[service_id] = response.get(
                    'newStartPageToken')
            return changes
        return []


async def start_watcher():
    global watcher
    watcher = DriveWatcher()
    watcher.loop_task = await curio.spawn(watcher.loop)


@serverboards.rpc_method
async def watch_start(id, service_id, expression, *args, **kwargs):
    if not watcher:
        await start_watcher()
    await watcher.add_trigger(id, service_id, expression)
    return id


@serverboards.rpc_method
def watch_stop(id):
    watcher.remove_trigger(id)


@serverboards.rpc_method
async def drive_is_up(service):
    try:
        if (await get_drive(service["uuid"])):
            return "ok"
        else:
            return {
                "status": "unauthorized",
                "message": _(
                    'Could not connect with google drive. '
                    'You don\'t have the appropiate credentials. '
                    'Try to re-authorize again.'
                )
            }
    except Exception as e:
        await serverboards.log_traceback(e, service_id=service["uuid"])
        return {
            "status": "error",
            "code": str(e),
            "message": _(
                'There was a plugin error checking Google Drive access. '
                'Please check the configuration: %s') % str(e)
        }


SCHEMA = {
    "changes": [
        "author", "what", "type", "file", "to", "to_link", "datetime",
        "downloadLink", "viewLink", "removed"
    ]
}


@serverboards.rpc_method
def schema(config, table=None):
    if table is None:
        return ["changes"]
    if table == "changes":
        return {"columns": SCHEMA["changes"]}


@serverboards.rpc_method
async def extractor(config, table, quals, columns):
    config = config.get("config", config)
    if table == 'changes':
        return await extractor_files(config["service"], quals, columns)
    raise Exception("unknown table")


def decorate_file_row(file, more_info, folder_info, datetime, what):
    return


async def extractor_files(service_id, quals, columns):
    rows = await get_changes_raw(service_id)

    return {
        "columns": SCHEMA["changes"],
        "rows": rows
    }


async def test():
    mock_data = yaml.load(open("mock.yaml"))
    config = mock_data["config"]
    printc("All schema", schema(config))
    sch = schema(config, "changes")
    printc("Config schema", sch)
    res = await extractor(config, "changes", [], sch["columns"])
    printc("Changes", res["columns"])
    assert res["rows"] != []
    res = await watch_start(1, "XXX", "serverboards")
    printc("Watcher id", res)
    time.sleep(3)
    watch_stop(res)

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
