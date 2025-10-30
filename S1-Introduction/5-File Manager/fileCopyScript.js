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
const inputPath = "/Users/rahulmishra/Desktop/learning/AirTribe-NodeJs/S1-Introduction/5-File Manager/directory-1/input.txt"
const outputPath = "/Users/rahulmishra/Desktop/learning/AirTribe-NodeJs/S1-Introduction/5-File Manager/directory-2/output.txt"

//first script to read the file syncronously and write syncronously
function readWriteFileSynchronously() {
    try {
        console.log(`SCRIPT NAME : Read and Write the file Syncronously`)
        console.log("\n")
        console.log(`STEP 1 -> READING FILE STARTING`)
        const data = fs.readFileSync(inputPath, { encoding: 'utf-8' });
        console.log(`STEP 2 -> The data is : ----| ${data}`)
        console.log(`STEP 3 -> READING FILE COMPLETED`)
        console.log("\n")
        console.log("=".repeat(100))
        console.log("\n")
        console.log("STEP 4 -> WRITING FILE STARTING")
        if(!outputPath.endsWith(".txt")) {
            throw new TypeError("The file can be only of text format")
        }
        const writing = fs.writeFileSync(outputPath, data, 'utf-8');
        console.log("STEP 5 -> WRITING FILE COMPLETED")
        console.log("\n")
        console.log("SCRIPT FINISHED")
        return;
    } catch (error) {
        console.log(`Error : ${error.message}`)
    }
}

function readWriteFileAsynchronously() {
    console.log("STEP 1 : STARTING READING THE FILE ")
    fs.readFile(inputPath, { encoding: 'utf-8' }, (error, fileData) => {
        if (error) {
            console.log("Error file reading file", error.message);
        } else {
            console.log(`STEP 2 -> The data is : ----| ${fileData}`)
            console.log(`STEP 3 -> READING FILE COMPLETED ASYNCHRONOUSLY`)
            console.log("\n")
            console.log("=".repeat(100))
            console.log("STEP 4 -> WRITING THE FILE")
            if(!outputPath.endsWith('.txt')) {
                throw new TypeError("The file can only be of text format.")
            }
            fs.writeFile(outputPath , fileData , {encoding : 'utf-8'} , (error , data ) => {
                if(error) {
                    console.log(`Error file writing the file : ${error.message}`)
                } else {
                    console.log("STEP 5 -> WRITING FILE IS DONE.")
                    console.log("\n")
                    console.log("SCRIPT FINISHED")
                }
            })
        }
    })
}

function readFileSyncWriteFileAsync() {
    console.log("STEP 1 : READING FILE SYNCHROUNOUSLY")
    const data = fs.readFileSync(inputPath , {encoding : 'utf-8'} )
    console.log("STEP 2 : FILE READING IS COMPLETED")
    console.log("\n")
    console.log("-".repeat(100))
    console.log("\n")
    console.log("STEP 3 : FILE WRITING STARTED")
    fs.writeFile(outputPath , data , (error) => {
        if(error) {
            console.log("There is some error in reading file.")
        } else {
            console.log(`STEP 4 : WRITING FILE COMPLETED.`)
            console.log("\n")
        }
    })



    
}

//SCRIPT CALLING  - UNCOMMENT TO CALL WHATEVER SCRIPT YOU WANT TO RUN

//SCRIPT 1 - READ AND WRITE SYNCHRONOUSLY
// readWriteFileSynchronously()

//SCRIPT 2 - READ AND WRITE ASYNCHRONOUSLY
// readWriteFileAsynchronously()

// 3. Read the file Synchronously and write the file asynchronously
//SCRIPT 3 - READ FILE SYNC AND WRITE FILE ASYNC
readFileSyncWriteFileAsync()
