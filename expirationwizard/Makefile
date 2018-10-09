all: setup compile

setup: node_modules/

node_modules/.bin/babel: node_modules/

node_modules/.bin/rollupnode_modules/.bin/rollup: node_modules/
	yarn

node_modules/: package.json
	yarn

compile: static/widget.js static/widget.css

static/widget.js: src/widget.js
	node_modules/.bin/rollup -c

static/widget.css: src/widget.sass
	sassc $< $@

clean:
	rm static/widget.js

watch:
	make -j2 watch_rollup watch_sass

watch_rollup:
	node_modules/.bin/rollup -w -c -m

watch_sass:
	sass --watch src/widget.sass:static/widget.css

FILES = $(wildcard manifest.yaml *.py *.txt *.sh static/ *.md)
PACKAGE_ID = $(shell awk '/^id:/ {print $$2}' manifest.yaml)

.PHONY: txz
txz: compile
	@echo $(PACKAGE_ID).txz: $(FILES)
	@tar --transform 's#^#'$(PACKAGE_ID)'/#' -cJf $(PACKAGE_ID).txz ${FILES}
