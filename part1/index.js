
const fs = require('node:fs');

var oneLinerJoke = require('one-liner-joke');

var getRandomJoke = oneLinerJoke.getRandomJoke();
console.log(getRandomJoke)

// read file
// write file
// update file
// append file
// delete file
// folder creation
// copy rename move

// fs.writeFile(file,data[options],callback)
fs.writeFile("abcd.txt","hello world", function(err){
    if(err){
        console.error(err);
    }
    else{
        console.log("fle created successfully");
    }
})

fs.readFile("abcd.txt","utf8",function(err,data) {
    if(err){
        console.error(err);
    }
    else{
        // console.log(data.toString());
        console.log(data);
        // if data without .toString() then add the encoding flag utf8
        // <Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64>
        // hello world in hexadecimal format
        // by default it returns 'raw buffer' or hexadecimal format 
    }
});

console.log("--------------------");

fs.readFile("non_existing_file.txt","utf8",function(err,data) {
    if(err){
        console.error(err);
    }else{
        console.log(data);
    }
})
// first it reads and if not-found throws error, then returns all the cases when something is found.

fs.appendFile("abcd.txt", " appended data", function(err){
    if (err){console.error(err);}
    else{console.log("data appended successfully");}
})

fs.rename("abcd.txt","hello.txt",function(err){
    if(err){console.error(err);}
    else{console.log("renamed successfully");}
})

// delete
fs.unlink("abcd_copy.txt",function(err){
    if (err) console.error(err);
    else{console.log("file deleted successfully");}
})

fs.mkdir("lolo", function(err){
    if (err) console.error(err);
    else{console.log("folder created successfully");}
})

fs.readdir("lolo",{withFileTypes: true},function (err,files) {
    if (err) console.error(err);
    else console.log(files)
})
// we get dirent <-
// symbol = 1 : file
// symbol = 2 : folder

// delete folder
fs.rmdir("lolo/kholo", function(err){
    if (err) console.error(err);
    else{console.log("folder deleted successfully");}
})
// can't delete file containing folders
// need to recursively delete everything inside first one by one, then delete the main folder


// fs.rmdir("lolo/kholo", {recursive: true},function(err){
//     if (err) console.error(err);
//     else{console.log("folder deleted successfully");}
// })
// deprecated - do not use


fs.rm("lolo/kholo", {recursive: true},function(err){
    if (err) console.error(err);
    else{console.log("folder deleted successfully");}
})

