const express = require("express");
const router = express.Router();
const {login, signUp} = require("../controller/userController"); 
//Login Router
router.post("/login" , login); 
router.post("/signup" , signUp);

module.exports = router; 