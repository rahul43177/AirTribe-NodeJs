require("dotenv").config();
const express = require("express");
const authRouter = require("./router/authRouter");
const taskRouter = require("./router/taskRouter")

const app = express();

app.use(express.json());

//routes 
app.use("/users" , authRouter)
app.use("/tasks", taskRouter); 

app.listen(process.env.PORT , () => {
  console.log("The server is running on the PORT :",process.env.PORT);
});
