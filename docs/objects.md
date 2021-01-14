---
id: objects
title: Objects
sidebar_label: Objects
---

## What is 'this' keyword in JavaScript?

The 'this' keyword allows you to reuse functions with different contexts.<br/>
If you look at a function that has a 'this' keyword in it, it is assigned based upon how the function is called.

## Explain output

```js
const user = {
  name: "Abhishek",
  greet() {
    alert(`Heyo, my name is ${this.name}`);
  },
  mother: {
    name: "Sunita",
    greet() {
      alert(`Hello, my name is ${this.name}`);
    },
  },
};

user.greet(); // Heyo, my name is Abhishek
user.mother.greet(); // Hello, my name is Sunita
```

The 'this' keyword is gonna end up pointing at the object that is used to invoke it, which in the case of `user.greet()` is user object and in the case of `user.mother.greet()` is mother object.

:::note
Whenever we’re trying to figure out what the this keyword is referencing we need to look to the invocation and see what’s to the “left of the dot”. In the first invocation, user is to the left of the dot which means this is going to reference user. In the second invocation, mother is to the left of the dot which means this is going to reference mother.
:::

## Explain call, bind and apply with examples

### call()

`call` is a method on every function that allows you to invoke the function specifying in what context the function wil be invoked.
The first argument you pass into `call()` will be the context in which function is invoked.

```js
const user = {
  name: "Abhishek",
};

function greet() {
  alert(`Heyo, my name is ${this.name}`);
}

greet.call(user); // Heyo, my name is Abhishek
```

### apply()

`apply` is exact same thing as call, but instead of passing in arguments one by one, you can pass in a single array and it will spread each element in the array out for you as arguments to function.

```js
const languages = ["HTML", "CSS", "JavaScript"];
const user = {
  name: "Abhishek",
};

function greet(l1, l2, l3) {
  alert(`Heyo, my name is ${this.name} and I know ${l1}, ${l2} and ${l3}`);
}

// greet.call(user, languages[0], languages[1], languages[2]);
greet.apply(user, languages); // Heyo, my name is Abhishek and I know HTML, CSS and JavaScript
```

### bind()

`bind` is the exact same as `call` but instead of immediately invoking the function, it will return a new function that you can invoke at a later time.

```js
const languages = ["HTML", "CSS", "JavaScript"];
const user = {
  name: "Abhishek",
};

function greet(l1, l2, l3) {
  alert(`Heyo, my name is ${this.name} and I know ${l1}, ${l2} and ${l3}`);
}

const newGreetFn = greet.bind(user, languages[0], languages[1], languages[2]);
newGreetFn(); // Heyo, my name is Abhishek and I know HTML, CSS and JavaScript
```

## How does 'this' keyword behaves differently in arrow functions?

An arrow function does not define a 'this' keyword of it's own, which means if you put a 'this' keyword inside of an arrow function, it's gonna behave exactly like any other variable, which means it's going to lexically resolve to some enclosing scope that does define 'this' key word.

## Exlain output

```jsx
const a = {
  a: "a",
};

const obj = {
  getThis1: () => this,
  getThis2() {
    return this;
  },
};

obj.getThis3 = obj.getThis1.bind(obj);
obj.getThis4 = obj.getThis2.bind(obj);

obj.getThis1(); // ??
obj.getThis1.call(a); // ??
obj.getThis2(); // ??
obj.getThis2.call(a); // ??
obj.getThis3(); // ??
obj.getThis3.call(a); // ??
obj.getThis4(); // ??
obj.getThis4.call(a); // ??
```

- `window` - An arrow function does not define a `this` keyword of it's own, which means if you put a `this` keyword inside of an arrow function, it's gonna behave exactly like any other variable, which means it's going to lexically resolve to some enclosing scope that does define `this` key word. In our case the enclosing scope would be global scope, in which `this` refers to the global object, which will be window object.
- `window` object - For arrow functions, this can't be reassigned, even with `.call()` or `.bind()`. It will also be `window` object for the same reason given above.
- `obj` - Whenever we’re trying to figure out what the this keyword is referencing we need to look to the invocation and see what’s to the “left of the dot”. In our invocation `obj.getThis2()`, `obj` is to the left of the dot which means `this` is going to reference `obj` object.
- `a` - `call()` is a method on every function that allows you to invoke the function specifying in what context the function wil be invoked.
  The first argument you pass into `call()` will be the context in which function is invoked. In our case we are passing `a` as an argument to `call()` method, so the `this` is going to reference `a` object.
- `window` - We're are trying to bind an arrow function, which we've already discussed will not work. We will get `window` object.
- `window` - We're are trying to bind an arrow function, which we've already discussed will not work. We will get `window` object.
- `obj` - We can bind regular methods, so it will return `obj`, as expected.
- `obj` - It has already been bound with `obj.getThis2.bind(obj);` so `obj.getThis4.call(a)` respects the first binding and returns `obj` instead of `a`.

## What are reference values in JavaScript?

anything that is "typeof" "object" is a reference value in JavaScript

- objects
- arrays
- functions

## Explain output

```js
let ladoo = {
  type: "Dog",
  name: "Ladoo",
};

let kali = ladoo;

kali.name = "Kali";

console.log(ladoo.name); // kali
console.log(kali.name); // kali
```

We created a variable called `ladoo` and assign it to an object which has two properties, `type` and `name`. Then we created a new variable called `kali` and assign it, whatever the in-memory value of `ladoo` is, which is the reference to the spot in memory where the `ladoo` object is located. Now, both `ladoo` and `kali` are referencing the same spot in memory. What that means is when we modify `kali.name`, it's as if we also modified `laddo.name` because they are referencing same spot in memory. That's why when we log `ladoo.name` and `kali.name` we get the same value, `kali`.

## Explain output

```js
let a = {
  firstName: "Naruto",
  lastName: "Uzumaki",
};

let b = {
  firstName: "Naruto",
  lastName: "Uzumaki",
};

a == b; // ?
a === b; // ?
```

In the example given above a and b are reference values, in JavaScript reference values are compared by their reference, or their location in memory. Now, even though a and b are having same properties and values, they're occupying different locations in memory.

```js
a == b; // false
a === b; // false
```

## What is shallow equality?

In shallow equality check of objects we get the list of properties of both Objects, then we check the propertie's values for equality.

## Write a function to perform shallow equality check on two objects

```js
function shallowEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (const key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}
```

## When does shallow equality fail?

If the properties values of objects are primitive values, then shallow equality works very well. But, if the properties values are objects, then shallow equality check fail because nested objects are considered to have diferent location in memory. In the example given below the nested objects `dog1.features` and `dog2.features` are having different location in memory. Thus the shallow equality considers that `dog1.features` and `dog2.features` are different values.

```js
const dog1 = {
  name: "Ladoo",
  features: {
    color: "White",
  },
};

const dog2 = {
  name: "Ladoo",
  features: {
    color: "White",
  },
};

shallowEqual(dog1, dog2); // false
```

## What is deep equality?

The deep equality is similar to the shallow equality, but there is one difference. During the shallow equality check, if the compared value of properties are objects, a recursive shallow equality check is performed on these nested objects.

## Write a function to perform deep equality check on two objects

```js
function deepEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (const key of keys1) {
    const val1 = obj1[key];
    const val2 = obj2[key];
    const areObjects = isObject(val1) && isObject(val2);
    if (
      (areObjects && !deepEqual(val1, val2)) ||
      (!areObjects && val1 !== val2)
    ) {
      return false;
    }
  }

  return true;
}
```
