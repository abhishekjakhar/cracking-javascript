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

### Create a function called `map` that takes two inputs:
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

### Create a function called `forEach` that takes two inputs:
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

### Create a function called `reduce` that takes three input:
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

## What are arrow functions?

An arrow function is a compact alternative to traditional function.

* they are more concise than the tranditional functions
* they manage 'this' keyword differently

```js
// Traditional Function
function multiplyBy2(input) {
    return input * 2 
};
```
```js
// Remove the word "function" and place arrow between the argument and opening body bracket
const multiplyBy2 = (input) => { return input * 2 };
```
```js
// Remove the body brackets and word "return" -- the return is implied
const multiplyBy2 = (input) => input * 2;
```
```js
// Remove the argument parenthesis
const multiplyBy2 = input => input * 2;
```
```js
const output = multiplayBy2(3); // 6
```

## What is callback hell?

In JavaScript the only way to delay a computation so that it runs after the asynchronous call completes is to put the delayed code inside a callback function.

```js
getData(callbackFunction(x) {
    getMoreData(anotherCallbackFunction(y) {
        updateUI();
    })
})
```

Now, in the example given above we make a asynchronous request on click of button. If request succeeds, we make a second request. If second request succeeds, we update our UI by using the data which we are getting from both the requests. This pattern leads us to the nested callbacks, which is called callback hell.

## What are drawbacks of using callback?

1. Callback hell
2. Inversion of  - When you write a callback, you're assuming that the program you're giving the callback to is reponsible and will call it when it's supposed to. You're essentially inverting the the control of your program over to another program. For many third-party libraries, callback functions are the interface for how you interact with them. It’s probable that a third party library could, whether on purpose or accidentally, break how they interact with your callback.

```js
function criticalFunction () {
  // It's critical that this function
  // gets called and with the correct arguments
}

thirdPartyLib(criticalFunction)
```

In the example given above you're not the one calling `criticalFunction`, you have 0 control over when and with what arguments it's invoked.