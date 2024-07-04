const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')

app.use(cookieParser());

app.get('/', (req, res,next) => {   
    res.send('This is ROOT!');
});

app.get('/check',(req,res,next)=>{
    // console.log(req.cookies.banned);
    console.log(req.cookies.name);
    // cookies ko read karne ke liye package chahiye, cookie parser
    res.send("checking...");
});

app.get('/banned', (req,res,next) => {
    // res.cookie('banned', true);
    res.cookie("name", "harsh");
    res.send('name');
})

app.listen(3000);

