// class PithaFactory {
// 	constructor(name, location, price){
// 		this.name = name;
// 		this.factoryLocation = location;
// 		this.price = price
// 	}
// }

// const obj = new PithaFactory("Noksi", "JaigirHat", 10);
// console.log(obj);

// class Vehicle {
// 	color = "";
// 	constructor(brand, model) {
// 		this.brand = brand;
// 		this.model = model;
// 	}
// 	setColor(color) {
// 		this.color = color;
// 	}
// }

// const myBike = new Vehicle("Yamaha", "R15 v3");
// console.log(myBike); // Vehicle { color: ”, brand: 'Yamaha', model: 'R15 v3' }
// myBike.setColor("Black");
// console.log(myBike); // Vehicle { color: 'Black', brand: 'Yamaha', model: 'R15 v3' }

// function Student(name, institute) {
// 	this.name = name;
// 	this.institute = institute;
// 	this.getInstituteName = function () {
// 		return this.institute;
// 	};
// }

// const tajnur = new Student("Tajnur", "Bangladesh Open University");
// console.log(tajnur.getInstituteName());

// class Rectangle {
// 	height;
// 	width;
// 	constructor(height, width) {
// 		this.height = height;
// 		this.width = width;
// 	}
// 	getArea() {
// 		return this.height * this.width;
// 	}
// }

// const rect = new Rectangle(3, 5);
// console.log(rect.getArea());

// Triangle নামে একটি ফাংশন ডিক্লেয়ার করো যার x, y, z নামে প্রোপার্টি থাকবে এবং getArea নামে একটি ফাংশন থাকবে যেটার মাধ্যমে
// Triangle এর আয়তন পাওয়া যাবে। এখন Triangle কে ব্যবহার করে একটি অবজেক্ট তৈরী করো এবং সেটার আয়তন বের করে দেখাও।

// function Triangle(x,y,z){
// 	this.x = x;
// 	this.y = y;
// 	this.z = z;

// 	this.getArea = function(){
// 		const s = (this.x + this.y + this.z) / 2; // Calculate the semi-perimeter
//         const area = Math.sqrt(s * (s - this.x) * (s - this.y) * (s - this.z)); // Calculate the area
//         return area;
// 	}
// }

// const triangle = new Triangle(2,3,4);
// console.log(triangle.getArea());

//	Country নামে একটি ক্লাস ডিক্লেয়ার করো যার constructor এর মাধ্যমে কয়েকটি প্রোপার্টি সেট করা যাবে এবং একটি ফাংশনের মাধ্যমে
//	প্রোপার্টি গুলোর মান জানা যাবে।

// class Country {
//     constructor(name, population, capital, language) {
//         this.name = name;
//         this.population = population;
//         this.capital = capital;
//         this.language = language;
//     }

//     getCountryInfo() {
//         return `Country Name: ${this.name}\nPopulation: ${this.population}\nCapital: ${this.capital}\nOfficial Language: ${this.language}`;
//     }
// }

// // Create an instance of the Country class
// const myCountry = new Country("United States", 331002651, "Washington, D.C.", "English");

// // Get and display information about the country
// console.log(myCountry.getCountryInfo());

// Employee নামে একটি ক্লাস ডিক্লেয়ার করো এবং এমন একটি মেথড সেট করো যার মাধ্যমে ঐ ক্লাসের কোন একটা প্রোপার্টিকে ডিলিট করে দেওয়া যায়।

// class Employee {
// 	constructor(name, age, location) {
// 		this.name = name;
// 		this.age = age;
// 		this.location = location;
// 	}
// 	deleteProperty(val) {
// 		if(val in this)
// 			delete this[val];
// 		else console.log("Not found");
// 	}
// }

// const obj = new Employee('Hasnat', 24, 'Rajshahi');
// // console.log();
// obj.deleteProperty("age")
// console.log(obj);

