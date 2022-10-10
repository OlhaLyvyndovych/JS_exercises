const { Worker, isMainThread } = require('worker_threads');

if (isMainThread) {
    console.log("Yes, we are in main thread");

    const worker = new Worker('./worker.js');

    worker.on('message', (data) => {
        console.log('Got message');
    });

    worker.on('error', (error) => {
        console.log('Got error');
    });

    worker.on('exit', (data) => {
        console.log('Exit');
    });

}