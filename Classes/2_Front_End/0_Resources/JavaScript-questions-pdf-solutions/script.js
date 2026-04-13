/* -------------------------- 1 ------------------------- */

// let fName = "Anil";
// let lName = "Solanki";
// let favHobby = "Learning new things";
// console.log(`My name is ${fName} ${lName} and my hobby is ${favHobby}.`);

/* -------------------------- 2 ------------------------- */

// console.log(45 * 2 - 10);

/* -------------------------- 3 ------------------------- */

// let date = new Date();
// console.log(date.getFullYear());

/* -------------------------- 4 ------------------------- */

// let fName = "Anil";
// let lName = "Solanki";
// console.log(`Full name : ${fName} ${lName}.`);

/* -------------------------- 5 ------------------------- */

// let num = 5;
// console.log(num);
// num++;
// console.log(num);

/* -------------------------- 6 ------------------------- */

// console.error("CustomError : Something went wrong!!");

/* -------------------------- 7 ------------------------- */

// let num = 10;
// console.log(num ** 2);

/* -------------------------- 8 ------------------------- */

// let isActive = true;
// console.log(isActive);

/* -------------------------- 9 ------------------------- */

// let age = 21;
// console.log(age > 18 ? "Greater" : "Lower");

/* ------------------------- 10 ------------------------- */

// let num = 100;
// console.log(num / 0); //=> Infinity

/* ------------------------- 11 ------------------------- */

// let num = 10;
// console.log(num);

/* ------------------------- 11 ------------------------- */

// const PI = 3.1415;
// console.log(PI)

/* ------------------------- 12 ------------------------- */

// let n = 10;
// console.log(n);
// n = 20;
// console.log(n);

/* ------------------------- 14 ------------------------- */

// console.log(typeof null); //=> object (Legacy Bug)

/* ------------------------- 15 ------------------------- */

// let str = "21";
// console.log(typeof str); //=> string

/* ------------------------- 16 ------------------------- */

// let isTrue = true;
// console.log(typeof isTrue); // => boolean

/* ------------------------- 17 ------------------------- */

// let str = "Anil";
// let num = 21;
// let isActive = false;
// console.log(str, num, isActive);

/* ------------------------- 18 ------------------------- */

// let v;
// console.log(typeof v); //=> undefined

/* ------------------------- 19 ------------------------- */

// let v = undefined;
// console.log(typeof v); //=> undefined

/* ------------------------- 20 ------------------------- */

// const arr = [10, 20, 30, 40];

// arr[2] = 99;
// console.log(arr);

/* ------------------------- 21 ------------------------ */

// for (let i = 1; i < 51; i++) {
//   console.log(i);
// }

/* ------------------------- 22 ------------------------- */

// let num = 1;
// let sum = 0;
// while (num < 11) {
//   sum += num;
//   num++;
// }
// console.log(sum);

/* ------------------------- 23 ------------------------- */

// let str = "JavaScript";
// for (let val of str) {
//   console.log(val);
// }

/* ------------------------- 24 ------------------------- */

// for (let i = 1; i < 21; i++) {
//   if (i % 2 === 0) continue;
//   console.log(i);
// }

/* ------------------------- 25 ------------------------- */

// let i = 5;
// do {
//   console.log(i);
//   i--;
// } while (i > 0);

/* ------------------------- 26 ------------------------- */

// let num = 5;
// let fact = 1;

// for (let i = 1; i <= num; i++) {
//   fact *= i;
// }
// console.log(fact)

/* ------------------------- 27 ------------------------- */

// for (let i = 1; i <= 3; i++) {
//   let sum = ``;
//   for (let j = 1; j <= 3; j++) {
//     sum += `${i * j} `;
//   }
//   console.log(sum + "\n");
// }

/* ------------------------- 28 ------------------------- */

// let arr = [10, 20, 30, 40, 50];
// for (let i = 0; i < arr.length / 2; i++) {
//   [arr[i], arr[arr.length - i - 1]] = [arr[arr.length - i - 1], arr[i]];
// }
// console.log(arr);

/* ------------------------- 29 ------------------------- */

// for (let i = 1; i < 101; i++) {
//   if (i % 5 == 0) console.log(i);
//   else continue;
// }

/* ------------------------- 30 ------------------------- */

// for (let i = 1; i <= 10; i++) {
//   console.log(i * 7);
// }

/* ------------------------- 31 ------------------------- */

// let movies = ["Sahanshah", "Bholbholeya", "Dangal", "Dhurandhar", "Bangal Files", "Lashmir Files"];
// let str = movies.join("-");
// console.log(str);

/* ------------------------- 32 ------------------------- */

// let arr = [10, 20, 30, 40];
// console.log(arr[1]);

/* ------------------------- 33 ------------------------- */

// let arr = [10, 20, 30, 40];
// arr.unshift(99, 100);
// console.log(arr)

/* ------------------------- 34 ------------------------- */

// let arr = [10, 20, 30, 40];
// arr.pop();
// console.log(arr);

/* ------------------------- 35 ------------------------- */

// let arr = [10, 20, 30, 40, 50, 60, 70];
// let newArr = arr.slice(0, 3);
// console.log(newArr);

/* ------------------------- 36 ------------------------- */

// let arr = [1, 26, 5, 28, 99, 10, 11];
// let idx = arr.indexOf(5);
// console.log(idx);

/* ------------------------- 37 ------------------------- */

// let arr = [1, 26, 5, 28, 99, 10, 11];
// console.log(arr.includes(3));

/* ------------------------- 38 ------------------------- */

// let arr1 = [1, 26, 5, 28];
// let arr2 = [19, 2992, 822, 27];

// let newArr = arr1.concat(arr2);
// console.log(newArr)

/* ------------------------- 39 ------------------------- */

// let arr = [1, 26, 5, 28, 99, 10, 11, 19, 2992, 822, 27];

// arr.sort((a, b) => a - b);
// console.log(arr);

/* ------------------------- 40 ------------------------- */

// let arr1 = [1, 26, 5, 28];
// let arr2 = [...arr1];
// console.log(arr2);
// arr1.pop();
// console.log(arr1);
// console.log(arr2);

/* ------------------------- 41 ------------------------- */

// function check(num) {
//   if (num % 2 !== 0) return "odd";
//   else return "even";
// }

// console.log(check(2));
// console.log(check(3));

/* ------------------------- 42 ------------------------- */

// function circleArea(rad) {
//   return (Math.PI * rad * rad).toFixed(2);
// }

// console.log(circleArea(4));

/* ------------------------- 43 ------------------------- */

// function getSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum.toFixed(2);
// }

// let arr = [10, 20, 30, 40, 50, 60];

// console.log(getSum(arr));

/* ------------------------- 44 ------------------------- */

// let str = "Anil Solanki";
// let chr = "A";

// function checkStringStart(str = "Anil", chr) {
//   return str.startsWith(chr);
// }

// console.log(checkStringStart(str, chr));

/* ------------------------- 45 ------------------------- */


