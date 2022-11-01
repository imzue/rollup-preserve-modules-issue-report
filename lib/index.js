'use strict';

var index = require('./Foo/index.js');
var Bar = require('./Bar/Bar.js');
var Foo = require('./Foo/Foo.js');



exports.Foo2 = index.Foo2;
exports.Bar = Bar;
exports.Foo = Foo;
