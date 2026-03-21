// Method -1 : Using temp empty array
/*
let arr = [20, 45, 78, 95, 34];
let temp = [];

for (let i = arr.length - 1; i >= 0; i--) {
  temp.push(arr[i]);
}
console.log(arr); // [ 20, 45, 78, 95, 34 ]
console.log(temp); // [ 34, 95, 78, 45, 20 ]
*/

// Method-2 Temp array with length same as original array
/*
let arr = [20, 45, 78, 95, 34];
let temp = new Array(arr.length);
let i = arr.length - 1;
let j = 0;
while(i>=0){
    temp[j]=arr[i];
    i--;
    j++;
}
console.log(temp); // [ 34, 95, 78, 45, 20 ]
*/

// Method-3 without extra space (Two Pointal Algorithm)
let arr = [20, 45, 78, 95, 34];
let i = 0,
  j = arr.length - 1;
while (i < j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
  i++;
  j--;
}
console.log(arr); // [ 34, 95, 78, 45, 20 ]
