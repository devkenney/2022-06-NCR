# Objects

Objects are our second example of a *complex data type*. Objects are able to hold many different data points about a single, focused objective. Objects can also hold all other data types within JavaScript, including **variables**, **arrays**, other **objects**, and even **functions**. When a **function** is put into an object, it is called a **method**.

#### Example:

```
const house = {
    doors: 9,
    windows: {
        bay: 1,
        long: 5,
        stainedGlass: 3
    }
}
```

---

### Examples of different data types:

- The name of your cat -> **string**
- The age of your cat -> **number**
- Your cat's favorite things -> **array** of **strings**
- Whether your cat can speak French -> **boolean**
- Whether your cat can solve a Rubik's cube -> **boolean**
- Your cat -> **object**

All of the above data points can be put inside of the last one, your cat, since they are all related! Here's how that might look:

```
const cat = {
    name: 'Fluffy',
    age: 8,
    favoriteThings: [
        'Milk',
        'Birds',
        'Knocking things off of tables'
    ],
    canSpeakFrench: false,
    canSolveRubiks: false
}
```

Now that we have that object, to modify it and add a *color* property, all we have to do is the following:

```
cat.color = 'tortoise'
```

As you can see, we used a dot (**.**) to denote a property of the **cat** object.

---

# Classes

Not to be confused with the class you are currently in, **classes** are more like blueprints that are used to create **objects** from. We will explore a use case of **classes** below.

### Syntax:

```
class Vehicle {
    constructor(vin, make, model) {
        this.vin = vin;
        this.make = make;
        this.model = model;
        this.running = false;
    }
}
```

As we can see above, we have added something called a **constructor** to our base class. These are the foundations of your classes and tell them what information needs to be contained within the object that is created from it. It is always denoted by the keyword **constructor** and follows the syntax used above.

---

### Creating an Object from a Class

Once you have your class created, to finally create an object from the code you wrote is a simple matter.

#### Example:

```
const plane = new Vehicle('X123Y', 'Boeing', '747')
```

As you can see, we used the `new` keyword to denote the creation of a **new** `Vehicle`. We then put some perentheses and inside of those we put all of the information that the constructor is going to need to create the object you requested. That object is then set the the variable `plane` and can be used in the same ways any other object can be.

---

### Adding Methods

We already spoke about our first method, which is called `constructor`. However, you can make custom methods and assign them to your class! For example, if we wanted to be able to start and stop our vehicle, we could write something like the following.

#### Example:

```
class Vehicle {
    constructor(vin, make, model) {
        this.vin = vin;
        this.make = make;
        this.model = model;
        this.running = false;
    }
    start() {
        this.running = true;
        console.log(`Your ${this.make} ${this.model} is now running!`)
    }
    stop() {
        this.running = false;
        console.log(`Your ${this.make} ${this.model} has now stopped!`)
    }
}
```

#### To call these methods:

```
plane.start()
plane.stop()
```

As you look at the above code snipped you will notice a few things. First of all, unlike with normal objects, **commas** are not needed between class methods. Secondly, unlike normal functions, no arrow or `function` keyword is necessary to denote the methods as, well, methods. Finally, you will notice that we used the `this` keyword inside of our methods, I'll explain that now.

---

### `this`

The `this` keyword in JavaScript is used to be able to tell a method exactly which object to reference when running. In the pas we have used normal dot notation when referencing pieces of an object, starting with the object's name. However, when writing a class, multiple objects can stem from the same code. Therefore, to avoid referencing only one of those objects, we use `this` to reference only the object that we want.