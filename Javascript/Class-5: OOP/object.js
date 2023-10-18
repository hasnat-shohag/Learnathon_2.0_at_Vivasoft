// function areObjectsEqual(obj1, obj2) {
// 	const keys1 = Object.keys(obj1);
// 	const keys2 = Object.keys(obj2);

// 	// Check if the number of keys is the same
// 	if (keys1.length !== keys2.length) {
// 		return false;
// 	}

// 	// Check if the keys and their values are the same
// 	for (const key of keys1) {
// 		if (obj1[key] !== obj2[key]) {
// 			return false;
// 		}
// 	}

// 	return true;
// }
// console.log(areObjectsEqual(myCar, myCar2));

const myCar = {
	make: "Ford",
	model: "Mustang",
	year: 1969,
	start: function () {
		console.log("Engine started");
	},
	stop: function () {
		console.log("Engine stoped");
	},
};

const myCar2 = { ...myCar };

// delete object property

// delete myCar2[start];
// delete myCar.make;

// 	delete whole objects;

const arr = Object.keys(myCar);

// arr.map(function(elm){
// 	delete myCar2[elm];
// })
// console.log(arr);
console.log(myCar, myCar2);

// console.log(JSON.stringify(myCar) === JSON.stringify(myCar2));

class MyCar {
	constructor(make, model, year) {
		this.make = make;
		this.model = model;
		this.year = year;
		this.start = function () {
			console.log("Engine started");
		};
		this.stop = function () {
			console.log("Engine stoped");
		};
	}
}

const obj = new MyCar("Toyota", "Hybrid", 1964);
// pbj.
// console.log(obj.start());
// obj.start();
