#!env/bin/python

from serverboards_google import setup, ServerboardsStorage
from serverboards_google import discovery
from serverboards import rpc
import serverboards

setup(
    "serverboards.google.drive",
    scopes=[
        "https://www.googleapis.com/auth/drive.metadata.readonly",
        "https://www.googleapis.com/auth/spreadsheets"
    ]
)
drive = {}


def get_drive(service_id, version='v3'):
    ank = (service_id, version)
    if not drive.get(ank):
        storage = ServerboardsStorage(service_id)
        credentials = storage.get()
        if not credentials:
            raise Exception("invalid_grant")
        drive[ank] = discovery.build('drive', version, credentials=credentials)
    return drive.get(ank)


@serverboards.cache_ttl(300)
def get_file_info(drive_service, fileid, fields=None):
    fieldsl = None
    if fields:
        fieldsl = ','.join(fields)
    try:
        return drive_service.files().get(
            fileId=fileid, fields=fieldsl).execute()
    except Exception as e:
        serverboards.log_traceback()
        return {}


def get_changes_raw(service_id):
    drive_service = get_drive(service_id)

    def decorate(file):
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

        more_info = get_file_info(drive_service, file.get("fileId"), [
            "mimeType", "name", "lastModifyingUser", "modifiedTime",
            "webViewLink", "webContentLink", "parents"])
        parents = more_info.get("parents", [])
        if parents:
            folder_info = get_file_info(drive_service, parents[0], [
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

    page_token = drive_service.changes().getStartPageToken().execute().get(
        'startPageToken')
    # hack, show something
    page_token = int(page_token) - 1000
    changes = []
    while page_token is not None:
        response = drive_service.changes().list(pageToken=page_token,
                                                spaces='drive').execute()
        for change in response.get('changes'):
            # Process change
            changes.append(change)
        page_token = response.get('nextPageToken')

        # max 100 changes
        if len(changes) > 100:
            page_token = None

    return [decorate(x) for x in changes]


@serverboards.rpc_method("get_changes")
@serverboards.cache_ttl(300)
def get_changes(service_id, folder_filter=None):
    grouped = []
    lastd = None
    lastv = None

    for x in get_changes_raw(service_id):
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

        self.watch_check()
        self.timer_id = rpc.add_timer(10, self.watch_check, rearm=True)

    def __del__(self):
        rpc.remove_timer(self.timer_id)

    def watch_check(self):
        # to prevent death of server at 5m timeout
        serverboards.rpc.call("ping", True)
        for service_id, c in self.get_all_changes():
            for k, sv in self.watchs.items():
                s, v = sv
                if s != service_id:
                    continue  # this watch was not for this service
                extra_info = self.match(service_id, c, v)
                if extra_info:
                    serverboards.info("Trigger changes at rule %s" %
                                      (k), service_id=service_id, rule_id=k)
                    user = extra_info.get("lastModifyingUser") or {}
                    serverboards.rpc.event("trigger", {
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

    def match(self, service_id, change, expr):
        # maybe at parent?
        drive = get_drive(service_id)
        more_info = get_file_info(drive, change.get("fileId"), [
            "parents",
            "lastModifyingUser"
        ])

        if expr in change.get("file", {}).get("name", ""):
            return more_info

        for parent in more_info.get("parents", []):
            folder_info = get_file_info(drive, parent, ["name"])

            if expr in folder_info.get("name"):
                return more_info

        return False

    def add_trigger(self, ruleid, service_id, expression):
        self.watchs[ruleid] = (service_id, expression)
        if service_id not in self.page_tokens:
            self.add_start_page_token(service_id)

    def add_start_page_token(self, service_id):
        drive_service = get_drive(service_id)
        pt = drive_service.changes().getStartPageToken().execute().get(
            'startPageToken')
        self.page_tokens[service_id] = pt

    def remove_trigger(self, ruleid):
        del self.watchs[ruleid]

    def get_all_changes(self):
        for service_id, page_token in self.page_tokens.items():
            drive_service = get_drive(service_id)
            response = drive_service.changes().list(pageToken=page_token,
                                                    spaces='drive').execute()
            for change in response.get('changes'):
                yield (service_id, change)

            if 'newStartPageToken' in response:
                # Last page, save this token for the next polling interval
                self.page_tokens[service_id] = response.get(
                    'newStartPageToken')


@serverboards.rpc_method
def watch_start(id, service_id, expression, *args, **kwargs):
    global watcher
    if not watcher:
        watcher = DriveWatcher()
    watcher.add_trigger(id, service_id, expression)
    return id


@serverboards.rpc_method
def watch_stop(id):
    watcher.remove_trigger(id)


@serverboards.rpc_method
def drive_is_up(service):
    try:
        if get_drive(service["uuid"]):
            return "ok"
        else:
            return "nok"
    except Exception:
        return "unauthorized"


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
def extractor(config, table, quals, columns):
    if table == 'changes':
        return extractors_files(config["service"], quals, columns)
    raise Exception("unknown table")


def extractors_files(service_id, quals, columns):
    rows = get_changes_raw(service_id)

    return {
        "columns": SCHEMA["changes"],
        "rows": rows
    }


if __name__ == '__main__':
    serverboards.loop()
