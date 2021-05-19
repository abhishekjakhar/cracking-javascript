---
id: performance
title: Performance
sidebar_label: Performance
---

## What is a web worker? When would you use one?

Web worker is a JavaScript file that runs on a separate thread from the web page thread. So, we are having a JavaScript which loads on our web page and then we ca have a separate JavaScript file which acts as a separate program, running in a background thread.

If we run a bunch of heavy processing in the code that is on our web page, we know that we're not gonna be able to scroll around and click on buttons while JavaScript is running because web page thread is busy in heavy processing. But, we can offload the heavy processing work on to a web worker, which will not affect any of the behaviour on our web page.

## How to create a web worker?

```jsx
const worker = new Worker("/js/worker.js");
```

## Explain Debouncing

Debouncing enforces that a function not be called again until certain amount of time has passed without it being called.

Let's consider, when you type into search input, there is a delay before the results appear.
The debounce function delays the processing of the keyup event until user has stopped typing for a predetermined amount of time.
This way we prevent the browser to process event on every keystroke, also we don't spam the API to get the results, basically we have grouped multiple sequential calls into single one.

If we would have not debounced the function which fire on every keystroke we would have end up making call to API on every keystroke.

## Implement Debounce

- We are passing a function (fn) and a delay (delay) into the debounce function.
- timeout is the variable which we will use to keep track of the amount of time.

If we are invoking function for the first time, our function will execute at the end of our delay. Now, if we invoke our function and invoke again before the end of our delay, the delay restarts and execution of our function fn (gets) postponed, this process keeps happening until we stop firing the function and our delay gets completed.

```js
function debounce(fn, delay) {
  let timeout;

  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      return fn.apply(this, arguments);
    }, delay);
  };
}
```

## Explain Throttling

Throttling enforces a maximum number of times a function can be called over time.

Let's consider, we have a button in our application that when clicked, makes an API call.
The throttle function can restrict the amount of API call.
The user may be clicking 10 times a second but we only fire the handler once per second, basically we are not allowing our function to execute more than once every X milliseconds.

If we have not throttled the function which fire on every button click we would have end up making call to API on every click.

## Implement Throttle

- We are passing a function(fn) and a limit (limit) into the throttle function
- isThrottled is the variable which we use to keep track of if throttle period has passed or not

The first call to our function fn will execute and then we will set the isThrottled to true, also the isThrottled will become false again when our limit period has passed. Now, if throttle is true and limit period has not passed, our function fn during this period will not fire. Once it is passed, the next invocation will fire and the process will repeat.

```jsx
function throttle(fn, limit) {
  let isThrottled;
  return function () {
    if (!isThrottled) {
      fn.apply(this, arguments);
      isThrottled = true;
      setTimeout(() => {
        isThrottled = false;
      }, limit);
    }
  };
}
```

## Explain requestAnimationFrame

## Move element left to right by any given distance smoothly

## What is memoization?

Memoization is an optimization technique that speeds up application by storing the results of expensive function calls in a cache and returning the cached result when the expensive function is called again with same inputs. We are not redoing any calculations because we are already having the result.

## Write your own memoize function?

```js
function memoize(fn) {
  let cache = {};
  return function (n) {
    if (cache[n]) {
      return cache[n];
    } else {
      let result = fn(n);
      cache[n] = result;
      return result;
    }
  };
}
```

## When to memoize a function?

- Expensive function calls i.e functions that carry out heavy computation.
- For recursive functions with recurring input values.
- For pure functions i.e functions that return the same output each time they are called with a same input.

## What is cache?

A cache is a temporary data store that holds data so that future request for that same data can be served faster.

## What do you mean by expensive function call?

Expensive function call is a function call that that consumes lot of time and memory during execution due to heavy computation.

:::note
In the context of computer programs, the two major resources we have are time and memory.
:::

## How can you avoid reflow?

- Change classes at the lowest level of the DOM tree.
- Avoid repeatedly modifying inline styles.
- Minimize CSS rules, and remove unused CSS rules.
- Avoid unnecessary complex CSS selectors - descendant selectors in particular - which require more CPU power to do selector matching.
- Trade smoothness for speed if you're doing an animation in JavaScript.
- Avoid table layouts.
- Batch DOM manipulations.
- Debounce window size events.

## What is layout thrashing?

Layout thrashing occurs when JavaScript violently writes, then read, from the DOM, multiple times causing document reflows.

## How to improve website performance?

### Optimize your images

- Choose the right image format
- Choose the correct level of compression
- Use Imagemin to compress images
- Replace animated GIFs with video for faster page loads
- Serve responsive images
- Serve images with correct dimensions
- Use WebP images
- Use image CDNs to optimize images

### Lazy-load images and video

- Use lazy-loading to improve loading speed
- Lazy-loading images
- Lazy-loading video

### Optimize your JavaScript

- Reduce JavaScript payloads with code splitting
- Remove unused code
- Minify and compress network payloads
- Serve mordern code to mordern browsers for faster page loads
- Publish, ship and install modern JavaScript for faster applications

### Optimize your resource delivery

- CDNs
- Prioritize resources
- Preload critical assets to improve loading speed
- Prefetch resources to speed up future navigations
- Fast playback with audio and video preload

### Optimize your CSS

- Defer non-critical CSS
- Minify CSS
- Extract critical CSS
- Optimize CSS background images with media queries

### Optimize your third-party resources

- Third-party JavaScript performance
- Identify slow third-party JavaScript
- Efficiently load third-party JavaScript

### Optimize WebFonts

- Avoid invisible text during font loading
- Optimize WebFont loading and rendering
- Reduce WebFont Size

### Optimize for network quality

- Adaptive serving based on network quality

## Why is performance important?

- Google says so - Starting from 2021 Google will rank your website based on performance score.
- Angry and frustrated users don't sit around long - because you're taking too long to show them their stuff

## Psychology of Waiting

- People want to start their activity
- Bored waits feel slower
- Anxious waits feel slower
- Unexplained waits feel slower
- Uncertain waits feel slower
- People will wait for value

## What are web vitals?

Rather than one metric that measures from start of the page to the end of the page. We have four different metrics that measure four different aspects of performance, and these are called core web vitals.

- FCP: First Contentful Paint
- LCP: Largest Contentful Paint
- CLS: Cumulative Layout Shift
- FID: First Input Delay

These metrics are alive and impacting your site today.

## FCP

This is the time from the start, when the user first clicks the link or enters the URL, until the first meaningful content enters the page. It's something was rendered.

The time until the user sees an indication that the page is loading. (Responding Quick)

## LCP

Throughout the loading cycle, different parts of your screen will draw, and we can measure how much of the screen has been drawn. The time at which the largest percentage of the screen was rendered, is the largest contentful paint.

The time until user sees most of the page and believes it is (almost) ready. (Get To The Point)

## CLS

You come to a page and you go to click a button, but just as you're about to click a button. Some reallby obnoxious thing loads in asynchronously and pushes the content down and you almost just click on an ad. This movement is called the layout shift, and the cumulative layout shift is the measurement of all the times that this happens during the lifetime of your page.

The movement distance and impact of page elements during the entire lifetime of the document the user sees. (Don't move stuff)

## FID

Let's say you see a web page load and you think it's done, the largest contentful paint has happened, and you're ready to start doing things. For example, a website has loaded and you are going to click on an article. Well, in order to improve their scores, they might have deferred a bunch of their work to load later after the content has happened. But if they deferred so much content, so much JavaScript still needs to be run, that the browser is busy doing that when the user first clicks. There's gonna be a delay, between the time when the page looks ready, and the user interacts with it, until the time the first click handler can fire.

The browser time delay between the user's first click and execution of application code. (Don't Load Too Much)

## What is Beacon API?

The Beacon API is used to send an asynchronous and non-blocking request to a web server. The request does not expect a response. Unlike requests made using XMLHttpRequest or the Fetch API, the browser guarantees to initiate beacon requests before the page is unloaded and to run them to completion.

- The data is sent Asynchronously
- The data is sent reliabily
- It doesn't impact the loading of next page

[sendBeacon](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/sendBeacon)

```js
navigator.sendBeacon(url);
navigator.sendBeacon(url, data);
```

## Improving FCP

### Quick Servers

- Sized Correctly - You need to make sure that you have enough overhead in the machines that you've selected to deliver the content that you need.
- Minimal Processing - Minimize the processing you need to do in order to fulfill the request.
- Network Bandwidth - The bandwidth you have to your servers need to be big enough in order to fulfill all the requests that you have coming in at once.

### Deliver Small Documents

- Content Size - You need to deliver a smaller payload as you can and still get the effectiveness that you need.
- Compression - Even if you're sending a 100K HTML document, how you compress that document over the wire can greatly improve that speed. (Gzip/Brotli)

### Short Cloud Network Hops

- CDN - You need to use CDN to reduce the distance, when a user makes a request, the CDN will pick it up. They will call your stuff if they don't already have a copy, and they will cache a copy of your response and serve it to every single user who might ask for it. Basically, we are not processing each request across the entire network.

## Improving LCP

### Defer Resources Until Later

- async/defer
- lazy load images

### Optimize Images

- responsive images using srcset & sizes attribute
- remove unecessary attributes in images using imagemin or other tools to decrease the size of image

### Reduce Request Overhead

- Reduce Overhead - With the help of HTTP/2 we can reuse connections, we don't have to do TCP connection & SSL handshake every time, we can do it once and ask for all the documents together
- Caching - Hude benefits on returning requests
- Preloading - rel="preconnect", rel="preload"

## Difference between preload and preconnect
