let arr = [10, -39, 30, 60, -10, -20, -9, 56, 89];

let i = 0,
  j = 0;
// i ka kam, hr element pe jake check krna kahi negative toh nahi
// j ka kam, value negative hone pe usko left me laana
while (i < arr.length) {
  if (arr[i] < 0) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    j++;
  }
  i++;
}

console.log(arr); // [-39, -10, -20, -9, 10,  30,  60, 56, 89]
