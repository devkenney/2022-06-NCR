# Table of Contents:

- [Exercise 1](#exercise-1-write-a-function-declaration)
    - [Using + Signs](#using--signs)
    - [Using Template Literals](#using-template-literals)
- [Exercise 2](#exercise-2-write-a-function-expression)
    - [Using ES5 Syntax](#using-es5-syntax)
    - [Using ES6 Syntax](#using-es6-syntax)
- [Loose vs. Strict Equality](#loose-vs-strict-equality)
- [Scope](#scope)
- [Lab](#lab)
    - [Using For Of Loop](#using-for-of-loop)
    - [Using a Normal For Loop](#using-a-normal-for-loop)
    - [Using a ForEach Loop](#using-a-for-each-loop)

# **EXERCISE 1**: Write a Function Declaration

*Write a function named computeArea using the function declaration approach.*

- It will have two parameters: width & height.

- It will compute the area of a rectangle (width * height) and return a string in the following form:

- The area of a rectangle with a width of _ and a height of _ is ___ square units.

- Invoke the function to test it.

### Using "+" signs:

```
function computeArea (width, height) {
    return ("The area of a rectangle with a width of " + width + " and a height of " + height + " is " + width * height + " square units.")
}

console.log(computeArea(3, 5))
```
Output:

`The area of a rectangle with a width of 3 and a height of 5 is 15 square units.`

### Using template literals:

```
function computeArea (width, height) {
    return(`The area of a rectangle with a width of ${width} and a height of ${height} is ${width * height} square units.`) // returns a string using template literals
}

console.log(computeArea(5, 5))
```

### Output: 

`The area of a rectangle with a width of 5 and a height of 5 is 25 square units.`

---

# **EXERCISE 2**: Write a Function Expression
- Write a function named planetHasWater using the function expression syntax.

- It will have one parameter: planet.

- Return true if the planet argument is either "Earth" or "Mars", otherwise return false.

- Bonus points if you ensure the function will work regardless of the casing of the planetbeing passed in ('earth', 'MARS', etc.).

- Invoke the function a couple of times to test it!

---

### Using ES5 syntax:

```
const planetHasWater = function (planet) {
    if (planet === 'Earth' || planet === 'Mars) {
        return true
    } else {
        return false
    }
}

console.log(planetHasWater('Earth'))
```

#### Output:

`true`

---

### Using ES6 syntax:

```
const planetHasWater = (planet) => {
    if (planet === 'Earth' || planet === 'Mars') {
        return true
    } else {
        return false
    }
}

console.log(planetHasWater('Neptune'))
```

#### Output:
`false`

---

# Loose vs. Strict Equality

Strict equality (`===`) in JavaScript checks for both *value* and *data type* when determining equality. Loose equality (`==`) in JavaScript checks for only *value* when determining equality.

#### Example:

```
if (0 === "0") {
    console.log('This will not run!')
} else if (0 == "0") {
    console.log('This will run!')
}
```

#### Output:
`This will run!`

---

# Scope

Scope is a little bit of a weird concept in JavaScript. Anything within curly braces that are a part of a function are within that function's **scope**. Things that are **declered** within a function's scope cannot be taken out of it. However, things that are declared outside of that same scope can be used inside of it.

#### Example:

```
let a = 4; // sets a to 4

const foo = (x) => { // function foo with parameter x
    let b = a * 4; // creates a new variable "b" which is equal to "a" from line 71 times 4

    const bar = (y) => { // function with parameter y
        let c = y * b; // creates a new variable "c" which is equal to parameter "y" times "b" from parent function (line 74)
        return c; // returns variable "c" from line 78
    }

    return bar(b); // calls function "bar" with variable "b" from line 74
}

console.log(foo(a)); // console logs the result of function "foo" passing the argument of variable "a" from line 71
```

#### Output:

`256`

---

# Lab

## **Challenge:** addList

### Difficulty: Basic

#### Prompt:

- Write a function called addList that accepts any quantity of numbers as arguments, 
- adds them together and returns the resulting sum.
- Assume all parameters will be numbers.
- If called with no arguments, return 0 (zero).

We use `...numbers` inside of the parameter zone of our function to grab all of the parameters you give it when it is called and put them into an array called numbers.

### Using For Of Loop

```
const addList = (...numbers) => {
    let total = 0
    for (let number of numbers) {
        total += number
    }
    return total
}

console.log(addList(1, 2, 3, 4, 5))
```

#### Output:

`15`

### Using a normal For Loop

```
const addList = (...numbers) => {
    let total = 0
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i]
    }
    return total
}

console.log(addList(1, 2, 3, 4, 5))
```

#### Output:

`15`

### Using a For Each Loop

```
const addList = (...numbers) => {
    let total = 0
    numbers.forEach((number) => {
        total += number
    })
    return total
}

console.log(addList(1, 2, 3, 4, 5))
```

#### Output:

`15`