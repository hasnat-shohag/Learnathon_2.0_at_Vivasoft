//! Call, Apply and Bind

//? Call Method by Class
/** 
class Parent {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  print() {
    console.log(this.name, "is ", this.age, "Years Old");
  }
}

class Child {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const obj = new Parent("Hayat", 20);
const obj2 = new Child("Hayat", 20);

obj.print.call(obj2);
*/
//? Call Method by funtion

function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = "food";
}

console.log(new Food("cheese", 5).name);

//? Call Method by Object

const person = {
  fullName: function (age) {
    return this.firstName + " " + this.lastName + " is " + age + " years old";
  },
};

const person1 = {
  firstName: "John",
  lastName: "Doe",
};

const person2 = {
  firstName: "Mary",
  lastName: "Doe",
};

const x = person.fullName.call(person2, 24);
console.log(x);