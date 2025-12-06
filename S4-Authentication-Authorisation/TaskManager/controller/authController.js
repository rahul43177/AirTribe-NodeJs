const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const usersDataBase = require("../model/userDatabase")


//signup API
/*
1.Take the details 
  - name 
  - email 
  - password 
  - role 
2. We check a validation weather all the values are being sent by the user or not -- role (optional)
3. Check weather the user is already there in the database or not 
  - if the user is already present -> we say it is already there 
  - otherwise we move on 
4. Password is never saved directly so we need to hash it -- hash the password 
5. Create the user data object -- and store it in the database  
*/

const signUp = async (req , res) => {
    try { 
        const {name , email , password , role = "user"} = req.body

        const user = usersDataBase.find(u => u.email == email);
        if(user) {
            return res.status(400).json({
                status : false , 
                message : "The user already exist with the same email address"
            })
        }
        const saltRounds = 10 ;
        const salt = await bcrypt.genSalt(saltRounds); 
        const hashedPassword = await bcrypt.hash(password , salt); 

        const newUserDetails = {
            id : usersDataBase.length + 1 , 
            name  , 
            email , 
            password : hashedPassword , 
            role  
        }

        usersDataBase.push(newUserDetails);
        console.log("Entire list of the users :",usersDataBase);
        return res.status(201).json({
            status : true , 
            message : "The user has been created" , 
            newUserDetails
        })
    } catch(error) {
        console.log("error" , error.message);
        return res.status(500).json({
            status : false , 
            message : error.message 
        }) 
        
    }
}


const login = async (req,res) => {
    try {
        const {email , password} = req.body; 
        const user = usersDataBase.find(u => u.email == email);
        if(!user) {
            return res.status(400).json({
                status : false, 
                message : "User not found"
            })
        }

        //we will compare the password now : 
        const isPasswordValid = await bcrypt.compare(password , user.password); 
        if(!isPasswordValid) {
            return res.status(401).json({
                status : false , 
                message : "Invalid password"
            })
        }
        const userPayload = {
            userId : user.id , 
            name : user.name , 
            email , 
            role : user.role 
        }
        const token = jwt.sign(userPayload , process.env.SECRET_KEY , {
            expiresIn : "1h"
        }); 

        return res.status(200).json({
            status : true , 
            message : "Login Successfull" , 
            token 
        })

    } catch(error) {
        return res.status(500).json({
            status : false ,
            message : error.message 
        })
    }
}




module.exports = {signUp , login }