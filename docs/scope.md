---
id: scope
title: Scope
sidebar_label: Scope
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
    c = 4;  // TypeError: Assignment to constant variable
    ```