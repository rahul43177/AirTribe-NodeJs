const fs = require("fs")

/*
SOURCE FOLDER NAME 
DESTINATION FOLDER NAME 
NAME OF THE FILE : input.txt

Write a script -> 

Script would read the content of the file from one directory and writing it into another directory
Scripts to write : 
1. Read and write file synchronously 
2. Read and write file asynchronously
3. Read the file Synchronously and write the file asynchronously
4. Read the file Asynchronously and write the file synchronously

Input directory -> /Users/rahulmishra/Desktop/learning/AirTribe-NodeJs/S1-Introduction/5-File Manager/directory-1/input.txt

Output directory -> /Users/rahulmishra/Desktop/learning/AirTribe-NodeJs/S1-Introduction/5-File Manager/directory-2/output.txt
*/
const InputPath = "/Users/rahulmishra/Desktop/learning/AirTribe-NodeJs/S1-Introduction/5-File Manager/directory-1/input.txt"
const outputPath = "/Users/rahulmishra/Desktop/learning/AirTribe-NodeJs/S1-Introduction/5-File Manager/directory-2/output.txt"

//first script to read the file syncronously and write syncronously
function readWriteFileSyncronously() {
    try {
        console.log(`SCRIPT NAME : Read and Write the file Syncronously`)
        console.log("\n")
        console.log(`STEP 1 -> READING FILE STARTING`)
        const data = fs.readFileSync(InputPath, { encoding: 'utf-8' });
        console.log(`STEP 2 -> The data is : ----| ${data}`)
        console.log(`STEP 3 -> READING FILE COMPLETED`)
        console.log("\n")
        console.log("=".repeat(100))
        console.log("\n")
        console.log("STEP 4 -> WRITING FILE STARTING")
        const writing = fs.writeFileSync(outputPath, data, 'utf-8');
        console.log("STEP 5 -> WRITING FILE COMPLETED")
        console.log("\n")
        console.log("SCRIPT FINISHED")
        return;
    } catch (error) {
        console.log(`Error : ${error.message}`)
    }
}

readWriteFileSyncronously()

