const {z} = require("zod");

const taskSchema = z.object({
    title : z.string().min(3) , 
    description  : z.string().min(5) 
}); 

module.exports = {taskSchema}