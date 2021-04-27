---
id: callbacks
title: Callbacks
sidebar_label: Callbacks
---

## Why are functions in JavaScript called First-class functions?

Functions in JavaScript are called First-class functions because they can be treated like any other variable.

- can be assigned as a value to a variable

- can be passed as an argument to other functions

- can be returned by another function

## Explain callback and higher order function?

- A function that returns a function or receives a function as an argument is called a Higher-Order Function.

- The function which you are pasing to a higher order function as argument is called callback function.

In the example given below we have created a higher order function called `map` in which we are passing a callback function called `addTwo`

```js
const map = (array, callback) => {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(callback(array[i]));
  }
  return output;
};

const addTwo = (num) => {
  return num + 2;
};

map([1, 2, 3], addTwo); // [3,4,5]
```

## Create following functions

### Create a function called `map` that takes two inputs:

- an array of numbers
- a callback function - a function that is applied to each element of the array

`map` return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array

```js title="map"
function map(array, callback) {
  let mappedArray = [];
  for (let element of array) {
    mappedArray.push(callback(element));
  }
  return mappedArray;
}

const numbers = [2, 4, 8, 16];
const result = map(numbers, (number) => number * 2); // [4, 8, 16, 32];
```

### Array.prototype.map Polyfill

```js title="map"
!(Array.prototype.map) {
  Array.prototype.map = function(callback) {
    let mappedArray = [];
    for (const element of this) {
      mappedArray.push(callback(element));
    }
    return mappedArray;
  }
}

const numbers = [2, 4, 8, 16];
const result = numbers.map(number => number * 2); // [4, 8, 16, 32]
```

### Create a function called `filter` that takes two inputs:

- an array of numbers
- a callback function - a function that is applied to each element of the array

```js title="filter"
function filter(array, callback) {
  let filteredArray = [];
  for (const element of array) {
    if (callback(element)) {
      filteredArray.push(element);
    }
  }
  return filteredArray;
}

const numbers = [2, 4, 8, 16];
const result = filter(numbers, (number) => number > 5); // [8, 16]
```

### Array.prototype.filter Polyfill

```js title="filter"
!(Array.prototype.filter) {
  Array.prototype.filter = function(callback) {
    let filteredArray = [];
    for (const element of this) {
      if (callback(element)) {
        filteredArray.push(element);
      }
    }
    return filteredArray;
  }
}

const numbers = [2, 4, 8, 16];
numbers.filter(number => number < 5); // [2, 4]
```

### Create a function called `forEach` that takes two inputs:

1. an array
2. a callback function - a function that is applied to each element of the array

`forEach` does not return anything

```js title="forEach"
function forEach(array, callback) {
  for (let elem of array) {
    callback(elem);
  }
}

const numbers = [2, 4, 8, 16];
forEach(numbers, (number) => console.log(number));

// 2
// 4
// 8
// 16
```

### Array.prototype.forEach Polyfill

```js title="forEach"
if (!Array.prototype.forEach) {
  Array.prototype.forEach = function (callback) {
    for (const element of this) {
      callback(element);
    }
  };
}
```

### Create a function called `reduce` that takes three input:

1. an array
2. a callback function
3. initial value

`reduce` takes an array and reduces the elements to a single value. For example it can sum all the numbers, multiply them, or any operation that you can put into a function.

```js title="reduce"
function reduce(array, callback, initialValue) {
  for (let elem of array) {
    initialValue = callback(initialValue, elem);
  }
  return initialValue;
}

const reducer = (accumulator, currentValue) => accumulator + currentValue;

reduce([1, 2, 3], reducer, 0); // 6
```

### Array.prototype.reducer Polyfill

```js title="reduce"
!(Array.prototype.reduce) {
  Array.prototype.reduce = function(callback, initialValue) {
    for (const element of this) {
      initialValue = callback(initialValue, element);
    }
    return initialValue;
  }
}
```

## What are arrow functions?

An arrow function is a compact alternative to traditional function.

- they are more concise than the tranditional functions
- they manage 'this' keyword differently

```js
// Traditional Function
function multiplyBy2(input) {
  return input * 2;
}
```

```js
// Remove the word "function" and place arrow between the argument and opening body bracket
const multiplyBy2 = (input) => {
  return input * 2;
};
```

```js
// Remove the body brackets and word "return" -- the return is implied
const multiplyBy2 = (input) => input * 2;
```

```js
// Remove the argument parenthesis
const multiplyBy2 = (input) => input * 2;
```

```js
const output = multiplayBy2(3); // 6
```

## 'this' in arrow functions?

## What is callback hell?

In JavaScript the only way to delay a computation so that it runs after the asynchronous call completes is to put the delayed code inside a callback function.

```js
getData(callbackFunction(x) {
    getMoreData(anotherCallbackFunction(y) {
        updateUI();
    })
})
```

Now, in the example given above we make a asynchronous request on click of button. If request succeeds, we make a second request. If second request succeeds, we update our UI by using the data which we are getting from both the requests. This pattern leads us to the nested callbacks, which is called callback hell.

## Callback hell example

Callback hell has nothing to do with the nesting/indentation. It's a far deeper problem than that.

```js
listen("click", function handler(evt) {
  setTimeout(function request() {
    ajax("url", function response(text) {
      if (text == "hello") {
        handler();
      } else if (text == "world") {
        request();
      }
    });
  }, 500);
});
```

```js
listen("click", handler);

function handler() {
  setTimeout(request, 500);
}

function request() {
  ajax("url", response);
}

function response(text) {
  if (text == "hello") {
    handler();
  } else if (text == "world") {
    request();
  }
}
```

## What are drawbacks of using callback?

1. Callback hell
2. Inversion of control - When you write a callback, you're assuming that the program you're giving the callback to is reponsible and will call it when it's supposed to. You're essentially inverting the the control of your program over to another program. For many third-party libraries, callback functions are the interface for how you interact with them. It’s probable that a third party library could, whether on purpose or accidentally, break how they interact with your callback.

```js
function criticalFunction() {
  // It's critical that this function
  // gets called and with the correct arguments
}

thirdPartyLib(criticalFunction);
```

In the example given above you're not the one calling `criticalFunction`, you have 0 control over when and with what arguments it's invoked.

## What is inversion of control?

There's part of our program that we're in control of executing. There's another portion of our program that we're not in control of executing. The way we express that is to take the first half of our program that executes now and the second half of our program that executes in the callback, and when we give our callback to somebody else, that what's invert the control and it puts them in control of when and what manner to execute the second half of our program.

In the example given below line 1 and 2 represents the first half of our program, and line 3 and 4 represents the second half of our program. Here, we are passing our second half of program to setTimeout which is a built in JavaScript engine facility and we don't have trust issues with setTimeout. But, if we are passing our second half of program to some another third party utility we don't know how they will run our callback and we can run into some trouble.

```js
// line 1
setTimeout(function () {
  // line 3
  // line 4
});
// line 2
```

## Can callbacks be synchronous?

Yes, callbacks can be synchronous

```js
const gods = ["Apollo", "Artemis", "Ares", "Zeus"];

gods.forEach(function (eachName, index) {
  console.log(index + ". " + eachName);
});
```

In this example given above we loop through an array of Greek gods and print the index numbers and values to the console. The expected parameter of forEach() is a callback function, which itself takes two parameters, a reference to the array name and index values. However, it doesn't wait for anything — it runs immediately.

## What is functional programming?

Functional programming is a declarative programming paradigm or pattern on how we build our applications with funtions using expressions that calculates a value without mutating or changing the arguments that are passed to it.

## Why functions are called first class objects?

In JavaScript, functions are first-class objects, because they can be treated like any other variable.

- They can be assigned to variables.
- They can be properties of an object called methods.
- They can be item in array.
- They can be passed as arguments to a function.
- They can be returned as values of a function.

## What is arguments object?

The arguments object is a collection of parameter values pass in a function. It's an Array-like object because it has a length property and we can access individual values using array indexing notation arguments[1] but it does not have the built-in methods in an array forEach, reduce, filter and map.

It helps us know the number of arguments pass in a function.

We can convert the arguments object into an array using the Array.prototype.slice.
