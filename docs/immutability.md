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