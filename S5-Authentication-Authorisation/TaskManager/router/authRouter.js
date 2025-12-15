const express = require("express");
const { signUp , login } = require("../controller/authController");
const router = express.Router()


//signUp 
router.post("/signUp" , signUp); 
//login
router.post("/login" , login)
module.exports = router ; 