// 1. Create a function `delayTwoSeconds` that takes a callback function and executes it after 2 seconds.

function delayTwoSeconds(callback) {
    setTimeout(callback, 2000);
}


// 2. Create a variable that holds a new promise, which should resolve with the number 1. Handle the promise using `.then` and log the result.

const promiseResolve = new Promise((resolve) => resolve(1));
promiseResolve.then(console.log);



// 3. Create a variable that holds a new promise, which should reject with the message "Promise failed". Handle the promise using `.catch` and log the error.

const promiseReject = new Promise((_, reject) => reject("Promise failed"));
promiseReject.catch(console.error);



// 4. Create a function `promiseNumber` that takes a number and returns a promise resolving with that number.

function promiseNumber(num) {
    return Promise.resolve(num);
}



// 5. Call `Promise.all` with three `promiseNumber` calls. Handle the results and log each promise result sequentially using `.then`.

Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
.then((results) => {
    results.forEach((res) => console.log(res));
})
.catch(error => console.error(`Promise.all error: ${error}`));



// 6. Call `Promise.allSettled` with three `promiseNumber` calls. Handle the results and log the status and value of each promise sequentially using `.then`.

Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
.then(results => {
    results.forEach((res) => console.log(res.status, res));
});



// 7. Repeat steps 5 and 6 using async/await with a try-catch block.

async function handlePromises() {
  try {
    const results = await Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);
    results.forEach((res) => console.log(res));
  } catch (error) {
    console.log(error);
  }

  const settledResults = await Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);
  settledResults.forEach((res) => console.log(res.status, res));
}

handlePromises();

