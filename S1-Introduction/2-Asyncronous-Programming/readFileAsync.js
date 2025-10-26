const fs = require("fs")

const filePath = "../3-Assets/lengthyFile.txt"

const start = Date.now()

const data = fs.readFile(filePath , 'utf-8' , (err , data) => {
    console.log(`The file reading is completed in ${Date.now() - start} ms`)
})

for(let i = 0;i<100;i++) {
    console.log(`${i+1} - Number of loop`)
}
