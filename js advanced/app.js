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

// const car1 = new Car("Toyota", "Corolla", 2021);
// const car2 = new Car("Suzuki", "Swift", 2022);

// console.log(car1.getinfo())
// console.log(car1.carStaring())

// console.log(car2.getinfo())
// console.log(car2.carStaring())

// Call backs, Promise and asunc function

function printString(string) {
  setTimeout(() => {
    console.log(string);
  }, 5000);
}

// function printAll(){
//     printString("A")
//     printString("B")
//     printString("C")
// }

// printAll()

// function greet(name) {
//   console.log("Hello" + name + "!");
// }

// function processedName(cb) {
//   setTimeout(
//     () => {
//       const name = " Arshad";
//       cb(name)
//     },
//     5000,
//   );
//   return name;
// }

// processedName(greet);

// Call Back Hell - nesting too many callbacks

// function getIngredients(callback) {
//   setTimeout(() => {
//     console.log("Get Ingredients");
//     callback();
//   }, 1000);
// }

// function chopVegetable(callback) {
//   setTimeout(() => {
//     console.log("Chop Vegetable");
//     callback();
//   }, 1000);
// }

// function cookFood(callback) {
//   setTimeout(() => {
//     console.log("Cook Dinner");
//     callback();
//   }, 1000);
// }

// function serveDinner() {
//   setTimeout(() => {
//     console.log("Dinner Serve");
//   }, 1000);
// }

// getIngredients(function () {
//   chopVegetable(function () {
//     cookFood(serveDinner);
//   });
// });

// Promise -- Better than call back

// function printString(string) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(string);
//       resolve();
//     }, 1000);
//   });
// }

// Promise Chaining

// function printAll() {
//   printString("A").then(() => {
//     printString("B").then(() => {
//       printString("C");
//     });
//   });
// }

// printAll();

// Solving the ingredients example with Promise

function getIngredients() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Ingredients Done");
      resolve();
    }, 1000);
  });
}

function chopVegetables() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Vegetables Chopped");
      resolve();
    }, 1000);
  });
}

function cookedFood() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Food Cooked");
      resolve();
    }, 1000);
  });
}

function dinnerServed() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Dinner Served");
      resolve();
    }, 1000);
  });
}

// Promise Chaining

// getIngredients()
//   .then(() => chopVegetables())
//   .then(() => cookedFood())
//   .then(() => dinnerServed());

// using async to solve the above problem

async function makeDinner() {
  try {
    const ingredients = await getIngredients();

    const vegetables = await chopVegetables();

    const food = await cookedFood();

    const dinner = await dinnerServed();

    console.log("Enjo your meal");
  } catch (error) {
    console.log("Something went wrong");
  }
}

makeDinner();
