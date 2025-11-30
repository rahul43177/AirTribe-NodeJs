const orderBurger = new Promise((resolve , reject) => {
    let isShopOpen = false; //shop => close => false 
    setTimeout(() => {
        if(isShopOpen) {
            resolve("🍔 The burger is ready , please enjoy")
        } else {
            reject("❌ Sorry the shop is closed.")
        }
    },3000)
})


console.log("Ordered burger ... waiting .... ")

orderBurger
.then((food) => {
    console.log("Got the burger , manager told :",food); 
}) 
.catch((error) => {
    console.log(error) 
})