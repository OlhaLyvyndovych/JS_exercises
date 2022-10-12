import fetch from 'node-fetch';


const promise = new Promise((resolve, reject) => {
    if(true) {
        resolve("Stuff Worked");
    } else {
        reject("Error ..");
    }
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'Hi');
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'Hello again');
});

const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, 'Is it me you are looking for ..?');
});
/*
Promise.all([promise, promise2, promise3, promise4])
.then(values => {
    console.log(values);
})
*/
/*
promise
.then(result => result + "!")
.then(result2 => {
    throw Error;
    console.log(result2);
})
.catch(err => console.log("Errrrror"));
*/

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
];
/*
Promise.all(urls.map(url => {
    return fetch(url).then(response => response.json())
}))
.then(results => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
})
.catch((err) => {
    console.log(err)
});
*/

async function fetchUsers() {
    let users = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await users.json();
    console.log(data);
}

//fetchUsers();

async function getData() {
    try {
        let [users, posts, albums] = await Promise.all(urls.map(url => fetch(url).then(resp => resp.json())
        ));

        console.log('users: ', users);
        console.log('posts: ', posts);
        console.log('albums: ', albums);
    } catch (err) {
        console.log(err);
    }
}
getData();