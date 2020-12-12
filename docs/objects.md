---
id: objects
title: Objects
sidebar_label: Objects
---

## What is 'this' keyword in JavaScript?

The 'this' keyword allows you to reuse functions with different contexts.<br/>
If you look at a function that has a 'this' keyword in it, it is assigned based upon how the function is called.


## Explain output of code given below

```js
    const user = {
        name: 'Abhishek',
        greet() {
            alert(`Heyo, my name is ${this.name}`)
        },
        mother: {
            name: 'Sunita',
            greet() {
                alert(`Hello, my name is ${this.name}`)
            }
        }
    }

    user.greet();           // Heyo, my name is Abhishek
    user.mother.greet();    // Hello, my name is Sunita
```

The 'this' keyword is gonna end up pointing at the object that is used to invoke it, which in the case of `user.greet()` is user object and in the case of `user.mother.greet()` is mother object.

:::note
Whenever we’re trying to figure out what the this keyword is referencing we need to look to the invocation and see what’s to the “left of the dot”. In the first invocation, user is to the left of the dot which means this is going to reference user. In the second invocation, mother is to the left of the dot which means this is going to reference mother.
:::

## Explain call, bind and apply with example?

### call()

`call` is a method on every function that allows you to invoke the function specifying in what context the function wil be invoked. 
The first argument you pass into `call()` will be the context in which function is invoked.

```js
    const user = {
     name: 'Abhishek'   
    }

    function greet() {
        alert(`Heyo, my name is ${this.name}`)
    }

    greet.call(user);   // Heyo, my name is Abhishek
```

### apply()

`apply` is exact same thing as call, but instead of passing in arguments one by one, you can pass in a single array and it will spread each element in the array out for you as arguments to function.

```js
    const languages = ['HTML', 'CSS', 'JavaScript'];
    const user = {
        name: 'Abhishek'
    }

    function greet(l1, l2, l3) {
        alert(`Heyo, my name is ${this.name} and I know ${l1}, ${l2} and ${l3}`)
    }

    // greet.call(user, languages[0], languages[1], languages[2]);
    greet.apply(user, languages);   // Heyo, my name is Abhishek and I know HTML, CSS and JavaScript
```

### bind()

`bind` is the exact same as `call` but instead of immediately invoking the function, it will return a new function that you can invoke at a later time.

```js
    const languages = ['HTML', 'CSS', 'JavaScript'];
    const user = {
        name: 'Abhishek'
    }

    function greet(l1, l2, l3) {
        alert(`Heyo, my name is ${this.name} and I know ${l1}, ${l2} and ${l3}`)
    }

    const newGreetFn = greet.bind(user, languages[0], languages[1], languages[2]);
    newGreetFn();  // Heyo, my name is Abhishek and I know HTML, CSS and JavaScript
```