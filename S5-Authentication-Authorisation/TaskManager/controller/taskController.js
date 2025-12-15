const {z} = require("zod");
const tasksDatabase = require("../model/taskDatabase");
const { taskSchema } = require("../model/taskValidations");

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
        console.log("req body---" , req.body); 
        const result = taskSchema.safeParse(req.body); 
        
        console.log("result ----", result )
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


const deleteTask = async (req, res) => {
    try { 
        const {userId } = req.userData; 
        const {taskId} = req.params;
        const task = tasksDatabase.find(t => t.id == taskId ); 
        if(!task) {
            return res.status(404).json({
                status : false , 
                message : "Task Does not exist"
            })
        }
        if(task.userId != userId) {
            return res.status(403).json({
                status : false , 
                message : "You are not the owner of the task"
            })
        }
        const index = tasksDatabase.findIndex(t => t.id == taskId);
        const deleteTaskDatabase = tasksDatabase.splice(index , 1);
        return res.status(200).json({
            status : true , 
            message : "The task has been deleted", 
            deleteTask : deleteTaskDatabase
        })
    } catch(error) {
        return res.status(500).json({
            status : false , 
            message : error.message 
        })
    }
}

const updateTask = async (req , res) => {
    try {
        const {taskId} = req.params; 
        const {userId} = req.userData; 
        const {title , description} = req.body || {};

        if(!title && !description) {
            return res.status(400).json({
                status : false , 
                message : "There is nothing to update"
            })
        }
        const task = tasksDatabase.find(t=> t.id == taskId); 
        if(!task) {
            return res.status(404).json({
                status : false , 
                message : "The task does not exist"
            })
        }
        if(task.userId != userId) {
            return res.status(403).json({
                status : false , 
                message : "You are not the owner of the task"
            })
        }
        const index = tasksDatabase.findIndex(t => t.id == taskId);
        //updating 
        if(title) tasksDatabase[index].task = title ; 
        if(description) tasksDatabase[index].description = description; 

        return res.status(200).json({
            status : true , 
            message : "The task is updated" , 
            updatedTask : tasksDatabase[index] 
        })
    } catch(error) {
        return res.status(500).json({
            status : false  , 
            message : error.message 
        })
    }
}

module.exports = {myTasks , createTask , deleteTask , updateTask}; 