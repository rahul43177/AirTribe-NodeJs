const fs = require("fs")

const filePath = "/Users/rahulmishra/Desktop/learning/AirTribe-NodeJs/S1-Introduction/Assets/long-doc.txt"

const start = Date.now()

const data = fs.readFileSync(filePath , 'utf-8')

console.log(`The file reading is completed in ${Date.now() - start} ms`)

