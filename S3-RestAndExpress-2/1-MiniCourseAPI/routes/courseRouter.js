const express = require("express")
const router = express.Router()
const {getCoursesByCategory , getCourseById} = require("../controller/coursesController")

//courses based on category 
router.get("/category-course" ,getCoursesByCategory);

//courses by id 
router.get("/course-id/:id", getCourseById);

module.exports = router; 