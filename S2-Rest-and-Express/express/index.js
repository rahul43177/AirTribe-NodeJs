const { generateKey } = require("crypto")
const express = require("express")
const app = express()

const PORT = 3000

//middlewares 
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//route 
app.post('/isvoting', (request, response) => {
    // let   = {
    //     firstName : "Renu" , 
    //     lastName : "Mishra" , 
    //     age : 45 , 
    //     gender : "Female" 
    // }

    const userInfo = request.body
    console.log("body data --- ", userInfo);
    const { firstName, lastName, age, gender } = userInfo;
    console.log(`The firstName is : ${firstName}`);
    console.log(`The lastName is : ${lastName}`);
    console.log(`The age is : ${age}`);
    console.log(`The gender is ${gender}`);
    response.json({
        status: 200,
        message: "The user info has been collected"
    })
    //body data ---  { firstName: 'Rahul', lastName: 'Mishra', age: 25, gender: 'Male' }
    // const {firstName , lastName , age , gender} = request.body; 


    // let helping = { //default 
    //     genderDefining : "He" ,
    //     helping : "him" 
    // }

    // if(( gender.toLowerCase() == "female")) {
    //     helping.genderDefining = "She" 
    //     helping.helping = "her"  
    // }

    // if(age >= 18) {
    //     console.log(`The user name is : ${firstName} ${lastName} and ${helping.genderDefining} is eligible for voting as ${helping.helping} age is ${age}`)
    //     return response.json({message : `The user name is : ${firstName} ${lastName} and ${helping.genderDefining} is eligible for voting as ${helping.helping} age is ${age}`})
    // }

})

app.get("/isvoting", async (request, response) => {
    let { firstName, lastName, age, gender } = request.query;
    console.log(firstName, lastName, age, gender);
    console.log(
        "\n"

    )
    response.json({
        status: true,
        message: "Learning things fine",
        firstName,
        lastName,
        age,
        gender
    })
})

app.listen(PORT, () => {
    console.log(`The server is running on the port : ${PORT}`);
})