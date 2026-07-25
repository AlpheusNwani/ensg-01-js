const myName = "John Doe";
// console.log(myName);

function doSomething() {
    const occupation = "Software Engineer";
    console.log(myName);
    
}
// console.log(occupation);
doSomething();

/* 
local scope 
    - function scope
    - block scope
*/

// Block scope
const age = 19;
if (age >= 18) {
    const message = "You can vote";
    console.log(age);
    // console.log(message);
} else {
    console.log("you cannot vote");
}

// console.log(message);


//  var, let, const
// var is function scoped
// let and const have block scope

function double() {
    var num = 10;
    console.log(num * 2);
} 

// console.log(num);

const myNum = 16;
if (myNum < 17) {
    const res = "Low number";
}

// console.log(res);


// Hoisting

// Hoisting with var
console.log(userName);
var userName = "Maxwell";
console.log(userName);

// Hoisting with let and const
// console.log(role);
// console.log(skills);
let role = "DevOps";
const skills = ["DevOps", "Frontend"];


// Hoisting with function declaration
{
    sayHello()
    function sayHello() {
        console.log("Hello World..");
    }
}

// Hoisting with function expressions and arrow functions

{
    // sayHello();
    const sayHello = function() {
        console.log("Hello World");
    }
}

{
    sayHello();
    const sayHello = () => console.log("Hello World");
}