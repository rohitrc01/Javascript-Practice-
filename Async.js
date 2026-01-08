/* // this script is for asynchronous practice 

/*
setTimeout(() => {
    console.log('hello')
}, 2000);

console.log('three')
console.log('four')
*/

// callback is an argument to another function 
// A callback is a function that is passed as an argument to another function and is executed later, usually after an asynchronous task finishes.

/*  
function greet(name) {
  console.log("Hello " + name);
}

function processUser(callback) {
  callback("Rohit");
}
*/

// processUser(greet);


function greet(name){
    console.log('hello' +' '+ name)
}

function user(callback){
    console.log('processing user.....')

    setTimeout(function(){
        callback('rohit')
    }, 3000)
}

user(greet)



function sum(a, b) {
    console.log(a + b);
}

function calculator(a, b, sumcallback) {
    sumcallback(a, b);
}

calculator(5, 3, sum);

// callback hell 
/* 
function getdata(dataid, getNextData){
    setTimeout(()=>{
        console.log("data",dataid)
        if (getNextData){
            getNextData();
        }
    },3000)
}

getdata(1,()=> {
    getdata(2,()=>{
        getdata(3, () =>{
           getdata(4) 
        });
    });
});

*/
// complex to understand and manage -it is a problem in javascript therfore we use promises 


//PROMISES 

/*
let promise = new Promise((resolve, reject) => {
    console.log("i am a promise ")
    //resolve('delivered') // function created by javascript 
    reject('some error')
})
*/ 

/*
function getdata(dataid, getNextData){
    return new Promise((resolve, reject) => {
        setTimeout (()=> {
            console.log("data", dataid)
            resolve('delivered')
            if(getNextData){
                getNextData()
            }
        },3000)
    })
}
*/


// has 3 states pending, fullfilled(resolved) and rejected 


// using .then and .catch() in promises, .then used when fulfilled and .catch used when a promise is rejected 


/* 
const getpromise = ()=> {
    return new Promise((resolve, reject) => {
        console.log('i am a promise')
        //resolve('sucess')
        reject("error 101")
    })
}

let promise = getpromise();
promise.then((res)=> { 
    console.log('promise fulfilled', res)
})

promise.catch((err)=>{
    console.log('rejected', err)
})
*/

// Promise chaining 

function asyncfunc1(){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            console.log("data1")
            resolve('sucess')
        },4000)
    })
}

function asyncfunc2(){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            console.log("data1")
            resolve('sucess')
        },4000)
    })
}
/*

console.log('fetching data one')
let p1 = asyncfunc1();
p1.then((res)=> {
    console.log(res)
    console.log("fetching data 2 ")
    let p2 =  asyncfunc2()
    p2.then((res)=>{
        console.log(res)
    })
})
*/
// can be called directly through the function 
// promise chaining 
console.log('fetching data1')
asyncfunc1().then((res)=>{
    console.log("fecthing data2 ")
    asyncfunc2().then((res)=>{
        console.log("fecthed complete record", res )
    })
})



// asyc and await
// async function returns a promise 


/*
async function hello1(){  // only for syntax purposes 
    console.log('hello rohit')
}
// returns promise directly 
*/

function api(){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            console.log('weather data')
            resolve (200)
        },2000)
    })
}

async function getweatherdata(){ // call in console
    await api() // 1st call  
    await api() // 2nd call 
}



function getTea() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Tea ready"), 3000);
  });
}

async function drinkTea() {
  console.log("Waiting for tea...");
  const tea = await getTea();
  console.log(tea);
}

drinkTea();



// await pauses the execution of its surrounding async function until the promise is settled 
// READ IIFE -  immediately invoked function expression  */











