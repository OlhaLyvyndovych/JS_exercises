const { isMainThread, workerData, Worker } = require('worker_threads');

if (isMainThread) {
    //Worker threads are parts of the same process - we run node multiple times in the same process
    console.log(`Main Thread! Process ID: ${process.pid}`);
    new Worker(__filename, {
        workerData: [7, 6, 2, 3]
    }); // Will point to the current file
    new Worker(__filename, {
        workerData: [1, 3, 4, 3]
    });
} else {
    console.log(`Worker! Process ID: ${process.pid}`);
    console.log(`${workerData} sorted is ${workerData.sort()}`);
}

