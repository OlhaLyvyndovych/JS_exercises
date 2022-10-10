const { parentPort, isMainThread } = require('worker_threads');

if (!isMainThread) {
    console.log("In worker thread .. ");
    //Sending data to main thread

    throw new Error('It\'s an error here');

    //process.exit(1);
}