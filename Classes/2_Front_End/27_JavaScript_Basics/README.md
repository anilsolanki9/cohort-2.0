# Day 27

## Statement
A line of code which is as a instruction for js compilor, it does not produce any value directly, but performs a task. 

"Something that does something"

eg. 
```js
let x = 5;  //statement 
function greet(name){} //statement
```

## Expression
An expression that produces a value.

eg.
```js
3 + 5; // 8
"Anil " + 5; // "Anil 5"
```

## Expression can be put i to a statement, but a statement cannot be put into an expression.
eg.
```js
let total = (4 + 10) * 3;  //expression inside a statement, valid
```

```js
((4 + 10) + console.log("hello")) * 3; //Not valid
```
## group() and groupEnd()
It is used to group console output together to make the console output more readable.
it starts from `console.group()` and ends at `console.groupEnd()`

eg. 
```js
console.group("User Details");
console.log("Name: Anil");
console.log("Age: 21");
console.log("City: Delhi");
console.groupEnd(); //marks the ending of group() console
```
Output
```bash
User Details
Name: Anil
Age: 21
City: Delhi
```

## time() and timeEnd()
used to measure how long a piece of code is taking to execute - good for testing performance.
```js
console.time("Loop Timer");

for (let i = 0; i < 100; i++){
  console.log("Hello");
}

console.timeEnd("Loop Timer");
```
Output
```
100 Hello
Loop Timer: 19.714111328125 ms
```
OR
```
Hello
Hello
...
...
Hello
Loop Timer: 22.378173828125 ms
```
