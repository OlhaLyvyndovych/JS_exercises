//Timers and interval
const timeoutId = setTimeout(function run() {
    //console.log('Hello');
    setTimeout(run, 1000);
}, 1000);
clearTimeout(timeoutId);

const intervalId = setInterval(function run() {
    console.log('Hi');
}, 1000);
clearInterval(intervalId);

//Callbacks 
function greet(name) {
    console.log(`Hello ${name}`);
}

function greetFriend(greetFn) {
    const name = 'Vendi';
    greetFn(name);
};

greetFriend(greet);

//Synchronous vs Asynchronous callbacks 
let numbers = [1, 2, 4, 7, 3, 5, 6];
//let sorted = numbers.sort((a, b) => a - b);
//console.log(sorted);
let mapped = numbers.map((n) => n * 2);
console.log(mapped);
let filtered = numbers.filter((n) => n % 2 === 0);
console.log(filtered);