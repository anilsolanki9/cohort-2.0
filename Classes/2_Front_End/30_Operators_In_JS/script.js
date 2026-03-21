// Operators

// Arithmatic Operators
// + , - , * , / , % , ** ,

// + (Addition)
// e.g.
// let a = 10;
// let b = 6;
// console.log(a + b); //output: 16

// - (Subtraction)
// console.log(a - b); //output: 4

// * (Multiplication)
// console.log(a * b); //output: 60

// / (Division)
// console.log(a / b); //output: 1.6666666666666667

// % (Remainder)
// console.log(a % b); //output: 4

// ** (Exponentiation)
// console.log(2 ** 3); // Output: 8
// console.log(2 ** 4); // Output: 16
// console.log(5 ** 3); // Output: 125

// Assignmnet Operators
// = , += , -= , *= , /= , %= , **= ,

// = (Asignment)
// let x = 10;
// x = 5;
// let y;
// y = x;

// += (Addition Assignment)
// let x = 5;
// x += 7; //x = x + 7 = 5 + 7 = 12

// -= (Sutraction Assignment)
// let x = 5;
// x -= 7; // x = x - 7 = 5 - 7 = -2;

// *= (Multiplication Assignment)
// let x = 5;
// x *= 7; // x = x * 7 = 5 * 7 = 35;

// /= (Devision Assignment)
// let x = 5;
// x /= 7; // x = x / 7 = 5 / 7 = 0.7142857142857143;
// let y = 5;
// y /= 2; // y = y / 2 = 5 / 2 = 2.5

// %= (Modulus Assignment)
// let x = 7;
// x %= 5; // x = x % 5 = 7 % 5 = 2

// **= (Exponentiation Assignment)
// let x = 5;
// x **= 4; // x = x ** 4 = 5 ** 4 = 625

// Comparision Operators
// == , === , != , !== , > , < , >= , <= ,

// == (Equal to) [Only check value, not the type] [Never use] [Do type conversion if operands are of diff data types]
// 5 == 5; // true
// 5 == "5"; // true

// === (Strict Equal to) [Compares both value and data type ] [Always Use]
// 5 === 5; // true
// 5 === "5"; // false

// != (Not Equal to) [Only check value not the type] [Never use]
// 5 != 8; // true
// 5 != 5; // false
// 5 != "5"; // false

// !== (Strict Not Equal to) [Check both value and type] [Always use]
// 5 !== 8; // true
// 5 !== 5; // false
// 5 !== "5"; // true

// > (Greater than)
// 10 > 3; // true
// 2 > 3; //false
// 5 > 5; // false

//  < (Less than)
// 10 < 4; // false
// 2 < 5; // true
// 4 < 4; //false

// >= (Greater than or Equal to)
// 20 >= 5; // true
// 20 >= 90; // false
// 30 >= 30; // true

// <= (Less than or Equal to)
// 10 <= 5; // false
// 30 <= 100; // true
// 10 <= 10; // true

// Logical Operators
//  && , || , !

// || returns first truthy value it finds, or last value if none is truthy
// && returns first falsy value it finds or last value if both are truthy

// && (Logical AND)
// true && true => true
// false && true => false
// true && false => false
// false && false => false

// || (Logical OR)
// true || true => true
// false || true => true
// true || false => true
// false || false => false

//  ! (Logical NOT)
// !true => false
// !false => true

// let count = 0;
// let total = count || 10;
// console.log(total); // gives 10 ?? why
// because js is not completely logaical based language, and here || and && works differently.
// || returns first truthy value it finds, or last value if none is truthy
// && returns first falsy value it finds or last value if both are truthy

// Ternary Operator
// condition ? executeThis-ifTrue : executeThis-ifFalse;
// let age = prompt("What is your age?");
// age >= 18 ? alert("You can Vote !") : alert("Sorry, You can not vote !");

// Nested Ternary
// let marks = prompt("Enter your marks");
// let grade =
//   marks >= 95 ? "A+" :
//   marks >= 90 ? "A" :
//   marks >= 65 ? "B" :
//   marks >= 40 ? "C" :
//   marks >= 33 ? "D" : "Fail";

// Type checking
// typeof , instanceof
// console.log(12, typeof 12);
// console.log(5.67, typeof 5.67);
// console.log(6n, typeof 6n);
// console.log("Hello", typeof "Hello");
// console.log(true, typeof true);
// console.log(undefined, typeof undefined);

// console.log("0/0 =>", 0 / 0, typeof 0 / 0); // value of 0 / 0 is NaN and its type is NaN, but type of NaN is number ??
// console.log(NaN, typeof NaN);
// console.log(null, typeof null); // Gadbad hai, This is oldest JS Bug

// let arr = [1, 2, 3];
// console.log(arr, typeof arr);
// Other method to check if its array or not
// console.log("arr is an array from Object Array?", Array.isArray(arr)); // true
// OR
// console.log("arr is instanceof Array?", arr instanceof Array); // true

// console.log(function () { }, typeof function () { });

// instanceof dont works for premitive data type values
// console.log(123 instanceof Number);//false

// String Operator
// (+) concatenation Operator
// let Uname = "Anil";
// Uname = Uname + "Solanki";
// console.log(Uname);
// console.log("Anil" + 1);

// Order matters in comcatenation
// agar string ke bad arithmaic hai to woh agr sirf + se added h toh concatenate hoke string ban jaega
// console.log("1" + 2 + 3); // 123
// // otherwise agar arithmatic brackets me h () then arithmatic hoke  concatenete hoga.
// console.log("1" + (2 + 3)); // 15
// //  agr string se pahle artithmatic h toh woh perform hoga than concatenation.
// console.log(1 + 2 + "3"); // 33

// Spread operator ...
// Spread operator is used to spread (Expend) elements of an array, object, or string, into individual values. Used to get original copy of the reference data type. Becuase in referene type when we try to get a copy it gives the referene and not the direct copy.
// eg.
// let arr1 = [1, 2, 3, 4];
// let arr2 = arr1;
// arr2.pop();
// console.log(arr1); // (3) [1, 2, 3]
// console.log(arr2); // (3) [1, 2, 3]
// The above examplem shows that arr2 got reference of arr1, thats why when we changed arr2 italso changes arr1. So if we want a direct copy we use spread operator ...
// let arr1 = [1, 2, 3, 4];
// let arr2 = [...arr1];
// arr2.pop();
// console.log(arr1); // (4) [1, 2, 3, 4]
// console.log(arr2); // (3) [1, 2, 3]

// using spread operator we can get copies of more then one array in another array.
// let arr1 = [1, 2, 3];
// let arr2 = [6, 7, 8, 9, 10];
// let arr3 = [...arr1, 4, 5, ...arr2];
// console.log(arr3); //(10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// We can use spread with objects
// let user = { name: "Anil", age: 21 };
// let updatesUser = { ...user, city: "Jodhpur" };
// console.log(updatesUser); // {name: 'Anil', age: 21, city: 'Jodhpur'}

// Note : if there is any chance that key are overlaping, then later one overrides
// let user = { name: "Anil", age : 21 };
// let newUser = { ...user, age: 22 };
// console.log(newUser); // {name: 'Anil', age: 22}

// spread in function calls
// let nums = [1, 2, 3, 4, 5];
// function add(a, b, c, d, e) {
//   return a + b + c + d + e;
// }
// without spread
// console.log(add(nums[0], nums[1], nums[2], nums[3], nums[4]));
// with spread
// console.log(add(...nums)); //15

// Rest ... Operator
//  Used to collect multiple values into single variable (Like array or oject)
// Oposite of spread, spread expands one variable in it's value, rest collects multiple values in one variable
// eg. Rest parameterin function
// function arrayFication(...nums) {
//   let arr = [...nums]; // in this the ...nums is spread operator, and in parameter it is rest operator.
//   return arr;
// }
// console.log(arrayFication(1, 2, 3, 4, 5)); // take numbers and convert it to an array

// we can combine resty operator with other arguments,
// But NOTE: ...rest operator must be last in argument list. OK
// function intro(first, ...rest) {
//   console.log("First :", first);
//   console.log("Rest :", rest); // Prints the array because the rest has multiple values
//   console.log("Rest :", ...rest); // prints the values because ...rest spreads all multiple values seperated by commas and console prints the values as values, not array . OK.
//  so when we take argument using rest operator in argument like ...rest, then inside the function block, rest is an array containing all rest arguments, ...rest are all the values spreaded using spread operator.
// }
// console.log(intro("Anil", 21, "Jodhpur", "Developer"));

// Nullish coalescing operator
// value1 ?? value2;
// it runs the right hand value only if left hand value is null or undefined. (Not for falsy or 0)
// if the left hand value1 is null or undefined return value2, otherwise return value1
// let username = null;
// let displayName = username ?? "Guest";
// console.log(displayName); // Guest
// eg2
// let username = 'Anil';
// let displayName = username ?? "Guest";
// console.log(displayName); // Anil

// Optional chaining
// Safe way to access deeply nested properties , without throwing error which is got when we try to access something in chain which is null or undefined.
// eg.
// let user = {
//   pprofile: {
//     name: "Anil",
//     age: 21
//   }
// };
// console.log(user.pprofile.name); //Anil
// above works fine but if profile wasnt existing we will get error.

// eg
// let user = {};
// console.log(user.profile.name);
// Uncaught TypeError: Cannot read properties of undefined (reading 'name')
// ek level ke key ko fir bhi js define kr deta hai, and usko undefined value de deta hai, but ek se jyda level deep nesting krna without delaring toh error de dega.
// means even we have not create any key inside user object but we can add key and value like
// user.profile = "Anil";
// Iske bad agr hum user.profile.name access krne ki try krenge to ab undefined milega

// So to tackle this we use optional chaining using ?.
// let user = {};
// console.log(user?.profile?.name);// undefined
// this checks that the key after ?. it only try to access the nested key only if its defined, otherwise it access the current. like if name is not defined in profile then only user?.profile get acessed.

// Hoisting and Temporal DEAD ZONE (TDZ)
// Hoisting - variale definition is broken into two parts variable declaration and variable initialization. and Variable declaration is shifted at top of scope (Either global or block or function scope), but variable initialization kept at the same line where variable was defined.
// So because of hoisting we can use variable or function even before it is declared , because JS hoist them. But if we use variable or function before its initialization
// eg
// console.log(a); // undefined
// var a = 10;  // hoisting happens
// console.log(a); // 10

// Here is how it will be loking in js eyes
// var a;
// console.log(a); // undefined
// a = 10;  // hoisting happens
// console.log(a); // 10

// Hoisting do work for let and const both, but its a rule that let and const can't be used before initialization.  and by default let and const dont get undefined value, or not get initialized when hoisted.
// So if we just try to access variable b then we get error like, b is not defined
// console.log(b); // Uncaught ReferenceError: b is not defined
// But if we try to access the b if we ave defined it later, then we get error like cannot access b before initialization, means the JS knows that b is been defined later, but abhi access nahi kar sakte ho. This is due to Temporal Dead Zone
// console.log(b); // Uncaught ReferenceError: Cannot access 'b' before initialization
// let b = 5;

// FUnction Hoisting
// we can access the function anywhere in the scope where it is defined. Function hoist but not just name, the complete funcion go to the top.
// eg.
// msg(); // output: Hello Mr.
// function msg() {
//   console.log("Hello Mr.");
// }

// The above program is same as below

// function msg() {
//   console.log("Hello Mr.");
// }
// msg(); // output: Hello Mr.

// TDZ (Temporal Dead Zone)
// The part of script before the variable (let and const) is initialized is known as TDZ. In TDZ the variable cannot be accessed.
// For var there is no such TDZ the value will be undefined
// console.log(a); // undefined
// var a = 7;
// for let we camt access let variable before its initialization and due to TDZ.
// console.log(b); // Uncaught ReferenceError: Cannot access 'b' before initialization
// let b = 5;

// Easy to remembder var let const all get hoisted but var get initialized with undefined value, whereas let and const are not initialized.
