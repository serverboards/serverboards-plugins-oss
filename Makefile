all: setup compile

setup: node_modules/

node_modules/.bin/babel: node_modules/

node_modules/.bin/rollupnode_modules/.bin/rollup: node_modules/
	yarn

node_modules/: package.json
	yarn

compile: static/widget.js

static/widget.js: src/widget.js
	node_modules/.bin/rollup -c

clean:
	rm static/widget.js

watch:
	node_modules/.bin/rollup -w -c -m
