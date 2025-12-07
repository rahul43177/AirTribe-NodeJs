const tasksDatabase = require("../model/taskDatabase");

const myTasks = async (req , res) => {
    try {
        let userHittingAPI = req.userData; 
        console.log("The user who is hitting the API" , userHittingAPI); 

        const userTasks = tasksDatabase.filter(t => t.userId == userHittingAPI.userId)

        return res.status(200).json({
            status : true , 
            user : userHittingAPI.name , 
            userTasks  : userTasks
        })

    } catch(error) {
        return res.status(500).json({
            status : false , 
            message : error.message 
        })
    }
}


module.exports = {myTasks}; 