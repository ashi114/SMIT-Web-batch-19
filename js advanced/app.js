const array1 = [1, 2, 3, 4, 5];
const array2 = [5, 6, 7, 8, 9, 10];

// array method to concat

// const array3 = array1.concat(array2)
// console.log(array3)

// filter method

// const result = array1.filter((ele) => ele % 2 == 0);
// console.log(result)

// find method

// const found = array1.find((Element) => Element > 4);
// console.log(found)

// find Index of

// const islarger = array1.findIndex((ele) => ele > 1);
// console.log(islarger)

// flat method

// const myArray = [34, 65, [4, 5, 6], [8, 9, 10, [3, 4, 5]]];
// const flatArray = myArray.flat(1);
// console.log(flatArray);

// For each array method

// const array = ["a", "b", "c"];

// const forArray = array.forEach((ele) => console.log(ele));

// array map function

// const array3 = array2.map((ele) => {
//   return ele * 3;
// });
// console.log(array3);

// array reduce method

// const sumOfAll = array2.reduce((pre, curr) => {
//   return pre + curr;
// });

// console.log(sumOfAll)

// reversing an array -- it mutate the origial array

// const reverseArray = array1.reverse();
// console.log(reverseArray, array1);

// // reversing an array -- without mutating it
// const reverseArray = array1.toReversed()
// console.log(reverseArray, array1);

// using find methods in objects

// const studentSubjectReport = [
//   {
//     subject: "Maths",
//     isPassed: true,
//   },
//   {
//     subject: "Science",
//     isPassed: true,
//   },
//   {
//     subject: "English",
//     isPassed: false,
//   },
// ];

// const failedSubject = studentSubjectReport.find((ele) => {
//   return ele.isPassed == false;
// });

// const failedSubjectIndex = studentSubjectReport.findIndex((ele) => {
//   return ele.isPassed == false;
// });

// const passedSubjectIndex = studentSubjectReport.findLastIndex((ele) => {
//   return ele.isPassed == true;
// });

// console.log(failedSubject, failedSubjectIndex, passedSubjectIndex);

// Closures (a closure gives a function access to its outer scope) - (function encapsulation)

// function scoreWapper() {
//   let score = 0;

//   function updateScore() {
//     return ++score;
//   }
//   return updateScore;
// }
// const updateScore = scoreWapper();
// let score1 = updateScore();
// let score2 = updateScore();

// console.log(score1, score2, "===score");

// Map.set method

// const map = new Map();
// map.set("bar", "foo");
// map.set("club", "moo");
// map.set("disco", "noo");
// console.log(map.get("disco"));
// console.log(map)

// set in javascript

// let array5 = [1,2,2,1,3,3,3,5,6,6,7]

// let uniqueArray = [...new Set(array5)]
// console.log(uniqueArray)

// console.log(mySet)

// Function methods Call, Apply and Bind

// const myFunction = () => {
//   console.log(this, "Hello, World!");
// };

// myFunction()

// const myObj = {
//   name: "Muhammad Arshad",
//   myFunc: function (greet1, greet2) {
//     console.log(this, greet1, greet2);
//   },
// };

// myObj.myFunc.call({ fname: "Ali" }, "Hello, Ali!", "How are you?");

// myObj.myFunc.apply({ fname: "Ali" }, ["Hello, Ali!", "How are you?"]);

// const newFunc = myObj.myFunc.bind(
//   { fname: "Ali" },
//   "Hello, Ali!",
//   "How are you?",
// );

// newFunc()

// Classes in javascript

class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  // associating some methods with the Car

  getinfo() {
    return `${this.brand} and ${this.model} is of ${this.year} year`;
  }

  carStaring() {
    return `The car of ${this.brand} is starting`;
  }
}

// instantiate the class

const car1 = new Car("Toyota", "Corolla", 2021);
const car2 = new Car("Suzuki", "Swift", 2022);

console.log(car1.getinfo())
console.log(car1.carStaring())

console.log(car2.getinfo())
console.log(car2.carStaring())
