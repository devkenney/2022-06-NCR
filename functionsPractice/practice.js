// EXERCISE 1: Write a Function Declaration
// Write a function named computeAreausing the function declaration approach.

// It will have two parameters: width& height.

// It will compute the area of a rectangle (width X height) and return a string in the following form:

// The area of a rectangle with a width of _ and a height of _ is ___ square units.

// Invoke the function to test it.

// -------------------------------------------------

// function computeArea (width, height) {
//     return ("The area of a rectangle with a width of " + width + " and a height of " + height + " is " + width * height + " square units.") // returns a string using '+' signs
// }

// console.log(computeArea(3, 5))

// -------------------------------------------------

// function computeArea (width, height) {
//     return(`The area of a rectangle with a width of ${width} and a height of ${height} is ${width * height} square units.`) // returns a string using template literals
// }

// console.log(computeArea(5, 5))

// -------------------------------------------------

// EXERCISE 2: Write a Function Expression
// Write a function named planetHasWaterusing the function expression syntax.

// It will have one parameter: planet.

// Return true if the planet argument is either "Earth" or "Mars", otherwise return false.

// Bonus points if you ensure the function will work regardless of the casing of the planetbeing passed in ('earth', 'MARS', etc.).

// Invoke the function a couple of times to test it!

// -------------------------------------------------

// const planetHasWater = (planet) => { // planet here is "EARTH"
//     if (planet.toLowerCase() === "earth" || planet.toLowerCase() === "mars") { // planet.toLowerCase() changes "EARTH" to "earth", making it equal to "earth"
//         return true
//     } else {
//         return false
//     }
// }

// console.log(planetHasWater("EARTH"))

// -------------------------------------------------

// LOOSE VS STRICT EQUALS EXAMPLE

// -------------------------------------------------

// if (0 === "0") {
//     console.log('it equals it!') // strict equality checks for value AND data type
// } else if (0 == "0") {
//     console.log('Two equals') // loose equality checks ONLY for value
// }

// -------------------------------------------------

// SCOPE EXAMPLE

// -------------------------------------------------

// let a = 4; // sets a to 4

// const foo = (x) => { // function foo with parameter x
//     let b = a * 4; // creates a new variable "b" which is equal to "a" from line 71 times 4

//     const bar = (y) => { // function with parameter y
//         let c = y * b; // creates a new variable "c" which is equal to parameter "y" times "b" from parent function (line 74)
//         return c; // returns variable "c" from line 78
//     }

//     return bar(b); // calls function "bar" with variable "b" from line 74
// }

// console.log(foo(a)); // console logs the result of function "foo" passing the argument of variable "a" from line 71

// -------------------------------------------------

// LAB

// -------------------------------------------------

// Challenge: addList

// =======Difficulty: Basic

// Prompt:

// - Write a function called addList that accepts any quantity of numbers as arguments, 
//   adds them together and returns the resulting sum.
// - Assume all parameters will be numbers. <=========
// - If called with no arguments, return 0 (zero).

// -------------------------------------------------

// USING FOR OF LOOP

// const addList = (...numbers) => {
//     let total = 0
//     for (let number of numbers) {
//         total += number
//     }
//     return total
// }

// console.log(addList(1, 2, 3, 4, 5))

// -------------------------------------------------

// USING NORMAL FOR LOOP

// const addList = (...numbers) => {
//     let total = 0
//     for (let i = 0; i < numbers.length; i++) {
//         total += numbers[i]
//     }
//     return total
// }

// console.log(addList(1, 2, 3, 4, 5))

// -------------------------------------------------

// USING FOR EACH LOOP

// const addList = (...numbers) => {
//     let total = 0
//     numbers.forEach((number) => {
//         total += number
//     })
//     return total
// }

// console.log(addList(1, 2, 3, 4, 5))

// -------------------------------------------------