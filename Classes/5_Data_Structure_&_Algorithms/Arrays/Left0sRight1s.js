let arr = [1, 1, 0, 1, 0, 0, 1, 1, 0];
let i = 0,
  j = 0;
// i and j are index of array arr
// i ka kam, hr ek bande pe jana and check krna 0 hai ya 1.
// j ka kam value swap krna, means 0 ko left me pahuchana
// 1 hone pe aage badh jaega i++
// 0 hone pe j ko inform krke apne apne index ki value exchange krenge (Swap), and j++, i++
while (i < arr.length) {
  if (arr[i] === 0) {
    [arr[j], arr[i]] = [arr[i], arr[j]];
    j++;
  }
  i++;
}
console.log(arr); // [ 0, 0, 0, 0, 1, 1, 1, 1, 1 ]

