install: install-deps

run:
	npm run babel-node -- src/bin/get-geo.js 134.234.3.2

noargs:
	npm run babel-node -- src/bin/get-geo.js

install-deps:
	npm install

build:
	rm -rf dist
	npm run build

test:
	npm test

lint:
	npx eslint .