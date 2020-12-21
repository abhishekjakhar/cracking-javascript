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

## What is difference between function declaration and function expression?

## What is IIFE, what are benefits of using IIFE pattern?

IIFE stands for immediately invoked function expression.

IIFE is a function expression which is created and called immediately. So, the code inside IIFE executes right away and has it's own private variables.

```js
(function() {
   var name = 'John';
   console.log(name);
})();
```

The benefit of using IIFE is we are not polluting the enclosing scope, because the variables or function defined inside of IIFE cannot be accessed outside the IIFE.

---

## Write the given below code snippet with block instead of IIFE

```js title="IIFE"
var firstName = 'Naruto';

(function() {
   var lastName = 'Uzumaki';
   console.log(lastName);     // Uzumaki
})();

console.log(firstName);       // Naruto
```

```js title="Block"
var firstName = 'Naruto';

{
   let lastName = 'Uzumaki';
   console.log(lastName);     // Uzumaki
}

console.log(firstName);       // Naruto
```


:::note
Blocks are not scope until they have let or const inside of them
:::

## What is hoisting?

The process of assigning variable declarations a default value of undefined during the creation phase is called Hoisting.

```jsx
console.log('firstName: ', firstName)     // firstName: undefined
console.log('lastName: ', lastName)       // lastName: undefined
console.log('printName :', printName)     // printName: ƒ printName() {}

var firstName = 'John'
var lastName = 'Doe'

function printName() {
   console.log(`${firstName} ${lastName}`);
}
```

:::note
Nothing is actually hoisted or move around
:::

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

## Justify the output of code given below?

```js
   const name = 'foo';
   name = 'bar';        // TypeError

   const names = ["foo", "bar"];
   names[0] = "baz";    // Allowed
   console.log(names);  // ["baz", "bar"];
```

When we think about const we're thinking to ourselves, it is a thing that doesn't change, but const is a variable that can't be reassigned, those are two entirely different things.

On line 1 we are declaraing a const "name" that can't be reassigned, so we get an error on line 2. But, when we declare a mutable value like an array on line 4, we are not trying to reassign names on line 5, instead we are mutating the value which is allowed.

What the const keyword is actually saying, from a semantic perspective is, for the rest of this block, I promise I will not get reassigned.

## Difference between TypeError and ReferenceError?

### TypeError

A type error occurs when the variable exists, but the operation you're trying to perform is not legal for the type of value it contains.

### ReferenceError

A reference error occur when you try to us a variable that doesn't exist at all.

## Justify the output of code given below

```js
var firstName = "Naruto";
var lastName = "Uzumaki";

function getName() {
   function getFirstName() {
      return name;
   }

   function getLastName() {
      return lastName;
   }

   return getFirstName() + " " + getLastName();
}

getName();  // Naruto Uzumaki
getFirstName(); // ReferenceError: getFirstName is not defined
```

Even though `getFirstName` exist within the program, it doesn't exist in any scope that we have access to at the moment.

## What is block scoping?

:::note
All curly braces are not scope., they are only a scope if they have a let or a const inside of them. 
:::

## When do you prefer to use var over let?

If you have a variable that belongs to the entire scope of the function, the correct semantic way to signal to your reader is not to use a let at the top level of your function scope, but to use a var.

lets are supposed to signal a very localized usage of a variable, ideally only within a couple of lines of code.