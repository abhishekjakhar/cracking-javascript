---
id: types
title: Types
sidebar_label: Types
slug: /
---

## Is JavaScript a dynamically typed or statically typed language?

JavaScript is dynamically typed language. The interpreter assigns variables a type at runtime based on the variable's value at the time.

```js
    let foo = 24;   // foo is a number
    foo = 'bar';    // foo is now a string
    foo = true;     // foo is now a boolean
```

---

## What are different data types in JavaScript?

**Primitive Types**

* undefined
* Boolean
* Number
* String
* Symbol
* BigInt
* null (seemingly primitive)


**Structural Types**

* Objects

:::note
In JavaScript variables don't have types, values do.
:::

---

## What is meaning of primitive type?

In JavaScript, a primitive (value/data) is data that is not object and has no methods.

All primitives are immutable. They can be replaced but, but they can't be directly altered like objects, functions and arays.

---

## undefined vs undeclared?

**undefined:** variable that has been declared, but at the moment has no value in it.

**undeclared:** variable that has not been formally declared in any scope that we have access to.

```js
    let a;

    a;  // undefined
    b;  // ReferenceError: b is not defined
```

---

## What is use of typeof operator?

typeof operator is our first way of looking at a value and determining it's type.

```js
    let v;
    typeof v;   // "undefined"

    v = "1"
    typeof v;   // "string"

    v = 2;
    typeof v;   // "number"

    v = {};
    typeof v;   // "object"

    v = Symbol();
    typeof v;   // "symbol"

    v = true;
    typeof v;   // "boolean"
```

:::note
This is an operator that guarantees it will always return a string. typeof operator cannot return empty string, null or undefined.
:::

---

