console.log("Start")
const start = Date.now();
setTimeout(() => {
    console.log("In between")
},1000)

console.log("End")

for(let i = 0;i<100000;i++) {
    console.log("i----" , i)
}

