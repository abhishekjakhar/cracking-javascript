---
id: callbacks
title: Callbacks
sidebar_label: Callbacks
---

## Why are functions in JavaScript called First-class functions?

Functions in JavaScript are called First-class functions because they can be treated like any other variable.

* can be assigned as a value to a variable

* can be passed as an argument to other functions

* can be returned by another function

## Explain callback and higher order function?

* A function that returns a function or receives a function as an argument is called a Higher-Order Function.

* The function which you are pasing to a higher order function as argument is called callback function.

In the example given below we have created a higher order function called `map` in which we are passing a callback function called `addTwo`

```js
const map = (array, callback) => {
    const output = [];
    for (let i = 0; i < array.length; i++) {
        output.push(callback(array[i]));
    }
    return output;
};

const addTwo = (num) => {
    return num + 2;
};

map([1,2,3], addTwo);   // [3,4,5]
```