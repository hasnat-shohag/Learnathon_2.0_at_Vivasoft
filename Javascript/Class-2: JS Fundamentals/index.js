for (var i = 0; i < 5; i++) {
	setTimeout(() => {
	  console.log(i);
	}, 2000);
  }
  






// var hoistingIntro = "Hi there, I am a string one.";
 
// function hoistingFunc() {
// 	console.log(hoistingIntro); // Undefined Why?
// 	var hoistingIntro = "Hi there, I am a string two";
// 	console.log(hoistingIntro);
// }
 
// hoistingFunc();





// let animal='dog';
// console.log(animal);
// if(true){
//  let animal = 'cat';
//  console.log(animal);
// }
// console.log(animal);


// function scope(){
// 	if(true){
// 	 var a = 'This is funtional scope';
// 	 let b = 'this is block scope';
// 	}
	
// 	console.log(a) // It is showing output coz var is functional scope
// 	console.log(b) // b is undefined coz let is block scope
// }
// scope();






// const arr = [1,2,3,4];
// const newArr = arr.map(elem => {
    //     return elem * 2
// });
// console.log(newArr);



//          Polyfill for map function


// const arr = [1,2,3,4,5,6,7,8];

// function callback(elm) {
// 	return elm * 2;
// }

// Array.prototype.myMap = function (callback) {
// 	const newArr = [];
// 	for (let i = 0; i<this.length; i++) {
// 		newArr.push(callback(this[i]));
// 	}
// 	return newArr;
// };

// const newArr = arr.myMap(callback);
// console.log(newArr)


// 							JS Scope

// 'ar global'ariable = "I am global 'ariable.";
 
// 'ar myFunc = function () {
// 'ar local'ariable = "I am local 'ariable.";
 
// console.log(global'ariable);
// console.log(local'ariable);
// };
 
// myFunc();
// // I am global 'ariable.
// // I am local 'ariable.
 
// console.log(local'ariable); // undefine

// 							Lexical Scoping

// function outerFunc(a) {
// 	'ar outerFunc'ariable = "Hi there, I am outer " + a;
	 
// 	console.log(outerFunc'ariable); // Hi there, I am outer function 'ariable
	 
// 	function innerFunc() {
// 		'ar innerFunc'ariable = "Hi there, I am inner " + a;
// 		console.log(innerFunc'ariable); // Hi there, I am inner function 'ariable
// 	}
	 
// 	innerFunc();
	 
// 	console.log(innerFunc'ariable); // undefined
// }
	 
// outerFunc("function 'ariable");


// function myFunc()
// {
//  'ar y=20
//  console.log(y)
// }
// myFunc()
// console.log(y)



// let arr4 = [1,2,3,4,1];
// let result4 = arr4.indexOf(1,1);
// console.log(result4)








// let arr1 = [1,2,3,4,5];
// arr1.forEach(function(word) {
//     console.log(word);
// });





// function nestedScopeTest() {
//     if (true) {
//       'ar function'ariable = 1;
//       let block'ariable = 2;
  
//       console.log(function'ariable); // will print 1
//       console.log(block'ariable); // will print 2
  
//       if (true) {
//         console.log(function'ariable); // will print 1
//         console.log(block'ariable); // will print 2
//       }
//     }
  
//     console.log(function'ariable); // will print 1
//     console.log(block'ariable); // will throw an error
//   }
  

