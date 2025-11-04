const coursesDB = require("../models/courseModel")

const getCoursesByCategory = async (req, res) => {
  console.log("coursesDB" , coursesDB)
  try { 
    const { category } = req.query;
    if (!category) {
      return res.json({
        status: true,
        courseData: coursesDB,
      });
    } else {
      const filteredData = coursesDB.filter(
        (singleCourse) =>
          singleCourse.category.toLowerCase() == category.toLowerCase()
      );
      res.json({
        status: true,
        courseData: filteredData,
      });
    }
  } catch (err) {
    res.json({
      status: false,
      erorr: err.message,
    });
  }
};

const getCourseById = async (req, res) => {
  try {
    const { id } = req.params; //path parameter -> single value -> telling which value we need. this is path parameter.
    if (!id)
      return res.status(400).json({
        status: false,
        message: "Id is not provided",
      });
    console.log(`course DB --- ${coursesDB}`);
    const filteredData = coursesDB.filter((singleCourse) => {
      return singleCourse.id == id;
    });
    if (filteredData.length == 0) {
      return res.status(404).json({
        status: false,
        message: "Id does not exist",
      });
    }

    return res.json({
      status: true,
      courseData: filteredData,
    });
  } catch (error) {
    return res.json({
      status: false,
      error: error,
    });
  }
};

const addCourseInDB = async (req, res) => {
  try {
    const courseDetails = req.body;
    if (!courseDetails || courseDetails.length == 0) {
      return res.status(400).json({
        status: false,
        message: "The course details are not provided",
      });
    }
    //finding the highest id
    let highestId = Math.max(...coursesDB.map((course) => course.id));

    const newCoursesData = [];
    courseDetails.forEach((course) => {
      highestId += 1;
      const newCourse = {
        id: highestId,
        name: course.name,
        courseDescription: course.courseDescription,
        category: course.category,
      };
      coursesDB.push(newCourse);
      newCoursesData.push(newCourse);
    });

    return res.status(201).json({
      status: true,
      message: "Course data added successfully",
      newCoursesData,
      entireCourseData: coursesDB,
    });
  } catch (error) {
    return res.json({
      status: false,
      error: error,
    });
  }
};

const updateCourses = async (req, res) => {
  try {
    const { courseName, courseDescription, category } = req.body;
    const { id } = req.params;

    coursesDB.forEach((course) => {
      if (course.id == id) {
        if (courseName) {
          course.courseName = courseName;
        } else if (courseDescription) {
          course.courseDescription = courseDescription;
        } else if (category) {
          course.category = category;
        }
      }
    });
    const updatedCourse = coursesDB.filter((course) => course.id == id);

    return res.status(200).json({
      status: true,
      message: "The course data is updated successfully",
      updatedCourse,
      allCourse: coursesDB,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: false,
      errorMessage: error,
    });
  }
};

const deleteCourse = async (req, res) => {
  try {
    const {id} = req.params; 
    
    if(!id) return res.status(400).json({
        status : false , 
        message : "Id is not provided to delete the course"
    }) 

    const newData = coursesDB.filter((course) => {
        return course.id != id ; 
    })

    if(newData.length == coursesDB.length) {
        return res.status(400).json({
            status : false , 
            message : "The id you gave does not exist" 
        })
    }
    let OG =  coursesDB.length
    let newC = newData.length
    return res.status(200).json({
        status : true , 
        message : "The course has been deleted successfully" , 
        newData , 
        recordsDeleted : OG-newC
    })
    
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({
      status: false,
      error: error,
    });
  }
};
module.exports = {
  getCoursesByCategory,
  getCourseById,
  addCourseInDB,
  updateCourses,
  deleteCourse
};
