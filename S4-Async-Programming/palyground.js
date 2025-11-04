const asyncFunction = (cb) => {
    setTimeout(() => {
        console.log("In between")
        cb();
    }, 1000)
}

const main = () => {
    console.log("Start");
    asyncFunction(() => {
        console.log("END");
    })
}


main()