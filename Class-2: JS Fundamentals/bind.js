//! Bind Method by Class

class Parent {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  print(x, y) {
    console.log(this.name, "is ", this.age, "Years Old");
    console.log("He is able to solve problem ", x, " and ", y);
  }
}

class Child {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const obj = new Parent("Hayat", 20);
const obj2 = new Child("Hasnat", 24);

const print = obj.print.bind(obj2);
print(1,5);
