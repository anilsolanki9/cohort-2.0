// Q1. Basic Operators (Arithmetic, Assignment, Increment, Decrement, Comparison, Logical, Bitwise)
// a. a. Create two numbers a = 10 and b = 3. Perform and log: a + b, a - b, a * b, a / b, a % b.
// let a = 10;
// let b = 3;
// console.log(a + b); // 13
// console.log(a - b); // 7
// console.log(a * b); // 30
// console.log(a / b); // 3.3333333333333335
// console.log(a % b); // 1

// b. Write: let x = 5; x = x + 3; Now rewrite the same using +=. Do the same for -=, *=, /=.
// let x = 5;
// // x = x + 3; // x = 5 + 3 = 8
// x += 3; // x = x + 3 = 5 + 3 = 8
// x -= 2; // x = x - 2 = 8 - 2 = 6
// x *= 7; // x = x * 7 = 6 * 7 = 42
// x /= 3; // x = x / 3 = 42 / 3 = 14
// x %= 2; // x = x % 2 = 14 % 2 = 0

// c. let count = 5; Use count++ and log value before and after. Repeat for count–-
// For count++
// let count = 5;
// console.log(count++);// 5
// console.log(count++) // 6
// For count--
// let count = 5;
// console.log(count--); // 5
// console.log(count--); // 4

// d. Compare two values: 5 == "5" and 5 === "5". Observe difference.
// console.log(5 == '5'); // true
// console.log(5 === '5'); // false
// Because == just checks the value and do type conversion if type of operands donot match, whereas === is strict equality checks both type and value.

// e. Check if 10 is greater than 5, less than 20, and equal to 10.
// console.log(10 > 5); // true
// console.log(10 < 20); // true
// console.log(10 === 10); // true

// f. Try logical AND and OR:
// true && false
// true || false
// !(true)
// console.log(true && false); // false
// // above statement gives false because && gives true only if both operands on left and right are true
// console.log(true || false); // true
// // above statement gives true because || gives false only if both operands on left and right are false
// console.log(!(true)); // false
// // above statement gives false because ! operator give oposite of oparand it is applied on

// g. Predict the result of:
// (5 > 3 && 10 > 8),
// (5 > 3 || 10 < 8)
// console.log(5 > 3 && 10 > 8); // true
// // above is true because true && true is true
// console.log(5 > 3 || 10 < 8); // true
// // above statement is true because true || false is true

// h. Bitwise (light intro):
// Evaluate 5 & 1 and 5 | 1.
// Write result and your observation (no deep explanation needed now).
// 5 & 1
// as bitwise operators works only on bits, so we will convert both 5 and 1 in binary form then apply bitwise &
// 5 in binary is 101
// 1 in binary is 001
// so
//     101
//   & 001
// --------
//     001
// So the answer in binary is 001 and into decinal is 1

//     101
//   | 001
// --------
//     101
// so the answer in binary is 101 and into decinal is 5

//  2. Variable Hoisting in JavaScript

// a. Predict output of:
// console.log(a);
// var a = 10
// Due to hoisting and default initialization of var to value undefined
// console.log(a); //  undefined
// var a = 10;

// b. Predict output of:
// console.log(b);
// let b = 10
// Due to Temporal Dead Zone, and let and const dont get initialized automatically
// console.log(b); // Uncaught ReferenceError: Cannot access 'b' before initialization
// let b = 10;

// c. Predict output of:
// test()
// function test() {
// console.log("Hello");
// }
// test(); // Hello
// function test()
// {
//   console.log("Hello")
// }

// d. Try writing a function expression before initialization and call it:
// hello();
// var hello = function () {
//   console.log("Hi");
// };
// Write what happened and why.
// This is what we get
// hello(); // Uncaught TypeError: hello is not a function
// var hello = function () {
//   console.log("Hi");
// };
// Here The Hoisting happens and the variable declarations goes to top in the scope, and its initialization as a function is done later so, we get error not like hello not initialized but error like hello not a function, because we were trying to access hello(), like we access any function, and as hello is not a function so it gives error, Uncaught TypeError: hello is not a function

// e. Write one sentence:
// What gets hoisted?
// What does not get hoisted fully?
// var, let, const, functions all get hoisted.
// let const dont get  hoisted fully, as they are not initialized when its declaration goes on top of cope due to hoisting. Functions get fully hoisted, its declaration and initialization both gpes on top in the scope.

// 3. Conditional Operators (if, else, else-if, ternary, switch)

// a. Take input using prompt for age.
// If age > 18 → log “Adult”.
// Else → log “Minor”.
// let age = prompt("What is your age?");
// if (age > 18) console.log("Adult");
// else console.log("Minor");

// b. Write a program:
// If marks >= 90 → “A grade”
// Else if marks >= 75 → “B grade”
// Else if marks >= 50 → “C grade”
// Else → “Fail”
// let marks = prompt("Enter marks");
// let grade;
// if (marks >= 90) grade = "A";
// else if (marks >= 75) grade = "B";
// else if (marks >= 50) grade = "C";
// else alert("Fail");
// alert(grade);

// c. Create a variable city = “Bhopal”.
// If city is “Bhopal” → log “MP”
// Else if city is “Delhi” → log “Capital”
// Else → log “Unknown City”
// let city = "Bhopal";
// if (city === "Bhopal") console.log("MP");
// else if (city === "Delhi") console.log("Capital");
// else console.log("Unknown City");

// d. Use ternary operator:
// Let score = 40.
// If score > 35 → “Pass” else “Fail” using a ternary.
// let score = 40;
// score > 35 ? console.log("Pass") : console.log("Fail");

// e. Convert this if-else into a ternary:
// if (temperature > 30) { “Hot” } else { “Pleasant” }
// let temprature = prompt("Enter current temprature");
// temprature > 30 ? console.log("Hot") : console.log("Pleasant");

// f. Write a switch case:
// Take day number (1 to 7).
// Print the day name.
// Default case: “Invalid Day”.
// let num = Number(prompt("Enter number from 1 to 7"));
// switch (num) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
// }

// g. Using logical operators in condition:
// If age > 18 and country == “India” → log “Eligible for Vote”
// Else → “Not Eligible”
// let age = Number(prompt("Enter your age"));
// let country = prompt("Enter your country name");
// if (age > 18 && country === "India") {
//   console.log("Eligible for Vote");
// } else {
//   console.log("Not Eligible");
// }
