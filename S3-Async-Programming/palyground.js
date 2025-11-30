//Example 1 : 
// console.log("Start")

// console.log("In between")

// console.log("End")



//Example 2 : 

// console.log("Start")

// setTimeout(() => {
//     console.log("In between")
// },0)

// console.log("End")


//Example 3 : 
// console.log("Start")
// const start = Date.now();
// setTimeout(() => {
//     console.log("In between" , (Date.now() - start)/1000);
// },1000)

// console.log("End")

// for(let i = 0;i<100000;i++) {
//     console.log("i----" , i)
// }



const asyncFunction = () => {
    setTimeout(() => {
        console.log("In between"); 
    }, 1 * 1000)
}

const main = () => {
    console.log("start")

    asyncFunction();

    console.log("End");
}