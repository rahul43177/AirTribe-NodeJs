const jwt = require("jsonwebtoken");

const verifyToken = async (req, res) => {
  try {
    let token = req.headers['authorization'];
    if (!token) {
      return res.status(403).json({
        status: false,
        message: "Token is not present",
      });
    }

    let decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);

    if (!decodedToken) {
      return res.status(403).json({
        status: false,
        message: "Invalid Token",
      });
    }

    req.userData = decodedToken; 
    next();
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

module.exports = verifyToken;
