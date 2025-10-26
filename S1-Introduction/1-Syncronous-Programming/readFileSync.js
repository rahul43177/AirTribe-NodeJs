const fs = require("fs")

const filePath = "../3-Assets/lengthyFile.txt"

const start = Date.now()

const data = fs.readFileSync(filePath , 'utf-8')

console.log(`The file reading is completed in ${Date.now() - start} ms`)

