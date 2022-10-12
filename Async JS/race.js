//Parallel, Sequence, Race 
// I need to run 3 things in 3 different ways: parallel, sequencial and race
const promisify = (item, delay) => 
    new Promise((resolve) => 
        setTimeout(() => 
            resolve(item), delay));

const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);
//console.log(a(), b(), c()); // return promises

async function parallel() {
    const promises = [a(), b(), c()];
    const [output1, output2, output3] = await Promise.all(promises);
    return `paralel is done: ${output1}, ${output2}, ${output3}`;
}

//parallel().then(console.log);

async function race() {
    const promises = [a(), b(), c()];
    const output1 = await Promise.race(promises);
    return `race is done: ${output1}`;
};
//race().then(console.log);

async function sequence() {
    const output1 = await a();
    const output2 = await b();
    const output3 = await c();
    return `sequence is done: ${output1}, ${output2}, ${output3}`;
};
//sequence().then(console.log);

//Run all together .. the order doesn't matter
parallel().then(console.log);
sequence().then(console.log);
race().then(console.log);

//The order of the output is --> 
//race is done: a
//paralel is done: a, b, c
//sequence is done: a, b, c