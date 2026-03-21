/* -------------------------------------------------------------------------- */
/*                     Level 1 – Pure Beginner Practice                    */
/* -------------------------------------------------------------------------- */

/* 
1. Print numbers from 1 to 10
Loop from 1 to 10 and print eac number.
*/

// using for loop
// for (let i = 1; i < 11; i++){
//   console.log(i);
// }

// using a while loop
// let i = 1;
// while (i < 11) {
//   console.log(i);
//   i++;
// }

// using a do while loop
// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i < 11);

/* -------------------------------------------------------------------------- */

// 2. Print only even number from 1 to 20.
// for (let i = 1; i < 21; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

/* -------------------------------------------------------------------------- */

// 3. Print numbers from 10 to 1.
// for (let i = 10; i; i--) {
//   console.log(i);
// }

/* -------------------------------------------------------------------------- */

// 4. Print the word "Yes" 5 times.
// for (let i = 1; i < 6; i++) {
//   console.log("Yes");
// }

/* -------------------------------------------------------------------------- */

// 5. Print the number from 1 to 20 and print each even or odd. eg. 1 - Odd , 2 - Even , 3 - Odd etc.
// for (let i = 1; i < 21; i++) {
//   if (i % 2 === 0) console.log(`${i} - Even`);
//   else console.log(`${i} - Odd`);
// }

/* -------------------------------------------------------------------------- */

// 6.  Ask user for a number and say if its positive or negative. use prompt()
// let userInput = prompt('Enter a Number ');
// if (userInput === null) {
//   console.error("Please enter a Number, don't cancel");
// } else {
//   let num = userInput.trim();

//   if (num === '') {
//     console.error('Bhai kuch dhang ka likhle, atleast kuch to likh le');
//   } else {
//     num = Number(num);
//     if (isNaN(num)) {
//       console.error('Bhai tu gadha h kya, numbers kabhi letters me hote hai kya??');
//     } else {
//       if (num > 0) {
//         console.log(`The number ${num} is - Positive`);
//       } else if (num < 0) {
//         console.log(`The number ${num} is - Negative`);
//       } else {
//         console.log(`The number ${num} is - 0`);
//       }
//     }
//   }
// }
/* -------------------------------------OPTIMIZED------------------------------------- */
// let number = prompt('Enter a Number ');
// if (number === null) console.error("Please enter a Number, don't cancel");
// else {
//   number = number.trim();
//   if (number === '') console.error('Bhai kuch dhang ka likhle, atleast kuch to likh le');
//   else {
//     number = Number(number);
//     if (isNaN(number)) console.error('Bhai tu gadha h kya, numbers kabhi letters me hote hai kya??');
//     else {
//       if (num > 0) console.log(`The number ${num} is - Positive`);
//       else if (num < 0) console.log(`The number ${num} is - Negative`);
//       else console.log(`The number ${num} is - 0`);
//     }
//   }
// }

/* -------------------------------------------------------------------------- */

// 7. Ask user’s age and check if eligible to vote
// If age >= 18 → “Eligible”, else → “Not eligible”
// let age = prompt('Enter your age');
// if (age === null) console.error('Age to batani hi padegi bro, cancle nko.');
// else {
//   age = age.trim();
//   if (age === '') {
//     console.error('Khali space dene se kam nahi chalega, kuch toh likhna hi pdega bro.');
//   } else {
//     age = +age;
//     if (isNaN(age)) console.error('Age is a number, letters are invalid');
//     else {
//       if (age === Infinity || age === -Infinity) console.warn(`${age} age ?? Seriously??`);
//       else if (age >= 18) console.log('Eligible');
//       else if (age < 18) console.log('Not eligible');
//       else console.log('Invalid age');
//     }
//   }
// }

/* -------------------------------------------------------------------------- */

// 8. Print multiplication table of 5 , Use loop to print 5 × 1 to 5 × 10.
// let num = +prompt('Enter the number');
// console.log(`Table of ${num} is below`);
// for (let i = 1; i < 11; i++) {
//   console.log(`${num} X ${i} = ${num * i}`);
// }

/* -------------------------------------------------------------------------- */

// 9. Count how many numbers between 1 and 15 are greater than 8
// Loop and count conditionally.
// let count = 0;
// for (let i = 1; i < 16; i++) {
//   if (i > 8) {
//     count++;
//   }
// }
// console.log(`The number of numbers greater than 8 in between 1 to 15 is : ${count}`);
/* -------------------------------------------------------------------------- */

// 10. Ask user for password and print access status
// Hardcoded correct password. Compare with user input.
// let enteredPassword = prompt('Enter 4 character Password for Access');
// function passwordValidator(a) {
//   const password = 4589;
//   if (password === a) return console.log('Access Granted');
//   else return console.log('Access Denied, Entered Password was Wrong');
// }
// if (
//   enteredPassword === null ||
//   enteredPassword.length > 4 ||
//   enteredPassword.trim() === '' ||
//   isNaN(+enteredPassword.trim())
// ) {
//   console.error('Something went wrong!!');
// } else {
//   passwordValidator(+enteredPassword);
// }

/* -------------------------------------------------------------------------- */
/*                   Level 2 – Slightly Tougher but Logical                   */
/* -------------------------------------------------------------------------- */
// 11. Allow only 3 attempts to enter correct password
// If user gets it right early, stop. If not → “Account locked”
// let attempts = 0;
// let isAccountOpened = false;

// function validatePassword(p) {
//   const password = 'hello1234';
//   if (p === password) {
//     isAccountOpened = true;
//   }
// }

// while (attempts < 3 && !isAccountOpened) {
//   let enteredPassword = prompt('Enter Password');
//   attempts++;
//   if (enteredPassword === null) {
//     console.error('You canceled it!!');
//     break;
//   } else {
//     validatePassword(enteredPassword);
//     if (attempts === 3 && !isAccountOpened) {
//       console.error('Access Denied!!! and Your Account Got Locked');
//     } else if (!isAccountOpened) {
//       console.error('Access Denied!!! Try Again');
//     } else if (isAccountOpened) {
//       console.log('Access Granted!!!');
//     }
//   }
// }

/* -------------------------------------------------------------------------- */

// 12. Ask user for words until they type “stop”. Count how many times they typed “yes”
// Loop until "stop" is typed. Count "yes".
// let count = 0;
// let input = null;

// do {
//   input = prompt('Enter any word');
//   if (input === null) {
//     console.error('You cancelled');
//     break;
//   }
//   if (input === 'yes') count++;
// } while (input !== 'stop');

// console.log(`You typed yes  ${count} times`);

/* -------------------------------------------------------------------------- */

// 13. Print numbers divisible by 7 from 1 to 50
// Use modulo % and loop.

// for(let i= 1; i<51; i++){
//   if(i%7===0){
//     console.log(i);
//   }
// }

/* -------------------------------------------------------------------------- */

// 14. Sum of all odd numbers from 1 to 30
// Add only odd numbers. Print final sum.
// let sum = 0;

// for (let i = 1; i < 31; i++) {
//   if (i % 2 !== 0) {
//     sum += i;
//   }
// }
// console.log(`Sum of all odd numbers is : ${sum}`);

/* -------------------------------------------------------------------------- */

// 15. Keep asking number until user enters an even number
// Use while loop. Stop only if input is even.

// let input;
// let flag = false;
// while (flag === false) {
//   input = prompt('Enter a number');
//   if (input === null) {
//     console.error('you cancelled it');
//     break;
//   } else {
//     if (+input.trim() % 2 === 0) {
//       console.log(+input.trim());
//       flag = true;
//     } else {
//       console.log(input);
//     }
//   }
// }

/* -------------------------------------------------------------------------- */

// 16. Print numbers between two user inputs
// Input start and end using prompt() → print all between.
// function inputValidate(x) {
//   if (x === null) {
//     return console.error('You cancelled it');
//   } else if (x.trim() === '') {
//     return console.error('You entered Nothing');
//   } else if (isNaN(Number(x.trim()))) {
//     return console.error('You entered character(s)');
//   } else {
//     x = Number(x.trim());
//     return console.log(`You entered ${x}`);
//   }
// }
// let startNum = prompt('Enter starting number');
// inputValidate(startNum);
// let endNum = prompt('Enter ending number');
// inputValidate(endNum);
// if (startNum <= endNum) {
//   for (let i = startNum; startNum <= endNum; startNum++) {
//     console.log(startNum);
//   }
// } else {
//   for (let i = startNum; startNum >= endNum; startNum--) {
//     console.log(startNum);
//   }
// }

/* -------------------------------------------------------------------------- */

// 17. Print only first 3 odd numbers from 1 to 20
// Use loop. Stop with break after 3 odd prints.
// let count = 0;
// for (let i = 1; i < 21; i++) {
//   if (i % 2 !== 0) {
//     count++;
//     console.log(i);
//   }
//   if (count === 3) break;
// }

/* -------------------------------------------------------------------------- */

// 18. Ask user 5 numbers. Count how many are positive
// Use loop + condition + counter.
// let count = 0;
// let num;
// for (let i = 1; i < 6; i++) {
//   num = prompt('Enter a number');
//   num = +num.trim();
//   if (num > 0) count++;
// }
// console.log(`You entered ${count} positive numbers`);

/* -------------------------------------------------------------------------- */

// 19. ATM Simulator – Allow 3 withdrawals
// Start with ₹1000 balance. Ask withdrawal amount 3 times.

// function isInputValid(x) {
//   if (x === null || x.trim() === '' || isNaN(+x.trim()) || +x.trim() < 0) {
//     console.error('Something Went Wrong');
//     return false;
//   } else {
//     return true;
//   }
// }

// let balance = 1000;
// const ATMPIN = 2345;

// let attempts = 0;
// while (attempts < 3) {
//   attempts++;
//   let moneyToWithdraw = prompt('Enter ammount to withdraw');
//   if (!isInputValid(moneyToWithdraw)) {
//     break;
//   }
//   let enteredPassword = prompt('Enter 4 digit ATM PIN');
//   if (!isInputValid(enteredPassword)) {
//     break;
//   }
//   moneyToWithdraw = +moneyToWithdraw.trim();
//   enteredPassword = +enteredPassword.trim();
//   if (moneyToWithdraw <= balance) {
//     if (enteredPassword === ATMPIN) {
//       console.log(`You debited ${moneyToWithdraw} ammount from your account.`);
//       break;
//     } else {
//       console.warn('You entered wrong PIN');
//     }
//   } else {
//     console.warn('Insufficient Balance');
//   }
// }
