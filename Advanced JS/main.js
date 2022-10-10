// Scope in JS
/*
Block scope - variables declared inside a pair of curly braces cannot be accessed from outside the block
Function scope - variables declared inside a function cannot be accessed from outside the function
Global scope - globally scoped variables CAN be accessed inside a block or function
Nested function scope --> 
*/
/*
let a = 10;
function outer() {
    let b = 20;
    function inner() {
        let c = 30;
        console.log(a, b, c);
    }
    inner();
}
outer();
*/
//Closures
/*
In JS when we return a function from another function, we are effectively returning a combination of the function definition along with the function's scope. This would let the function definition have an associated persistent memory which could hold on to live data between executions. That combination of the function and its scope chain is what is called a closure in JS.
*/
// THAT IS FOR BLOCK CATCHING!!! 
function outer() {
    let counter = 0;
    function inner() {
        counter++;
        console.log(counter);
    }
    return inner;
}
const fn = outer();
// fn();
// fn();
//setInterval(fn, 5000); // for blocks catching

//Function currying
// Currying is a process in functional programming in which we transform a function with multiple arguments into a sequence of nesting functions that take one argument at a time
// function f(a, b, c) is transformed to f(a)(b)(c)
const multiply = x => y => x * y;
console.log(multiply(2)(3));

let users = [
    {
        id: 1,
        name: "John",
        age: 22
    },
    {
        id: 2,
        name: "Peters",
        age: 23
    },
    {
        id: 3,
        name: "Woakes",
        age: 34
    }
];


let names = users.map(item => item.name);
//console.log(names);

const get = function(property) {
    return function(object) {
        return object[property];
    }
};

const getId = get("id");

let userIds = users.map(getId);
//console.log(userIds);

const criteria = name => item => item.name !== name;
const filterByName = (arr, name) => {
    return arr.filter(criteria(name));
}

console.log(filterByName(users, 'John'));

//THIS keyword
//This keyword for function refers to the object it belongs to, it makes functions reusable by letting you decide the object value
function sayMyName(name) {
    console.log(`My name is ${name}`);
};

// How to determine 'this'
// Implicite binding
const person = {
    name: 'Vishwas',
    sayMyName: function() {
        console.log(`My name is ${this.name}`)
    }
};
//person.sayMyName(); // This function is invoked with the dot notation, so 'this' refers to what is on the left of the dot

// Explicit binding - means to use built-in call function to call a function on the object
function sayMyName() {
    console.log(`Hello! My name is ${this.name}`);
};

//sayMyName.call(person); // 'this' refers to the object passed as a param

//New binding
// With a constructor function
function Person(name) {
    //'this' keywork refers to an empty object created with a constructor function
    this.name = name;
};
const p1 = new Person('Vishwas');
const p2 = new Person('Batman');
//console.log(p1.name, p2.name);

//Default binding
//globalThis.name = 'Superman'; // for the need of a global variable
//sayMyName(); // Invoking this function will return undefined, means 'this' refers to the global object

//Prototype
Person.prototype.getName = function() {
    return `That what is my name: ${this.name}`;
};
//console.log(p1.getName());
//console.log(p2.getName());

//Inheritance 
function SuperHero(name) {
    //this = {}
    Person.call(this, name);
    this.isSuperHero = true;
};
SuperHero.prototype.spreadPeace = function() {
    console.log('Spreading peace');
};

//to inherit one method from prototype we make a chain
SuperHero.prototype = Object.create(Person.prototype);
SuperHero.prototype.constructor = SuperHero; // in order to use SuperHero when creating an object of SuperHero and not Person instead

const batman = new SuperHero('Batman');
console.log(batman.name);


//console.log(batman.getName());

//Classes 
class SuperHero { 
    constructor(name) {
        this.name = name;
    }

    isHero() {
        console.log(`A name of super hero is ${this.name}`);
    }
 }

 class Hero extends SuperHero {
    constructor(name) {
        super(name);
        this.isFriend = true;
    }

    spreadingPeace() {
        console.log("Always spreading peace");
    }
 };

 const hero = new Hero('Jill');
//  console.log(hero.spreadingPeace());
//  console.log(hero.isFriend);

 //Iterables and Iterators
 // For .. of loop
 //String
 /*
 const str = 'Vishwas'
 for (const char of str) {
    console.log(char);
 }
 */
//Array
/*
 const arr = ['V', 'i', 's', 'h', 'w', 'a', 's'];
 for (const item of arr) {
    console.log(item);
 }
*/
 //Own implementation
 const obj = {
    [Symbol.iterator]: function () {
        let step = 0;
        const iterator = {
            next: function () {
                step++;
                if (step === 1) {
                    return {
                        value: 'Hello',
                        done: false
                    }
                } else if (step === 2) {
                    return {
                        value: 'World',
                        done: false 
                    }
                } 
                return {
                    value: undefined,
                    done: true
                }
            }
        }
        return iterator;
    },
 }
 for (const word of obj) {
    console.log(word);
 }
 //Generators, generator function can pause the execution
 function* generatorFunction() {
    //yield keyword - is an operator to pause the execution
    yield 'Hello'
    yield 'World'
 }
//Generator object is an iterator
const generatorObj = generatorFunction(); // returns always what is called a generator object
for (const word of generatorObj) {
    console.log(word);
}
