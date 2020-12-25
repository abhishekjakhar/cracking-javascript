---
id: closures
title: Closures
sidebar_label: Closures
---

## What is a closure?

Closure is when a function "remembers" its lexical scope even the the function is executed outside the lexical scope.

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

### Example 1

```jsx
function ask(question) {
  setTimeout(function waitASecond() {
    console.log(question);
  }, 100);
}

ask("What is closure?");  // What is closure?
```

When we pass some function to a timer it usually reference some variable outside of itself. Now, in the example given above, at the time waitASecond function runs, the ask function has already finished, and the variable question should have gone away. But, it did not go away because closure preserved it.

### Example 2

```jsx
function ask(question) {
  return function holdYourQuestion() {
    console.log(question);
  };
}

var myQuestion = ask("What is closure?");

myQuestion(); // What us closure?
```

We usually write a code that return functions or passes them around in callbacks. Now, in the exampe given above, even though the ask function has finished executing, we still have access to question variable.