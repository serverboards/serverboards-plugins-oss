#!env/bin/python

import sys, itertools
from serverboards_google import *

setup(
    "serverboards.google.drive",
    scopes=["https://www.googleapis.com/auth/drive.metadata.readonly"]
    )

drive = {}
def get_drive(service_id, version='v3'):
    serverboards.debug("%s"%(service_id))

    ank=(service_id, version)
    if not drive.get(ank):
        storage = ServerboardsStorage(service_id)
        credentials = storage.get()
        if not credentials:
            raise Exception("Invalid credentials. Reauthorize.")
        http = credentials.authorize(http=httplib2.Http())
        drive[ank] = discovery.build('drive', version, http=http)
    return drive.get(ank)

file_info_cache={}
def get_file_info(drive_service, fileid, fields=None):
    fieldsl=''
    if fields:
        fieldsl = ','.join(fields)
    data = file_info_cache.get((drive_service, fileid, fieldsl))
    if not data:
        data = drive_service.files().get(fileId=fileid, fields=fieldsl).execute()
        file_info_cache[(drive_service, fileid, fieldsl)] = data
    return data
@serverboards.rpc_method
def get_changes(service_id):
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

        more_info = get_file_info(drive_service, file["file"]["id"], ["lastModifyingUser","modifiedTime","webViewLink","webContentLink","parents"])
        parents = more_info.get("parents",[])
        if parents:
            folder_info = get_file_info(drive_service, parents[0])
        else:
            folder_info = {}
        serverboards.debug("folder_info %s %s %s "%(file, more_info, folder_info))
        return {
            "author": more_info.get("lastModifyingUser",{}).get("displayName"),
            "what": what,
            "type": file["file"]["mimeType"],
            "file": file["file"]["name"],
            "to": folder_info.get("name"),
            "time": datetime[11:16],
            "date": datetime[:10],
            "downloadLink": more_info.get("webContentLink"),
            "viewLink": more_info.get("webViewLink")
        }

    page_token = drive_service.changes().getStartPageToken().execute().get('startPageToken')
    # hack, show something
    page_token = int(page_token) - 100
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
        if lastd != x["date"]:
            lastd=x["date"]
            lastv={"entries": [x], "date": x["date"]}
            grouped.append(lastv)
        else:
            lastv["entries"].append(x)
    grouped.reverse()
    return grouped

if __name__=='__main__':
    serverboards.loop()
