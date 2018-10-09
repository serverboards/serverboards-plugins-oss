all: setup compile

setup: node_modules/

node_modules/.bin/babel: node_modules/

node_modules/.bin/rollupnode_modules/.bin/rollup: node_modules/
	yarn

node_modules/: package.json
	yarn

compile: static/watcher.js static/manager.js

static/watcher.js: src/watcher.js
	node_modules/.bin/rollup -c rollup.watcher.config.js

static/manager.js: src/manager.js
	node_modules/.bin/rollup -c rollup.manager.config.js

clean:
	rm -rf static/watcher.js static/manager.js

watch-manager:
	node_modules/.bin/rollup -w -c rollup.manager.config.js

watch-watcher:
	node_modules/.bin/rollup -w -c rollup.watcher.config.js

FILES = $(wildcard manifest.yaml *.py *.txt *.sh static/ *.md)
PACKAGE_ID = $(shell awk '/^id:/ {print $$2}' manifest.yaml)

.PHONY: txz
txz:
	@echo $(PACKAGE_ID): $(FILES)
	tar --transform 's#^#'$(PACKAGE_ID)'/#' -cJf $(PACKAGE_ID).txz ${FILES}
