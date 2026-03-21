let arr = [10, 20, 30, 40, 50];
arr.push(60); // add at end
arr.pop(); // remove from end & return that value
arr.unshift(69); // add at the start
arr.shift(); // remove from the start
console.log(arr.length); // print the length of array
// arr[0] => first value of the array
// arr[arr.length - 1] => last element of the array

let arr2 = new Array(5); // creates an empty array of length 5
console.log(arr2); // [ <5 empty items> ]
console.log(arr2[0]); // undefined

arr2.push(100);
arr2.unshift(98);
console.log(arr2); // [ 98, <5 empty items>, 100 ]

arr2[3] = 54; // at index 3 we are assigning 54
console.log(arr2); // [ 98, <2 empty items>, 54, <2 empty items>, 100 ]

let arr3 = new Array(6).fill(true);
console.log(arr3); // [ true, true, true, true, true, true ]