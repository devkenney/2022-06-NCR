const adventurer = {
    name: 'Vicky',
    hitpoints: 45,
    belongings: [
        'Sword',
        'Potion',
        'Tums'
    ],
    companion: {
        name: 'Kasper',
        type: 'Bat',
        companion: {
            name: 'Devin',
            type: 'Parasite',
            belongings: [
                'SCUBA tank', 'Rogan josh', 'Health insurance!'
            ],
            eat: () => {
                return ('Oh no! I have been parasitized!')
            }
        }
    }
}

// console.log(adventurer.companion.companion.eat())

// console.log(adventurer.belongings[1])

// for (let i = 0; i < adventurer.belongings.length; i++) {
//     console.log(adventurer.belongings[i]);
// }

// for(let belonging of adventurer.belongings) {
//     console.log(belonging)
// }

// console.log(adventurer.companion.type)

// console.log(adventurer.companion.companion.belongings[2])

const movies = [ { title: "Tokyo Story" },  { title: "Paul Blart: Mall Cop" }, { title: "L'Avventura" } ]

// for (let movie of movies) {
//     console.log(movie.title)
//     break;
// }

// for (let i = 0; i < movies.length; i++) {
//     console.log(movies[i].title)
// }

// movies.forEach((movie, index) => {
//     if (index === 1) {
//         console.log(movie.title)
//     }
// })

// for (let index in movies) {
//     console.log(movies[index].title)
// }

// const foo = [
//     ["0,0", "0,1", "0,2"],
//     ["1,0", "1,1", "1,2"],
//     ["2,0", "2,1", "2,2"]
// ];

// console.log(foo[2][2]);

// const bar = [
//     1,
//     "hi",
//     ()=>{
//         console.log('fun');
//     }
// ];

// console.log(bar);
// bar[2](); // console logs fun

class Character {
    constructor (name, age, eyes, hair = 'brown') {
        this.legs = 2;
        this.arms = 2;
        this.eyes = eyes;
        this.hair = hair;
        this.name = name;
        this.age = age;
    }
    greet (otherCharacter) {
        console.log(`Hi, ${otherCharacter}!`)
    }
    classGreeting (otherClassyCharacter = { name: 'Gelila' }) {
        console.log(`Greetings ${otherClassyCharacter.name}!`)
    }
    smite () {
        console.log('I smite thee you vile peasant!')
    }
    changeHair (hairColor) {
        this.hair = hairColor
    }
}

const me = new Character('Devin', 25, 'green', 'brown');
const you = new Character('Janae', 21, 'brown');

// me.greet('Diamond');
// you.greet('Dolapo');

// me.smite();
// you.smite();

// console.log(me)
// console.log(you)

// me.changeHair('blonde')

// console.log(me)

// you.changeHair('blonde')

// console.log(you)

// me.classGreeting(you)

class Person {
    constructor (name, isMuggle, isEvil, favoriteSpell = "They're a muggle!") {
        this.name = name;
        this.isMuggle = isMuggle;
        this.isEvil = isEvil;
        this.favoriteSpell = favoriteSpell;
    }
}

const wizard1 = new Person('Harry Potter', false, false, 'Alohamora')
const wizard2 = new Person('Voldemort', false, true, 'Avada Kadabra')
const muggle1 = new Person('Mr. Dursley', true, true)

console.log(wizard1);
console.log(wizard2);
console.log(muggle1);