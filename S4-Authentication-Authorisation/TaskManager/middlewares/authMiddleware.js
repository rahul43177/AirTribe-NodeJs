const jwt = require("jsonwebtoken"); 
const SECRET_KEY = process.env.SECRET_KEY; 

async function authenticateToken(req,res,next) {
    try {
        //extraction 
        let authToken = req.headers['authorization'];  //Headers -> Authorization  : Bearer Token -> but nodejs -- converts it into the lowercase 
        
        //sanitizing the token because it would have bearer as well in the front 
        
        if(!authToken) {
            return res.status(400).json({
                status : false , 
                message : "The token is not present in headers" 
            })
        }
        authToken = authToken.split(" ")[1]; //splitting it based on the space and taking the 1st index which means second part of the array 
        
        const decode = jwt.verify(authToken , SECRET_KEY); 
        console.log("the decoded payload :",decode); 

        req.userData = decode; 
        next()
    } catch(error) {
        return res.status(401).json({
            status : false , 
            message : "Invalid or expired password",  
            error : error.message
        })
    }
}


module.exports = authenticateToken; 