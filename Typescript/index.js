"use strict";
let age = 30;
let firstName = "Arshad";
let isFictional;
console.log(age);
isFictional = true;
let planet = "Earth";
let moon = 1;
// null and undefined
let something;
let otherThing;
something = null;
otherThing = undefined;
// arrays
let names;
names = ["Arshad", "Mansoor", "Samad"];
let numberList;
numberList = [1, 2, 3, 4];
names.push("Ubaid");
numberList.push(76);
let things = [1, "number", true];
const t = things[2];
let user;
user = {
    firstName: "Arshad",
    age: 34,
    id: 1,
};
let person = {
    name: "Muhammad",
    score: 56,
};
const score = person.score;
// Functions
function Twonumbers(a, b) {
    return a + b;
}
Twonumbers(3, 2);
const substractTwoNumbers = (a, b) => {
    return a - b;
};
substractTwoNumbers(2, 4);
function addAllNumbers(items) {
    items.reduce((a, c) => a + c, 0);
    console.log(items);
}
addAllNumbers([4, 3, 5, 6]);
// any type in Tyepscript
let age2;
age2 = 3;
age2 = true;
let title;
title = 3;
title = "Arshad";
let things2;
things2 = [2, 3, 4, 5, 6];
things2.push("bush");
function addTogether(value) {
    return value + value;
}
addTogether(2);
// tuples
let person2 = ["arshad", 2, true];
function useCordinates() {
    const lat = 100;
    const long = 150;
    return [lat, long];
}
const [lat, long] = useCordinates();
let users3;
users3 = ["Arshad", 25];
console.log(users3[0]);
const authorOne = {
    user: "Arshad",
    age: 25,
};
const newPost = {
    title: "Mario",
    body: "A Beautiful Day",
    author: authorOne,
};
function createPost(post) {
    console.log(`This post is created by ${post.title} and the username is ${post.author.user}`);
}
createPost(newPost);
