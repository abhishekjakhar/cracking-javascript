---
id: performance
title: Performance
sidebar_label: Performance
---

## What is a web worker? When would you use one?

Web worker is a JavaScript file that runs on a separate thread from the web page thread. So, we are having a JavaScript which loads on our web page and then we ca have a separate JavaScript file which acts as a separate program, running in a background thread.

If we run a bunch of heavy processing in the code that is on our web page, we know that we're not gonna be able to scroll around and click on buttons while JavaScript is running because web page thread is busy in heavy processing. But, we can offload the heavy processing work on to a web worker, which will not affect any of the behaviour on our web page.

## How to create a web worker?

```jsx
const worker = new Worker("/js/worker.js");
```

---

## Explain Debouncing

Debouncing enforces that a function not be called again until certain amount of time has passed without it being called.

Let's consider, when you type into search input, there is a delay before the results appear. 
The debounce function delays the processing of the keyup event until user has stopped typing for a predetermined amount of time.
This way we prevent the browser to process event on every keystroke, also we don't spam the API to get the results, basically we have grouped multiple sequential calls into single one.

If we would have not debounced the function which fire on every keystroke we would have end up making call to API on every keystroke.

---

## Implement Debounce

* We are passing a function (fn) and a delay (delay) into the debounce function. 
* timeout is the variable which we will use to keep track of the amount of time.

If we are invoking function for the first time, our function will execute at the end of our delay. Now, if we invoke our function and invoke again before the end of our delay, the delay restarts and execution of our function fn (gets) postponed, this process keeps happening until we stop firing the function and our delay gets completed.

```js
function debounce(fn, delay) {
    let timeout;

    return function() {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            return fn.apply(this, arguments);
        }, delay);
    }
}
```

---

## Explain Throttling

Throttling enforces a maximum number of times a function can be called over time.

---

## Implement Throttle

---

## Explain requestAnimationFrame

---

## Move element left to right by any given distance smoothly

## What is memoization?

Memoization is an optimization technique that speeds up application by storing the results of expensive function calls in a cache and returning the cached result when the expensive function is called again with same inputs. We are not redoing any calculations because we are already having the result.

## Write your own memoize function? 

## What is cache?

A cache is a temporary data store that holds data so that future request for that same data can be served faster.

## What do you mean by expensive function call?

Expensive function call is a function call that that consumes lot of time and memory during execution due to heavy computation.

:::note
In the context of computer programs, the two major resources we have are time and memory.
:::