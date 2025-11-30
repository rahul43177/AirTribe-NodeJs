const asyncFunction1 = () => {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            console.log("Async function 1")
            reject();
        },1000)
    })
}


const asyncFunction2 = () => {
    return new Promise((resolve , reject) => {
        setTimeout(()    => {
            console.log("Async function 2")
            resolve()
        },1000)
    })
}

const asyncFunction3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Async function 3")

        }, 1000);
    })
}



const main = () => {
    try {
        console.log("Start")
    } catch(error) {
        console.log("error" , error); 
    }
}

