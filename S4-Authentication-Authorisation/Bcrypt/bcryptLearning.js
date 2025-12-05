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
  // console.log(`password : ${password} => hashedPassword : ${securedPassword}`)
})


//$2b$10$n8n20JKPUUaADj70pJJMwu6ChfZkZK54DMN8MvY8aqID6UtGrN1Xy
// 

async function comparePassword(plainPassword) {
  //fetch stored password from data 
  //query = select password from users where name = 'Rahul'
  //const hashedStoredPassword = execute(query);
  const hashedPassword = "$2b$10$n8n20JKPUUaADj70pJJMwu6ChfZkZK54DMN8MvY8aqID6UtGrN1Xy"
  const match = await bcrypt.compare(plainPassword, hashedPassword); 
  console.log(match);
}


comparePassword(password);