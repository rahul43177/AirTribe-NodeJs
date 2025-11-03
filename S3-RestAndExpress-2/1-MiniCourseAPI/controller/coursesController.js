const coursesDB = [
    {
        id: 1,
        courseName: "Backend Course",
        courseDescription: "Master the backend",
        category: "backend"
    },
    {
        id: 2,
        courseName: "Frontend Course",
        courseDescription: "Master the frontend",
        category: "frontend"
    },
    {
        id: 3,
        courseName: "Database course",
        courseDescription: "Master the database",
        category: "backend"
    },
    {
        id: 4,
        courseName: "System Design Course",
        courseDescription: "Master the System Design",
        category: "Engineering"
    },
    {
        id: 5,
        courseName: "Data Structures and Algorithms Course",
        courseDescription: "Master the DSA",
        category: "Fundamentals"
    },
    {
        id: 6,
        courseName: "Mock Interview Course",
        courseDescription: "Master the technical interviews",
        category: "Fundamentals"
    },
    {
        id: 7,
        courseName: "High Level Design Course",
        courseDescription: "Master the HLD interviews",
        category: "Backend"
    },
    {
        id: 8,
        courseName: "Low Level Design Course",
        courseDescription: "Low Level Design Course",
        category: "Backend"
    },
    {
        id: 9,
        courseName: "CSS Mastery",
        courseDescription: "Master the CSS for best UI",
        category: "Frontend"
    },
    {
        id: 10,
        courseName: "Database Management System",
        courseDescription: "Master the DBMS as a DBA",
        category: "Backend"
    }
]

const getCoursesByCategory = async (req, res) => {
    try {
        const { category } = req.query;
        if (!category) {
            return res.json({
                status: true,
                courseData: coursesDB
            })
        } else {
            const filteredData = coursesDB.filter(singleCourse => singleCourse.category.toLowerCase() == category.toLowerCase());
            res.json({
                status: true,
                courseData: filteredData
            })
        }

    } catch (err) {
        res.json({
            status: false,
            erorr: err.message
        })
    }
}

const getCourseById = async (req, res) => {
    try {
        const { id } = req.params;  //path parameter -> single value -> telling which value we need. this is path parameter. 
        if (!id) return res.status(400).json({
            status: false,
            message: "Id is not provided"
        })

        const filteredData = coursesDB.filter((singleCourse) => {
            return singleCourse.id == id;
        });
        if (filteredData.length == 0) {
            return res.status(404).json({
                status: false,
                message: "Id does not exist"
            })
        }

        return res.json({
            status: true,
            courseData: filteredData
        })
    } catch (error) {
        return res.json({
            status: false,
            error: error
        })
    }
}

const addCourseInDB = async (req, res) => {
    try {
        const courseDetails = req.body;
        if (!courseDetails || courseDetails.length == 0) {
            return res.status(400).json({
                status: false,
                message: "The course details are not provided"
            })
        }
        //finding the highest id 
        let highestId = Math.max(...coursesDB.map(course => course.id));

        const newCoursesData = [];
        courseDetails.forEach((course) => {
            highestId += 1;
            const newCourse = {
                id: highestId,
                name: course.name,
                courseDescription: course.courseDescription,
                category: course.category
            }
            coursesDB.push(newCourse);
            newCoursesData.push(newCourse);
        })

        return res.status(201).json({
            status: true,
            message: "Course data added successfully",
            newCoursesData,
            entireCourseData: coursesDB
        })
    } catch (error) {
        return res.json({
            status: false,
            error: error
        })
    }
}



module.exports = {
    getCoursesByCategory,
    getCourseById,
    addCourseInDB
}