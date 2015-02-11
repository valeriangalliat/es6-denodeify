TO5 = node_modules/.bin/6to5

all: index.js

index.js: index.es6.js
	$(TO5) $< > $@
	sed -i '/var _toArray/d;s/_toArray/Array.prototype.slice.call/g' $@

