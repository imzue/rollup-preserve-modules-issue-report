## `preserveModules` caused some unnecessary import and export

> I don't know how to explain it, just read the code.

### Expect es/Foo/index.js

```js
import Foo from "./Foo.js";

Foo.add = (a, b) => a + b;

const Bar = () => {
  return Foo.multiply(10, 10) + 10;
};

export { Bar, Foo };
```

### Actual es/Foo/index.js

```js
import Foo from "./Foo.js";
export { default as Foo } from "./Foo.js"; // unnecessary export

Foo.add = (a, b) => a + b;

const Bar = () => {
  return Foo.multiply(10, 10) + 10;
};

export { Bar };
```

## Or es/Bar/index.js

```js
import Bar from "./Bar.js"; // unnecessary import
export { default } from "./Bar.js";
```
