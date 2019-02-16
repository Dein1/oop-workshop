install: install-deps

run:
	npm run babel-node -- src/bin/get-geo.js 134.234.3.2

noargs:
	npm run babel-node -- src/bin/get-geo.js

weather1:
	npm run babel-node -- src/bin/weather.js --service Weatherbit berlin

weather2:
	npm run babel-node -- src/bin/weather.js --service MetaWeather berlin

install-deps:
	npm install

build:
	rm -rf dist
	npm run build

test:
	npm test

lint:
	npx eslint .

.PHONY: test
