#!/usr/bin/python3

import sys
import datetime
import hashlib
import yaml
import serverboards_aio as serverboards
from serverboards_aio import rpc, print
import curio


plugin_id = "serverboards.backup.monitor"


def convert_timespec_to_seconds(when):
    print("When %s" % repr(when))
    if when == '12pm':
        return 12 * 60 * 60
    if when == '12am':
        return 0
    if when == '24h':
        return 0
    if when.endswith('pm'):
        return (int(when[:-2])+12)*60*60
    if when.endswith('am'):
        return (int(when[:-2]))*60*60
    if when.endswith('h'):
        return (int(when[:-1]))*60*60
    if ':' in when:
        ts = when.split(':')
        return ((int(ts[0])*60)+int(ts[1]))*60
    ts = int(when)
    return int(ts) * 60 * 60


def time_in_seconds():
    now = datetime.datetime.now()
    t = now.time()
    today_seconds = ((t.hour*60+t.minute)*60)+t.second
    return today_seconds


def get_next_when(when):
    """
    Basic converts a time expression to the next apearance of that in seconds.
    """
    seconds_in_day = convert_timespec_to_seconds(when)
    today_seconds = time_in_seconds()
    fullday = 24 * 60 * 60
    if seconds_in_day > today_seconds:
        return seconds_in_day - today_seconds
    else:
        return fullday - today_seconds + seconds_in_day


def filename_template(filename):
    today_dt = datetime.datetime.now()
    today = today_dt.strftime("%Y-%m-%d")
    yesterday_dt = (datetime.datetime.now() - datetime.timedelta(days=1))
    yesterday = yesterday_dt.strftime("%Y-%m-%d")
    return filename.format(
        today=today,
        today_=today.replace('-', ''),
        today_year=today_dt.year,
        today_month=today_dt.month,
        today_day=today_dt.day,
        yesterday=yesterday,
        yesterday_=yesterday.replace('-', ''),
        yesterday_year=yesterday_dt.year,
        yesterday_month=yesterday_dt.month,
        yesterday_day=yesterday_dt.day,
    )


class RemoteCheck:
    file_exist_timers = {}

    def __init__(self, id, service, file_expression, when):
        self.prev_exists = None
        self.id = id
        self.service = service
        self.file_expression = file_expression
        self.when = when

    async def check(self):
        filename = filename_template(self.file_expression)

        print("Checking state")
        res = await rpc.call(
            "action.trigger_wait",
            "serverboards.core.ssh/exec",
            dict(service=self.service, command="stat -c '%%y|%%s|%%n|' %s; stat -f -c '%%f|%%s' %s" % (filename, filename)))
        print("SSH stat result: %s" % res)
        maxdt = (datetime.datetime.now() - datetime.timedelta(days=1)).isoformat()

        exists = res.get('exit', -1) == 0
        if exists != self.prev_exists:
            if exists:
                res = res['stdout'].split('|')
                mydatetime = res[0].split()
                mydatetime = "%sT%s" % (mydatetime[0], ''.join(mydatetime[1:]))
                state = "ok" if mydatetime < maxdt else "old"
                if res[1] == '0':
                    state = 'empty'
                data = {
                    "state": state,
                    "ok": state == 'ok',
                    "filename": res[2],
                    "size": int(res[1])/(1024*1024),  # In MB
                    "datetime": mydatetime,
                    "disk_free": int(res[3])*int(res[4])/(1024*1024),
                }
                sha = hashlib.sha256(
                    (self.file_expression + "-" + self.service).encode('utf8')
                ).hexdigest()

                await rpc.event("trigger", id=self.id, **data)
                await rpc.call("plugin.data.update", plugin_id, 'test-'+sha, data)
            else:
                await rpc.event("trigger", {"id": self.id, "state": "not-exists"})
            self.prev_exists = exists

    async def loop(self):
        while True:
            try:
                await self.check()
            except Exception as e:
                serverboards.log_traceback(e)

            next_when = get_next_when(self.when)
            await serverboards.debug(
                "Wait until %s: %02d:%02d:%02d (%d)" %
                (self.when, next_when/(60*60), (next_when/60) % 60, next_when % 60, next_when))
            await curio.sleep(next_when)

    async def start(self):
        job = await curio.spawn(self.loop)
        RemoteCheck.file_exist_timers[self.id] = job


@serverboards.rpc_method
async def file_exists(id, service, file_expression, when):
    await serverboards.debug("Set up backup watcher ready for %s" % (file_expression))
    rc = RemoteCheck(id, service, file_expression, when)
    await rc.start()
    await serverboards.debug("Backup watcher ready for %s" % (file_expression))
    return id


@serverboards.rpc_method
def stop_file_exists(id):
    job = RemoteCheck.file_exist_timers.get(id)
    if job:
        curio.cancel(job)
        del RemoteCheck.file_exist_timers[id]


async def test():
    assert convert_timespec_to_seconds("0am") == 0
    assert convert_timespec_to_seconds("12am") == 0
    assert convert_timespec_to_seconds("1am") == 60*60
    assert convert_timespec_to_seconds("12pm") == 12 * 60*60
    assert convert_timespec_to_seconds("1pm") == 13 * 60*60
    assert convert_timespec_to_seconds("13:00") == 13 * 60*60
    assert convert_timespec_to_seconds("13:30") == ((13 * 60*60) + (30 * 60))
    assert convert_timespec_to_seconds("24h") == 0
    assert convert_timespec_to_seconds("2h") == (2 * 60*60)

    await serverboards.debug("Convert")
    await serverboards.debug("Now is %s" % datetime.datetime.now())
    assert convert_timespec_to_seconds("17:45") == (17*60 + 45)*60
    assert convert_timespec_to_seconds("17:40") == (17*60 + 40)*60

    hour = 60*60
    minute = 60
    until_midnight = 8 * hour
    await serverboards.debug("Get Next")
    assert get_next_when("17:45") == hour + 45 * minute, (get_next_when("17:45"), hour + 45 * minute)
    assert get_next_when("17:40") == hour + 40 * minute, (get_next_when("17:45"), hour + 40 * minute)
    assert get_next_when("6pm") == 2 * hour, get_next_when("6pm")
    assert get_next_when("23:59") == until_midnight - minute, (get_next_when("0am"), until_midnight - minute, 7 * hour + 59 * minute)
    assert get_next_when("0am") == until_midnight, (get_next_when("0am"), until_midnight)
    assert get_next_when("1am") == until_midnight + hour
    assert get_next_when("1pm") == until_midnight + (13*60*60), (get_next_when("1pm"), until_midnight + (13*60*60))
    await serverboards.debug("Today secs")
    print(time_in_seconds() / (60.0*60.0))

    await serverboards.debug("File template")
    assert filename_template("test-{yesterday_}.tar.gz") == "test-20181018.tar.gz"

    rc = RemoteCheck(1, "XXX", "/etc/passwd", "10am")
    print(await rc.check())
    rc = RemoteCheck(1, "YYY", "/etc/passwd", "10am")
    print(await rc.check())

    await file_exists(1, "XXX", "/etc/passwd", "10am")
    await curio.sleep(3)

if __name__ == '__main__':
    if len(sys.argv) > 1 and sys.argv[1] == 'test':
        from freezegun import freeze_time
        with freeze_time("2018-10-19T16:00:00"):
            data = yaml.load(open('mock.yaml'))
            serverboards.test_mode(test, data)
            serverboards.loop()
    else:
        serverboards.loop()
