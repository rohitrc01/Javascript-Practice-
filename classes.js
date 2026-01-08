// script for classes practice 

// Q1: Create Person class with getDetails method

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

const p_1 = new Person("Rohit", 22);
console.log(p_1.getDetails());


// Q2: Rectangle class to calculate area
class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  area() {
    return this.length * this.width;
  }
}

const rect = new Rectangle(5, 4);
console.log(rect.area());


// Q3: Calculator class with add and subtract
class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }
}

const calc = new Calculator();
console.log(calc.add(10, 5));
console.log(calc.subtract(10, 5));


// Q4: Find car with highest price using class

class Car {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

const cars = [
  new Car("BMW", 5000000),
  new Car("Audi", 4500000),
  new Car("Tesla", 6000000)
];

let highest = cars[0];
for (let i = 1; i < cars.length; i++) {
  if (cars[i].price > highest.price) {
    highest = cars[i];
  }
}

console.log(highest);
