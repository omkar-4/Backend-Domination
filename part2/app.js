const express = require('express');
const app = express();
const expressSession = require('express-session')

const port = 3000;
const host = 'localhost';

// app.get(route,handler function(req, res)
// request handler fn is a middleware function
// there's a * route which works for every route. Even if a route is specified like / or .., still * route will be shown, if it is specified at the start, but if in the end, if no route works, it will. something like 404 page, for all pages not found.

// if any fn has it's params > req, res, next ; it is a middleware

app.use(expressSession({
    secret: 'random stuff',
    resave: false,
    saveUninitialized: false
    // cookie: {
    //     maxAge: 1000 * 60 * 60 * 24 * 7
    // }
}))

app.use((req,res,next) => {
    // 'use' yaani chalega hi chalega
    console.log('\noye, aage ja\n');
    next();
});

app.get('/', (req, res) => {
  res.send('This is ROOT!');
  // next param not needed rn
});

app.get('/create', (req, res) => {
    req.session.polo = true;
    res.send('session creation done!');
});

app.get('/check', (req, res) => {
    console.log(req.session.polo);
    res.send('session check done!');
});

app.get('/about', (req, res) => {
    res.send('I am Omkar!');
});

app.get('*', (req, res) => {
    res.send('If nothing works, I will');
});
// universal route

app.listen(port,host, () => {
  console.log(`listening on port${port}`);
});
