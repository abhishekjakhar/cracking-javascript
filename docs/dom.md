---
id: dom
title: DOM
sidebar_label: DOM
---

## What is data structure of the DOM?

In the DOM, documents have a logical structure which is like a tree.

## async vs defer?

### defer

The `defer` attribute tells the browser not to wait for the script. Instead, the browser will continue to process the HTML, build DOM. The script loads in the background, and then runs when the DOM is fully built.

```js
<p>...content before script...</p>

<script defer src="https://javascript.info/article/script-async-defer/long.js?speed=1"></script>

<!-- visible immediately -->
<p>...content after script...</p>
```

- Scripts with defer never blocks the page.
- Scripts with defer always execute when the DOM is ready (but before DOMContentLoaded event).

Deferred scripts keep their relative order, just like regular scripts. That may be important for cases when we need to load a JavaScript library and then a script that depends on it.

### async

The `async` attribute is somewhat like `defer`. It also makes the script non blocking. But it has important differences in the behaviour.

The async attribute means the script is completely independent. async scripts load in the background and run when ready. The DOM and other scripts don’t wait for them, and they don’t wait for anything. A fully independent script that runs when loaded.

- The page content shows up immediately: async doesn’t block it.
- DOMContentLoaded may happen both before and after async, no guarantees here.
- A smaller script small.js goes second, but probably loads before long.js, so small.js runs first. Although, it might be that long.js loads first, if cached, then it runs first. In other words, async scripts run in the “load-first” order.
