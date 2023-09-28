// const btn = document.getElementById('btn');

// btn.addEventListener('click', ()=>{
//     console.log("ok");
//     const apiUrl = fetch('https://api.openweathermap.org/data/2.5/weather?q=mymensingh&appid=e56716788625688f1c86322b576b8a57&units=metric');

//     apiUrl
//     .then((data) => {
//         return data.json();
//     })
//     .then((data) => {
//         console.log(data.main);
//     })
//     .catch((err)=>{
//         console.error(err);
//     })
// });

// function fun1(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(5);
//         }, 2000);
//     });
// }

// async function fun(){
//     let a = await fun1();
//     let b = 6;
//     console.log(a+b);
// }
// fun();

// function greet(name, callback) {
//     console.log('HELLO' + ' ' + name);
//     callback();
// }
// function callMe() {
//     console.log('I am a callback function');
// }
// greet('VIVASOFT', callMe);

// const add = function (a, b, callback) {
//   setTimeout(() => {
//     callback(a+b);
//   }, 2000);
// };

// add(1, 2, (sum1) => { // 3
//   add(3, sum1, (sum2) => { // 6
//     add(4, sum2, (sum3) => { //  10
//       add(5, sum3, (sum4) => { // 15
//         add(6, sum4, (sum5) => {
//           add(7, sum5, (sum6) => {
//             add(8, sum6, (sum7) => {
//               console.log(`Sum of first 4 natural numbers using callback is ${sum7}`);
//             });
//           });
//         });
//       });
//     });
//   });
// });
// // class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   sayHello() {
//     console.log(`Hello, I am ${this.name}`);
//   }
// }

// class Student extends Person {
//   constructor(name, age, id) {
//     super(name, age);
//     this.id = id;
//   }
//   sayHello() {
//     super.sayHello();
//     console.log(`My id is ${this.id}`);
//   }
// }

// Person obs1 = new Student("Rahim", 20, 124);
// Student obs2 = new Student("Karim", 20, 123);

// function fun(){
//   // const btn = document.getElementById('btn');

//   document.getElementById('para').innerHTML = `Hello <br> Elius <br> How are you?`;
// }

// document.body.onload = fun();

// console.log("first");
// console.log("second");
// setTimeout(()=>{
//   console.log("three");
// },4000)
// console.log("fourth");

// const addPromise = function (a, b) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(a + b);
//     }, 2000);
//   });
// };

// addPromise(1, 2)
//   .then((sum1) => {
//     return addPromise(3, sum1);
//   })
//   .then((sum2) => {
//     return addPromise(4, sum2);
//   })
//   .then((sum3) => {
//     return addPromise(5, sum3);
//   })
//   .then((sum4) => {
//     return addPromise(6, sum4);
//   })
//   .then((sum5) => {
//     return addPromise(7, sum5);
//   })
//   .then((sum6) => {
//     return addPromise(8, sum6);
//   })
//   .then((sum7) => {
//     console.log(
//       `Sum of first 8 natural numbers using promise and then() is ${sum7}`
//     );
//   })
//   .catch((error) => {
//     console.error(error.message);
//   });

// const addPromise = function (a, b) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(a + b);
//     }, 2000);
//   });
// };

// async function add1To8() {
//   try {
//     const sum1 = await addPromise(1, 2);
//     const sum2 = await addPromise(3, sum1);
//     const sum3 = await addPromise(4, sum2);
//     const sum4 = await addPromise(5, sum3);
//     const sum5 = await addPromise(6, sum4);
//     const sum6 = await addPromise(7, sum5);
//     const sum7 = await addPromise(8, sum6);
//     console.log("Sum of first 8 natural numbers using async / await is ", sum7);
//   } catch (error) {
//     console.error(error.message);
//   }
// }
// add1To8();

//                Call Back Function

function arrr(num){
  let arr = [];
  for(let i = num; i<= 3; i++) arr.push(i);
  return arr;
}

function performOperation(number, callback) {
  const result = callback(number);
  console.log(`Callback Function Result: ${result}`);
}

const inputNumber = 1; 


performOperation(inputNumber,arrr);