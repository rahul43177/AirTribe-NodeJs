//example 2
// setTimeout(() => { //T1
//     console.log("Main Timer");
// },0);

// process.nextTick(() => console.log("Process.nextTick 1")); //NT1

// Promise.resolve().then(() => { //P1
//     console.log("Promise Callback 1")
// })

// process.nextTick(() => console.log("Process.nextTick 2")); //NT2 

// Promise.resolve().then(() => { //P2
//     console.log("Promise Callback 2")
// })

// console.log("Main Script")

//Main Script
//Process.nextTick 1
//Process.nextTick 2
//Promise Callback 1
//Promise Callback 2
//Main Timer


//example 3 : 
setTimeout(() => {
    console.log("Timer 1")
    Promise.resolve().then(() => {
        console.log("Resolved inner promise")
    })
},0)

setTimeout(() => {
    console.log("Timer 2")
},0)

console.log("Main script")


// Main script
// Timer 1
// Resolved inner promise
// Timer 2