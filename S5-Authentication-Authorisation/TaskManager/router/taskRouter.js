const express = require("express");
const { myTasks, createTask, deleteTask, updateTask } = require("../controller/taskController");
const authenticateToken = require("../middlewares/authMiddleware");
const router = express.Router();


router.get("/my-tasks" ,authenticateToken , myTasks); 
router.post("/create-task" , authenticateToken , createTask); 

router.delete('/delete-task/:taskId' , authenticateToken , deleteTask); 

router.put("/update-task/:taskId" , authenticateToken , updateTask);

module.exports = router; 