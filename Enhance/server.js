process.env.UV_THREADPOOL_SIZE = 1;
const cluster = require('cluster');


//Is the file being executed in the master mode?
if(cluster.isMaster) {
    // If so it causes server.js to be executed *again* 
    //but in child mode
    cluster.fork();
    cluster.fork();
    // cluster.fork();
    // cluster.fork();
} else {
    // I'm a child, I'm going to act like a server 
    // and do nothing else
    const express = require('express');
    const crypto = require('crypto');
    const app = express();


    // function doWork(duration) {
    //     const start = Date.now();
    //     while(Date.now() - start < duration) {
    //         // Just checking the condition
    //     }
    // }

    app.get('/', (req, res) => {
        //doWork(5000);
        crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
            res.send("Hi there!");
        })
        //res.send("Hi there!");
    });

    app.get('/fast', (req, res) => {
        res.send('This is fast');
    });

    app.listen(3000);
}