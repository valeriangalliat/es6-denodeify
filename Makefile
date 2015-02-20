BABEL = node_modules/.bin/babel

all: index.js

index.js: index.es6.js
	$(BABEL) $< > $@
