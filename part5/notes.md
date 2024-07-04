### Steps -
1. install ejs from npm
    npm i ejs
2. app.set('view engine', 'ejs');
3. create a 'views' folder
4. create a view index.ejs
5. load the html in the ejs page
6. use the res.render in place of res.send to render any page from views folder

### Form Handling -
- it is necessary to give name attribute to each input field, if you don't, it won't work.
- whatever 'name' you give to input field, by the exact same name the data goes to the backend. If no name, no data going to backend.
- submit doesn't has any data, so no need of name.
- to send data to the backend, you have to add/specify a route in the form 'action' attribute. Also make sure you add '/'
- agar form submit kara hai and data url me dikh raha hai, means uska method 'get' hai
- params are urls not data, data is called 'query'
- after ? whatever is written is called 'query' (which is data)
- query is plain-data, which directly gets to backend, and doesn't needs any handling.
- to understand POST data, the data is first encrypted/encoded and is then sent along stuck to the body in the request.
- app.use(express.urlencoded({extended: true})); is for supoorting all kinds of forms, of POST type/method. extended: true, means you can even support very advanced data-structures like array & objects.
- app.use(express.json()) is usually used when we use frameworks like react or vue and send data through 'axios'.
- to send data without forms, we use json. app.use(express.json()) will be used when we'll throw json request from another frontend to out API, then through this code we'll get the data.
- something called 'ajax' request, research on that

#### checklist -
- [x] when creating form, check if all fields have 'name' property
- [x] form has action or not
- [x] backend has route or not
- [x] that route is of correct type (get/post...)
- [x] if you getting data in route based on their types(get,post...),
(by-default the type is GET)
    - req.query GET
    - req.body POST
- [x] console.log(req.body); will only work iff, these 2 lines are written
    - app.use(express.json());
    - app.use(express.urlencoded({extended: true}));

