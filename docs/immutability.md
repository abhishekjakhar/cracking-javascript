---
id: immutability
title: Immutability
sidebar_label: Immutability
---

## What is immutability?

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