---
id: arrays
title: Arrays
sidebar_label: Arrays
---

## Flatten Array

```js
function flatten(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result.push(...flatten(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}
```

```js
function flatten(arr) {
  let result = [];

  arr.forEach((i) => {
    if (Array.isArray(i)) {
      result.push(...flatten(i));
    } else {
      result.push(i);
    }
  });

  return result;
}

const nested = [1, 2, 3, [4, 5, [6, 7], 8, 9]];
flatten(nested); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
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
