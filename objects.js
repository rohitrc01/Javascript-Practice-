// script is for objects practice



// Q1: Calculate average marks using object

const student = {
  name: "Rohit",
  age: 22,
  marks: [80, 90, 70, 85]
};

function getAverageMarks(obj) {
  let sum = 0;
  for (let i = 0; i < obj.marks.length; i++) {
    sum += obj.marks[i];
  }
  return sum / obj.marks.length;
}

console.log(getAverageMarks(student));


// Q2: Add properties dynamically to object

const car = {
  brand: "Toyota",
  year: 2020
};

car.isElectric = false;
car.price = 1500000;

console.log(car);


// Q3: Count number of properties in object
function countKeys(obj) {
  let count = 0;
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      count++;
    }
  }
  return count;
}

console.log(countKeys({ a: 1, b: 2, c: 3 }));

// Q4: Sum all values in object
const scores = { math: 80, science: 90, english: 85 };

let total = 0;
for (let subject in scores) {
  total += scores[subject];
}

console.log(total);
