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