let a = 5;
let b = 10;

// Swap the values of a and b
let temp = a;   // Store the value of a in a temporary variable
a = b;          // Assign the value of b to a
b = temp;       // Assign the value stored in temp (original a) to b

console.log("After swapping:");
console.log("a:", a, "b:", b);

// Using mathematical operations to swap values without a temporary variable
let m = 3;
let n = 7;
m = m + n; // m now holds the sum of m and n
n = m - n; // n now holds the original value of m
m = m - n; // m now holds the original value of n   
console.log("After swapping using math:");
console.log("m:", m, "n:", n);

// Alternatively, you can also swap values using array destructuring (ES6+)
let x = 15;
let y = 20;
[x, y] = [y, x];
console.log("After swapping again using destructuring:");
console.log("x:", x, "y:", y);