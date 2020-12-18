---
id: asynchrony
title: Asynchrony
sidebar_label: Asynchrony
---

## What is thunk?

A thunk is a function that has everything already that it needs to do to give you some value back. You do not need to pass any arguments in, you simply call it and it will give you a value back.

```js title="synchronous thunk"
function add(x,y) {
    return x + y;
}

var thunk = function() {
    return add(10,15);  // 25
}

thunk();
```

## What is asynchronous thunk?

It is a function that doesn't need any arguments passed to it to do it's job, except you need to pass it a callback so that you can get the value out.

```js title="asynchronous thunk"
function addAsync(x,y,cb) {
    setTimeout(function() {
        cb(x + y);
    }, 1000);
}

var thunk = function(cb) {
    return addAsync(10, 15, cb)
}

thunk(function(sum) {
    sum;    // 25
});
```

## Difference between synchronous and asynchronous thunk?

## What is event loop?

## What is callback queue?
