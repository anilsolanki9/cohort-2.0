//  1. Write a function `sayHello()` that prints `"Hello
//  JavaScript"`.
// function sayHello() {
//   console.log('Hello JavaScript');
// }
// sayHello();

//  2. Create a function `add(a, b)` that returns their sum
//  and log the result.
// function add(a, b) {
//   return a + b;
// }
// console.log(add(2, 3));

//  3. Write a function with a default parameter `name =
//  "Guest"` that prints `"Hi <name>"`.
// function greet(name = "Guest"){
//   console.log(`Hi ${name}`);
// }
// greet("Anil");

//  4. Use rest parameters to make a function that adds
//  unlimited numbers.
// function add(...nums) {
//   let sum = nums.reduce((acc, val) => {
//     return acc + val;
//   }, 0);
//   console.log(sum);
// }
// add(1, 2, 3, 4);

//  5. Create an IIFE that prints `"I run instantly!"`.
// (() => {
//   console.log('I run Instantly');
// })();

//  6. Make a nested function where the inner one prints a
//  variable from the outer one.
// function outer() {
//   let count = 0;
//   return () => {
//     count++;
//     console.log(count);
//   };
// }
// let inner = outer();
// inner();
// inner();
// inner();
// inner();

//  7. Create an array of 5 fruits. Add one at the end and
//  remove one from the beginning.
// let fruits = ["Apple", "Banana", "Mango", "Grapes", "Guava"];
// fruits.push("Dragon Fruit");
// fruits.shift();

//  8. Use a `for` loop to print all elements of an array.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

//  9. Create an object `person` with keys `name`, `age`,
//  and `city`, and print each key’s value.
// let person = {
//   name: 'Anil',
//   age: 21,
//   city: 'Jodhpur',
// };
// let arr = Object.keys(person);
// arr.forEach(function (val) {
//   console.log(`${val} : ${person[val]}`);
// });
/* -------------------------------------------------------------------------- */
// const person = {
//   name: 'Anil',
//   age: 21,
//   city: 'Jodhpur',
// };
// for (let key in person) {
//   console.log(`${key} : ${person[key]}`);
// }

//  10. Use `setTimeout()` to log `"Time’s up!"` after 2
//  seconds
// setTimeout(() => {
//   console.log("Time's Up!");
// }, 2000);

// ## Level 2 – Functional Thinking & Logic Tasks

//  1. Write a higher-order function `runTwice(fn)` that
//  takes another function and executes it two times.
// function runTwice(val) {
//   val();
//   val();
// }
// runTwice(() => {
//   console.log('Helllo');
// });

//  2. Create one pure function that always returns the
//  same output for a given input, and one impure
//  function using a global variable.
// function pure(a, b) {
//   console.log(a * b);
// }
// pure(1, 2);
// pure(1, 2);
// pure(1, 2);

// let count = 0;
// function impure(a, b) {
//   count++;
//   console.log(count * a * b);
// }
// impure(1,2);
// impure(1,2);
// impure(1,2);

//  3. Write a function that uses object destructuring
//  inside parameters to extract and print `name` and
//  `age`.
// let person = {
//   name: "Anil",
//   age:21,
//   email:"Myuii@gmail.com"
// };
// function sayHii({name, age} = person){
//   console.log(`Hii, I am ${name} and I am ${age} years old.`);
// }
// sayHii();
/* ----------------------------------- OR ----------------------------------- */
// function sayHii({ name, age }) {
//   console.log(`Hii, I am ${name} and I am ${age} years old.`);
// }
// sayHii(person);

//  4. Demonstrate the difference between normal
//  function and arrow function when used as object
//  methods (the `this` issue).
// let person = {
//   name: 'Anil',
//   age: 21,
//   dance: function () {
//     console.log(this);
//   },
//   watch: () => {
//     console.log(this);
//   },
// };
// person.dance(); // object milta hai
// person.watch(); // window milta hai

//  5. Given an array of numbers, use `map()` to create a
//  new array where each number is squared.
// let arr = [1, 2, 3, 4, 5, 6, 7];
// let newArr = arr.map(val => {
//   return val ** 2;
// });

//  6. Use `filter()` to get only even numbers from an
//  array.
// let arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 23, 45, 66, 78, 89];
// let newArr = arr.filter(val => {
//   return val % 2 === 0;
// });

//  7. Use `reduce()` to find the total salary from an array
//  of numbers `[1000, 2000, 3000]`.
// let salary = [1000, 2000, 3000];
// let totalSalary = salary.reduce((acc, val) => {
//   return acc + val;
// }, 0);

//  8. Create an array of names and use `some()` and
//  `every()` to test a condition (e.g., all names longer than
//  3 chars).
/* ---------------------------------- Some ---------------------------------- */
// let namesArr = ['Anil', 'Angela', 'Love', 'Harsh', 'Sarthak'];
// let any = namesArr.some(val => {
//   return val.length > 3;
// });
/* ---------------------------------- Every --------------------------------- */
// let every = namesArr.every(val => {
//   return val.length > 3;
// });

//  9. Create an object `user` and test the behavior of
//  `Object.freeze()` and `Object.seal()` by
//  adding/changing keys.
// let user = {
//   name: 'Anil',
//   age: 21,
// };
// Object.freeze(user); // freeze krne pe na to new add kr skte, na existing ko modify kr skte
// Object.seal(user); // seal krne pe new add nahi kr skte but existing ko modify kr skte h.
// user['name'] = 'Harsh';
// user['email'] = 'Text@text.com';

//  10. Create a nested object (`user → address → city`) and
//  access the city name inside it
// let user = {
//   name: 'Anil',
//   age: 21,
//   address: {
//     city: 'Jodhpur',
//   },
// };
// console.log(user.address.city);
// OR
// let {city} = user.address;
