# 1. split() – String Method

## What it does

split() converts a string into an array by breaking it using a delimiter.

## Syntax

```javascript
string.split(separator, limit)
```

## Example

```javascript
let str = "apple,banana,grapes";
let result = str.split(",");
console.log(result);
// ["apple", "banana", "grapes"]
```

## Real-life use case

- CSV data parsing
- Breaking sentences into words
- Extracting values from URLs

```javascript
let sentence = "I love JavaScript";
console.log(sentence.split(" "));
// ["I", "love", "JavaScript"]
```

# 2. join() – Array Method

## What it does

join() converts an array into a string.

## Syntax

```javascript
array.join(separator)
```

## Example

```javascript
let arr = ["Hello", "World"];
console.log(arr.join(" "));
// "Hello World"
```

## Real-life use case

- Creating sentences from arrays
- Formatting data for display

```javascript
let digits = [1, 2, 3, 4];
console.log(digits.join(""));
// "1234"
```

# 3. Math.random()

## What it does

Generates a random decimal number between 0 (inclusive) and 1 (exclusive).

## Syntax

```javascript
Math.random()
```

## Example

```javascript
console.log(Math.random());
// 0.234567 (random)
```

### Generate random number between 1–10

```javascript
let randomNum = Math.floor(Math.random() * 10) + 1;
console.log(randomNum);
```

## Real-life use case

- OTP generation
- Games
- Random colors

# 4. Math.floor()

## What it does

Rounds a number down to the nearest integer.

## Syntax

```javascript
Math.floor(number)
```

## Example

```javascript
console.log(Math.floor(4.9)); // 4
console.log(Math.floor(4.1)); // 4
```

## Real-life use case

- Index calculation
- Random number logic
- Pagination

```javascript
let price = 99.99;
console.log(Math.floor(price));
// 99
```

# 5. Combining Math.random() + Math.floor()

## Random number between min and max

```javascript
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandom(5, 15));
```

# 6. setTimeout()

## What it does

Executes a function once after a specified delay.

## Syntax

```javascript
setTimeout(callback, delayInMs)
```

## Example

```javascript
setTimeout(() => {
  console.log("Executed after 2 seconds");
}, 2000);
```

## Real-life use case

- Showing toast notifications
- Delayed redirects
- Animations

### Clear timeout

```javascript
let timer = setTimeout(() => {
  console.log("Will not run");
}, 3000);

clearTimeout(timer);
```

# 7. setInterval()

## What it does

Executes a function repeatedly at fixed intervals.

## Syntax

```javascript
setInterval(callback, intervalInMs)
```

## Example

```javascript
let count = 0;

let interval = setInterval(() => {
  console.log(count);
  count++;

  if (count === 5) {
    clearInterval(interval);
  }
}, 1000);
```

## Real-life use case

- Countdown timers
- Clocks
- Live data refresh