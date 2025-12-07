const express = require("express");
const { myTasks } = require("../controller/taskController");
const authenticateToken = require("../middlewares/authMiddleware");
const router = express.Router();


router.get("/my-tasks" ,authenticateToken , myTasks); 

module.exports = router; 