---
id: promises
title: Promises
sidebar_label: Promises
---

## What are promises?

## Why do promises exists?

They exist to make the complexity of making asynchronous requests more manageable.

## How do you create a promise?

```js
const promise = new Promise();
```

## What are possible states of promise?

* `fulfilled`
* `rejected`
* `pending`

## How do you change the status of a promise?

The Promise constructor function takes in a single argument, a callback function. This function is going to be passed two arguments, resolve and reject.

* `resolve` - a function that allow you to change the status of a promise to `fulfilled`
* `reject` - a function that allow you to change the status of a promise to `rejected`

## Why is it possible to chain promises?

`.then()` and `.catch()` always returns a new promise, due to this reason it is possible to chain promises.

## Create following promises

### Create a promise. Have it resolve with a value of 'Resolved!' after a delay of 1000ms, using setTimeout. Print the contents of the promise after it has been resolved.

```js
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Resolved!");
    }, 1000);
})

promise.then((successMessage) => {
    console.log(successMessage);
})
```

### Create a promise. Have it reject with a value of "Rejected!" without using setTimeout. Print the contents of the promise after it has been rejected.

```js
const promise = new Promise((resolve, reject) => {
    reject("Rejected!");
})

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
    })
}
```