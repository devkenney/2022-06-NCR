// class Governer {
//     static isCalled = 'Fred';
//     static party = 'Independent';
//     static age = 50;
//     static signBill(billName) {
//         console.log(`${billName} has been signed!`)
//     }
//     static campaign() {
//         console.log('Vote for me!')
//     }
//     static kissBaby() {
//         console.log('*smooch*')
//     }
//     spendMoney () {
//         console.log('*Cha-Ching*')
//     }
// }

// console.log(Governer.isCalled);

// Governer.signBill('Free Healthcare!')
// Governer.campaign()
// Governer.kissBaby()
// Governer.gender = 'Female'

// console.log(Governer.gender)

// const gov = new Governer()

// gov.spendMoney()

// ------------------------------

// class Person {
//     constructor (arms, legs, canBreathe) {
//         this.numArms = arms;
//         this.numLegs = legs;
//         this.canBreathe = canBreathe;
//     }
//     breathe () {
//         if (this.canBreathe) {
//             console.log("I'm breathing!")
//         } else {
//             console.log("Help! I can't breathe!")
//         }
//     }
//     walk () {
//         if (this.numLegs === 2) {
//             console.log("I'm walking!")
//         } else {
//             console.log("Probably using a wheelchair!")
//         }
//     }
//     talk () {
//         console.log("Blah Blah Blah")
//     }
// }

// class PostalWorker extends Person {
//     constructor (arms, legs, canBreathe, amountMail) {
//         super(arms, legs, canBreathe);
//         this.amountMail = amountMail;
//     }
//     deliverMail (amount) {
//         console.log('here is your mail!')
//         this.amountMail -= amount
//     }
//     drivePostCar () {
//         console.log('Vroom Vroom')
//     }
// }

// const artie = new PostalWorker(2, 2, true, 50);
// const susan = new PostalWorker(2, 2, true, 100);

// console.log(artie.amountMail);
// artie.deliverMail();
// console.log(artie.amountMail);

// artie.walk()

// susan.deliverMail(100)
// console.log(susan.amountMail)

// class Chef extends Person {
//     constructor (arms, legs, canBreathe, foodType, numRestaurants) {
//         super(arms, legs, canBreathe);
//         this.foodType = foodType;
//         this.numRestaurants = numRestaurants;
//     }
//     addRestaurant () {
//         this.numRestaurants += 1;
//     }
//     fry () {
//         console.log('*sizzle*')
//     }

// }

// const bob = new Chef(2, 2, true, 'Indian', 2);

// bob.addRestaurant()

class BankAccount {
    constructor(ownerName, balance) {
        this.ownerName = ownerName;
        this.balance = balance;
        this.acctNum = Math.floor(Math.random() * 1000000)
    }
    deposit(money) {
        this.balance += money
        return this.balance
    }
}

class CheckingAccount extends BankAccount {
    constructor(ownerName, balance, overdraftEnabled) {
        super(ownerName, balance);
        this.overdraftEnabled = overdraftEnabled;
    }
    withdraw(money) {
        if (this.overdraftEnabled) {
            this.balance -= money
            return this.balance
        } else if (!this.overdraftEnabled && this.balance >= money) {
            this.balance -=money
            return this.balance
        } else {
            return 'Not enough money!'
        }
    }
}

class SavingsAccount extends BankAccount {
    constructor(ownerName, balance) {
        super(ownerName, balance)
    }
    withdraw(money) {
        if (this.balance >= money) {
            this.balance -= money
            return balance;
        } else {
            return 'not enough money!'
        }
    }
}

const myCheckingAccount = new CheckingAccount('Devin', 500, false)

const response = myCheckingAccount.withdraw(600)

console.log(response)

console.log(myCheckingAccount.acctNum)


