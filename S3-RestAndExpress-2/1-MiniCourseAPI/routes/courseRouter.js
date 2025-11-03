const express = require("express")
const router = express.Router()
const {getCourses} = require("../controller/coursesController")
router.get("/queryCourse" , getCourses)


module.exports = router; 