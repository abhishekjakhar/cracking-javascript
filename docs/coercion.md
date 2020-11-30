---
id: coercion
title: Coercion
sidebar_label: Coercion
---

## Why does 3 > 2 > 1 return false while 1 < 2 < 3 return true?

```js title="3 > 2 > 1"
(3 > 2) > 1
(true) > 1
1 > 1       // false  
```

```js title="1 < 2 < 3"
(1 < 2) < 3
(true) < 3
1 < 3       // true
```

:::note
When no-numeric is being used with the less than or greater than operator, the JavaScript will try to convert it into a number<br/>
```js
Number(true)    // 1
Number(false)   // 0
```
:::

---

## What is boxing?

Boxing is a form of implicit coercion. It says that you have something which is not an object and you're trying to use it as if it is an object. The JavaScript will go ahead and make it into an object for you. This is the reason we are able to access properties and methods on primitives.

```jsx
const name = 'foo'; // name is having a string value which is of type primitive
name.length // 3
name.toUpperCase() // FOO
```