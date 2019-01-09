all: setup compile

setup: node_modules/ env/

env/: requirements.txt
	python3 -m venv env
	env/bin/pip install -r requirements.txt

node_modules/.bin/babel: node_modules/

node_modules/.bin/rollupnode_modules/.bin/rollup: node_modules/
	npm install

node_modules/: package.json
	npm install


compile: static/console.js

static/console.js: src/index.js
	node_modules/.bin/rollup -c

clean:
	rm -f static/console.js
	rm env -rf

watch:
	node_modules/.bin/rollup -w -c

FILES = $(wildcard manifest.yaml *.py *.txt *.sh static/ *.md env/)
PACKAGE_ID = $(shell awk '/^id:/ {print $$2}' manifest.yaml)

.PHONY: txz
txz: $(PACKAGE_ID).txz

$(PACKAGE_ID).txz: $(FILES)
	@echo $(PACKAGE_ID).txz: $(FILES)
	@tar --transform 's#^#'$(PACKAGE_ID)'/#' -cJf $(PACKAGE_ID).txz ${FILES}
