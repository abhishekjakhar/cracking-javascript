---
id: currying
title: Currying
sidebar_label: Currying
---

## What is currying?

Currying is when you break down a function that takes multiple arguments into a series of functions that each take only one argument.

Given below is a function that takes two arguments, a and b, and returns their sum.

```js
function add(a, b) {
  return a + b;
}

add(3, 4);
```

Given below is a curried function that takes one argument, a, and returns a function that takes another argument, b, and that function returns their sum.

```js
function add(a) {
  return function (b) {
    return a + b;
  };
}

add(3)(4);
```

## sum(a)(b)

```js
function sum(a) {
  return function (b) {
    return a + b;
  };
}

sum(2)(3); // 5
```

## sum(a)(b)(c)........(n)

```js
function sum(a) {
  return function (b) {
    if (b) {
      return sum(a + b);
    }
    return a;
  };
}

sum(2)(3); // 5
sum(2)(3)(5); // 10
```

## mul(x)(y)(z)

```js
function mul(x) {
  return function (y) {
    return function (z) {
      return x * y * z;
    };
  };
}

mul(2)(3)(4); // 24
```

## sum(a)(b) and sum(a,b)
