#!/usr/bin/python3
import sys, os, datetime
import serverboards
from serverboards import rpc

class Connection:
    conn = False
    port = None
    ssh_plugin_id = None
    def close(self):
        return True

    @staticmethod
    def serialize(x):
        if type(x) == datetime.datetime:
            return x.isoformat()
        return x
    def execute(self, query):
            with self.conn.cursor() as cur:
                try:
                    cur.execute(query)
                    return {
                        "columns": [x[0] for x in cur.description],
                        "data": [[self.serialize(y) for y in x] for x in cur.fetchall()]
                    }
                except:
                    conn.conn.rollback()
                    raise

    def close(self):
        self.conn.close()

    def connect_port(self, via, hostname, port):
        rpc.debug("Connection via %s"%via)
        self.ssh_plugin_id = rpc.call("plugin.start", "serverboards.core.ssh/daemon")
        service = rpc.call("service.info", via)
        self.port = rpc.call("%s.open_port"%self.ssh_plugin_id, url=service['config']['url'], hostname=hostname, port=port)
        rpc.debug("Use port  %s"%self.port)
        hostname="localhost"
        return (hostname, self.port)



class PostgreSQL(Connection):
    def __init__(self, via, hostname, port, username, password_pw, database):
        import psycopg2
        super().__init__()
        if via or hostname!="localhost":
            hostname, port = self.connect_port(via, hostname, port)
        self.conn = psycopg2.connect(database=database, user=username, password=password_pw, host=hostname, port=port)
    def databases(self):
        return [
            x[0] for x in
            execute("SELECT datname FROM pg_database WHERE datistemplate = false;")['data']
            ]
    def tables(self):
        return [
            x[0] for x in
            execute("SELECT relname FROM pg_class WHERE relkind='r' AND relname !~ '^(pg_|sql_)';")['data']
            ]


class MySQL(Connection):
    def __init__(self, via, hostname, port, username, password_pw, database):
        import MySQLdb
        super().__init__()
        if via:
            hostname, port = self.connect_port(via, hostname, port)
        self.conn = MySQLdb.connect(db=database, user=username, passwd=password_pw, host=hostname, port=port)
    def databases(self):
        return [
            x[0] for x in
            execute("SHOW DATABASES;")["data"]
            ]
    def tables(self):
        return [
            x[0] for x in
            execute("SHOW TABLES;")["data"]
            ]


conn=False

@serverboards.rpc_method
def open(via=None, type="postgresql", hostname="localhost", port=None, username=None, password_pw=None, database=None):
    global conn
    if conn:
        conn.close()
        if conn.ssh_plugin_id:
            rpc.call("%s.close_port"%conn.ssh_plugin_id, port=conn.port)
        conn.conn=None
        conn.port=None
    hostname = hostname or "localhost"


    if type=="postgresql":
        port = port or 5432
        database = database or "template1"
        conn=PostgreSQL(via, hostname, port, username, password_pw, database)
        return True
    if type=="mysql":
        port = port or 3306
        database = database or "mysql"
        print(repr((via, hostname, port, username, password_pw, database)))
        conn=MySQL(via, hostname, port, username, password_pw, database)
        return True

    raise Exception("Database type %s not supported"%(type))
    return True

@serverboards.rpc_method
def close():
    global conn
    conn.close()
    if conn.ssh_plugin_id:
        rpc.call("%s.close_port"%conn.ssh_plugin_id, port=conn.port)
    sys.exit(0)

@serverboards.rpc_method
def databases():
    return conn.databases()

@serverboards.rpc_method
def tables():
    return conn.tables()

@serverboards.rpc_method
def execute(query):
    return conn.execute(query)

if __name__=='__main__':
    if len(sys.argv)>1 and sys.argv[1]=="test":
        open(None, "postgresql", "localhost", 5432, username="serverboards", password_pw="serverboards", database="sbds")
        print(execute("SELECT * FROM auth_user;"))
        close()
    elif len(sys.argv)>1 and sys.argv[1]=="test2":
        open(None, "mysql", "localhost", 3306, username="serverboards", password_pw="serverboards", database="test")
        print(databases())
        print(tables())
        print(execute("SELECT * FROM test;"))
        close()
    else:
        serverboards.rpc.call("debug", True)
        serverboards.loop()
