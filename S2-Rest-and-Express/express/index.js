const express = require("express")
const app  = express()
const PORT = process.env.PORT; 
app.use(express.json())

app.get("/" , (req,res) => {
    console.log(`The thing is fine`)
})

app.listen(PORT , (error) => {
    if(!error) {
        console.log(`The server is running on the PORT : ${PORT}`)
    } else {
        console.log(error);
    }
})

