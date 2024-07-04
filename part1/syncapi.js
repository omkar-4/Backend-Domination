const fs = require('node:fs');

fs.writeFileSync("moi.md","# huh whatever");

// fs.readFile("buri.txt") // file doesn't exists
// would give error.

// because sync has a blocking nature, the next lines of code would never run, if error comes

// fs.readFile("hello.txt") // wrong syntax

// fs.readFileSync("helo.txt") // file doesn't exists
/*
errno: -4058,
  code: 'ENOENT',
  syscall: 'open',
  path: 'D:\\MyStuff\\1 Projects\\Backend Domination\\helo.txt'
*/

console.log(fs.readFileSync("hello.txt")) //buffer
console.log(fs.readFileSync("hello.txt", "utf-8"))