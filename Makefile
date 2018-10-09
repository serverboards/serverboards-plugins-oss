all: build

directories = auth-htpasswd auth-pam backupmanager backups cloud cron docker expirationwizard facebookads google-analytics google-drive logmap prometheus quickactions secrets serviceheatmap spice sqlconsole ssh telegram
basedir = $(shell pwd)

build:
	$(foreach dir,$(directories),cd $(basedir)/$(dir) && make && ) true

clean:
	$(foreach dir,$(directories),cd $(basedir)/$(dir) && make clean && ) true

txz:
	$(foreach dir,$(directories),cd $(basedir)/$(dir) && make txz && ) true
