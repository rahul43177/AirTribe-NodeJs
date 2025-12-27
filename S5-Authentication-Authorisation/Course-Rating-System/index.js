require("dotenv").config({
  path : "/Users/rahulmishra/Desktop/learning/AirTribe-Backend/S5-Authentication-Authorisation/Course-Rating-System/.env"
}); 
const express = require("express");
const mongoose = require("mongoose"); 
const userRouter = require("./router/userRouter"); 
const app = express();

app.use(express.json()); //fetching body from POST request


//User Router
app.use("/user" , userRouter)

mongoose.connect(process.env.MONGODB_URI)
.then(() => {
  console.log("MongoDB is connected.")
  
  app.listen(process.env.PORT , ()=> {
    console.log(`The server is running on the PORT : ${process.env.PORT}`)
  })
})
.catch((error) => {
  console.log(`Error in connecting MongoDB : ${error.message}`); 
})


