/* -------------------------------- Answer 1 -------------------------------- */
// for(let i = 1; i<11; i++){
//   console.log(i);
// }

/* -------------------------------- Answer 2 -------------------------------- */
// for(let i = 1; i<21; i++){
//   if(i%2===0) console.log(i);
// }

/* -------------------------------- Answer 3 -------------------------------- */
// for(let i=10; i; i--){
//   console.log(i);
// }

/* -------------------------------- Answer 4 -------------------------------- */
// for(let i = 1; i<6; i++){
//   console.log("Yes");
// }

/* -------------------------------- Answer 5 -------------------------------- */
// for(let i=1; i<21; i++){
//   if(i%2===0) console.log(`${i} - Even`);
//   else console.log(`${i} - Odd`);
// }

/* -------------------------------- Answer 6 -------------------------------- */
// let userInput = prompt('Enter a Number');
// if (userInput === null) console.error("Enter somethind don't Cancel the prompt");
// else if (!userInput.trim() || isNaN(+userInput.trim())) console.error('Please write a number');
// else {
//   userInput = +userInput;
//   if (userInput >= 0) console.log(`${userInput} : Positive`);
//   else console.log(`${userInput} : Negative`);
// }

/* -------------------------------- Answer 7 -------------------------------- */
// let userAge = prompt("Enter your age");
// if (userAge === null) console.error("Enter somethind don't Cancel the prompt");
// else if (!userAge.trim() || isNaN(+userAge.trim())) console.error('Please write a number');
// else {
//   userAge = +userAge;
//   if (userAge >= 18) console.log(`age : ${userAge} : Eligible`);
//   else console.log(`age : ${userAge} : Not Eligible`);
// }

/* -------------------------------- Answer 8 -------------------------------- */
// for(let i = 1; i<11; i++){
//   console.log(5 * i);
// }

/* -------------------------------- Answer 9 -------------------------------- */
// let count = 0;
// for(let i = 1; i<16; i++){
//   if(i>8) count++;
// }
// console.log(count);

/* -------------------------------- Answer 10 ------------------------------- */
// let userPassword = prompt('Enter your password');
// const correctPassword = 'anilso1234';
// if (userPassword === null || !userPassword.trim()) console.error('Please Enter Password');
// else {
//   if (userPassword === correctPassword) console.log('Access Granted');
//   else console.log('Access Denied');
// }

/* -------------------------------- Answer 11 ------------------------------- */
// let flag = false;
// let attempts = 0;
// const correctPassword = 'anilso1234';
// let userPassword = prompt('ENter your password');
// attempts++;
// if (userPassword === null || !userPassword.trim()) console.error('Please Enter Password');
// else if (userPassword === correctPassword) flag = true;
// while (!flag && attempts < 3) {
//   userPassword = prompt('ENter your password');
//   attempts++;
//   if (userPassword === null || !userPassword.trim()) console.error('Please Enter Password');
//   else if (userPassword === correctPassword) flag = true;
// }
// if (flag) console.log('Access Granted');
// else console.log('Access denied');
/* -------------------------------------------------------------------------- */
// let flag = false;
// let attempts = 0;
// const correctPassword = 'anilso1234';
// while (!flag && attempts < 3) {
//   let userPassword = prompt('ENter your password');
//   attempts++;
//   if (userPassword === null || !userPassword.trim()) console.error('Please Enter Password');
//   else if (userPassword === correctPassword) flag = true;
// }
// if (flag) console.log('Access Granted');
// else console.log('Access denied');

/* -------------------------------- Answer 12 ------------------------------- */
// let counter = 0;
// let userInput = prompt('Enter any word');
// while (userInput !== 'stop') {
//   if (userInput === 'yes') counter++;
//   userInput = prompt('Enter any word');
// }
// console.log(`You entered "yes" - ${counter} times.`);

/* -------------------------------- Answer 13 ------------------------------- */
// for (let i = 1; i < 51; i++) {
//   if (i % 7 === 0) console.log(i);
// }

/* -------------------------------- Answer 14 ------------------------------- */
// let sum = 0;
// for (let i = 1; i < 31; i++) {
//   if (i % 2 !== 0) sum += i;
// }
// console.log(sum);

/* -------------------------------- Answer 15 ------------------------------- */
// let userInput = +prompt('Enter a number');
// while (userInput % 2 !== 0) {
//   userInput = +prompt('Enter a number');
// }

/* -------------------------------- Answer 16 ------------------------------- */
// let startNum = +prompt('Enter starting number');
// let endNum = +prompt('Enter ending number');
// if (startNum <= endNum) {
//   for (let i = startNum; i <= endNum; i++) {
//     console.log(i);
//   }
// } else {
//   for (let i = startNum; i >= endNum; i--) {
//     console.log(i);
//   }
// }

/* -------------------------------- Answer 17 ------------------------------- */
// let counter = 0;
// for (let i = 1; i < 21; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//     counter++;
//   }
//   if (counter === 3) break;
// }

/* -------------------------------- Answer 18 ------------------------------- */
// let counter = 0;
// for (let i = 1; i < 6; i++) {
//   let userInput = +prompt('Enter a number');
//   if (userInput >= 0) counter++;
// }
// console.log(counter);

/* -------------------------------- Answer 19 ------------------------------- */
// let attempts = 0;
// let balance = 1000;
// let ammount = +prompt('Enter ammount to withdraw');
// attempts++;
// if (ammount <= balance && ammount >= 0) {
//   balance -= ammount;
// } else {
//   console.error('Insufficient balance');
// }
// while (attempts < 3) {
//   ammount = +prompt('Enter ammount to withdraw');
//   attempts++;
//   if (ammount <= balance && ammount >= 0) {
//     balance -= ammount;
//   } else {
//     console.error('Insufficient balance');
//   }
// }
// console.log(`Left Balance is ${balance}`);
