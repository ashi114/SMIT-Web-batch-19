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
  id: 1,
};

let person = {
  name: "Muhammad",
  score: 56,
};

const score = person.score;

// Functions

function Twonumbers(a: number, b: number): number {
  return a + b;
}

Twonumbers(3, 2);

const substractTwoNumbers = (a: number, b: number) => {
  return a - b;
};

substractTwoNumbers(2, 4);

function addAllNumbers(items: number[]): void {
  items.reduce((a, c) => a + c, 0);
  console.log(items);
}

addAllNumbers([4, 3, 5, 6]);

// any type in Tyepscript

let age2: any;
age2 = 3;
age2 = true;

let title;

title = 3;
title = "Arshad";

let things2: any[];

things2 = [2, 3, 4, 5, 6];
things2.push("bush");

function addTogether(value: any): any {
  return value + value;
}

addTogether(2);

// tuples

let person2: [string, number, boolean] = ["arshad", 2, true];

function useCordinates(): [number, number] {
  const lat = 100;
  const long = 150;

  return [lat, long];
}

const [lat, long] = useCordinates();

let users3: [name: string, age: number];

users3 = ["Arshad", 25];

console.log(users3[0]);

// Interfaces

interface Author {
  user: string;
  age: number;
}

const authorOne: Author = {
  user: "Arshad",
  age: 25,
};

interface Post {
  title: string;
  body: string;
  author: Author;
}

const newPost: Post = {
  title: "Mario",
  body: "A Beautiful Day",
  author: authorOne,
};

function createPost(post: Post): void {
  console.log(
    `This post is created by ${post.title} and the username is ${post.author.user}`,
  );
}

createPost(newPost);

interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  empid: number;
}

const newEmployee: Employee = {
  name: "Arshad",
  age: 25,
  empid: 654,
};

// type alias

type rgb = [number, number, number];

function getRandomNumber(): rgb {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;

  return [r, g, b];
}

const colorOne = getRandomNumber();
