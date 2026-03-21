let a = 6752896;
let rev = 0;

while (a > 0) {
  rev = (rev * 10 + a % 10);
  a = Math.floor(a / 10);
}

console.log(rev);
