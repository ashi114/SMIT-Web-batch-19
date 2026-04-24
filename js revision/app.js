// Loops Revision

// For loop
// Sum of n numbers

// let sum = 0
// for (let i = 0; i <= 5; i++) {
//     sum += i
//     console.log("Sum===", sum)
// }

// While Loop

// let i = 0

// while (i <= 5) {
//     sum += i
//     console.log("sum==", sum)
//     i++
// }

// Do While loop

// do {
//     sum = sum + i
//     console.log("sum==", sum)
//     i++
// } while (i <= 5);

// for of loop

// let str = "Saylani"

// let length = 0
// for (val of str) {

//     console.log(val)
//     length++
// }

// console.log("length ===", length)

// for in loop

// let student = {
//     name: 'Arshad',
//     Age: 21,
//     Subject: "maths"
// }

// for(key in student){
//     console.log("key ==", key ,"value ==",student[key])
// }

// Printing all even numbers from 0 to 100

// for (let i = 0; i <= 100; i++) {
//     if (i % 2 == 0) {
//         console.log(i)
//     }
// }

// guess the number game

// let gameNumber = 5

// let userNumber = +prompt("please enter your number")

// while (userNumber !== gameNumber) {

//     userNumber = +prompt("you entered wrong number, please enter the correct number")

// }

// console.log("congratulation youhave entered the right number")

// Strings methods

// let str = "Saylani"

// console.log(str.length)

// console.log(str[1])

// strToUpper = str.toUpperCase()
// strToLower = str.toLowerCase()

// console.log(strToUpper,strToLower)

// console.log(str.slice(0,2))

// console.log(str.slice(3,))

// Arrays

// let cities = ["Karachi", "Lahore", "Peshawar", "Islamabad"]

// // Normal for Loop

// for (let i = 0; i < cities.length; i++) {
//     console.log(cities[i])
// }

// // with for of loop

// for(ele of cities){
//     console.log(ele.toUpperCase())
// }

// arrays

// let sum = 0

// arrayNumber = [1, 2, 3, 4, 5]

// for (val of arrayNumber) {
//    sum = sum + val
// }

// let average = sum/(arrayNumber.length)

// console.log(average)

// apply a 10% discount on the array items below.

// items = [256, 653, 875, 123, 456]

// let i = 0

// for (let val of items) {

//     console.log(`value before discount at index ${i} is ${val}`)
//     let offer = val / 10
//     items[i] = items[i] - offer
//     console.log(`value after discount at index ${i} is ${items[i]}`)
//     i++

// }

// Functions

// function myFunc(x, y) {

//     console.log(x + y)
// }

// myFunc(2, 3)

// arrow function

// const sumFunction = (x, y) => {
//     return x + y
// }

// sumFunction(2,3)

//  write a function to extract count of vowels from a Strings

// function countVowels(str) {
//   let count = 0;
//   for (const char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   console.log(count);
// }

// countVowels("saylani");
// countVowels("arshad");

//  use arrow function to do the same task

// const countVowels = (str) => {
//   let count = 0;
//   for (const char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   console.log(count);
// }

// countVowels("saylani");
// countVowels("arshad");

// For Each -- Call Back Function

// arr = ["karachi", "Lahore", "Peshawar"];

// arr.forEach((val) => {console.log(val)});

// arr.forEach((element,idx,arr) => {
//    console.log(element.toUpperCase(),idx,arr)
// });

//  Calculating the square of every element of an array using the for each method

// let nums = [11, 22, 33];

// const squareElement = (num) => {
//   console.log(num ** 2);
// };

// nums.forEach(squareElement)

// Array.map creates a new array

// let nums = [11, 22, 33, 44, 55];

// let newArray = nums.map((val) => {return val});

//  Filter Function of Array

// let arr = [1, 2, 3, 4, 5, 6, 7];

// let filterArray = arr.filter((val) => {return val % 2 == 0});

// reduce method in arrays

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// const output = arr.reduce((res, curr) => {return res + curr});

// to find the largest number

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// const output = arr.reduce((res, curr) => {
//   return res > curr ? res : curr;
// });
