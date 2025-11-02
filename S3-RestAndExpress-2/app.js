//https://www.course-api.com/react-store-products
const express = require("express")
const app = express()

app.use(express.json())

app.get("/" , (req ,res )=> {
    console.log("Welcome to the server.")
})

app.listen(3000 , () => {
    console.log(`THE SERVER IS RUNNING ON THE PORT 3000`)
})