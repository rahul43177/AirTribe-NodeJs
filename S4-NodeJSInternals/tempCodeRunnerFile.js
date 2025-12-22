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

