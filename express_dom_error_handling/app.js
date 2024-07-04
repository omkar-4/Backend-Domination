const express = require('express');
const app = express();

app.get('/', (req,res, next)=>{
    // res.send('Hello to root');
    try{
        res.send("hey");
    }catch(err){
        next(err);
    }
});

// error handler
app.use((err,req,res,next)=>{
    // res.status(500).send("Internal Server Error");
    res.status(500).send(err.message);
});

app.listen(3000);