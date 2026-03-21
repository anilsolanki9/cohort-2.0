# Design Patterns

- Big level pe maintainable, scalable, and modular code likhna pdta hai.

- Module pattern (IIFE)
- Revealing Module Pattern
- Factory function pattern
- Observer Pattern (Basic pub-sub)

# Module Pattern

Module pattern ek design pattern hai, jisme hum apna code ek self executing function **IIFE** ke andr likht hai, taki **variables or functions private** rahe.

Iske andr se hum sirf vahi cheeze return krte hai jo hme bahar use krni hai.

Is pattern ka main fayda hai -- data hiding (Encapsulation) or clean structure, taaki code secure, reusable or manageble ban sake.

---

Module pattern
IIFE

Private variable ka use case -> kabhi value access krni h, kabhi value update krni hai

```js
let account = (function () {
  // Private variable
  let bankBalance = 10_000;
  function checkBalance() {
    console.log(`Your bank balance is: ${bankBalance}`);
  }
  function setBalance(val) {
    bankBalance = val;
    console.log(`Your updated bank balance is: ${bankBalance}`);
  }
  function withdraw(val) {
    if (val <= bankBalance) {
      bankBalance -= val;
      console.log(`Your bank balance after withdraw is: ${bankBalance}`);
    }
  }

  return {
    checkBalance,
    setBalance,
    withdraw,
  };
})();
```

---

Revealing Module pattern

revealing module pattern and module pattern almost same hai, sirf ek cheez alag h
retrning functions, alag name se bhejte h

```js
let account = (function () {
  // Private variable
  let bankBalance = 10_000;
  function checkBalance() {
    console.log(`Your bank balance is: ${bankBalance}`);
  }
  function setBalance(val) {
    bankBalance = val;
    console.log(`Your updated bank balance is: ${bankBalance}`);
  }
  function withdraw(val) {
    if (val <= bankBalance) {
      bankBalance -= val;
      console.log(`Your bank balance after withdraw is: ${bankBalance}`);
    }
  }

  return {
    check: checkBalance,
    set: setBalance,
    draw: withdraw,
  };
})();
```

---

Factory function pattern

Hum ek function create krte hai jo objects ko create krta hai,
factory = objects banane ki machine

factory Function Pattern ek aisa pattern hai jisme hum ek simple function likhte ha jo **objects banake return** krte hai
bina **class** ya **new** keyword use kiye

Is pattern ka main idea -> Object creation ko ek function ke through control krna (Data dalna, data manipulate krna etc.)

Har bar jab tum factory function call krte ho, tumhe ek naya object milta hai jisme apne methods aur agar chaho to private data ho sakta hai.

Yeh pattern specially usefull hai jab tumhe ek hi type ke bahot sare objects chahiye, e. users, products, tasks etc.

```js
function createProduct(name, price) {
  let stock = 10;
  return {
    name,
    price,
    buy(qty) {
      if (qty <= stock && qty > 0) {
        stock -= qty;
        console.log(`Bought: ${qty}, Stock: ${stock}`);
      } else {
        console.error("We dont have this much stock. ", `Stock : ${stock}`);
      }
    },
    refill(qty) {
      if (qty > 0) {
        stock += qty;
        console.log(`Refiled: ${qty}, Stock: ${stock}`);
      }
    },
    checkStock() {
      console.log(`Stock : ${stock}`);
      return stock;
    },
  };
}

let iphone = createProduct("iPhone", 70000);
iphone.buy(4);
iphone.buy(5);
iphone.refill(31);
iphone.buy(iphone.checkStock());

let kitkat = createProduct("Kitkat", 10);
kitkat.checkStock();
```

---

---

# Observer Pattern

```js
// Observer Pattern

class YouTubeChannel {
  constructor() {
    this.subscribers = [];
  }

  subscribe(user) {
    this.subscribers.push(user);
    user.update(`${user.name} : You have subscribed the channel`);
  }

  unsubscribe(user) {
    this.subscribers = this.subscribers.filter((sub) => sub !== user);
    user.update(`${user.name} : You have unsubscribed to the channel.`);
  }

  notify(message) {
    this.subscribers.forEach((subscriber) => {
      subscriber.update(`${subscriber.name} : ${message}`);
    });
  }
}

class User {
  constructor(name) {
    this.name = name;
  }

  update(data) {
    console.log(data);
  }
}

let sheryians = new YouTubeChannel();
let user1 = new User("Anil");
let user2 = new User("Harsh");
let user3 = new User("Suresh");

sheryians.subscribe(user1);
sheryians.subscribe(user2);
sheryians.unsubscribe(user1);

sheryians.subscribe(user3);
sheryians.notify("New video is Live on the channel");
```

## Patterns are usefull only when you are reusing it.

---

# Optimizing the Website Code

Debouncing and Throttling

# Debouncing

Debouncing => jab koi kam lagatar ho rha ho, and kuch der ruk jaye, toh woh kam krega
Ek perticular gap bata skte hai, woh gap ayega tab code chalega
Eg. search me 1 s ka gap aane pe hi event chalega.

Agar aap koi action kar rhe ho, and aap nahi chahte ki har ek action pe chale, hum chahte h ki actions ke beech me ek specific gap aa jaye toh code chalega.

```
Koi event ho rha hai, ho rha h, ho rha h, jab us events ke beech me utna time gap ayega jo humne specify kiya h, toh ek code chal jaega.
```

```js
let inp = document.querySelector("input");

function debounce(fnc, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(function () {
      fnc(...args);
    }, delay);
  };
}

inp.addEventListener(
  "input",
  debounce(function (dets) {
    console.log(dets);
  }, 1000),
);

// debounce() ke jagah jo function ayega usme by default, event details arument me bhej dega
```

# Throttling

Throttling => har time period me run hona hai, but agar event hona band ho jaye toh, nahi chalega.

```
ek event run ho rha h, horha h, ho rha h, and event ke run hote time har k time preiod (jo time humne bataya) uske hone pe ye code chal jaega. But us time se jyda time agar events ke beech me hoga to chalna band kr dega.
```

```js
// event hote rhega tab, ek same interval pe code chalta rhega, and us interval se jyda time ho gaya or koi nee action nahi hua to nahi chalega.

let inp = document.querySelector("input");

function throttle(fnc, delay) {
  let timer = 0;
  return function (...args) {
    // current ke milliseconds
    let now = Date.now();
    if (now - timer >= delay) {
      timer = now;
      fnc(...args);
    }
  };
}

inp.addEventListener(
  "input",
  throttle(function (dets) {
    console.log(dets);
  }, 1000),
);
```

# Lazy Loading Images

Intersection Observer

Images ko
src ki jagah `data-src="...."` do

Kisi bhi element ko `data-xyz` attribute kr dete hai ta, hum use javascript me access kr skte hai
access using `element.dataset.xyz`

```js
let images = document.querySelectorAll("img");

const observer = new IntersectionObserver(
  function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add("loaded");
        observer.unobserve(entry);
      }
    });
  },
  {
    root: null,
    threshold: 0.1,
  },
);

// 0.1 means 10%

images.forEach((img) => {
  observer.observe(img);
});
```

# Code Splitting with Dynamic Input

Code splitting me, most important code hi load krte hai, baki baad me load krte hai, jese jese jrurat padti hai vese

import export ke liye
type="module" must hai

```html
<script type="module" src="./script.js"></script>
```

heavy.js

```js
export function veryHeavy() {
  console.log("A giant featre loaded...");
  alert("Heavy feature loading completed...");
}
```

script.js

```js
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  let heavy = await import("./heavy.js"); // heavy file aayi
  heavy.veryHeavy();
});
```

# Avoiding uneccessary reflow, repaint

Kabhi bhi jab bhot sare elements add kr rhe ho, toh ek ek karke mat kro. Its laggy

so we create document fragment (Temporary memory)

```js
let ul = document.querySelector("ul");
const space = document.createDocumentFragment();

for (let i = 0; i < 100; i++) {
  const li = document.createElement("li");
  li.textContent = i;
  space.appendChild(li);
}

ul.appendChild(space);
```

# Memory leaks

```js
let count = 0;
let interval = setInterval(() => {
  if (count < 10) {
    count++;
    console.log(count);
  } else {
    clearInterval(interval);
    console.log("Interval ends...");
  }
}, 1000);
```

# Advanced topics and Architectural Thinking

DOM ka code and logic ka code alag rahna chahiye. its called **Seperation of Concerns**

```js
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

function add(num1, num2) {
  return num1 + num2;
}

btn.addEventListener("click", () => {
  const num1 = Math.floor(Math.random() * 10);
  const num2 = Math.floor(Math.random() * 10);
  let sum = add(num1, num2);
  let li = document.createElement("li");
  li.textContent = sum;
  ul.appendChild(li);
});
```

# Map function

Map function ek array ke top pe halta hai, and it iterates over all the members of the array, map ek new array return krta hai, and us new array me jo map return krta hai her iteration me usko dal deta hai.

```js
let arr = [1, 2, 3, 4, 5];

function myMap(arr, callback) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(callback(arr[i], i, arr));
  }
  return newArr;
}

let x = myMap(arr, function (val) {
  return val * val;
});
```

# Stack , Call Stack , Execution Context

jab functin call hota hai to, wo stack ke top pe aa jata hai.
function run hp jana ke bas, woh fuction pop ho jata hai, and exceution niche a jata hai.

```js
function a() {
  console.log("a");
}

function b() {
  a();
  console.log("b");
}

function c() {
  b();
  console.log("c");
}

c();

/*
Call stack

a()
b()
c()

a() chalega, a print hoga and pop ho jaega
b() chalega, b print hoga, and pop ho jaega
c() chalega, c print hoga, and pop ho jaega

*/
```

# WEB APIs

console, setTimeout, setInterval, alert, prompt, vgrh JS ka part nahi hota .
Ye extra features Browser provide krta hai. Inko hi WEB APIs kahte hai.

# Event Loop

JS Have 2 types of tasks -> Synchronous, Asyncronous
Syncronous => Line by Line, ek ek krke
Asyncronous => Wait for someting to get completed, multiple things can happen together, jo jab complete ho tab chala do.

```js
setTimeout(() => {
  console.log("hey1");
}, 6000);
setTimeout(() => {
  console.log("hey2");
}, 1500);
setTimeout(() => {
  console.log("hey3");
}, 2000);
setTimeout(() => {
  console.log("hey4");
}, 2500);
```

WEB APIs ke through hone vale kaam, jab bhi complete hoti hai, toh unhe callback queue ya task queue me dala jaata hai.
Event Loop

Jo cheezh call stack me hota hai, use hi chalaya jaata hai.
setTimeout task queue me jata hai. and wait krta hai, jabtak main call stack khali ho jayega, tab ye bhi call stack me jaega, and execute hoga.

SetTimeout (5second) -> Task Queue => Empty call stack -> setTimeout in Call stack => setTimeout ka code run hoga.

Event Loop checks continuously that Call stack is empty or not !! And if emty then takes a task from task queue and put it in Call Stack.
