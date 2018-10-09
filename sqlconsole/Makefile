all: setup compile

setup: node_modules/

node_modules/.bin/babel: node_modules/

node_modules/.bin/rollupnode_modules/.bin/rollup: node_modules/
	npm install

node_modules/: package.json
	npm install


compile: static/console.js

static/console.js: src/index.js
	node_modules/.bin/rollup -c

clean:
	rm static/console.js

watch:
	node_modules/.bin/rollup -w -c

FILES = $(wildcard manifest.yaml *.py *.txt *.sh static/ *.md)
PACKAGE_ID = $(shell awk '/^id:/ {print $$2}' manifest.yaml)

.PHONY: txz
txz: $(PACKAGE_ID).txz

$(PACKAGE_ID).txz: $(FILES)
	@echo $(PACKAGE_ID).txz: $(FILES)
	@tar --transform 's#^#'$(PACKAGE_ID)'/#' -cJf $(PACKAGE_ID).txz ${FILES}
