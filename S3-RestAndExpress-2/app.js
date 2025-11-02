//https://www.course-api.com/react-store-products

const express = require("express")
const app = express()
const PORT = 3000; 

app.use(express.json())

app.get("/api/v1/courses/:id" , async (res , req )=> {
    const course = courses.find(c => c.id === parseInt(req.params.id))
    
})

app.listen(PORT , () => {
    console.log(`The server is running on the port : ${PORT}`)
})

