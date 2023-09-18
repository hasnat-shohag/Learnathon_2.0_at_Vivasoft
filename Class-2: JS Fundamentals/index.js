// const arr = [1,2,3,4];
// const newArr = arr.map(elem => {
    //     return elem * 2
// });
// console.log(newArr);



//          Polyfill for map function


const arr = [1,2,3,4,5,6,7,8];

function callback(elm) {
	return elm * 2;
}

Array.prototype.myMap = function (callback) {
	const newArr = [];
	for (let i = 0; i<this.length; i++) {
		newArr.push(callback(this[i]));
	}
	return newArr;
};

const newArr = arr.myMap(callback);
console.log(newArr)











// let arr4 = [1,2,3,4,1];
// let result4 = arr4.indexOf(1,1);
// console.log(result4)








// let arr1 = [1,2,3,4,5];
// arr1.forEach(function(word) {
//     console.log(word);
// });





// function nestedScopeTest() {
//     if (true) {
//       var functionVariable = 1;
//       let blockVariable = 2;
  
//       console.log(functionVariable); // will print 1
//       console.log(blockVariable); // will print 2
  
//       if (true) {
//         console.log(functionVariable); // will print 1
//         console.log(blockVariable); // will print 2
//       }
//     }
  
//     console.log(functionVariable); // will print 1
//     console.log(blockVariable); // will throw an error
//   }
  

