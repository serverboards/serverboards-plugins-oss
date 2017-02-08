#!/usr/bin/python3

import sys, os
sys.path.append(os.path.join(os.path.dirname(__file__),'../bindings/python/'))
import serverboards, requests, random

settings=None
status=None

def tg_url(method):
    return "https://api.telegram.org/bot%s/%s"%(settings["token"], method)

def tg_get(cmd, query = None):
    ret = requests.get(tg_url(cmd), params=query)
    if ret.status_code == 200:
        return ret.json()["result"]
    else:
        raise Exception(ret.json()["description"])


def send_telegram_basic(chat_id, message):
    serverboards.rpc.debug("%d> %s"%(chat_id, message))
    data={
        "chat_id" : chat_id,
        "text" : message,
        "parse_mode" : "Markdown",
    }
    return tg_get("sendMessage", data)

@serverboards.rpc_method
def send_telegram(user=None, config=None, message=None):
    ensure_has_config()
    serverboards.debug(repr((status, config)))
    send_telegram_basic(
        status["code_to_chatid"][config["code"]],
        ("*%s*\n---\n%s"%(message['subject'], message["body"]))
        )

@serverboards.rpc_method
def info():
    ensure_has_config()
    return tg_get("getMe")

@serverboards.rpc_method
def get_updates(offset=None, timeout=60):
    query={
        "timeout": timeout
    }

    if offset:
        query["offset"]=offset
    return tg_get("getUpdates", query)

@serverboards.rpc_method
def message_check_loop():
    ensure_has_config()
    while True:
        message_check_loop()

@serverboards.rpc_method
def message_check(timeout=3600):
    ensure_has_config()
    update=False
    code_to_chatid=status.get("code_to_chatid",{})
    msgs=get_updates(status.get("lastid"), timeout=3600)
    for msg in msgs:
        serverboards.rpc.debug(msg)
        update=True
        if "message" in msg:
            chatid=msg["message"]["chat"]["id"]
            text=msg["message"]["text"]
            if text=="/start":
                code_to_chatid={ k:v for k,v in code_to_chatid.items() if v!=chatid }
            if not chatid in code_to_chatid.values():
                serverboards.rpc.debug("Creating a new code for chatid %s"%chatid)
                code=''.join(random.choice("012345789ABCDEF") for x in range(6))
                try:
                    send_telegram_basic(
                        chatid,
                        "Welcome to the Serverboards Bot. Please use this code at your notification settings: *%s*"%code
                        )
                except:
                    import traceback; traceback.print_exc()
                code_to_chatid[code]=chatid
            else:
                serverboards.rpc.info("%s< %s"%(chatid, text))
                send_telegram_basic(
                    chatid,
                    "Sorry, I can only send notifications at the moment. If you talk to me I can do no more than ignore the message."
                    )

        status["lastid"]=max(status.get("lastid", 0), msg["update_id"]+1)
    status["code_to_chatid"]=code_to_chatid

    if update:
        serverboards.rpc.call("plugin.data_set", "status", status)

    return update

def ensure_has_config():
    if not settings or not status:
        update_config()

def update_config():
    global settings, status
    settings=serverboards.rpc.call("settings.get", "serverboards.telegram/settings.telegram")
    status=serverboards.rpc.call("plugin.data_get", "status")

if __name__=="__main__":
    if len(sys.argv)==2 and sys.argv[1]=="test":
        import settings
        settings={
            "token" : settigs.TOKEN
        }
        status={
            "lastid": settigs.LAST_ID,
            "code_to_chatid": settings.CODE_TO_CHATID
        }

        refresh()
        print(status)

        print(send_telegram(
            user={ "email": "dmoreno@serverboards.io" },
            config={
                "code": "2B87D4"
            },
            message={
                "subject":"This is a test message",
                "body":"Body of the test message",
                "extra":[]
            }))

    else:
        serverboards.loop()
