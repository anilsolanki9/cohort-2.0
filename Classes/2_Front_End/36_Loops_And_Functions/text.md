Even number => n%2 === 0
Odd Number => n%2 !== 0

```js
// ATM simulator
/*
Allow 3 withdrawals
starts with 1000 balance
Ask to withdraw ammount 3 times
if enough then deduct, otherwise
print insufficient balance
At the end, print the remaining amount 
*/
let prompt = require("prompt-sync")();

let balance = 1000;
let count = 0;
let flag = false;

do {
  let withdraw = +prompt("Ammount batao ");
  if (withdraw <= balance && withdraw >= 0) {
    balance -= withdraw;
  } else {
    flag = true;
  }

  count++;
} while (balance > 0 && count !== 3 && !flag);

if (flag) {
  console.log("Insufficient balance");
}
console.log(`Your current balance is ${balance}`);
```

do-while loop
Recursion in JavaScript -> function calling itself
loop control statements -> break, continue

---

functions in JavaScript -> ek aisa code jo jb hum chahe tab chale, and use reuse bhi kr skte hai. ek function ek kam krta hai.
function arguments, parameter
function call
`arguments` object inside function body
