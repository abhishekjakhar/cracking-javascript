---
id: miscellaneous
title: Miscellaneous
sidebar_label: Miscellaneous
---

## Why JavaScript is a “multi-paradigm” language?

JavaScript supports both object-oriented programming with prototypal inheritance as well as functional programming.

## Implement Custom Event Emitter

```js
function Emitter() {
  this.listeners = {};
}

Emitter.prototype.subscribe = function (eventName, callback) {
  if (!this.listeners[eventName]) {
    this.listeners[eventName] = [];
  }
  this.listeners[eventName].push(callback);

  return {
    release: () => {
      this.listeners[eventName] = this.listeners[eventName].filter(
        (cb) => cb !== callback
      );
    },
  };
};

Emitter.prototype.emit = function (eventName, ...args) {
  if (this.listeners[eventName]) {
    this.listeners[eventName].forEach((callback) => callback(...args));
  }
};

const emitter = new Emitter();

const sub = emitter.subscribe("click", () => console.log("Callback 1"));
const sub2 = emitter.subscribe("click", () => console.log("Callback 2"));

emitter.emit("click", 1, 2);
```

## Implement Infinite Scroll Plugin in Vanilla JS

```js
window.InfiniteScroll = (function () {
  let elemStr,
    queryElem,
    elementToObserve,
    options = {},
    page,
    isApiCallInProgress = false,
    listeners = {};

  function _dispatchEvent(type, data) {
    const cb = listeners[type];
    cb(data);
  }

  function _loadPage(observer) {
    const { url, fetchOptions = {}, endOfResultsKey } = options;
    let apiUrl = "";
    if (url.indexOf("{#}") > -1) {
      apiUrl = url.replace("{#}", page);
    }

    isApiCallInProgress = true;
    fetch(apiUrl, fetchOptions)
      .then((res) => res.json())
      .then((data) => {
        isApiCallInProgress = false;
        const isLastPage = data[endOfResultsKey];
        const response = {
          data,
          page,
          isLastPage,
        };
        _dispatchEvent("load", response);
        page++;
        if (isLastPage) {
          observer.unobserve(elementToObserve);
        }
      })
      .catch((err) => {
        isApiCallInProgress = false;
        observer.unobserve(elementToObserve);
        _dispatchEvent("error", err);
      });
  }

  function _init() {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (isApiCallInProgress) return;
          _loadPage(observer);
        }
      });
    });
    elementToObserve = document.querySelector(`${elemStr} + .eleToObserve`);
    observer.observe(elementToObserve);
  }

  function _on(type, cb) {
    listeners[type] = cb;
  }

  function _createInfiniteScroll(element, config = {}) {
    console.log(this);
    queryElem = document.querySelector(element);
    elemStr = element;
    options = config;
    const { initialPage = 1 } = config;
    page = initialPage;
    if (!queryElem) {
      console.error("Bad element for InfiniteScroll: " + queryElem);
      return;
    }
    queryElem.insertAdjacentHTML(
      "afterend",
      `<div class="eleToObserve"></div>`
    );
    _init();
  }

  return {
    createInfiniteScroll: _createInfiniteScroll,
    on: _on,
  };
})();
```
