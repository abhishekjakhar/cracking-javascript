---
id: types
title: Types
sidebar_label: Types
slug: /
---

## Is JavaScript a dynamically typed or statically typed language?

JavaScript is dynamically typed language. The interpreter assigns variables a type at runtime based on the variable's value at the time.

```js
let foo = 24; // foo is a number
foo = "bar"; // foo is now a string
foo = true; // foo is now a boolean
```

## What are different data types in JavaScript?

**Primitive Types**

- undefined
- Boolean
- Number
- String
- Symbol
- BigInt
- null (seemingly primitive)

**Structural Types**

- Objects

:::note
In JavaScript variables don't have types, values do.
:::

## What is meaning of primitive type?

In JavaScript, a primitive (value/data) is data that is not object and has no methods.

All primitives are immutable. They can be replaced but, but they can't be directly altered like objects, functions and arays.

## undefined vs undeclared?

**undefined:** variable that has been declared, but at the moment has no value in it.

**undeclared:** variable that has not been formally declared in any scope that we have access to.

```js
let a;

a; // undefined
b; // ReferenceError: b is not defined
```

## What is use of typeof operator?

typeof operator is our first way of looking at a value and determining it's type.

```js
let v;
typeof v; // "undefined"

v = "1";
typeof v; // "string"

v = 2;
typeof v; // "number"

v = {};
typeof v; // "object"

v = Symbol();
typeof v; // "symbol"

v = true;
typeof v; // "boolean"
```

:::note
This is an operator that guarantees it will always return a string. typeof operator cannot return empty string, null or undefined.
:::

## Write a function to check if number is integer or not?

```js
function isInteger(value) {
  return (
    typeof value === "number" && isFinite(value) && Math.floor(value) === value;
  );
}
```

## Explain output

```jsx
console.log(typeof typeof 1);
console.log(typeof typeof true);
```

Both of the console.log will return "string"

- `typeof 1` is `"number"` and `typeof "number"` is `string`
- `typeof true` is `"boolean"` and `typeof "boolean"` is `string`

## How to convert 'true' & 'false' string to a boolean in JavaScript?

do's:

```js
const value = "true";
const bool = value === "true"; // true

const value = "false";
const bool = value === "true"; // false
```

dont's:

```js
const value = "false";
const bool = Boolean(value); // true
```

Any string which is not empty will evaluate to `true` by using Boolean object.

## Falsy values in JavaScript

In JavaScript there are only six falsy values. Both null and undefined are two of the falsy values.

- false
- 0
- ""
- null
- undefined
- NaN

## Difference between null and undefined?

### null

- null is a non empty or non-existent value
- null must be assigned

```js
let a = null;

console.log(a); // null
```

### undefined

- variable that has been declared, but at the moment has no value in it.

```js
let b;

console.log(b); // undefined
```

```js
let c = undefined;

console.log(c); // undefined
```

```js
let d = {};

console.log(d.fake); // undefined
```

## Practical difference between null and undefined?

```js
let logHi = (str = "hi") => {
  console.log(str);
};
```

The code above creates a function named logHi. This function requires one parameter and sets the default of that parameter to hi if it isn’t supplied. Here’s what that looks like:

```js
logHi(); // hi
```

We can also supply a parameter to overwrite this default:

```js
logHi("bye"); // bye
```

With default parameter, undefiend will use the default while null does not.

```js
logHi(undefined); // hi

logHi(null); // null
```
