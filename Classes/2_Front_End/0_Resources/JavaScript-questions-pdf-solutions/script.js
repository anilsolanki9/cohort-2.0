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

// function getMax(a, b) {
//   if (a > b) return a;
//   else return b;
// }

// console.log(getMax(10, 20))

/* ------------------------- 46 ------------------------- */

// function fact(n) {
//   if (n < 0) return "Not defined";
//   else if (n == 1 || n == 0) return 1;
//   else {
//     return n * fact(n - 1);
//   }
// }
// console.log(fact(5));

/* ------------------------- 47 ------------------------- */

// let name = "Anil Solanki";
// function revStr(str) {
//   let arr = [];
//   for (let i = 0; i < str.length; i++) {
//     arr[i] = str[str.length - i - 1];
//   }
//   return arr.join('');
// }

// console.log(revStr(name));

/* ------------------------- 48 ------------------------- */

// let nums = [10, 20, 30, 45, 12, 23, 9, 8, 7];
// function getMax(arr) {
//   let max = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (max < arr[i]) max = arr[i];
//   }
//   return max;
// }

// console.log(getMax(nums));

/* ------------------------- 49 ------------------------- */

// let greet = "Hello i am Anil Solanki";
// function convertIntoKebab(str) {
//   return str.replaceAll(" ", "-");
// }

// console.log(convertIntoKebab(greet))

/* ------------------------- 50 ------------------------- */

// function helloWorld(){
//   console.log("Hello World");
// }

// helloWorld()

/* ------------------------- 51 ------------------------- */

// let num = -90;

// function check(n) {
//   if (n > 0) return "positive";
//   else if ((n === 0)) return "zero";
//   else return "negative";
// }

// console.log(check(num))

/* ------------------------- 52 ------------------------- */

// function cel2Fer(tempC) {
//   let tempF = (9 / 5) * tempC + 32;
//   return tempF.toFixed(2);
// }

// console.log(cel2Fer(55));

/* ------------------------- 53 ------------------------- */

// function getAverage(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }

//   return (sum / arr.length).toFixed(2);
// }

// console.log(getAverage([10, 20, 30, 40]));

/* ------------------------- 54 ------------------------- */

// function isPalindrome(str) {
//   let newStr = "";
//   for (let i = 0; i < str.length; i++) {
//     newStr += `${str[str.length - i - 1]}`;
//   }
//   return str === newStr;
// }

// console.log(isPalindrome("madam"));

/* ------------------------- 55 ------------------------- */

// function isPrime(num) {
//   if (num <= 1) return false;
//   if (num == 2) return true;
//   if (num % 2 == 0) return false;
//   else {
//     for (let i = 3; i * i <= num; i++) {
//       if (num % i == 0) return false;
//     }
//   }

//   return true;
// }

// console.log(isPrime(12));

/* ------------------------- 56 ------------------------- */

// let greet = "Hello i am Anil Solanki Good Morning";

// function checkCount(str) {
//   let arr = str.split(" ");
//   return arr.length;
// }

// console.log(checkCount(greet))

/* ------------------------- 57 ------------------------- */

// let greet = "Hello i am Anil Solanki Good Morninggggggggg";

// function checkCount(str) {
//   let arr = str.split(" ");
//   let maxWord = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (maxWord.length < arr[i].length) maxWord = arr[i];
//   }
//   return maxWord;
// }

// console.log(checkCount(greet));

/* ------------------------- 58 ------------------------- */

// let arr = [1, 2, 0, 10, false, null, undefined, NaN, "",9];

// function makePure() {
//   let newArr = arr.filter((val) => Boolean(val));
//   arr = [...newArr];
// }

// makePure();
// console.log(arr);

/* ------------------------- 59 ------------------------- */

// let str = "anil solanki ghanchi";

// function turnCamel(str) {
//   let arr = str.split(" ");
//   arr = arr.map((val) => {
//     val = val[0].toUpperCase() + val.slice(1, val.length);
//     return val;
//   });

//   return arr.join("");
// }

// console.log(turnCamel(str));

/* ------------------------- 60 ------------------------- */

// let min = 10;
// let max = 30;

// let random = min + Math.random() * (max - min);
// console.log(random);

/* ------------------------- 61 ------------------------- */

// let person = {
//   name: "Anil",
//   age: 21,
// };

// for (let key in person) {
//   console.log(key, " : ", person[key]);
// }

/* ------------------------- 62 ------------------------- */

// let person = {
//   name: "Anil",
//   age: 21,
// };
// person.address = 'jodhpur';
// console.log(person)

/* ------------------------- 63 ------------------------- */

// let person = {
//   name: "Anil",
//   age: 21,
// };

// console.log(person.name)

/* ------------------------- 64 ------------------------- */

// let person = {
//   name: "Anil",
//   age: 21,
// };

// delete person.name;
// console.log(person)

/* ------------------------- 65 ------------------------- */

// let person = {
//   name: "Anil",
//   age: 21,
// };

// for (let val of Object.keys(person)) {
//   console.log(val);
// }

/* ------------------------- 66 ------------------------- */

// let books = [
//   {
//     id: 1,
//     name: "Javascript guide",
//     author: "James T Dun",
//     year: 2024,
//   },

//   {
//     id: 2,
//     name: "CSS guide",
//     author: "Manish kumar",
//     year: 2025,
//   },

//   {
//     id: 3,
//     name: "HTML guide",
//     author: "Harish Patel",
//     year: 2026,
//   },
// ];

// console.log(books);

/* ------------------------- 67 ------------------------- */

// let books = [
//   {
//     id: 1,
//     name: "Javascript guide",
//     author: "James T Dun",
//     year: 2024,
//   },

//   {
//     id: 2,
//     name: "CSS guide",
//     author: "Manish kumar",
//     year: 2025,
//   },

//   {
//     id: 3,
//     name: "HTML guide",
//     author: "Harish Patel",
//     year: 2026,
//   },
// ];

// console.log(books[1].author)

/* ------------------------- 68 ------------------------- */

// let book = {
//   id: 1,
//   name: "Javascript guide",
//   author: "James T Dun",
//   year: 2024,
// };

// if ("year" in book) console.log("Hello");

/* ------------------------- 69 ------------------------- */

// let book = {
//   id: 1,
//   name: "Javascript guide",
//   author: "James T Dun",
//   year: 2024,
// };

// console.log(Object.keys(book).length);

/* ------------------------- 70 ------------------------- */

// let book = {
//   id: 1,
//   name: "Javascript guide",
//   author: "James T Dun",
//   year: 2024,
// };

// let obj2 = {
//   any: "ahhayay",
// };

// let obj3 = Object.assign(book, obj2);
// console.log(obj3);

/* ------------------------- 71 ------------------------- */

// let str = "Anil Solanki";
// console.log(str.length)

/* ------------------------- 72 ------------------------- */

// let str = "Anil Solanki";
// console.log(str.slice(-4))

/* ------------------------- 73 ------------------------- */

// let str = "Anil Solanki";
// console.log(str.toLowerCase())

/* ------------------------- 74 ------------------------- */

// let str = "Anil Solanki";
// let wordsArr = str.split(" ");
// console.log(wordsArr);

/* ------------------------- 75 ------------------------- */

// let str = "Anil Solanki";
// console.log(str.indexOf('A'))

/* ------------------------- 76 ------------------------- */

// let str = "Anil Solanki";
// let newStr = str.replaceAll("Anil", "Suresh");
// console.log(newStr);

/* ------------------------- 77 ------------------------- */

// let str = "Anil Solanki";
// let newStr = str + str + str;
// console.log(newStr);

/* ------------------------- 78 ------------------------- */

// let str = "Anil Solanki";
// console.log(str.includes("Anil"));

/* ------------------------- 79 ------------------------- */

// let str = "Anil Solanki";
// str = str.replaceAll(" ", "");
// console.log(str);

/* ------------------------- 80 ------------------------- */

// let count = 0;
// let str = "Anil Solanki";
// str
//   .toLowerCase()
//   .split("")
//   .forEach((char) => {
//     if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
//       count++;
//     }
//   });

// console.log(count);

/* ------------------------- 81 ------------------------- */

// let nums = [11, 20, 29, 90, 78, 7, 45, 66];

// for (let i = 0; i < nums.length; i++) {
//   if (nums[i] % 2 == 0) {
//     console.log(nums[i]);
//   }
// }

/* ------------------------- 82 ------------------------- */

// let nums = [11, 20, 29, 11, 90, 78, 7, 11, 45, 66];
// let x = 11;
// let count = 0;
// nums.forEach((val) => {
//   if (val == x) count++;
// });

// console.log(count);

/* ------------------------- 83 ------------------------- */

// let greet = "Hello sir I am Anil Solanki greeting you a very Good Morning";
// let newGreet = greet
//   .split(" ")
//   .map((word) => {
//     return word.split("").reverse().join("");
//   })
//   .join(" ");

// console.log(newGreet);

/* ------------------------- 84 ------------------------- */

// let num = 5;
// for (let i = 1; i <= num; i++) {
//   let prnt = "";
//   for (let j = 1; j <= i; j++) {
//     prnt += "* ";
//   }
//   console.log(prnt + "\n");
// }

/*
 *
 * *
 * * *
 * * * *
 * * * * *
 */

/* ------------------------- 85 ------------------------- */

// let nums = [11, 20, 29, 11, 90, 78, 7, 11, 45, 66];
// let nArr = nums.map((val) => val ** 2);
// console.log(nArr);

/* ------------------------- 86 ------------------------- */

// let sum = 0;
// for (let i = 1; i < 51; i++) {
//   if (i % 2 == 0) continue;
//   else sum += i;
// }
// console.log(sum);

/* ------------------------- 87 ------------------------- */

// let person = {
//   fName: "Anil",
//   lName: "Solanki",
//   age: 21,
// };

// console.log(person.fName + " " + person.lName);

/* ------------------------- 88 ------------------------- */

// let numS = "51";
// console.log(Number(numS) + 5);

/* ------------------------- 89 ------------------------- */

// let nums = [11, 20, 29, 11, 90, 78, 7, 11, 45, 66];
// let newNumsArr = [nums[nums.length - 1]];

// for (let i = 1; i < nums.length; i++) {
//   newNumsArr[i] = nums[i - 1];
// }
// console.log(nums);
// console.log(newNumsArr);

/* ------------------------- 90 ------------------------- */

// let arr = [];
// console.log(arr.length == 0);

/* ------------------------- 91 ------------------------- */

// let date = new Date();
// let dateText = String(date.getDate()).padStart(2, "0") + "/" + String(date.getMonth() + 1).padStart(2, "0") + "/" + date.getFullYear();
// console.log(dateText);

/* ------------------------- 92 ------------------------- */

// let nums = [11, 20, 29, 11, 90, 78, 7, 11, 45, 66];
// console.log(Math.min(...nums))

/* ------------------------- 93 ------------------------- */

// let n = 10;
// function fibbonacchi(n) {
//   if (n == 1) return 0;
//   if (n == 2) return 1;
//   else if (n > 2) {
//     return fibbonacchi(n - 1) + fibbonacchi(n - 2);
//   }
// }

// for (let i = 1; i <= n; i++) {
//   console.log(fibbonacchi(i));
// }

/* ------------------------- 94 ------------------------- */

// let a = 0,
//   b = 0;

// try {
//   if (a == 0 && b == 0) throw new Error("Dividing 0 by 0 is not valid");
//   if (b == 0) throw new Error("Dividing by 0 is not alowed");
//   let dv = a / b;
//   console.log(dv);
// } catch (err) {
//   console.log(err);
// }

/* ------------------------- 95 ------------------------- */

// let myName = "Anil Solanki";
// myName = myName.split("");
// let ind = null;

// for (let i = 0; i < myName.length; i++) {
//   for (let j = i + 1; j < myName.length; j++) {
//     if (myName[j] === myName[i]) {
//       ind = j;
//       break;
//     }
//     if (ind) break;
//   }
// }

// console.log(ind);

/* ------------------------- 96 ------------------------- */

// const arr = [1, 2, 3, 2, 4, 5, 1, 4, 5, 6, 6, 6, 7];

// for (let i = 0; i < arr.length; i++) {
//   let num = arr[i];
//   for (let j = 0; j < arr.length; j++) {
//     if (i !== j && arr[i] === arr[j]) {
//       arr.splice(j, 1);
//     }
//   }
// }

// console.log(arr);

/* ------------------------- 97 ------------------------- */

// const arr = [1, 2, 3, 2, 4, 5, 1, 4, 5, 6, 6, 6, 7];
// const arr2 = [1, 2, 3, 2, 4, 5, 1, 4, 5, 6, 6, 6, 7];

// let arr3 = [...arr, ...arr2];
// console.log(arr3);

/* ------------------------- 98 ------------------------- */

// let str = "Anil Solanki";
// console.log(str.length)

/* ------------------------- 99 ------------------------- */

// let btn = document.querySelector("button");
// btn.addEventListener("click", function () {
//   this.classList.toggle("active");
// });

/* ------------------------- 100 ------------------------ */

// const arr = [1, 2, 3, 2, 4, 34, 5, 1, 4, 5, 6, 6, 6, 7];
// const passingMarks = 33;
// let res = arr.every((val) => {
//   return val > passingMarks;
// });

// console.log(res);
