const express = require("express");
const { myTasks, createTask } = require("../controller/taskController");
const authenticateToken = require("../middlewares/authMiddleware");
const router = express.Router();


router.get("/my-tasks" ,authenticateToken , myTasks); 
router.post("/create-task" , authenticateToken , createTask); 

module.exports = router; 