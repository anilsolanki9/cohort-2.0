# What is ReactJS ?

ReactJS is a JavaScript based frontend Library, which is used for creating Frontend UI.
Created by Meta (FaceBook)

## Why we need ReactJS ?

- Earlier UI was made using HTML, CSS, JS
- If any element have to be updated (eg. Likes number)
- To view the updates, we must have to reload the website.
- This was such an Bad UX

To solve this problem ReactJS was developed.

- It is component based, means it breaks website into components.
- To update any part, only that part is updated, and the page is not reloaded.
- Better UX, Better Speed and Smooth User experience.

## Topics of JavaScript you must know before ReactJS

- Basics (variables, loops, if-else)
- Functions (Arrow fn, return statements)
- Arrays (Array, array methods, map, filter, reduce, forEach, some, every, **destructuring**)
- Objects
- ES6 featues (let, const, arrow function)
- Async JS (promises, fetch API, async await, try-catch)

## Library vs Framework

Library => Used to give a feature to website
eg.
GSAP => Animation Library
Lenis => Smooth Scrolling
ReactJS => UI frontend create krne ke liye

Framework => Sab kuch ek hi jagah in-Built available hai,
eg.
NextJS =>
Angular
Remix

# Import & Export

Export => Bhejna
Import => Mangvaana

1. Import export enable krne ke liye, script me **type="module"** Must add kro

```html
<script type="module" src="./script.js"></script>
```

2. Now export the variable/function you want to export.

Export / Import 2 types ke hote hai.
Export -> named expport, Default export
Import -> named import , Default import

Har ek file ka sirf ek default export hota hai. And is export kiye hue variable/function ko hum import kisi bhi nam se kr skte hai.
Har file kitne bhi named export kr skti hai, named export vali ko unke name se hi import kiya jata hai, and **curly braces {}** use hote hai.

app.js

```js
export var a = 20;

let b = 100;
export default b;
```

script.js

```js
import { a } from "./app.js";
import baba from "./app.js";

console.log(a);
console.log(baba);
```
