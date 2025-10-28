const express = require("express")
const app = express()

const PORT = 3000

app.use(express.json())
app.use(express.urlencoded({ extended : true }))

app.get("/health-check" , (request , response) => {
    response.json({
        message : "The  API is hitting" , 
        health : true 
    })
    
})

app.get("/" , (request , response) => {
    response.send("Welcome to the server!");
})

app.listen(PORT , () => {
    console.log(`The server is running on the PORT : ${PORT}`)
})