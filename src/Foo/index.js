import Foo from "./Foo";

Foo.add = (a, b) => a + b;

const Foo2 = () => {
  return Foo.multiply(10, 10) + 10;
};

export { Foo, Foo2 };
