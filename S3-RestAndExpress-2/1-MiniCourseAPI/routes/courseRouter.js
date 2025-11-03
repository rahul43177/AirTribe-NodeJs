const express = require("express")
const router = express.Router()
const {getCoursesByCategory , getCourseById , addCourseInDB} = require("../controller/coursesController")

//courses based on category 
router.get("/category-course" ,getCoursesByCategory);

//courses by id 
router.get("/course-id/:id", getCourseById);

//add course in DB 
router.post("/add-courses" , addCourseInDB);

module.exports = router; 