require("dotenv").config();
const express = require("express")
const app = express()
const courseRouter  = require("./routes/courseRouter")
const PORT = process.env.PORT
console.log(`PORT is : ${PORT}`) 
app.use(express.json())


//routes 
app.use("/course" , courseRouter);

app.listen(PORT , () => {
    console.log(`The server is running on the port : ${PORT}`)
})