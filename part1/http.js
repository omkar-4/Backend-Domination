const http = require('http');
const fs = require('node:fs');

port = 3000;
host = 'localhost';

var server = http.createServer(function (req, res){
    const root = "root.html";
    const errorpage = "errorpage.html"; 
    if(req.url === '/'){
    // console.log(req);
    // console.log(req.url === '/');
    // res.end("hello hi, kaise ho");
    // res.end("http.html");
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






// by default 2 request jaati hai / route and favicon ke liye
// isiliye <  console.log(req.url === '/');  > me ek 'true' for / and ek 'false' for "favicon not found" milta hai