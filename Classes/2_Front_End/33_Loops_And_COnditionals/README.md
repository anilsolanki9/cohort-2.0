# 🧠 JavaScript Practice Assignments – Beginner to Intermediate

## 🚀 Level 1 – Pure Beginner Practice

### 🧩 1. Print numbers from 1 to 10

Loop from 1 to 10 and print each number.

```javascript
// Using for loop
for (let i = 1; i < 11; i++) {
  console.log(i);
}
```

```js
// Using while loop
let i = 1;
while (i < 11) {
  console.log(i);
  i++;
}
```

```js
// Using do...while loop
let j = 1;
do {
  console.log(j);
  j++;
} while (j < 11);
```

---

### 🧩 2. Print only even numbers from 1 to 20

```js
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
```

---

### 🧩 3. Print numbers from 10 to 1

```javascript
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
```

---

### 🧩 4. Print the word "Yes" 5 times

```javascript
for (let i = 1; i <= 5; i++) {
  console.log('Yes');
}
```

---

### 🧩 5. Print numbers 1 to 20 with Odd/Even labels

```javascript
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) console.log(`${i} - Even`);
  else console.log(`${i} - Odd`);
}
```

---

### 🧩 6. Check if number is Positive or Negative

```javascript
let userInput = prompt('Enter a Number');
if (userInput === null) {
  console.error("Please enter a Number, don't cancel");
} else {
  let num = userInput.trim();
  if (num === '') {
    console.error('Please enter something, other then space(s)');
  } else {
    num = Number(num);
    if (isNaN(num)) {
      console.error('Invalid input! Only numbers are allowed');
    } else {
      if (num > 0) console.log(`${num} is Positive`);
      else if (num < 0) console.log(`${num} is Negative`);
      else console.log(`${num} is Zero`);
    }
  }
}
```

---

### 🧩 7. Check if user is eligible to vote

```javascript
let age = prompt('Enter your age');
if (age === null) {
  console.error('Age is required');
} else {
  age = age.trim();
  if (age === '') console.error('Empty input not allowed');
  else {
    age = +age;
    if (isNaN(age)) console.error('Age must be a number');
    else if (age >= 18) console.log('Eligible to vote');
    else console.log('Not eligible to vote');
  }
}
```

---

### 🧩 8. Print multiplication table of any number

```javascript
let num = +prompt('Enter a number');
console.log(`Table of ${num}:`);
for (let i = 1; i <= 10; i++) {
  console.log(`${num} × ${i} = ${num * i}`);
}
```

---

### 🧩 9. Count numbers greater than 8 between 1 and 15

```javascript
let count = 0;
for (let i = 1; i <= 15; i++) {
  if (i > 8) count++;
}
console.log(`Count of numbers greater than 8: ${count}`);
```

---

### 🧩 10. Password Validation (Access Granted/Denied)

```javascript
let enteredPassword = prompt('Enter 4-digit password');
const correctPassword = 4589;

if (
  enteredPassword === null ||
  enteredPassword.trim() === '' ||
  isNaN(+enteredPassword.trim()) ||
  enteredPassword.length > 4
) {
  console.error('Invalid input');
} else {
  if (+enteredPassword === correctPassword) console.log('Access Granted');
  else console.log('Access Denied');
}
```

---

## 🧠 Level 2 – Slightly Tougher but Logical

### 🔐 11. Password system with 3 attempts

```javascript
let attempts = 0;
let isAccountOpened = false;

function validatePassword(p) {
  const password = 'hello1234';
  if (p === password) isAccountOpened = true;
}

while (attempts < 3 && !isAccountOpened) {
  let enteredPassword = prompt('Enter Password');
  attempts++;

  if (enteredPassword === null) {
    console.error('You canceled!');
    break;
  }

  validatePassword(enteredPassword);

  if (isAccountOpened) console.log('Access Granted!');
  else if (attempts === 3) console.error('Account Locked!');
  else console.error('Access Denied! Try Again');
}
```

---

### 🌀 12. Count how many times “yes” is typed until “stop”

```javascript
let count = 0;
let input;

do {
  input = prompt('Enter any word');
  if (input === null) {
    console.error('You cancelled');
    break;
  }
  if (input === 'yes') count++;
} while (input !== 'stop');

console.log(`You typed "yes" ${count} times`);
```

---

### 🧮 13. Print numbers divisible by 7 (1 to 50)

```javascript
for (let i = 1; i <= 50; i++) {
  if (i % 7 === 0) console.log(i);
}
```

---

### 🧾 14. Sum of all odd numbers from 1 to 30

```javascript
let sum = 0;
for (let i = 1; i <= 30; i++) {
  if (i % 2 !== 0) sum += i;
}
console.log(`Sum of odd numbers = ${sum}`);
```

---

### 🔁 15. Keep asking until an even number is entered

```javascript
let input;
while (true) {
  input = prompt('Enter a number');
  if (input === null) {
    console.error('You cancelled');
    break;
  }
  if (+input.trim() % 2 === 0) {
    console.log(`Even number entered: ${input}`);
    break;
  } else {
    console.log('Not even, try again...');
  }
}
```

---

### 🔢 16. Print numbers between two inputs

```javascript
let start = +prompt('Enter starting number');
let end = +prompt('Enter ending number');

if (start <= end) {
  for (let i = start; i <= end; i++) console.log(i);
} else {
  for (let i = start; i >= end; i--) console.log(i);
}
```

---

### 🎯 17. Print only first 3 odd numbers from 1 to 20

```javascript
let count = 0;
for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
    count++;
  }
  if (count === 3) break;
}
```

---

### ➕ 18. Ask user 5 numbers and count positives

```javascript
let count = 0;
for (let i = 1; i <= 5; i++) {
  let num = +prompt('Enter a number');
  if (num > 0) count++;
}
console.log(`You entered ${count} positive numbers`);
```

---

### 🏦 19. ATM Simulator – Allow 3 withdrawals

```javascript
function isValid(x) {
  return !(x === null || x.trim() === '' || isNaN(+x.trim()) || +x.trim() < 0);
}

let balance = 1000;
const ATMPIN = 2345;
let attempts = 0;

while (attempts < 3) {
  attempts++;
  let amount = prompt('Enter amount to withdraw');
  if (!isValid(amount)) break;

  let enteredPin = prompt('Enter 4-digit PIN');
  if (!isValid(enteredPin)) break;

  amount = +amount.trim();
  enteredPin = +enteredPin.trim();

  if (amount > balance) {
    console.warn('Insufficient balance');
  } else if (enteredPin !== ATMPIN) {
    console.warn('Wrong PIN');
  } else {
    console.log(`₹${amount} withdrawn successfully`);
    balance -= amount;
    console.log(`Remaining Balance: ₹${balance}`);
    break;
  }
}
```

---

## 💡 Topics Covered

- Loops (`for`, `while`, `do...while`)
- Conditional Statements (`if`, `else if`, `else`)
- Input Validation
- Basic Functions
- User Interaction using `prompt()`
- Counters and Flags
- Logical Thinking Exercises

---

## 🧰 Tech Stack

- **Language:** JavaScript (ES6+)
- **Environment:** Browser console

---

## 🌟 Author

👨‍💻 **Anil Solanki** _BCA Student & Aspiring Full-Stack Developer_

> “Practice every day. Small consistent efforts compound into mastery.”
