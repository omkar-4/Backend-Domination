# Express Domination - Error Handling

### Introduction to Error Handling in API Development
- if your top-level of code is incorrect, app will crash eg. app.fet (app.get) or express () {express()}
- ReferenceError : In req res cycle, you are asking something which is not there on server, eg. a variable which doesn't exists res.send(hey); [hey will be treated as variable] {'hey'}, app won't crash, means you can handle other routes

### Basics of Error Handling in API Development - Building Resilient APIs
- error handler created at last. because all error would come after the routes have run. so using 'next' direct control to error handler if in case
- to handle errors yourself you'd use try-catch, because you don't wanna be dependent on express's intelliSense.
- using next(err) you forward the error to the error handler.