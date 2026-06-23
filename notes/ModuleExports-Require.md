## Module Exports & Require

### Modules

Every file in Node.js is treated as a **module**.

### require()

Used to import another module.

```js
require("./xyz");
```

### Module Scope

Variables and functions are **private by default**.

❌ Doesn't work

```js
calculateSum();
```

because modules don't leak variables/functions.

### module.exports

Export data from a module:

```js
module.exports = calculateSum;
```

### Export Multiple Values

```js
module.exports = {
  calculateSum,
  x
};
```

### Import Multiple Values

```js
const { calculateSum, x } = require("./sum");
```

### Notes

* `.js` extension can be omitted.
* Destructuring is commonly used while importing.

### CommonJS (CJS)

```js
const data = require("./file");
module.exports = data;
```

### ES Modules (ESM)

```js
import data from "./file.js";
export default data;
```

---
