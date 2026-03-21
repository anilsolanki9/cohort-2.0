// console.group("User Details");
// console.log("Name: Anil");
// console.log("Age: 21");
// console.log("City: Delhi");
// console.groupEnd(); //marks the ending of group() console

console.time("Loop Timer");

for (let i = 0; i < 100; i++){
  console.log("Hello");
}

console.timeEnd("Loop Timer");

