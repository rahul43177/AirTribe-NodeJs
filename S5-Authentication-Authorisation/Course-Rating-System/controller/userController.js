const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");
const bcrypt = require("bcrypt");
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    console.log("headers", headers);
    if (!email || !password) {
      return res.status(400).json({
        status: false,
        message: "Please provide email and password!",
      });
    }

    let findUser = await User.findOne({ email });

    if (!findUser) {
      return res.status(404).json({
        status: false,
        message: "The does not exist!",
      });
    }

    //jwt -> jsonwebtoken --> authenticating and authorisation using tokens
    const isValidPassword =await bcrypt.compare(password, findUser.password);

    if (!isValidPassword) {
      return res.status(403).json({
        status: false,
        message: "The password is not valid",
      });
    }
    const userPayload = {
      name: findUser.name,
      email: email,
      role: findUser.role,
    };
    const token = jwt.sign(userPayload, process.env.JWT_SECRET_KEY);

    return res.status(200).json({
      status: true,
      message: "User logged in successfully",
      token,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

const signUp = async (req, res) => {
  try {
    const { name, email, password, role = "user" } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({
        status: false,
        message: "Please enter all mandatory fields.",
      });
    }
    console.log("password" , password);
    console.log("\n");
    console.log("password type : " , typeof password);
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        status: true,
        message: "The user already present with this email.",
      });
    }

    const saltRounds = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = {
        name , 
        email , 
        password : hashedPassword , 
        role 
    }

    const saveUser = await User.create(newUser);
    return res.status(201).json({
        status : true , 
        message : "User signup completed.", 
        newUserDetails : saveUser
    })

  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

module.exports = { login, signUp };
