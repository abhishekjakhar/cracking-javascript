---
id: arrays
title: Arrays
sidebar_label: Arrays
---

## Flatten Array

```js
function flattenArray(arr) {
  let newArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArray.push(...flattenArray(arr[i]));
    } else {
      newArray.push(arr[i]);
    }
  }

  return newArray;
}
```

## How to remove a specific item from an array?

1. Find the `index` of the array element you want to remove using `indexOf`
2. Remove that index with the `splice` method

```js
const array = [2, 5, 9];

const index = array.indexOf(5);
if (index > -1) {
  array.splice(index, 1);
}

console.log(array); // [2, 9]
```

## Array.splice() vs Array.slice()

Slice is immutable and Splice mutates the array
