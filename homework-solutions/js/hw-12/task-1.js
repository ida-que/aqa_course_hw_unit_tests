function delayTwoSeconds(callback) {
    setTimeout(callback, 2000);
}

const promiseResolve = new Promise((resolve) => resolve(1));
promiseResolve.then(console.log);

const promiseReject = new Promise((_, reject) => reject("Failed"));
promiseReject.catch(console.error);

function promiseNumber(num) {
    return Promise.resolve(num);
}

Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
.then(results => console.log(`Promise.all results: ${results}`))
.catch(error => console.error(`Promise.all error: ${error}`));

Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
.then(results => console.log(`Promise.allSettled results: ${results}`));

async function asyncExample() {
    try {
        const results = await Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);
        console.log(`Async Promise.all results: ${results}`);
    } catch (error) {
        console.error(`Async Promise.all error: ${error}`);
    }

const resultsSettled = await Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);
console.log(`Async Promise.allSettled results: ${resultsSettled}`);
}

asyncExample();

