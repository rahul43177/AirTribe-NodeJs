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

const createTask = async (req,res) => {
    try { 
        const {title , description} = req.body; 
        const userData= req.userData; 
        console.log("userdata" , userData);
        if(!title || !description) {
            return res.status(400).json({
                status : false , 
                message : "Title and description fields are required."
            })
        }

        let taskData = {
            userId : userData.userId , 
            id : tasksDatabase.length + 1, 
            task : title , 
            description 
        }

        tasksDatabase.push(taskData) ;
        return res.status(201).json({
            status : true , 
            message : "The task added successfully" ,
            newTask : taskData 
        })

    } catch(error) {
        return res.status(500).json({
            status : false , 
            message : error.message 
        })
    }
}


module.exports = {myTasks , createTask}; 