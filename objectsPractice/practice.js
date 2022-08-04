const house = {
    doors: 9,
    windows: {
        bay: 1,
        long: 5,
        stainedGlass: 3
    }
}

// The name of your cat
// The age of your cat
// Your cat's favorite things
// Whether your cat can speak French
// Whether your cat can solve a Rubik's cube
// Your cat

// const cats = [{cat}, {cat}]

// const cat = {
//     name: 'Frankie',
//     age: 1,
//     favorites: [
//         'mice',
//         'milk',
//         'boxes'
//     ], 
//     languages: {
//         French: true,
//         English: true,
//         Russian: false
//     },
//     rubiksCube: false
// }

// cat.color = 'tortoise'
// console.log(cat.languages.English)

// cats[1].languages.French

// class Vehicle {
//     constructor(vin, make, model) {
//         this.vin = vin;
//         this.make = make;
//         this.model = model;
//         this.running = false;
//     }
//     start() {
//         this.running = true;
//         console.log(`Your ${this.make} ${this.model} is running!`)
//     }
//     stop() {
//         this.running = false;
//         console.log(`Your ${this.make} ${this.model} has stopped!`)
//     }
// }

// const plane = new Vehicle('X123Y', 'Boeing', '747')
// const car = new Vehicle('ABCD1', 'Honda', 'CRV')

// console.log(plane)
// console.log(car)

// car.start()
// plane.start()
// car.stop()
// plane.stop()

// Math.floor(Math.random() * 11) // random number between 0 and 10
// Math.ceil(Math.random() * 10) // random number between 1 and 10

// -------------------------------

// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

// -------------------------------

// const favoriteRecipe = {
//     title: "Pan friend Gnocchi with burst tomatoes",
//     servings: 4,
//     ingredients: [
//         'cherry tomatoes',
//         'gnocchi',
//         'olive oil',
//         'mozzarella',
//         'basil'
//     ]
// }

// console.log(favoriteRecipe.title);
// console.log(`Serves: ${favoriteRecipe.servings}`);
// console.log('Ingredients:');
// for (let ingredient of favoriteRecipe.ingredients) {
//     console.log(ingredient);
// }

// ----------------------------------

// Keep track of which books you read and which books you want to read!

// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

// ----------------------------------

// const books = [
//     {
//         title: 'Eragon',
//         author: 'Christopher Paolini',
//         alreadyRead: true
//     },
//     {
//         title: 'Harry Potter',
//         author: 'J.K. Rowling',
//         alreadyRead: true
//     },
//     {
//         title: 'Dictionary',
//         author: 'Whoever created English',
//         alreadyRead: false
//     }
// ]

// for (let book of books) {
//     if (book.alreadyRead) {
//         console.log(`You already read ${book.title} by ${book.author}!`)
//     } else {
//         console.log(`You didn't read ${book.title} by ${book.author} yet!`)
//     }
// }