'use strict';

var Foo = require('./Foo.js');

Foo.add = (a, b) => a + b;

const Foo2 = () => {
  return Foo.multiply(10, 10) + 10;
};

exports.Foo = Foo;
exports.Foo2 = Foo2;
