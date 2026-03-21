let arr = [9, 10, 20, 14, 67, 45, 33];
let max = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) max = arr[i];
}

console.log(arr);
console.log("max: ", max); // max:  67
