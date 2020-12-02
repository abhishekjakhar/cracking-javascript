---
id: scope
title: Scope
sidebar_label: Scope
---

## What is global execution context?

The first execution context which gets created when the JavaScript engine runs your code is called <br/> "Global Execution Context".

---

## What is value of "this" in global execution context?

"this" will reference the global object which will be the window if you're running JavaScript in the browser. Initially this execution context will consist of two things - a **global object** and a variable called **this**.

```js
this === window; //true
```

---

## What is IIFE, what are benefits of using IIFE pattern?

IIFE stands for immediately invoked function expression.

```js
(function () {
  console.log("IIFE");
})();
```

---

## What is hoisting?

https://ui.dev/ultimate-guide-to-execution-contexts-hoisting-scopes-and-closures-in-javascript/

---

## var vs let vs const?

### var

1. function scoped
2. undefined when accessing a variable before it's declared

   ```js
   console.log(a); // undefined
   var a = 1;
   ```

### let

1. block scoped
2. ReferenceError when accessing a variable before it's declared

   ```js
   console.log(b); // ReferenceError: b is not defined
   let b = 2;
   ```

### const

1. block scoped
2. ReferenceError when accessing a variable before it's declared

   ```js
   console.log(c); // ReferenceError: c is not defined
   let c = 3;
   ```

3. can't be reassigned

   ```js
   const c = 3;
   c = 4; // TypeError: Assignment to constant variable
   ```

---

## Difference between TypeError and ReferenceError?

### ReferenceError

A reference error occur when you try to us a variable that doesn't exist at all.

### TypeError

A type error occurs when the variable exists, but the operation you're trying to perform is not legal for the type of value it contains.