const fs = require("fs");
const path = require("path");
const getFolderPath = path.join(__dirname,"files");
const getFilePath = `${getFolderPath}/test.txt`;
const getNewFilePath = `${getFolderPath}/hello.txt`;

//Create the file
// fs.writeFileSync(getFilePath,"This is the file content new");

//Read the file
// fs.readFile(getFilePath, 'utf-8',(err, item)=>{
//     if(err) console.log('this is not found');
//     console.log(item);
// });


//update the file : They will concatenate the string with old one
// fs.appendFile(getFilePath,"This is the updated text of the file system", (err)=>{
//     if(err) console.log(err);
//     console.log('updated');
// });

//Rename the file
// fs.rename(getFilePath, getNewFilePath, (err)=>{
//     if(!err) console.log('file rename done');
// });


//delete the file
// fs.unlinkSync(getNewFilePath,(err)=>{
//     if(!err) console.log('File Deleted Done');
// });