#!env/bin/python

import sys, itertools
from serverboards_google import *

setup(
    "serverboards.google.drive",
    scopes=["https://www.googleapis.com/auth/drive.metadata.readonly"]
    )

drive = {}
def get_drive(service_id, version='v3'):
    ank=(service_id, version)
    if not drive.get(ank):
        storage = ServerboardsStorage(service_id)
        credentials = storage.get()
        if not credentials:
            raise Exception("Invalid credentials. Reauthorize.")
        drive[ank] = discovery.build('drive', version, credentials=credentials)
    return drive.get(ank)

file_info_cache={}
def get_file_info(drive_service, fileid, fields=None):
    fieldsl=None
    if fields:
        fieldsl = ','.join(fields)
    data = file_info_cache.get((drive_service, fileid, fieldsl))
    if not data:
        try:
            data = drive_service.files().get(fileId=fileid, fields=fieldsl).execute()
            file_info_cache[(drive_service, fileid, fieldsl)] = data
        except:
            import traceback; traceback.print_exc()
            return {}
    return data
@serverboards.rpc_method
def get_changes(service_id, folder_filter=None):
    drive_service=get_drive(service_id)
    def decorate(file):
        datetime=file["time"]
        kind=file["kind"]
        if file["removed"]:
            what="removed"
        elif kind=="drive#change":
            what="updated"
        elif kind=="drive#file":
            what="added"
        else:
            what=kind

        more_info = get_file_info(drive_service, file.get("fileId"), ["mimeType","name","lastModifyingUser","modifiedTime","webViewLink","webContentLink","parents"])
        parents = more_info.get("parents",[])
        if parents:
            folder_info = get_file_info(drive_service, parents[0], ["name","webViewLink"])
        else:
            folder_info = {}
        return {
            "author": more_info.get("lastModifyingUser",{}).get("displayName"),
            "what": what,
            "type": more_info.get("mimeType"),
            "file": more_info.get("name"),
            "to": folder_info.get("name"),
            "to_link": folder_info.get("webViewLink"),
            "time": datetime[11:16],
            "date": datetime[:10],
            "downloadLink": more_info.get("webContentLink"),
            "viewLink": more_info.get("webViewLink"),
            "removed": file.get("removed")
        }

    page_token = drive_service.changes().getStartPageToken().execute().get('startPageToken')
    # hack, show something
    page_token = int(page_token) - 1000
    changes=[]
    while page_token is not None:
        response = drive_service.changes().list(pageToken=page_token,
                                                spaces='drive').execute()
        for change in response.get('changes'):
            # Process change
            changes.append(change)
        if 'newStartPageToken' in response:
            # Last page, save this token for the next polling interval
            saved_start_page_token = response.get('newStartPageToken')
        page_token = response.get('nextPageToken')

        # max 100 changes
        if len(changes)>100:
            page_token=None


    grouped=[]
    lastd=None
    lastv=None
    for x in [decorate(x) for x in changes]:
        # in some cases may be empty, because it was not a file update
        if not x:
            continue
        # skip if not at filtered folders
        if folder_filter and x.get("to") not in folder_filter:
            #serverboards.debug("Skip %s as not in %s"%(x, folder_filter))
            continue
        if lastd != x["date"]:
            lastd=x["date"]
            lastv={"entries": [x], "date": x["date"]}
            grouped.append(lastv)
        else:
            lastv["entries"].append(x)
    grouped.reverse()
    return grouped


watcher = None
class DriveWatcher:
    def __init__(self):
        self.watcher_id = None
        self.page_tokens = {}
        self.watchs = {}

        rpc.add_timer(300, self.watch_check)
    def watch_check(self):
        serverboards.rpc.call("ping", True) # to prevent death of server at 5m timeout
        for service_id, c in self.get_all_changes():
            for k,sv in self.watchs.items():
                s, v = sv
                if s!=service_id:
                    continue # this watch was not for this service
                if self.match(service_id, c, v):
                    serverboards.info("Trigger changes at rule %s"%(k))
                    serverboards.rpc.event("trigger", {"type": "drive_change", "id": k, "state" : "change"})

    def match(self, service_id, change, expr):
        if expr in change.get("file",{}).get("name",""):
            return True

        # maybe at parent?
        drive = get_drive(service_id)
        more_info = get_file_info(drive, change.get("fileId"), ["parents"])
        for parent in more_info.get("parents",[]):
            folder_info = get_file_info(drive, parent, ["name"])

            if expr in folder_info.get("name"):
                return True

        return False

    def add_trigger(self, ruleid, service, expression):
        self.watchs[ruleid] = (service["uuid"], expression)
        if service["uuid"] not in self.page_tokens:
            self.add_start_page_token(service["uuid"])

    def add_start_page_token(self, service_id):
        drive_service=get_drive(service_id)
        pt = drive_service.changes().getStartPageToken().execute().get('startPageToken')
        self.page_tokens[service_id]=pt

    def remove_trigger(self, ruleid):
        del self.watchs[ruleid]

    def get_all_changes(self):
        for service_id, page_token in self.page_tokens.items():
            drive_service=get_drive(service_id)
            response = drive_service.changes().list(pageToken=page_token,
                                                    spaces='drive').execute()
            for change in response.get('changes'):
                yield (service_id, change)

            if 'newStartPageToken' in response:
                # Last page, save this token for the next polling interval
                self.page_tokens[service_id] = response.get('newStartPageToken')

@serverboards.rpc_method
def watch_start(id, service, expression, *args, **kwargs):
    print(args, kwargs)
    global watcher
    if not watcher:
        watcher = DriveWatcher()
    watcher.add_trigger(id, service, expression)
    return id

@serverboards.rpc_method
def watch_stop(id):
    watcher.remove_trigger(id)

if __name__=='__main__':
    serverboards.loop()
