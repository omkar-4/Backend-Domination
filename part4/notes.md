### QA.
- Route parameters in express are NOT passed in the request body. instead, they are part of the url path and are accessible via req.params. They are placeholders in the route definition that capture values specfied in the URL and are typically used to dynamically handle variable paths.

- app.use() is used to chain multiple middlewares into a single route. This method allows you to specify middleware fns that will be executed in order they are defined when a request matches the specific route.

app.use((req,res,next)=>{
    console.log('middleware fn');
    next();
});
-- logs 'middleware fn' to the console, then the next fn passes control to next middleware fn in the stack.

