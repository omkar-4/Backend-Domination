const express = require('express');
const app = express();

app.get('/', (req,res,next)=>{
    try{
        res.send('Hello World');
    }catch{
        next(err);
    }
});

app.use((err,req,res,next)=>{
    res.status(500).send(err.message);
});

app.listen(3000);