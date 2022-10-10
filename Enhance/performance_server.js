const express = require('express');
// const cluster = require('cluster');  // No need of it as we use pm2
//const os = require('os'); // bc of pm2

const app = express();

function delay(duration) {
    const startTime = Date.now();
    while (Date.now() - startTime < duration) {
        //event loop is blocked
        
    }
}

app.get('/', (req, res) => {
    //Every worker has pid property 
    res.send(`Performance example ${process.pid}`);
});

app.get('/timer', (req, res) => {
    //delay the response
    delay(4000); // Delay 9000 is decreased to 4000 as part of our change
    res.send(`Beep beep beep.. ${process.pid}`);
});

console.log('Running server.js .. ');
/*
if (cluster.isMaster) {
    // All the code here is running on the master process
    console.log("MASTER process has been started");
    const NUM_WORKERS = os.cpus().length;
    console.log(NUM_WORKERS);
    for (let i = 0; i < NUM_WORKERS; i++) {
        cluster.fork(); // Each time we call this function we create a new worker process
    }
    
    //cluster.fork(); // Every time we are running .fork() on worker or master process we always running the same server.js file
} else {
    // All the code here is running on the worker process (isMaster is false)
    console.log("Worker process started");
*/ 
// No need of the block above bc we of pm2
console.log("Worker process started");
app.listen(3000);


