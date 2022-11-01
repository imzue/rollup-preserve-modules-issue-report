import Foo from './Foo.js';
export { default as Foo } from './Foo.js';

Foo.add = (a, b) => a + b;

const Foo2 = () => {
  return Foo.multiply(10, 10) + 10;
};

export { Foo2 };
