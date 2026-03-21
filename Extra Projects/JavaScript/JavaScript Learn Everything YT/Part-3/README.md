# Scope

Scope => Value/variable/function kaha tak accessible hai, woh area us value/variable/funcion ka scope hai.

function scope -> function block ke andr {}
global scope => Kahi bhi use kr skte h
block scope => {} ke anr kahi bhi use kr skte hai.

By Default
var => function scope
let => Block scope
const => block scope

Global me bne (Outside of any block {}) then uska scope Global hota hai. **no braces {}**
Function ke sath {} hai toh woh, function scope hai jo ki ek block scope ka hi ek specific type h. **function keyword with {}**
Block {} -> block scope hai. **only {}**

# Execution Context

Execution Context => JS sabse pahle jese hi ek function dekhta hai, toh sabse pahle JS ek Execution Context Banata hai, Ye ek Process hai jo 2 diff phases me chalt hai. Ek ka nam hai **memory phase** and dusra **execution phase** . Ye sab behind the scenes hota hai, dikhayi nahi deta.

Execution context kya hai? => Ek Hypothetical Scenario

- Ek function dikhte hai, mann me ek stage bna do (Ek Khali Dabba) Us dabbe ka nam Execution Context Hai.
- Us Dabbe me sare variables, functions, Code ayenge jo us function ke andr bane hai, woh sare US Dabbe me store ho jaenge. (**Memory Phase**)
- Fir Code Execute hota hai, Execution phase me.

Memory Phase -> Variables ko memory allocate hoti hai.
Execution Phase -> Code execute hota hai.

# Dynamic Scoping vs Lexical Scoping

JavaScript me **Lexical Scoping** Hoti hai.

Lexical Scoping => Aap kaha par physically/lexically available ho, ye puri tarah se depend krta hai ki aap kya access kr paoge.

```js
function abcd() {
  let a = 12;
  function defg() {
    console.log(a);
  }

  defg();
}

abcd(); // => 12
```

Dynamic Scoping => Kaha se call kr rhe ho, us pe depend krega ki kya value milegy

```js
let a = 50;

function abcd() {
  console.log(a);
}

function defg() {
  let a = 20;
  abcd(); // => Dynamic hota to output aata 20, Lexical hai isliye output hai 50
}

defg();
```

In JS => Element ki physical location pe depend krta hai ki, kya value milegi.

# Closures

Closure => Ek aisa function jo dusra function return krta hai, and wo returning function apne parent function ka ek variable use krta hai.

```js
function abc() {
  let a = 12;
  return function () {
    console.log(a);
  };
}

let xyz = abc();
xyz(); // => 12
```

Fayda

- Private variables
- Less global pollution

How variables are preserved

```js
function abc() {
  let a = 0;
  return function () {
    a++;
    console.log(a);
  };
}

let xyz = abc();
xyz(); //=> 1
xyz(); // => 2
xyz(); // => 3

let def = abc();
def(); //=> 1
def(); //=> 2
def(); //=> 3
```

abc() ke call hone pe,

- memory stack me abc aya,
- variable **a** bna,
- function return ho gaya,
- And function execution khatam ho gaya, means memory stack me se function hat gaya
- function hat gaya to variable **a** bhi hat gaya.

Then agar hum us returning function me a ka use kr rhe hai toh wo access nahi hona chahiye, **undefined** aana chahiye tha !! But access ho rha hai kese??

- Function ke khatam hone pe, apka function and uske variable khatam ho jate hai, Ye SACH Baat hai.
- But But But
- Jab bhi Closure banta hai, apka function and uske variables ka ek backlink banaya jata hai, and uska nam hota hai **[[environment]]**
- Function chalaya, JS ne dekha ki wo ek closure hai, to uska ek backlink ban jata hai. So that baad me uske variables ko use kiya ja ske.

Private Counter

```js
function abc() {
  let a = 0;
  return function () {
    a++;
    console.log(a);
  };
}

let xyz = abc();
xyz(); //=> 1
xyz(); // => 2
xyz(); // => 3

let def = abc();
def(); //=> 1
def(); //=> 2
def(); //=> 3
```

# Encapsulation

Unwanted things ko hide kr dena, and sif jruri cheeze dikhana.
Inner logic hide, only limited things access.

```js
function clickLimiter() {
  let click = 0;
  return function () {
    if (click < 5) {
      click++;
      console.log(`Clicked : ${click} times`);
    } else {
      console.error("Limit Exceeded, Try after some time");
    }
  };
}

let fnc = clickLimiter();
fnc();
fnc();
fnc();
fnc();
fnc();
fnc(); //=> Error

// click can't be used here
// click = 10;
```

# `this` Keyword

`this` keyword => is a special keyword, means a `special special word`
Why ?
Baki sare keywords ki value ya unka nature same rahta hai !! `this` keyword ki value and nature change ho jata hai, is basis pe ki aap use kaha use kar rhe ho.

## value of `this` in global scope, function, method, event handler, class

Global Scope me `this` ki value => Window

function ke andr `this` ki value => Window

method => ek aisa function jo ki object ke andr ho, use hum method kahte hai.
method me `this` ki value

1. value of `this` if method is an `function` keyword function => The `object` itself

```js
let obj = {
  name: "Anil",
  age: 21,
  sayName: function () {
    console.log(this);
    console.log(this.name);
    console.log(this.age);
  },
};
obj.sayName();
```

Output

```
{name: 'Anil', sayName: ƒ}
Anil
21
```

2. value of `this` in an event handler function

function keyword se bna hua fn h then this ki value => the element jispe add event listener lga hai
arrow function then this ki value => Window

3. class me `this` ki value if called with `new` keyword => new blank object

1. value of `this` if method is an arrow function =>

---

# this

1. global me => Window
2. function me => Window
3. Event listener ES5 => The element (Jispe event listner lga hai)
4. Event Listener ES6 => Window
5. Class => If called with `new` then the Blank Object
6. Object ke andr ES5 function method => The Object
7. Object ke andr ES6 function method => Window
8. Object ke andr bne ES5 function method ke andr bna ES5 function ke andr => Window
9. Object ke andr bne ES5 function method ke andr bna ES6 function ke andr => the Object
10. Object ke andr bne ES6 function method ke andr bna ES5 function ke andr => Window
11. Object ke andr bne ES6 function method ke andr bna ES6 function ke andr => Window

**Main BAAT** => Arrow function apne `this` ki value apne parent se leta hai. Es6 method me kyuki object global scope me hai, isliye uska this Window hai, isiye arrow function method bhi `this` ki value Window ho jati h.

#

# Manual Binding (Call, Apply, Binding)

function ko call krte waqt, aap uske `this` ki value set kr skte ho. Bus isi ke liye call, apply, bind use krte hai.

function.apply(obj, arg1, arg2, arg3, arg4) => Same like normal call but, Function me `this` ki value hmara object ho jaega, and baki arguments hum object ke bad likh ke bhejte hai.

function.apply(obj, [arg1, arg2, arg3, arg4]) => Same like .call() but, agar function 1 se jyda argument accept krta hai, toh .apply() me arguments ko ek array me likhna pdta hai.

let fnc = function.bind(obj, arg1, arg2, arg3, arg4) => Same like .call() , bas ye chalta nahi hai, function ki ek copy return krta hai, jise hum dusre variable me save krke use kr skte hai.
fnc();

## call()

```js
function xyz(a, b, c) {
  console.log(a + b + c);
  console.log(this);
}

xyz.call(person, 1, 2, 3);
//=> 6
//=> {name: 'Harsh', age: 21}
```

## apply()

```js
function xyz(a, b, c) {
  console.log(a + b + c);
  console.log(this);
}

// Apply => aply() me Sirf 2 parameters bhej skte hai. agar function ek se jyda parameters accept krta hai, toh un parameters ko array me bhejo
xyz.apply(person, [1, 2, 3]);
//=> 6
//=> {name: 'Harsh', age: 21}
```

## bind()

```js
function xyz(a, b, c) {
  console.log(a + b + c);
  console.log(this);
}

// bind => Almost same like call, but ye chalta nahi hai, ye ek new function return krta hai.
let fnc = xyz.bind(person, 1, 2, 3);
fnc();
//=> 6
//=> {name: 'Harsh', age: 21}
```

bind() use in event lister => Where we dont call the function at the point,

# OOP (Object Oriented Programming)

When we have similar elements, who follow same model, then we use OOPs programming.

Class => Blueprint to create object
Objects => Instance of a class

objects are created by using class with new keyword.

```js
class CreateBiscuit {
  constructor(name, price, quantity, company, category) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.company = company;
    this.category = category;
  }

  write = function () {
    console.log(this.name);
  };
}

let parle = new CreateBiscuit("Parle G", 10, "50gm", "parle", "regular");
parle.write(); //=> Parle G
let oreo = new CreateBiscuit("Oreo", 20, "40gm", "cadbury", "chocklate");
oreo.write(); //=> Oreo
```

## Prototypes

Class me banaye gaye variables and method, sab ke apne alag hote hai. Jo ki sare memory alag se lenge,
But kai bar, koi cheezh khud ki personl ho ya na ho frak nahi padta hai.

For eg. if the type of element is "biscuit"

Then aise variable or method, jo ek object ke personal ho ya na ho frak nahi pdta then, usko kabhi bhi constructor me mat likho.
Because woh hr ek object me memory lega, and iska koi meaning hi nahi hai, ki hum sabko alag se memory me dale.

```js
class CreateBiscuit {
  constructor(name, price, quantity, company, category) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.company = company;
    this.category = category;
  }
}

CreateBiscuit.prototype.type = "biscuit";
CreateBiscuit.prototype.write = function () {
  console.log(this.name);
};

let parle = new CreateBiscuit("Parle G", 10, "50gm", "parle", "regular");
parle.write(); //=> Parle G
let oreo = new CreateBiscuit("Oreo", 20, "40gm", "cadbury", "chocklate");
oreo.write(); //=> Oreo

console.log(parle.type); //=> biscuit
```

Agr constcurtor, koi field apne prototype par add kar de, then us constructor se banne vale sabhi instances yani ki objects ke pas woh field automatically chali jati hai. And woh shared hoti hai, san instances me.

prototype => **Shared memory**

# Classes

class => Blueprint for creating Objects
class me constructor => Jo sabse pahle chalta hai. Iska kam hota hai, variables set krna.

extends => Ek class jisme dusri ke sare features ho, and uske khudke bhi kuch ho. Its called Inheritance
super => call krna pdta hai constructor me => To run the constructor of extended class. With all arguments needed for the extended class.

```js
class User {
  constructor(name, address, username, email) {
    this.name = name;
    this.address = address;
    this.username = username;
    this.email = email;
    this.role = "user";
  }

  checkRole() {
    console.log(`You are a ${this.role}`);
  }

  write(text) {
    let h1 = document.createElement("h1");
    h1.textContent = `${this.name} : ${text}`;
    document.body.append(h1);
  }
}

class Admin extends User {
  constructor(name, address, username, email) {
    // Calling the constructor of class User
    super(name, address, username, email);
    this.role = "admin";
  }

  remove() {
    document.querySelectorAll("h1").forEach((elem) => {
      elem.remove();
    });
  }
}

let u1 = new User("Anil", "Rajasthan", "anilsolanki", "anil@gmail.com");
let u2 = new User("Suresh", "MP", "sureshbhai", "suresh@gmail.com");
let a1 = new Admin("admin1", "Heaven", "admin1", "admin1@gmail.com");
```

# Prototypal Inheritance and Classical Inheritance

Class banana and extends krna (extends vale inheritance) => Classical Inheritance

Prototypal Inheritance => Sirf JS Me hota hai.

Inheritance => Class se class me inheritance
Prototypal inheritance => object se object me inheritance !! Because JS me pahle classes nahi hua karti thi.

Ek object ki sari properties & methods inherit kr skte ho, dusre object ke prototype me.

```js
let coffee = {
  color: "dark",
  drink: function () {
    console.log("Gut Gut Gut");
  },
};

let arabiaCoffee = Object.create(coffee);
arabiaCoffee.taste = "bitter";
arabiaCoffee.drink(); //=> Gut Gut Gut
```

# Synchronous vs Asyncronous

Koi bhi code line by line chalta hai => Synchronous
But kabhi kabhi wait krna pdta hai, tab tak age ka code chal jata hai, then ruka hua code chalta hai => Asyncronous

```js
console.log("Hello 1");
console.log("Hello 2");
setTimeout(() => {
  console.log("Hello 3");
}, 0);
console.log("Hello 4");
```

```bash
Hello 1
Hello 2
Hello 4
Hello 3
```

Aisa code jo, jab chalne ke liye ready ho jaye tab chale, woh hai async code.

```js
function kuchDerBadChalunga(fnc) {
  setTimeout(fnc, Math.floor(Math.random() * 5) * 1000);
}

kuchDerBadChalunga(function () {
  console.log("Hey");
});

/* This function is callback
function () {
  console.log("Hey");
}
*/
```

Callback function => Ek function jo kisi or function ke andr as an argument bheja jaata hai.

# Callback Patern and Callback Hell

## Callback Hell'

```js
function profileLekerAaoo(username, cb) {
  console.log("Fetching profile data...");
  setTimeout(() => {
    console.log(`Profile fetched of ${username}`);
    cb({ _id: 12345, username, age: 21, email: "xyz@gmail.com" });
  }, 2000);
}

function sarePostsLekerAaoo(id, cb) {
  console.log("Fetching posts...");
  setTimeout(() => {
    console.log("Posts fetched successfully");
    cb({ _id: id, posts: ["Hey", "Hello", "Good Morning"] });
  }, 2000);
}

function savedPostsNikaalo(id, cb) {
  console.log("Fetching saved posts...");
  setTimeout(() => {
    console.log("Fetched saved posts successfully");
    cb({ _id: id, saved: [1, 2, 3, 4, 34, 56] });
  }, 3000);
}

profileLekerAaoo("Harsh", function (profileData) {
  console.log(profileData);
  sarePostsLekerAaoo(profileData._id, function (posts) {
    console.log(posts);
    savedPostsNikaalo(profileData._id, function (savedPosts) {
      console.log(savedPosts);
    });
  });
});
```

# Promisses

Promiss => We make a promise, Jo ke pending state me hota hai, and woh 2 states me se ek me jaa sktaaaa hai. Woh ya to resolve hoga ya reject hoga. Ab wo kya hoga, ye to waqt bataega. But hme dono ke liye code likhna pdta hai.

```js
let pr = new Promise(function (res, rej) {
  setTimeout(() => {
    // resolve ho gaya and resolve me data bheja
    let rn = Math.floor(Math.random() * 10);
    if (rn > 5) res(`Resolved with ${rn}`);
    else rej(`Rejected with ${rn}`);
  }, 3000);
});

// 3 second tak pr ki state Pending rahegi
// 3 second ke bad ya to resolve hoga, ya reject ho jaega.
// Lets write code for both states

// resolve hua to then chalega, reject hua to catch chalega
pr.then((val) => {
  console.log(val);
}).catch((val) => {
  console.error(val);
});
```

So basically, koi bhi promiss pe hum .then() ya .catch chalate hai.
.then() use hota hai agar promise resolve hua
.catch() use hoga agar promise reject hua.

# async await / error handlling / try-catch

## async await

async await => .then() .catch() se bacha leta hai hme,

```js
let pr = new Promise(function (res, rej) {
  setTimeout(() => {
    // resolve ho gaya and resolve me data bheja
    let rn = Math.floor(Math.random() * 10);
    if (rn > 5) res(`Resolved with ${rn}`);
    else rej(`Rejected with ${rn}`);
  }, 3000);
});

// jis function ko async banana hai uske aage async likho, and ab us function ke andr hum await use kr skte hai.
// Koi bhi aisa function jo ek promise return krta hai, and woh kuch time bad resolve hoga, toh usko hum await me likhte hai.
// ab wo promise ya to resolve hoga ya reject right, so to handle this we use try catch
// try me woh code likhte hai, so normal hai, jo hme perform krvana hai, maan ke chalo ki resolve hi hoga promise
// catch me wo code likhte hai jab promise reject hoga. catch(err) me error ayega,

async function abcd() {
  try {
    let val = await pr;
    console.log(val);
  } catch (err) {
    console.error(err);
  }
}

abcd();
```

---

# Fetch API and HTTP Basics

fetch api => Kisi bhi online URL se data mangavana

API => Url jis se data milta hai.

fetch() to fetch the data

fetch promise based hai.
So we have 2 ways to use it

- then catch
- async await try catch

fetch se resolve ya reject ayega to, woh HTTP response ke form me ayega

```bash
Response {type: 'cors', url: 'https://randomuser.me/api/', redirected: false, status: 200, ok: true, …}
body :  (...)
headers :  Headers {}
ok :  true
status :  200
type :  "cors"
url :  "https://randomuser.me/api/"
[[Prototype]] :  Response
```

Actual Data jo API se aya woh body me hota hai. Jo ki ek readable Stream hoti hai (Kisi kam ki nahi).
So hme raw data ko JSON banana padega

```js
fetch("https://randomuser.me/api/")
  .then((raw) => {
    return raw.json();
  })
  .then((data) => {
    console.log(data.results[0].name.first);
  })
  .catch((err) => {
    console.log(err);
  });
```

Short form

```js
fetch("https://randomuser.me/api/")
  .then((raw) => raw.json())
  .then((data) => console.log(data.results[0].name.first))
  .catch((err) => console.log(err));
```

Multiple users data

```js
fetch("https://randomuser.me/api/?results=25")
  .then((raw) => raw.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
```
