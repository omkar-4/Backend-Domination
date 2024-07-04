const express=  require('express');
const app = express();
const expressSession = require('express-session');
const flash = require('connect-flash');

const port = 3000;
const host = 'localhost';

app.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: 'anything you like'
}));

app.use(flash());


app.get('/',function(req,res,next){
    req.flash("error", "invalid cradentials");
    res.redirect('/error');
});

app.get('/error',function(req,res,next){
    let message = req.flash('error');
    res.send(message);
});

app.listen(port,host,() => {
    console.log(`\nserver is running at http://${host}:${port}\n`);
});