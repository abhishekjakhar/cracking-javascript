---
id: promises
title: Promises
sidebar_label: Promises
---

## What is a promise?

A promise is an object that may produce a single value some time in the future, either a resolved value, or a reason why it's not resolved.

## Why do promises exists?

They exist to make the complexity of making asynchronous requests more manageable. It's a pattern for managing our callbacks in a trustable fashion.

## How do you create a promise?

```js
const promise = new Promise();
```

## What are possible states of promise?

- `fulfilled`
- `rejected`
- `pending`

## How do you change the status of a promise?

The Promise constructor function takes in a single argument, a callback function. This function is going to be passed two arguments, resolve and reject.

- `resolve` - a function that allow you to change the status of a promise to `fulfilled`
- `reject` - a function that allow you to change the status of a promise to `rejected`

## Why is it possible to chain promises?

`.then()` and `.catch()` always returns a new promise, due to this reason it is possible to chain promises.

## Create following promises

### Create a promise. Have it resolve with a value of 'Resolved!' after a delay of 1000ms, using setTimeout. Print the contents of the promise after it has been resolved.

```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolved!");
  }, 1000);
});

promise.then((successMessage) => {
  console.log(successMessage);
});
```

### Create a promise. Have it reject with a value of "Rejected!" without using setTimeout. Print the contents of the promise after it has been rejected.

```js
const promise = new Promise((resolve, reject) => {
  reject("Rejected!");
});

promise.catch((errorMessage) => {
  console.log(errorMessage);
});
```

## Create a sleep function

```js
function sleep(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}
```

## How does promise solves inversion of control problem?

They are esentially a returned object to which you attach callback functions, rather than having to pass callbacks into a function, which lose full control of how the function will be executed when passing a callback to a third-party library.

## Promises also takes callbacks, how can we trust promises?

- Once a promise is settled, it must have a value(which may be undefined). That value must not change. It is immutable once settled.

- A fulfilled or rejected promise is settled, and must not transition into any other state. It can only be settled once.

## Custom Promise

```js
const PENDING = 0;
const FULFILLED = 1;
const REJECTED = 2;

function CustomPromise(executor) {
  let state = PENDING;
  let value = null;
  let handlers = [];
  let catches = [];

  function resolve(result) {
    state = FULFILLED;
    value = result;

    handlers.forEach((h) => h(value));
  }

  function reject(err) {
    state = REJECTED;
    value = err;

    catches.forEach((c) => c(value));
  }

  this.then = function (cb) {
    if (state === FULFILLED) {
      cb(value);
    } else {
      handlers.push(cb);
    }
  };

  this.catch = function (cb) {
    if (state === REJECTED) {
      cb(value);
    } else {
      catches.push(cb);
    }
  };

  executor(resolve, reject);
}

CustomPromise.resolve = function (value) {
  return new CustomPromise((resolve, reject) => {
    resolve(value);
  });
};

CustomPromise.reject = function (value) {
  return new CustomPromise((resolve, reject) => {
    reject(value);
  });
};

CustomPromise.all = function (promises) {
  return new CustomPromise((resolve, reject) => {
    let fulfilledPromises = [];
    let counter = 0;

    promises.forEach((promise, index) => {
      promise.then((value) => {
        counter++;
        fulfilledPromises[index] = value;
        if (counter === promises.length) {
          resolve(fulfilledPromises);
        }
      });
    });
  });
};

const getText = new CustomPromise((resolve, reject) => {
  setTimeout(() => resolve("Hello work"), 2000);
});

getText.then((val) => console.log(val));

var p2 = CustomPromise.resolve(3);
var p3 = CustomPromise.resolve(3);

var promisesArr = [getText, p2, p3];

CustomPromise.all(promisesArr).then((result) => {
  console.log(result);
});
```
