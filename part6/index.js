const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.json());


app.get('/', (req,res)=>{
    res.render('index');
});

app.get('/check', (req,res)=>{
    res.send("working");
});

app.listen(3000);