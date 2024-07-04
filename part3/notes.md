### Q. How do you access URL parameters in an express js route handler?
- Using req.params
    = You access URL parameters in ana express js route handler using req.params. This property contains route parameters extracted from the URL path. For example, if you define a route like '/users/:usedId', you can access the 'userId' parameter using req.params.userId within the route handler. The value of the 'userId' parameter is available in the req.params object.

### CORS Middleware - Cross-origin Resource Sharing Middleware

- Browsers have a security feature because of which you cannot ask for or show data from any other web domain, browser stops you from doing so. Now, if you want that the browser allows you to request/bring data, then you'll have to through that website's server enable CORS.
-- script.js

### Q. Which middleware function is used to parse incoming request bodies in Express.js?
- express.urlencoded()
    = this middleware fn is used to parse incoming request bodies when data is encoded in URL-encoded format. This middleware is commonly used to handle form submissions where the data is sent in the body of the request using the application/x-www-form-urlencoded content type.

### Cookie Parser Middleware
- if you want to save something on user's browser when the user goes to a specific route.
    = you don't need a package to save cookies, but need it to read it's contents.

### Q. What does the express.static() middleware function do in Express.js?
- Serves static files such as images, CSS and JS.
    = It's used to serve static files from a specific directory. When a request is made for a file, Express.js will auto search the specific dir and serve te file if it exists.

### Q. What is the purpose of next parameter in Express.js middleware functions?
- To pass control to next middleware fn
    = pass to next in the 'stack'. When invoked, it hands over control to next middleware fn. If it is not called within the middle ware fn, the request-response cycle will be halted, and the client will recieve no response.

### QA
- 👉🏻 app.all() method in express is used to handle all HTTP methods (GET,POST,PUT,DELETE, etc.) for a given route. It specifies that the route handler fn will be executed for all HTTP methods specified in the request.

---------- END ---------