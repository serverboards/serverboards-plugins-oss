#!env/bin/python3

import sys
import time
import sqlite3
import os
import json
import hashlib

def default_hash(name, args, kwargs):
    hs = hashlib.sha1(
        ('%s--%s'% (
            '-'.join(str(x) for x in args),
            '-'.join('%s:%s' % (k, v) for k,v in kwargs.items())
        )).encode('utf8')
    ).hexdigest()
    return "%s:%s" % (name, hs)

class Cache:
    def __init__(self, filename):
        filename = os.path.expanduser(filename)
        if not os.path.exists(filename):
            self.initialize(filename)
        self.conn = sqlite3.connect(filename)

    def initialize(self, filename):
        with sqlite3.connect(filename) as conn:
            conn.execute(
                "CREATE TABLE cache " +
                "(key VARCHAR(256), value TEXT, deadline FLOAT);"
            )
            conn.commit()

    def set(self, key, data, ttl=600):
        self.conn.execute(
            "DELETE FROM cache WHERE key = ?;",
            (key,)
        )
        self.conn.execute(
            "INSERT INTO cache (key, value, deadline) VALUES (?, ?, ?);",
            (key, json.dumps(data), time.time() + ttl)
        )
        self.conn.commit()
        return self

    def get(self, key, stale = False):
        c = self.conn.cursor()
        try:
            if stale:
                c.execute(
                    "SELECT value FROM cache WHERE key = ?",
                    (key,)
                )
            else:
                c.execute(
                    "SELECT value FROM cache WHERE key = ? AND deadline > ?",
                    (key, time.time())
                )

            value = c.fetchone()
            if not value:
                return None
            return json.loads(value[0])
        finally:
            c.close()

    def delete(self, key):
        self.conn.execute(
            "DELETE FROM cache WHERE key = ?;",
            (key,)
        )
        self.conn.commit()
        return self

    def keys(self):
        c = self.conn.cursor()
        try:
            return [
                r[0]
                for r in c.execute(
                    "SELECT key FROM cache WHERE deadline > ?",
                    (time.time(),)
                )
            ]
        finally:
            c.close()

    def keys_ttl(self):
        c = self.conn.cursor()
        try:
            now = time.time()
            return [
                {"key": r[0], "ttl": r[1] - now}
                for r in c.execute(
                    "SELECT key, deadline FROM cache WHERE deadline > ?",
                    (time.time(),)
                )
            ]
        finally:
            c.close()

    def vacuum(self):
        self.conn.execute(
            "DELETE FROM cache WHERE deadline < ?;", (time.time(), ))
        self.conn.commit()
        self.conn.execute("VACUUM;")

    def clean(self):
        self.conn.execute(
            "DELETE FROM cache")
        self.conn.commit()
        self.conn.execute("VACUUM;")

    def update_ttl(self, key, ttl):
        self.conn.execute(
            "UPDATE cache SET deadline = ? WHERE key = ?",
            (time.time() + ttl, key))
        self.conn.commit()

    def a(self, f=None, key=default_hash, ttl=600):
        def wrapper(f):
            async def wrapped(*args, _stale=False, _ttl=None, **kwargs):
                hv = key(f.__name__, args, kwargs)
                v = self.get(hv, stale = _stale)
                if not v:
                    v = await f(*args, **kwargs)
                    if not _ttl:
                        _ttl = ttl
                    self.set(hv, v, _ttl)
                return v
            def delete(*args, **kwargs):
                kv = key(f.__name__, args, kwargs)
                self.delete(kv)
            def update_ttl(*args, _ttl=None, **kwargs):
                hv = key(f.__name__, args, kwargs)
                self.update_ttl(hv, ttl)
            wrapped.delete = delete
            wrapped.update_ttl = update_ttl
            return wrapped
        if f:
            return wrapper(f)
        return wrapper

    def __call__(self, f=None, key=default_hash, ttl=600):
        def wrapper(f):
            def wrapped(*args, _stale=False, _ttl=None, **kwargs):
                hv = key(f.__name__, args, kwargs)
                v = self.get(hv, stale = _stale)
                if not v:
                    v = f(*args, **kwargs)
                    if not _ttl:
                        _ttl = ttl
                    self.set(hv, v, _ttl)
                return v
            def delete(*args, **kwargs):
                kv = key(f.__name__, args, kwargs)
                self.delete(kv)
            wrapped.delete = delete
            return wrapped
        if f:
            return wrapper(f)
        return wrapper


def test(cache):
    cache.set("test", "my data", 1)
    print(cache.keys())
    assert cache.get("test") == "my data"
    assert 'test' in cache.keys()
    print("wait for eviciton..")
    time.sleep(2)
    assert not 'test' in cache.keys()
    assert cache.get("test") == None
    assert cache.get("test", stale=True) == "my data"
    cache.set("test", "my data", 1)
    assert cache.get("test") == "my data"
    cache.delete("test")
    assert cache.get("test") == None

    ncalls = 0
    @cache(ttl=1)
    def test_function(id):
        nonlocal ncalls
        ncalls += 1
        return {
            "name": "my id is %s" % id,
            "id": id,
            "ncall": ncalls
        }

    print(ncalls)
    assert ncalls == 0
    print(test_function(1))
    print(test_function(1))
    print(test_function(1))
    assert ncalls == 1
    print(test_function(1))
    print(test_function(2))
    print(test_function(3))
    assert ncalls == 3
    print(test_function(1, _stale=True))
    time.sleep(2)
    print(test_function(1, _stale=True))
    assert ncalls == 3
    print(test_function(1))
    print(test_function(2))
    print(test_function(3))
    print(test_function(1))
    print(test_function(2))
    print(test_function(3))
    assert ncalls == 6

    @cache
    def test_function2(id):
        nonlocal ncalls
        ncalls += 1
        print("called")
        return "ok %s" % id
    test_function2.delete(2)
    print(test_function2(2))
    print(test_function2(2))
    assert ncalls == 7, ncalls

    test_function2.delete(2)
    print(test_function2(2, _ttl=1))
    print(test_function2(2, _ttl=1))
    print(test_function2(2, _ttl=1))
    assert ncalls == 8, ncalls
    time.sleep(2)
    print(test_function2(2, _ttl=1))
    assert ncalls == 9, ncalls

def main(argv):
    cache = Cache(argv[0])
    argv = argv[1:]
    if argv:
        if argv[0] == "keys":
            keys = cache.keys_ttl()
            print(json.dumps({
                "keys": keys,
                "count": len(keys)
            }, indent=2))
            return
        if argv[0] == "set":
            cache.set(argv[1], argv[2])
            return
        if argv[0] == "update_ttl":
            cache.update_ttl(argv[1], float(argv[2]))
            return
        if argv[0] == "get":
            print(json.dumps(cache.get(argv[1]), indent=2))
            return
        if argv[0] == "del":
            cache.set(argv[1])
            return
        if argv[0] == "clean":
            cache.clean()
            return
        if argv[0] == "test":
            test(cache)
            return
        if argv[0] == "vacuum":
            cache.vacuum()
            return

    print("Use as library or set command: keys | set <k> <v> | get <k> | del <k>")

if __name__ == '__main__':
    main(sys.argv[1:])
