//! Function statement and expression
/*
a();
b();
function a() {
    console.log("A");
}

var b = function (){
    console.log("B");
}
*/
//? In memory Creation Phase
//      a = function
//      b = undefined

//? Code execution phase
//      a is called
//      In line 3 now b is a variable with value undefined
//
//      But if b is called after line 11, then
//      b = function in line 9, then b is called.

//! First Order Function

// let fun = function(){
//     return function x() {
//         console.log("First Order Function");
//     }
// }

// console.log(fun());

//* Another example

// function sayHello() {
// 	return "Hello, ";
// }
// function greeting(helloMessage, name) {
// 	console.log(helloMessage() + name);
// }

// greeting(sayHello, "JavaScript!");

//? The function that we pass as an argument to another function is called a callback function.
//? sayHello() is a callback function.




