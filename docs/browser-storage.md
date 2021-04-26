---
id: browser-storage
title: Browser Storage
sidebar_label: Browser Storage
---

## Cookie

An HTTP cookie is a small peice of data that a server sends to the user's web browser. The browser may store it and send it back with later requests to the same server. Typically, it is used to tell if two requests came from the same server browser - keeping a user logged-in.

### Cookies are mainly used for three purposes:

1. Session management - Logins, game scores, shopping carts

2. Personalization - User preferences and themes

3. Tracking - Analyzing user behaviour

## localStorage & sessionStorage

Web storage objects localStorage and sessionStorage allow to save key/value pairs in the browser.

Data survives a page refresh (for sessionStorage) and even a full browser restart (for localStorage).

```js
// The syntax for saving the localStorage item
localStorage.setItem("myDog", "Ladoo");

// The syntax for reading the localStorage item
const dog = localStorage.getItem("myDog");

// The syntax for removing the localStorage item
localStorage.removeItem("myDog");

// The syntax for removing all the localStorage items
localStorage.clear();
```

```js
// Save data to sessionStorage
sessionStorage.setItem("myDog", "Ladoo");

// Get saved data from sessionStorage
const dog = sessionStorage.getItem("myDog");

// Remove saved data from sessionStorage
sessionStorage.removeItem("myDog");

// Remove all saved data from sessionStorage
sessionStorage.clear();
```

## We have cookies then why additional storage objects?

- Unlike cookies, web storage objects are not sent to the server with each request. Because of that, we can store much more.
- Unlike cookies, the server can't manipulate storage objects via HTTP header.

## localStorage vs sessionStorage

- localStorage data has no expiration time
- Survives browser restart
- Shared between all tabs and windows with the same origin

- sessionStorage data gets cleared when the page session ends
- Survives page refresh but not tab close
- Visible within the browser tab, including iframes from the same origin
