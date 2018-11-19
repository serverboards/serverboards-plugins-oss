FILES = $(wildcard manifest.yaml *.py *.txt *.sh static/ *.md *.yml)
PACKAGE_ID = $(shell awk '/^id:/ {print $$2}' manifest.yaml)

all: compile

node_modules/:
	yarn install

compile: node_modules/ static/widget.js
	cp src/prometheus.svg static/

static/widget.js: src/widget.js
	node_modules/.bin/rollup -c

clean:
	rm -rf node_modules
	rm -rf static
	rm $(PACKAGE_ID).txz


.PHONY: txz
txz: compile $(PACKAGE_ID).txz

$(PACKAGE_ID).txz: $(FILES)
	@echo $(PACKAGE_ID).txz: $(FILES)
	@tar --transform 's#^#'$(PACKAGE_ID)'/#' -cJf $(PACKAGE_ID).txz ${FILES}
