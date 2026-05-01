let age: number = 30;
let firstName: string = "Arshad";
let isFictional: boolean;

console.log(age);

isFictional = true;

let planet = "Earth";
let moon = 1;

// null and undefined

let something: null;
let otherThing: undefined;

something = null;
otherThing = undefined;

// arrays

let names: string[];

names = ["Arshad", "Mansoor", "Samad"];

let numberList: number[];

numberList = [1, 2, 3, 4];

names.push("Ubaid");
numberList.push(76);

let things = [1, "number", true];

const t = things[2];

let user: {
  firstName: string;
  age: number;
  id: number;
};

user = {
  firstName: "Arshad",
  age: 34,
  id: 1
};

let person = {
    name: "Muhammad",
    score: 56
}

const score = person.score