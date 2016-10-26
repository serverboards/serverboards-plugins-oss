#!/usr/bin/python3

#import serverboards
from cron import preprocess_cronspec, enumerate_factory, Cron
import datetime, serverboards, sys

cron=Cron()

@serverboards.rpc_method
def add_cron(id, timespec, **kwargs):
    cronid=cron.add( timespec, id )
    update_cron_timer()
    return cronid.id

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
        "next": {
            "seconds" : next_t[0],
            "specs": [
                decorate( x ) for x in next_t[1]
                ]
            }
    }

timer_id=None
def update_cron_timer():
    serverboards.info("update cron trigger")
    def update_timer():
        (next_t, next_ids) = cron.seconds_to_next()
        serverboards.info("trigger next in: %.2fs"%next_t)
        global timer_id
        if timer_id:
            serverboards.rpc.remove_timer(timer_id)
        timer_id = serverboards.rpc.add_timer(next_t, lambda:trigger(next_ids))


    def trigger(ids):
        serverboards.info("trigger: %s"%repr([i.id for i in ids]))
        for i in ids:
            serverboards.rpc.event("trigger", id=str(i.id), state="tick")
        update_timer()

    update_timer()

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
    c1=cron.add("2017 1 1 * * * *", 1)
    c2=cron.add("2000 * * * * 12 30", 2)
    c3=cron.add("2000-2010 * * * * 11 30", 3)
    c4=cron.add("mon 19:30", 4)
    c5=cron.add("mon 19:30", 5)

    #print(cron.add("3am", lambda:print("3am")))
    #print(cron.add("3pm", lambda:print("3pm")))
    #print(cron.add("16:30 monday", lambda:print("16:30 monday")))
    assert cron.next_from(datetime.datetime(2000,10,12, 12, 11)) == (datetime.datetime(2000,10,12,12,30), [c2])
    assert cron.next_from(datetime.datetime(2000,10,12, 12, 31))[0] == datetime.datetime(2000,10,13,11,30)
    assert cron.next_from(datetime.datetime(2010,1,1, 0, 0))[0] == datetime.datetime(2010,1,1,11,30)
    #print(cron.next_from(datetime.datetime(2017,1,1, 1, 0))[0])
    # not same, but +1min, as if same minute will loop forever. If im in a given minute the alarmalready passed
    assert cron.next_from(datetime.datetime(2017,1,1, 1, 0))[0] == datetime.datetime(2017,1,1,1,1)
    assert cron.next_from(datetime.datetime(2016,10,24, 19, 00)) == (datetime.datetime(2016,10,24, 19, 30), [c4, c5])

    assert cron.seconds_to_next_from(datetime.datetime(2000,10,12, 12, 30))[0] > 59
    assert cron.seconds_to_next()[0] > 0

    print("Success")

if __name__=='__main__':
    if len(sys.argv)==2 and sys.argv[1]=='test':
        test()
    else:
        main()
