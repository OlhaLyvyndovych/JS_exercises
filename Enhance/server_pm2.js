
const express = require('express');
const crypto = require('crypto');
const app = express();

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
