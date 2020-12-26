---
id: immutability
title: Immutability
sidebar_label: Immutability
---

## What is immutability?

Immutability is that change that needs to occur needs to be intentional. It shouldn't be accidental, it shouldn't be happening without us being aware, happening at different times, creating race conditions.

:::note
Immutability does not mean that things can't change. There's really no such things as like making an immutable program because that program would not have any point because nothing will change in that program.
:::

## How to make copy of an object?

```js
const dog = {
    name: 'Ladoo'
}

const anotherDog = { ...dog };

anotherDog.name = 'Kali'

console.log(dog.name);          // Ladoo
console.log(anotherDog.name)    // Kali
```

## Explain output

```jsx
let obj = {
    internal: {}
};

Object.freeze(obj);
obj.internal.foo = 'Foo';

console.log(obj.internal.foo);  // Foo
```

The object frozen using `Object.freeze()` is shallow, which means the result of calling `Object.freeze(object)` only applies to the immediate properties of `object`. If our object is having a property whose value is another object, those objects are not frozen and may be target of property addition, deletion and or value re-assignment operations.

## Object.freeze() vs Object.seal()

Objects sealed with `Object.seal()` can have their existing properties changed. But, existing properties in object frozen with `Object.freeze()` cannot be changed, they are made immutable.