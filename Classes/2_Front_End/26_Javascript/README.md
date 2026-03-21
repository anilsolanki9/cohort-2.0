# Introduction to JS
JS --> Compiler/Interpretor --> Binary code

## Console, alert, prompts
print a string to console
```js
console.log("Hello from Log");
```

Print an info to console, identical to console
```js
console.info("Hello from Info");
```

print warning
```js
console.warn("Dont touch my mobile!!");
```

print error message
```js
console.error("Session Automatically Logout!");
```

print a table
```js
let anil = {
  name: "Anil",
  age: 21,
  email: "xyz@gmail.com"
};
console.table(anil);
```
create an alert
```ja
alert("Hello, welcome !");
```

create a prompt
```js
prompt("Name?");
```

Save prompt value to variable and show an alert using its value
```js
let username = prompt('Enter Username -');
alert("Hello, Mr. " + username);
```
OR using template litral
```js
alert(`Hello, Mr. ${username}`);
```

## Slice
slice strig : Means cut its specific part to use.
```js
let message = "Hello Brother, How are You?";
console.log(message.slice(3, 14));
```
Output :
```bash
lo Brother, H
```

Template string
```js
let age = 21;
console.log(`You are ${age} years old.`);
```
Output
```bash
You are 21 years old.
```

## Split property and join property
```js
let message = "Hello Brother, How are You?";
```

1 . string ko letters me split kr ne ke liye
```js
console.log(message.split(''));
```
Output
```cmd
['H', 'e', 'l', 'l', 'o', ' ', 'B', 'r', 'o', 't', 'h', 'e', 'r', ',', ' ', 'H', 'o', 'w', ' ', 'a', 'r', 'e', ' ', 'Y', 'o', 'u', '?']
```

2 . string ko sare o ki jagah se split krna
```js
console.log(message.split('o'));
```
Output
```cmd
['Hell', ' Br', 'ther, H', 'w are Y', 'u?']
```

3 . string ko o se split krke sabko join kr dena
```js
console.log(message.split('o').join(''));
```
Output
```cmd
Hell Brther, Hw are Yu?
```

4 . space se split krna
```js
console.log(message.split(' '));
```
Output
```cmd
['Hello', 'Brother,', 'How', 'are', 'You?']
```

5 . comma se split krna
```js
console.log(message.split(','));
```
Output
```cmd
['Hello Brother', ' How are You?']
```

## Replace property
```js
let message = "Hello Brother, How are You?";
```
only rplace first o character
```js
console.log(message.replace('o', 'hui'));
```
to replace all o and place "hui"
```js
console.log(message.replaceAll("o", "hui"));
```
to replace all words "Hello" and place "hui"
```js
console.log(message.replaceAll("Hello", "hui"));
```

## Includes property : - to check hai ya nahi h. true ya false return krta hai.
```js
let message = "Hello Brother, How are You?";
console.log(message.includes('a'));
console.log(message.includes('x'));
```



