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
      result.push(...flattenArray(arr[i]));
    } else {
      newArray.push(arr[i]);
    }
  }

  return newArray;
}
```
