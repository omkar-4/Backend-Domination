const express = require('express');
const app = express();
const cors = require ('cors');

// app.use(cors()); // for all routes

app.get('/',function(req,res,next){
    res.send("hey");
});

app.get('/shareable', cors(), function(req,res,next){
    res.send("shareable");
});

app.listen(3000);