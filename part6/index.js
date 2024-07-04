const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get('/', (req,res)=>{
    res.render('index');
});

app.get('/check', (req,res)=>{
    // res.send("working");
    console.log(req.query)
    res.send('mil gaya get data');
});

app.post('/create', (req,res)=>{
    // res.send("working");
    console.log(req.body);
    res.send('mil gaya post data');
});

app.listen(3000);