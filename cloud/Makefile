all: setup compile

setup: node_modules/

node_modules/.bin/babel: node_modules/

node_modules/.bin/rollupnode_modules/.bin/rollup: node_modules/
	yarn

node_modules/: package.json
	yarn

compile: static/node_list.js

static/node_list.js: src/index.js
	node_modules/.bin/rollup -c

clean:
	rm -rf static/node_list.js
	rm -rf node_modules


watch:
	node_modules/.bin/rollup -w -c -m

FILES = $(wildcard manifest.yaml *.py *.txt *.sh static/ *.md)
PACKAGE_ID = $(shell awk '/^id:/ {print $$2}' manifest.yaml)

.PHONY: txz
txz: compile
	@echo $(PACKAGE_ID): $(FILES)
	tar --transform 's#^#'$(PACKAGE_ID)'/#' -cJf $(PACKAGE_ID).txz ${FILES}
