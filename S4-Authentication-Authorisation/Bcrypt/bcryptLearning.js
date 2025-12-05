const bcrypt = require("bcrypt")

async function securePassword(plainPassword) { 
  let saltRounds = 10; 
  const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
  return hashedPassword; 
}


const password = "Rahul123";
const hashedPassword = securePassword(password);
let securedPassword;
hashedPassword.then((data) => {
  securedPassword = data; 
}).then(() => {
  console.log(`password : ${password} => hashedPassword : ${securedPassword}`)
})
