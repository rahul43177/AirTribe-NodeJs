const express = require("express");
const router = express.Router();
const {
  getCoursesByCategory,
  getCourseById,
  addCourseInDB,
  updateCourses,
  deleteCourse
} = require("../controller/coursesController");

//courses based on category
router.get("/category-course", getCoursesByCategory);

//courses by id
router.get("/course-id/:id", getCourseById);

//add course in DB
router.post("/add-courses", addCourseInDB);

//update course by id
router.put("/update-course/:id", updateCourses);

//delete the course 
router.delete("/delete-course/:id" , deleteCourse);


module.exports = router;
