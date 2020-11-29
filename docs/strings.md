---
id: strings
title: String
sidebar_label: Strings
---

## Reverse a String

```js
    function reverseString(str) {
        return str.split(' ').reverse(' ').join(' ');
    }
```

----

## Remove Duplicate String

```js
    function removeDuplicate(str) {
        const arr = str.split(' ');

        const set = new Set(arr);
        const newString = [...set].join(' ');

        return newString;
    }
```