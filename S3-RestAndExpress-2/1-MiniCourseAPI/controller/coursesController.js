const coursesDB = [
    {
        id : 1 , 
        courseName : "Backend Course" ,
        coursecourseDescription : "Master the backend" 
    } , 
    {
        id : 2 , 
        courseName : "Frontend Course" , 
        courseDescription : "Master the frontend"
    } ,
    {
        id : 3 , 
        courseName : "Database course" , 
        courseDescription : "Master the database"
    } ,
    {
        id : 4 , 
        courseName : "System Design Course" , 
        courseDescription : "Master the System Design"
    } ,
    {
        id : 5 , 
        courseName : "Data Structures and Algorithms Course" , 
        courseDescription : "Master the DSA"
    } , 
    {
        id : 6 , 
        courseName : "Mock Interview Course" , 
        courseDescription : "Master the technical interviews"
    } , 
    {
        id : 7 , 
        courseName : "High Level Design Course" , 
        courseDescription : "Master the HLD interviews" 
    } , 
    {
        id : 8  , 
        courseName : "Low Level Design Course" , 
        courseDescription : "Low Level Design Course" , 
        
    }
]

const getAllCourses = async (req , res ) => {
    try {
        
        
        console.log(req.query)

        res.json({
            status : true , 
            jsonData : dataInParams
        })
    } catch(err) {
        res.json({
            status : false , 
            erorr : err.message
        })
    }
}

module.exports = {getAllCourses}