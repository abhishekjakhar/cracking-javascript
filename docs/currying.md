---
id: currying
title: Currying
sidebar_label: Currying
---

## sum(a)(b)

```js
function sum(a) {
    return function(b) {
        return a + b;
    }
}

sum(2)(3)   // 5
```

## sum(a)(b)(c)........(n)

```js
function sum(a) {
    return function(b) {
        if (b) {
            return sum(a + b);
        }
        return a;
    }
}

sum(2)(3)       // 5
sum(2)(3)(5)    // 10
```

## mul(x)(y)(z)

```js
function mul(x) {
    return function(y) {
        return function(z) {
            return x * y * z;
        }
    }
}

mul(2)(3)(4)    // 24
```