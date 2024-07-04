const express = require('express');
const app = express();

// app.set('view engine', 'ejs');
// app.use(express.json());
// app.use(express.urlencoded({extended: true}));

app.get('/', (req,res)=>{
    // res.render('index');
    res.send("hello, working")
});

app.get('/check', (req,res)=>{
    // res.render('index');
    res.send("check get working");
});

app.post('/check', (req,res)=>{
    res.send("check post working");
})

app.put('/check', (req,res)=>{
    res.send("check put working");
})

app.patch('/check', (req,res)=>{
    res.send("check patch working");
})

app.listen(3000);