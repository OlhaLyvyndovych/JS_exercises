import fetch from 'node-fetch';

//Spread operator for objects, finally, for await
// Object spread operator
const animals = {
    tigers: 23,
    lions: 14,
    monkeys: 12,
    birds: 38
};

const {tigers, lions, ...rest} = animals;
//console.log(rest); //{ lions: 14, monkeys: 12 }

const objSpread = (param1, param2, param3) => {
    console.log(param1);
    console.log(param2);
    console.log(param3);
}
//objSpread(tigers, lions, rest);

//From ES6 it can be done for arrays
const arr = [1, 2, 3, 4, 5];
function sum(a, b, c, d, e) {
    return a + b + c + d + e;
};

console.log(sum(...arr));

//Finally
const urlList = [
    'https://swapi.dev/api/people/1',
    'https://swapi.dev/api/people/2',
    'https://swapi.dev/api/people/3',
    'https://swapi.dev/api/people/4'
];

Promise.all(urlList.map(url => {
    return fetch(url).then(people => people.json())
}))
.then(array => {
    throw Error
    console.log('1', array[0]);
    console.log('2', array[1]);
    console.log('3', array[2]);
    console.log('4', array[3]);
})
.catch(err => console.log("You have got an error..",err))
.finally(data => console.log('extra')); // Finally will run even after the catch block while an error is thrown

// FOR AWAIT OF feature - to loop through 
/*
const loopThroughUrls = (urls) => {
    for (let url of urls) {
        console.log(url);
    }
};
*/
//loopThroughUrls(urlList);

// now with for await of 
const getData2 = async (urls) => {
    const arrayOfPromises = urls.map(url => fetch(url));
    for await (let request of arrayOfPromises) {
        const data = await request.json();
        console.log(data);
    }
}
getData2(urlList);
