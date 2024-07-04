# Express Domination - API & Postman

### API Basics: Introduction to Building and Consuming APIs
- On different different frontends, you have to update the page. We'll create a single server which will contain a single database, and that will power every other frontend, any OS. This happens through API.
- When you create APIs you only get data, not page/frontend.
- [{notifications: ["notification 1", "notification 2"]}]; this is the kind of only-data which we get through API.
- On different devices, we can have different pages, so we code pages differently, for data we use API, and show it on frontend, the way we want to show.
- from where in the server 'only-data' is coming, is the API. API gives data.
- google > random user api. free APIs available on the internet
    - https://randomuser.me/
    - copy the url (https://randomuser.me/api/) from the website and open in a new tab:
    ```
        $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function(data) {
            console.log(data);
        }
        });
    ```
    - you'll only get data. no page/frontend, only data
- to test APIs, there's a software called postman

### Getting Started with Postman: Streamlining API Development and Testing
- there's a " + " icon. and now you can use it just like a browser

### Basic Interaction with Postman - Exploring Essential Features
- send a get request to localhost:3000 and get some data back (200 OK)

### HTTP Methods in API Development - Leveraging RESTful Principles
- GET : bring something from server
- POST : something changes on server, in aspect that something is created
- PUT : for updating, and it replaces completely
- PATCH : for updating, doesn't replaces everything, only replaces what needs to be replaced
- All these different kinds of requests are performed using RESTful APIs

### More on HTTP Methods in API Development - Resource Operation
- HEAD method means, what kind of headers does the server wants to set, what are options available for your use
- Option method tells what options are available on server, how many http methods are supported : get, post, put ...

### Quiz -
- app.route() -> chains multiple route handlers for a single route.  This allows you to define multiple route handlers for the same route path and HTTP method in a more concise and organized manner.