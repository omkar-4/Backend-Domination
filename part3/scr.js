const express = require('express');
const app = express();
const morgan = require('morgan')

// app.use(morgan("dev"));
// app.use(morgan("tiny"));
app.use(morgan("combined"));

app.get('/',(req,res,next)=>{
    res.send('Hello World');
})

app.listen(3000);