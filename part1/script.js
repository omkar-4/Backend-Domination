// Understanding Variables
// Data Types
// Operators
// Loops
// Conditional Statements
// Functions

// Callbacks
// Promises
// async/await

// Modular Organization
// Import/Export
// Node.js

// - Variables
var v = 15;
let l = 5;
const c = 100;

// - Data Types
// 2 catagories of data types - Primitive and Reference
// [] () {} - reference type value
// all other - primitives

let arr1 = [1,2,3];
let arr2 = arr1;
arr2.pop();
console.log("arr2",arr2);
console.log("arr1",arr1);

let arr3 = [...arr1];
arr3.pop();
console.log("arr3",arr3);
console.log("arr1",arr1);

// OUT
/*
arr2 (2) [1, 2]
arr1 (2) [1, 2]
arr3 (1) [1]
arr1 (2) [1, 2]
*/

// spread operator ... to make copy
// works both for arrays and objects

let obj1 = {a:1,b:2};
let obj2 = {...obj1};
obj2.b = 3;
console.log("obj2",obj2);
console.log("obj1",obj1);

let obj3 = obj1;
obj3.a = 7;
obj3.b = 9;
console.log("obj3",obj3);
console.log("obj1",obj1);

// OUT
/*
obj2 { a: 1, b: 3 }
obj1 { a: 1, b: 2 }
obj3 { a: 7, b: 9 }
obj1 { a: 7, b: 9 }
*/

// arithmetic operators
// + - * / %

// increment decrement/unary operators -> ++ --

// Logical operators
// && || !

// Conditional operators
// ? :
// Ternary operators

// Loops
// for
// while
// do-while
// for-in
// for-of
// break continue
// labelled break continue

// Conditional Statements
// if else, else-if
// switch case
// ternary operators
// nullish coalescing operator ??

// Functions
// function declaration
// function expression

// truthy falsy
// falsy - 0, "", null, undefined, NaN, false, document.all

// == equality with type conversion,
// === equality without type conversion
// = assignment
// != not equal

// += -= *= /= %=

obj4 = {name: "John", age: 30};
for (let value in obj4) {
    console.log(value, obj4[value]);
}
// for in loop

let a,b;
a = 10;
b = 20;
a>b ? console.log("a>b", a, b) : console.log("b>a",b,a);

function fnname () {
    // fn statement
}

let anony = function (){
    // anonymous function
};

()=>{
    // arrow or fat-arrow function
}

single_param=>{
    // fat arrow function with 1 param
    // return statement
}

// version 1
single_param_implicit_return=>(
    // fat arrow fn with implict return
    console.log("single_param_implicit_return")
)

// version 2
a=>15

// string to integer in js
// parseInt()
// parseInt(string, radix)

// string to float in js
// parseFloat()
// parseFloat(string, radix)

// string to boolean in js
// Boolean()
// Boolean(string)

// string to array in js
// split()
// split(string)

// array to string in js
// join()
// join(string)

// array to object in js
// Object()

// object to array in js
// Array()

// object to string in js
// JSON.stringify()

// string to object in js
// JSON.parse()

// array to object in js
// Object.fromEntries()

// object to array in js
// Object.entries()

// object to string in js
// Object.keys()

// string to object in js
// Object.values()

console.log(3+4+"5");

// callbacks, promises, async/await
function getSongs(){
    setTimeout(function(){
        console.log("songs aa gye");
    }, 300);
}
getSongs();

function getMoreSongs(){
    setTimeout(function(){
        console.log("more songs aa gye");
    }, 120);
}
getMoreSongs();

// this is a problem, songs ke baad more songs aana chiye
// for that we use "callbacks"

function connectToServer(cbfn){
    console.log("connecting to server...");
    setTimeout(function(){
        console.log("connected to server");
        cbfn();
    },1000)
}

function fetchCourses (cbfn){
    console.log("fetching courses...");
    setTimeout(function(){
        console.log("fetched courses");
        cbfn(["course1", "course2", "course3"]);
    }, 3000);
}

connectToServer(function(){
    fetchCourses(function(data){
        console.log(data);
    });
});

// this chains of callbacks is called "callback hell"

// ----------------

// new keyword in js?

// promises
function serverConnect(){
    console.log("connecting to server...");
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            // console.log("connected...")
            resolve("connected...");
        },2000)
    })
}

function getCourses(){
    console.log("getting courses...");
    return new Promise(function(resolve,reject){
        resolve("[course_pack1, course_pack2, course_pack3]");
    })
}

serverConnect()
.then(function (response) {
    console.log(response);
    return getCourses();
})
.then(function (response) {
    console.log(response);
})

// .then() - if resolve runs
// .catch() - if reject runs

// async function getVideos(){
//     await 
// }

// esm - import export


// cjs - require module.exports
