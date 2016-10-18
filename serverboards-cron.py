#!/usr/bin/python3

#import serverboards
from cron import preprocess_cronspec, enumerate_factory, Cron
import datetime, serverboards, sys

cron=Cron()

@serverboards.rpc_method
def add_cron(id, timespec, **kwargs):
    cronid=cron.add( timespec, id )
    update_cron_timer()
    return cronid

@serverboards.rpc_method
def del_cron(cronid):
    return cron.remove(cronid)

@serverboards.rpc_method
def info():
    now=datetime.datetime.now()
    def decorate(s):
        nn=s.next_from(now)
        if nn:
            nn=nn.strftime("%Y-%m-%d %H:%M")
        return {
            "spec":s.orig,
            "id":s.id,
            "next":nn
        }

    next_t=cron.seconds_to_next()
    return {
        "specs": [
            decorate(s)
            for s in cron.specs.values()
            ],
        "next": dict(seconds=next_t[0], **decorate( next_t[1] ))
    }

def update_cron_timer():
    serverboards.info("update cron trigger")
    def trigger(id):
        serverboards.info("trigger")
        serverboards.rpc.event("trigger", id=str(id), state="tick")
        (next_t, next_id) = cron.seconds_to_next()
        serverboards.rpc.add_timer(next_t, lambda:trigger(next_id.id))

    serverboards.info(repr(cron.seconds_to_next()))
    (next_t, next_id) = cron.seconds_to_next()
    serverboards.rpc.add_timer(next_t, lambda:trigger(next_id.id))

def main():
    serverboards.loop()

def test():
    assert preprocess_cronspec("3am daily")=="* * * * * 3 0"
    assert preprocess_cronspec("3am everyday")=="* * * * * 3 0"
    assert preprocess_cronspec("3pm workdays")=="* * * * 1-5 15 0"
    assert preprocess_cronspec("20:30 weekends")=="* * * * 6,7 20 30"
    assert preprocess_cronspec("1 2 3 4 5 6 7")=="1 2 3 4 5 6 7"
    assert preprocess_cronspec("20:30")=="* * * * * 20 30"

    try:
        preprocess_cronspec("20pm")
        assert False, "Should have failed"
    except:
        pass

    ff=list( enumerate_factory("1,5-6,8")(1,10) )
    #print(ff)
    assert ff==[1,5,6,8]
    ff=list( enumerate_factory("*")(1,10) )
    assert ff==[1,2,3,4,5,6,7,8,9,10]
    #print()

    cron=Cron()
    cron.add("2017 1 1 * * * *", 1)
    cron.add("2000 * * * * 12 30", 2)
    cron.add("2000-2010 * * * * 11 30", 3)
    cron.add("mon 19:30", 4)

    #print(cron.add("3am", lambda:print("3am")))
    #print(cron.add("3pm", lambda:print("3pm")))
    #print(cron.add("16:30 monday", lambda:print("16:30 monday")))
    #print(cron.next_from(datetime.datetime(2000,10,12, 12, 11)))
    assert cron.next_from(datetime.datetime(2000,10,12, 12, 11))[0] == datetime.datetime(2000,10,12,12,30)
    assert cron.next_from(datetime.datetime(2000,10,12, 12, 31))[0] == datetime.datetime(2000,10,13,11,30)
    assert cron.next_from(datetime.datetime(2010,1,1, 0, 0))[0] == datetime.datetime(2010,1,1,11,30)
    #print(cron.next_from(datetime.datetime(2017,1,1, 1, 0))[0])
    # not same, but +1min, as if same minute will loop forever. If im in a given minute the alarmalready passed
    assert cron.next_from(datetime.datetime(2017,1,1, 1, 0))[0] == datetime.datetime(2017,1,1,1,1)

    #print(cron.seconds_to_next())
    assert cron.seconds_to_next()[0] > 0

    print("Success")

if __name__=='__main__':
    if len(sys.argv)==2 and sys.argv[1]=='test':
        test()
    else:
        main()
