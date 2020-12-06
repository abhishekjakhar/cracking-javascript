---
id: closures
title: Closures
sidebar_label: Closures
---

## What is a closure?

When we have a function nested inside another function. In that case, the child function will still have access to the outer function's scope, even after the outer(parent) function's execution context has been removed from the Execution stack.

```jsx
function makeAdder(x) {
  return function inner(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12
```

In this example, we have defined a function makeAdder(x), that takes a single argument x, and returns a new function. The function it returns takes a single argument y, and returns the sum of x and y.

## Have you used closure before, give example?
