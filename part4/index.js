const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.send('This is ROOT!');
    /*
    // console.log(req);
    // console.log(req.body);      //undefined rn
    // console.log(req.cookies);   //undefined rn
    // console.log(req.query);     //[] blank object
    // console.log(req.ip);        // ::1 (default)
    // console.log(req.headers);   // data ✅
    // console.log(req.method);
    // console.log(req.url);
    // console.log(res);
    */
});

app.get('/about',(req,res)=>{
    res.send('This is ABOUT!');
})

/*
app.get('/profile/harsh',(req,res)=>{
    res.send("This is harsh's page!");
})
*/

app.get('/profile/:username',(req,res)=>{
    res.send(req.params.username + "'s page" )
})

app.get('/author/:username/:age',(req,res)=>{
    // res.send("Hi I am " + req.params.username + " and I am " + req.params.age + " years old. ")
    res.send(`Hi, I am ${req.params.username} and my age is ${req.params.age}`);
})

app.listen(3000);