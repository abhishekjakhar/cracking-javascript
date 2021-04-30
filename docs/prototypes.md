---
id: prototypes
title: Prototypes
sidebar_label: Prototypes
---

## Object.create() polyfill

```js
if (!Object.create) {
  Object.create = function (o) {
    function F() {}
    F.prototype = o;
    return new F();
  };
}
```

This usage of Object.create(..) is by far the most common usage, because it's the part that can be polyfilled. There's an additional; set of functionality that the standard ES5 built-in Object.create(..) provides, which is not polyfillable for pre-ES5. As such, this capability is far less commonly used.

## Create a speak() given below

```js
const name = "Abhishek";
name.speak(); // "Abhishek can speak"
```

```js
String.prototype.speak = function () {
  return `${this} can speak`;
};
```
