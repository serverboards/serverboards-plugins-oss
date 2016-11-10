import datetime, calendar

KEYWORDS={
    'everyday':"* * * * *",
    'daily':"* * * * *",
    'workdays':"* * * * 1-5",
    'weekends':"* * * * 6,7",
    'weekend':"* * * * 6,7",
    'monday':"* * * * 1",
    'tuesday':"* * * * 2",
    'wednesday':"* * * * 3",
    'thrusday':"* * * * 4",
    'friday':"* * * * 5",
    'saturday':"* * * * 6",
    'sunday':"* * * * 7",
    'mon':"* * * * 1",
    'tue':"* * * * 2",
    'wed':"* * * * 3",
    'thu':"* * * * 4",
    'fri':"* * * * 5",
    'sat':"* * * * 6",
    'sun':"* * * * 7",
}

def preprocess_cronspec(s):
    """
    Do some preprocess for easy expresisons as 3am, 15:30, everyday...
    """
    if not s:
        return None
    if len(s.split())==7:
        return s
    dayspec="* * * * *"
    timespec="0 0"
    for i in s.split():
        i=i.lower()
        if i in KEYWORDS:
            dayspec=KEYWORDS[i]
        elif i.endswith('pm'):
            if i=='@12pm':
                timespec="12 0"
            else:
                hour = int(i[:-2])+12
                if (hour>24):
                    raise Exception("Invalid timespec, hour(pm) > 24")
                timespec="%d 0"%(hour)
        elif i.endswith('am'):
            if i=='@12am':
                timespec="0 0"
            else:
                hour=int(i[:-2])
                if (hour>12):
                    raise Exception("Invalid timespec, hour(am) > 12")
                timespec="%d 0"%(hour)
        elif ':' in i:
            time=i.split(':')+['0','0']
            timespec="%s %s"%(time[0],time[1])
        elif '.' in i:
            time=i.split('.')+['0','0']
            timespec="%s %s"%(time[0],time[1])
        else:
            raise Exception("Invalid cronspec: %s"%i)
    return "%s %s"%(dayspec, timespec)


def enumerate_factory(spec):
    if ',' in spec:
        def f(_min, _max):
            for i in spec.split(','):
                for ef in enumerate_factory(i)(_min, _max):
                    yield ef
        return f
    if '-' in spec:
        (a,b)=[int(x) for x in spec.split('-')]
        def f(_min, _max):
            return range(max(a,_min),min(b, _max)+1)
        return f
    if '*' in spec:
        def f(_min, _max):
            return range(_min, _max+1)
        return f
    def f(_min, _max):
        ispec=int(spec)
        if _min>ispec or _max<ispec:
            return []
        return [int(spec)]
    return f

def match_year(spec):
    efs=enumerate_factory(spec)
    def match(now):
        #print(spec)
        # returns year
        return efs(now.year, 2030)
    return match
def match_month(spec):
    efs=enumerate_factory(spec)
    def match(now, year):
        #print(spec, year)
        # returns tuple (year, month)
        minmonth=1
        if year == now.year:
            minmonth=now.month
        return (
            (year, m) for m in
            efs(minmonth, 12)
            )
    return match
def match_day(spec):
    efs=enumerate_factory(spec)
    def match(now, ym):
        #print(spec, ym)
        (year, month) = ym
        minday=1
        if year==now.year and month==now.month:
            minday=now.day
        max_days=calendar.monthrange(year, month)[1]
        return (
            (year, month, day) for day in
            efs(minday,max_days)
        )
    return match
def match_week(spec):
    efs=enumerate_factory(spec)
    def match(now, ymd):
        #print(spec, ymd)
        weeknumber=datetime.datetime(*ymd).isocalendar()[1]
        if weeknumber in list(efs(1,54)):
            return [ymd]
        return []
    return match
def match_weekday(spec):
    efs=enumerate_factory(spec)
    def match(now, ymd):
        #print(spec, ymd)
        weekday=datetime.datetime(*ymd).isoweekday()%7
        if weekday in list(efs(0,6)):
            return [ymd]
        return []
    return match
def match_hour(spec):
    efs=enumerate_factory(spec)
    def match(now, ymd):
        minhour=0
        if (ymd[0]==now.year and ymd[1]==now.month and ymd[2]==now.day):
            minhour=now.hour
        #print("Match hours", spec, now, ymd, minhour)
        return (
            (ymd, x) for x in
            efs(minhour,23)
            )
    return match
def match_minutes(spec):
    efs=enumerate_factory(spec)
    def match(now, ymdhh):
        (ymd, hh) = ymdhh
        minminute=0
        if (ymd[0]==now.year and ymd[1]==now.month and ymd[2]==now.day and hh==now.hour):
            minminute=now.minute+1 # if already at minute, expires!
        #print("Match minutes", spec, now, ymdhh, minminute)
        return (
            datetime.datetime(*(ymd+(hh, mm))) for mm in
            efs(minminute,59)
            )
    return match


class Cronspec:
    def __init__(self, spec, id):
        self.orig=spec
        self.id=id
        spec=preprocess_cronspec(spec).split()
        today=datetime.datetime.now()
        #print(spec, self.orig)
        self.spec=[
            match_year(spec[0]),
            match_month(spec[1]),
            match_day(spec[2]),
            match_week(spec[3]),
            match_weekday(spec[4]),
            match_hour(spec[5]),
            match_minutes(spec[6])
        ]
    def __repr__(self):
        return "<Cronspec '%s'>"%(self.orig)

    def next_from(self, now):
        [year, month, day, week, weekday, hour, minute] = self.spec

        # I filter down possibilities, for each possible year try each possible month and so on
        for y in year(now):
            for ym in month(now, y):
                for ymd in day(now, ym):
                    for ymd in week(now, ymd):
                        for ymd in weekday(now, ymd):
                            for ymdhh in hour(now, ymd):
                                for ymdhhmm in minute(now, ymdhh):
                                    # until the seconds match
                                    #print("Match!! ",ymdhhmm)
                                    return ymdhhmm


class Cron:
    def __init__(self):
        self.specs={}
        self.maxspec=0
        self.max_date=datetime.datetime(3000,1,1)
    def add(self, timespec, f):
        spec_id=self.maxspec
        cs=Cronspec(timespec, f)
        self.specs[spec_id]=cs
        self.maxspec+=1
        return cs
    def remove(self, spec_id):
        if spec_id in self.specs:
            del self.specs[spec_id]
            return True
        return False
    def next(self):
        return self.next_from(datetime.datetime.now())
    def next_from(self, now):
        ret=(self.max_date, None, None)
        #print(repr(self.specs.values()))
        for spec in self.specs.values():
            next_t=spec.next_from(now)
            #print("Next for ", now, spec," is ", next_t)
            if next_t:
                if ret[0]>next_t:
                    ret=(next_t, [spec])
                elif ret[0]==next_t:
                    ret[1].append(spec)
        return ret
    def seconds_to_next_from(self, now):
        n=self.next_from(now)
        return ((n[0] - now).total_seconds(), n[1])
    def seconds_to_next(self):
        return self.seconds_to_next_from(datetime.datetime.now())
