---
id: asynchrony
title: Asynchrony
sidebar_label: Asynchrony
---

## What we do mean by JavaScript is single threaded?

It can run only one command at a time.

## What will be the output of code given below?

```js
function work() {
    console.log('Working');
}

console.log('Started');
setTimeout(work, 0);
console.log('Ended');
```

Although the wait time is 0 ms, the result in the browser console will be the following:

```js
Started
Ended
Working
```

The callback function `work()` will get placed in Callback Queue and will only be picked up by Event Loop and pushed to Callstack, when all synchronous code is finished running and the Callstack is empty.

:::note
You could have million **console.log** in between **Started** and **Ended**, the work callback will only get called after that.
:::

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

## What is event loop?

The event loop has one simple job which is to monitor the Call Stack and the Callback Queue. If the Call Stack is empty, it will take the first event from the Callback Queue and will push it to the Call Stack.

Such an iteration is called a tick in the Event loop.

:::note
The event loop says I am gonna check before every single line of code run, is the call stack empty? Is there something in the queue?. If the call stack is not empty, if there is still further global code to run, then I will not even go look at the queue. But, if the call stack is empty I will go to the queue, I will grab the function from there and I will put it on the call stack.
:::

## What is callback queue?