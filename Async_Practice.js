// 1️ Promise Creation: resolve a message after given time
function delaymessage(msg, time) {
  console.log("preparing message");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(msg);
    }, time);
  });
}

delaymessage("Hello", 2000).then((result) => {
  console.log(result);
});


// 2️ Promise: resolve if number is even, reject if odd
function checknum(num) {
  return new Promise((resolve, reject) => {
    if (num % 2 === 0) {
      resolve(`the number -> ${num} is even`);
    } else {
      reject(`the number -> ${num} is odd`);
    }
  });
}

checknum(29)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));


// 3️ Promise chaining: start with 5 → multiply by 2 → add 10
const promise = new Promise((resolve) => {
  resolve(5);
});

promise
  .then((num) => num * 2)
  .then((result) => result + 10)
  .then((finalResult) => {
    console.log(finalResult);
  });


// 4️ Login Promise: resolve if credentials match, reject otherwise
function login(username, password) {
  return new Promise((resolve, reject) => {
    console.log("checking credentials...");
    setTimeout(() => {
      if (username === "admin" && password === 123) {
        resolve("you are logged in");
      } else {
        reject("you cannot log in");
      }
    }, 2000);
  });
}

login("admin", 123)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));


// 5️ Promise.all example
function deliver1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("the order is delivered");
    }, 2000);
  });
}

function deliver2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("the order is delivered again");
    }, 3000);
  });
}

function deliver3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("the order delivered thrice");
    }, 4000);
  });
}

Promise.all([deliver1(), deliver2(), deliver3()])
  .then((result) => console.log(result))
  .catch((err) => console.log(err));


// 6️ Async/Await: basic async function
function delayDone() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Done");
    }, 2000);
  });
}

async function run() {
  const result = await delayDone();
  console.log(result);
}

run();


// 7️ Async/Await: sequential execution
function delayLog(message) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(message);
      resolve();
    }, 1000);
  });
}

async function runTasks() {
  await delayLog("Task 1");
  await delayLog("Task 2");
  await delayLog("Task 3");
}

runTasks();


// 8️ Async/Await: parallel execution using Promise.all
function task(message, time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(message);
      resolve(message);
    }, time);
  });
}

async function runParallel() {
  const results = await Promise.all([
    task("Task A", 1000),
    task("Task B", 2000),
    task("Task C", 3000),
  ]);

  console.log("Results:", results);
}

runParallel();


// 9️ Async function with timeout rejection
function fasttask() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Fast task - done");
    }, 1000);
  });
}

function withTimeout(promise, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject("Operation timed out"), time);
    promise.then(resolve).catch(reject);
  });
}

async function runfast() {
  try {
    const result = await withTimeout(fasttask(), 2000);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

runfast();



