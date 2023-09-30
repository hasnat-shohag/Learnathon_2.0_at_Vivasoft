// const student1 = {
//   name: "John",
//   age: 20,
// };

// const student2 = {
//   name: "John",
//   age: 20,
// };

// if (JSON.stringify(student1) === JSON.stringify(student2)) {
//   console.log("দুটি অবজেক্ট একই।");
// } else {
//   console.log("দুটি অবজেক্ট বিভিন্ন।");
// }

// const person = {
//   firstName: "Elon",
//   lastName: "Musk",
//   age: 25,
//   cars: [
//     { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
//     { name: "BMW", models: ["320", "X3", "X5"] },
//     { name: "Fiat", models: ["500", "Panda"] },
//   ],
// };

// const lastName = person.age;
// console.log(person.age);
// //returns array of names of his cars
// const carNames = person.cars.map((elm) => elm.models);
// console.log(carNames);

// const student = {
//   name: "John",
//   age: 20,
//   marks: {
//     science: 70,
//     math: 75,
//     test: {
//       a: 4,
//       b: 5,
//     },
//   },
// };

// for (let key in student) {
//   if (typeof student[key] === "object") {
//     for (let innerKey in student[key]) {
//       if (typeof student[key][innerKey] === "object") {
//         for (let innerInnerKey in student[key][innerKey]) {
//           console.log(
//             `${innerInnerKey}: ${student[key][innerKey][innerInnerKey]}`
//           );
//         }
//       } else {
//         console.log(`${innerKey}: ${student[key][innerKey]}`);
//       }
//     }
//   } else {
//     console.log(`${key}: ${student[key]}`);
//   }
// }

// const { name, age, marks: { science, math } } = student;
// console.log('নাম: ' + name);
// console.log('বয়স: ' + age);
// console.log('scinece: ' + science);
// console.log('গণিত: ' + math);
// console.log("Nmae: ", student.name);
// console.log("Age: ", student.age);
// console.log("Marks: ", student.marks);
// console.log("Science: ", student.marks.science);
// console.log("Math: ", student.marks.math);

// const myCar = {
//   make: "Ford",
//   model: "Mustang",
//   year: 1969,
//   displayCar: function() {
//     for(let key in myCar){
//         if(typeof myCar[key] === typeof myCar.displayCar){
//             continue;
//         }
//         else{
//             console.log(`${key}: ${myCar[key]}`);
//         }
//     }
//   }
// };

// // নতুন প্রোপার্টি যোগ করা
// myCar.color = "Red";
// myCar.owner = "John";

// // update with new values
// myCar.make = 'Nissan';
// myCar.model = '300ZX';
// myCar.year = 1992;
// myCar.owner = 'Alex';
// myCar.color = 'Blue';

// myCar.displayCar();

// class Car {
//   constructor(color, brand, model) {
//     this.color = color;
//     this.brand = brand;
//     this.model = model;
//   }
//   repaint() {
//     this.color = "Red";
//   }
// }

// const myCar = new Car("Black", "Doge", "Charger");
// const helensCar = new Car("Blue", "Nissan", "Ultima");

// class Car {
//   constructor(options) {
//     this.wheels = options.wheels;
//     this.doors = options.doors;
//     this.color = options.color;
//   }
// }

// class Truck {
//   constructor(options) {
//     this.wheels = options.wheels;
//     this.doors = options.doors;
//     this.color = options.color;
//   }
// }

// class Factory {
//   constructor(type) {
//     this.type = type;
//   }
//   create = (options) => {
//     let vehicleType = this.type;
//     let vehicle;
//     if (vehicleType === "car") {
//       vehicle = new Car(options);
//     } else if (vehicleType === "truck") {
//       vehicle = new Truck(options);
//     }
//     vehicle.vehicleType = vehicleType;
//     vehicle.startEngine = () => console.log(`Reving ${vehicleType} engine`);
//     vehicle.driveVehicle = () => console.log(`Driving ${vehicleType}…`);
//     vehicle.stopEngine = () => console.log(`Stop ${vehicleType} engine`);
//     return vehicle;
//   };
// }

// const TruckFactory = new Factory("truck");
// const truck = TruckFactory.create({
//   wheels: 12,
//   doors: 2,
//   color: "yellow",
// });
// console.log(truck);
// truck.startEngine();

// class chocolateIceCream {
//   constructor() {
//     console.log("chocolate");
//   }
// }
// class vanillaIceCream {
//   constructor() {
//     console.log("vanilla");
//   }
// }
// class oreoIceCream {
//   constructor() {
//     console.log("oreo");
//   }
// }
// class IceCreamFactory {
//   constructor(type) {
//     this.type = type;
//   }
//   createIceCream = () => {
//     if (this.type === "vanilla") return new vanillaIceCream();
//     if (this.type === "chocolate") return new chocolateIceCream();
//     if (this.type === "oreo") return new oreoIceCream();
//   };
// }
// const iceCreamFac = new IceCreamFactory("chocolate");
// const iceCream = iceCreamFac.createIceCream();

// ক্লাস ডিফাইনিশন
// class Employee {
//   constructor(hourly) {
//     this.hourly = hourly;
//   }
// }

// class FullTime extends Employee {
//   constructor() {
//     super("$12");
//   }
// }

// class PartTime extends Employee {
//   constructor() {
//     super("$11");
//   }
// }

// class Temporary extends Employee {
//   constructor() {
//     super("$10");
//   }
// }

// class Contractor extends Employee {
//   constructor() {
//     super("$15");
//   }
// }

// // কাজ চালানোর ফাংশন
// function run() {
//   let employees = [];
//   employees.push(new Contractor());
//   employees.push(new Temporary());
//   employees.push(new PartTime());

//   // ফ্যাক্টরি প্যাটার্ন অনুসরণ
//   employees.forEach((employee, index) => {
//     console.log(`Employee ${index + 1}: Hourly Rate ${employee.hourly}`);
//   });
// }

// // কাজ চালানো
// run();

// class CakeFactory {
// 	constructor() {
// 		this.createCake = function (flavor) {
// 			let cake;
// 			if (flavor === "chocolate") {
// 				cake = new ChocolateCake();
// 			} else if (flavor === "biscuit") {
// 				cake = new BiscuitCake();
// 			} else if (flavor === "pound") {
// 				cake = new PoundCake();
// 			}
// 			return cake;
// 		};
// 	}
// }

// class ChocolateCake {
// 	constructor() {
// 		this.cakeFlavor = "Chocolate Cake";
// 		this.made = function () {
// 			console.log("You made " + this.cakeFlavor);
// 		};
// 	}
// }

// class BiscuitCake {
// 	constructor() {
// 		this.cakeFlavor = "Biscuit Cake";
// 		this.made = function () {
// 			console.log("You made " + this.cakeFlavor);
// 		};
// 	}
// }

// class PoundCake {
// 	constructor() {
// 		this.cakeFlavor = "Pound Cake";
// 		this.made = function () {
// 			console.log("You made " + this.cakeFlavor);
// 		};
// 	}
// }

// const cakeFactory = new CakeFactory();
// const chocolate = cakeFactory.createCake("chocolate");
// const pound = cakeFactory.createCake("pound");
// const biscuit = cakeFactory.createCake("biscuit");
// chocolate.made(); // আউটপুটঃ You made Chocolate Cake
// pound.made(); // আউটপুটঃ You made Pound Cake
// biscuit.made(); // আউটপুটঃ You made Biscuit Cake

// class CakeFactory {
// 	constructor() {
// 		this.createCake = function (flavor) {
// 			let cake;
// 			if (flavor === "chocolate") {
// 				cake = new ChocolateCake();
// 			} else if (flavor === "biscuit") {
// 				cake = new BiscuitCake();
// 			} else if (flavor === "pound") {
// 				cake = new PoundCake();
// 			}
// 			return cake;
// 		};
// 	}
// }

// ------------------------------------Factory Pattern

// class pithaFactory {
// 	constructor() {
// 		this.createPitha = function (number) {
// 			let arr = [];
// 			for (let i = 1; i <= number; i++) {
// 				arr.push(i);
// 			}
// 			return arr;
// 		};
// 	}
// }
// const obj1 = new pithaFactory();
// const arr = obj1.createPitha(5);
// console.log(arr);

// ---------------------------------Constructor Pattern -> Rules: First letter should be named with Capital Letter

// class PithaFactory {
// 	constructor(name, location, price){
// 		this.name = name;
// 		this.factoryLocation = location;
// 		this.price = price
// 	}
// }

// const obj = new PithaFactory("Noksi", "JaigirHat", 10);
// console.log(obj);

// --------------------------Object to Class

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


// console.log(myCar);

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
// console.log(obj.start());
// obj.start();
