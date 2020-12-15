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

## Create following functions

#### Create a function called `map` that takes two inputs:
* an array of numbers
* a callback function - a function that is applied to each element of the array

`map` return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array

```js title="map"
function map(array, callback) {
    let result = [];
    for (let elem of array) {
        result.push(callback(elem));
    }
    return result;
}
```

#### Create a function called `forEach` that takes two inputs:
1. an array
2. a callback function - a function that is applied to each element of the array

`forEach` does not return anything

```js title="forEach"
function forEach(array, callback) {
    for (let elem of array) {
        callback(elem);
    }
}
```

#### Create a function called `reduce` that takes three input:
1. an array
2. a callback function
3. initial value

`reduce` takes an array and reduces the elements to a single value. For example it can sum all the numbers, multiply them, or any operation that you can put into a function.

```js title="reduce"
function reduce(array, callback, initialValue) {
    for (let elem of array) {
        initialValue = callback(initialValue, elem);
    }
    return initialValue;
}
```
