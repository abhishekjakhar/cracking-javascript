---
id: performance
title: Performance
sidebar_label: Performance
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

---

## Implement Throttle

---

## Explain requestAnimationFrame

---

## Move element left to right by any given distance smoothly