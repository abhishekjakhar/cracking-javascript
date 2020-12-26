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

We usually write code that return functions or passes them around in callbacks. Now, in the exampe given above, even though the ask function has finished executing, we still have access to question variable.

## Explain output

```jsx
var teacher = "Kyle";

var myTeacher = function() {
  console.log(teacher);
}

teacher = "Suzy";

myTeacher();  // ??
```

The function will print "Suzy" because we did not close over the value Kyle, instead we closed over the variable teacher. When we will execute the function myTeacher we will access the value of teacher variable, which will be "Kyle" at the time of myTeacher function execution.

## Explain output and how would you fix this?

```jsx
for (var i = 1; i <= 3; i++) {
  setTimeout(function() {
    console.log(`i: ${i}`);
  }, 1000);
}
// i: 4
// i: 4
// i: 4
```

In the example given above, the function which is being created in each iteration, it has the appearance that what it's doing is closing over the i value in each iteration. So, we're expecting it to print out `i: 1, i: 2, i: 3`, but when we run it, it prints out `i: 4, i: 4, i: 4`. Because, there is only one `i` variable and we have three functions. If we want to have three separate values we would need three variables. But, we only have one i variable and it can only have one value. In this case it will have the value that occurs at the end of the loop which is the value 4.

:::note
Closure is not capturing a value, it is preserving access to a variable.
:::

If we want to solve this problem, we need to create more than one variable with the same name, we need to make new scopes. With the help of ES6 blockscoping, we can add a block scope declaration in the iteration.

```jsx
for (var i = 1; i <=3; i++) {
  let j = i;
  setTimeout(function() {
    console.log(`j: ${j}`);
  }, 1000);
}
// j: 1
// j: 2
// j: 3
```

Now, in the example given above `let j = i` is going to run every time the for loop iterates, it will create a whole new `j` in that whole new iteration of the loop. When we close over variable `j`, we are closing over a whole new `j`. There are three seprate `j` therefore we get the values 1, 2 and 3 in them.

```jsx
for (let i = 1; i <=3; i++) {
  setTimeout(function() {
    console.log(`i: ${i}`);
  }, 1000);
}
// i: 1
// i: 2
// i: 3
```

If we use `let` on for loop JavaScript automatically create a new `i` for each iteration.