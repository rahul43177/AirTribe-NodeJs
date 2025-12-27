const internalCall = async () => {
    console.log("internal call")
}

const main = async () => {
    setTimeout(() => {
        console.log("Log from timer"); 
    })

    Promise.resolve().then(() => {
        console.log("Hello there!")
    })

    await internalCall();
    console.log("This is the end!");
}

main();

/*
Output I think it will show 
1. Hello there -- promises
2. internal call 
3. This is the end 
4. settimeout 
*/