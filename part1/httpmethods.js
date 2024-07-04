const http = require('http');
const fs = require('node:fs');
const port = 3000;
const host = 'localhost';

var server = http.createServer(function (req, res){
    const root = "root.html";
    const errorpage = "errorpage.html"; 
    if(req.url === '/'){
    fs.readFile(root, function(err,root){
        if(err){
            fs.readFile(errorpage, function(err,errorpage){
                res.end(errorpage);
            })
        }
        else{
            res.end(root);
        }
    })
   }
   else if(req.url == '/about'){
    res.end("about page");
   }
   else{
    // res.end("page not found");
    fs.readFile(errorpage, function(err,data){
        res.end(data);
    })
   }
});

server.listen(port, host, function (){
    console.log(`My Server is running on port ${port} - yay! `);
});

// http methods (request types)-
    // get - server se laao
    // post - create
    // put - update everything (rewrite)
    // patch - update only specific part (rewrite) which is incorrect
    // delete - delete content