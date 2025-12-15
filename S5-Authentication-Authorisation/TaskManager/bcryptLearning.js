const bcrypt = require("bcrypt");

async function hashGenerator(password) {
  const saltRounds = 10; 
  const hashedPassword = await bcrypt.hash(password , saltRounds);
  return hashedPassword;
}


const pass = "muskan123";

(async ()=>{
  const newHashedPassword = await hashGenerator(pass);
  console.log(newHashedPassword);
})()




