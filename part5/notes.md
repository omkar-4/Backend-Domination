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