let h1 = document.createElement("h1")
h1.textContent = "Hello broo";
document.body.append(h1); // ending me
document.body.prepend(h1) ; /// starting me

console.dir(h1)

```js
let h1 = document.createElement("h1");
h1.textContent = "Hello Bhaii";
h1.setAttribute("id", "main");
document.body.append(h1);
```

```js
let firstH1 = document.querySelector("#first");
firstH1.remove(); // element remove ho jaega
```

.removeChild(h1) => removed h1

appending child element to another element, like a div

```js
let h1 = document.createElement("h1");
h1.textContent = "I am comming from outside";
document.querySelector("div").append(h1);
```

styles

document.body.style.backgroundColor = "black";

let h1 = document.querySelector("h1");
h1.style.color = "red";
h1.style.backgroundColor = "yellow";
h1.style.fontSize = "6rem";

Ek or tarika style krne ka. Class add kroo.

```js
let h1 = document.querySelector("h1");
h1.classList.add("balle-balle");
```

cSS

```css
.balle-balle {
  color: yellow;
  background-color: royalblue;
  font-size: 4rem;
}
```

To remove class
h1.classList.remove("balle-balle");

toggle class
h1.classList.toggle("balle-balle");

.getElementByClassName() gives a HTML Collection

---

- Select all li elements and print there text using loop

let lis = document.querySelectorAll("li");
lis.forEach((element) => {
console.log(element.textContent);
});

---

get src of image
let img = document.querySelector("img");
console.log(img.src); // => http://127.0.0.1:5500/image.jpg

or
let img = document.querySelector("img");
console.log(img.getAttribute("src")); //=> ./image.jpg

---

<!-- Adding list item in the list -->

let ul = document.querySelector("ul");
let li = document.createElement("li");
li.textContent = "Hello i am a new list item";
ul.appendChild(li);

---

<!-- Rmove first iterm of a list -->

```js
let ul = document.querySelector("ul");
let li = document.querySelectorAll("li");
ul.removeChild(li[0]);
```

---

<!-- Add a class highlight to every even item of the list -->

```js
let li = document.querySelectorAll("ul li:nth-child(2n)");

li.forEach((elem) => {
  elem.classList.add("highlight");
});
```

---

---

Anmimate element

```css
div {
  height: 100px;
  width: 200px;
  background-color: royalblue;
  transition: all 0.3s cubic-bezier(0.44, 0.8, 0.44, 1.27);
}

.inc {
  height: 500px;
  width: 500px;
}
```

```js
let div = document.querySelector("div");
div.addEventListener("click", () => {
  div.classList.toggle("inc");
});
```

---

Event Listeners

Action hone pe event raise hoga
Event listener us action ka reaction deta hai.

1. select the element
2. Konsa action hoga ? find kro
3. then add event listener lagao

```js
let h1 = document.querySelector("h1");
h1.addEventListener("click", () => {
  h1.classList.toggle("red");
});
```

css

```css
h1 {
  user-select: none;
  transition: all 0.3s ease;
}

h1.red {
  color: red;
  font-size: 4rem;
}
```

---

How to remove event listener

Note -> Jo function hum event listener me daalte hai, usko pahle tp bahar nikalo, usko alag se create kro, but why?
because hme us same function ko removeEventListner me bhi pas krna pdega as 2nd argument.

```js
let h1 = document.querySelector("h1");
let fnc = () => {
  h1.classList.toggle("red");
};

h1.addEventListener("click", fnc);

h1.removeEventListener("click", fnc);
```

---

Events

```js
h1.addEventListener("mousemove", () => {
  console.log("Hovered");
});

h1.addEventListener("mouseenter", () => {
  h1.classList.add("red");
});

h1.addEventListener("mouseleave", () => {
  h1.classList.remove("red");
});
```

```css
/* Custom cursor and animation */
html {
  background-color: black;
  color: white;
  cursor:
    url("./image_32x32.png") 0 0,
    auto;
}

h1 {
  user-select: none;
  transition: all 0.3s ease;
}

h1.red {
  color: red;
  font-size: 4rem;
}
```

---

h1.addEventListener("click", () => [h1.classList.toggle("red")]);

---

Custom Cursor

```css
.circle {
  width: 40px;
  height: 40px;
  border: 2px solid white;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.3s cubic-bezier(0.44, 0.8, 0.44, 1.27);
  position: absolute;
}
```

```js
let circle = document.createElement("div");
circle.classList.add("circle");

document.body.append(circle);

document.addEventListener("mousemove", (det) => {
  // console.log(det);
  circle.style.left = det.clientX + "px";
  circle.style.top = det.clientY + "px";
});
```

---

<!-- Input ke liye event listener -->

```js
let inp = document.querySelector("input");

inp.addEventListener("input", (evt) => {
  // console.log(evt);
  console.log(evt.data);
});
```

```js
let inp = document.querySelector("input");

inp.addEventListener("input", (dets) => {
  if (dets.data !== null) console.log(dets.data);
});
```

---

Option selected ko handle krna

```js
let select = document.querySelector("select");
let h1 = document.querySelector("h1");
let options = document.querySelectorAll("select option");

select.addEventListener("change", (dets) => {
  // console.log(dets.target.value);

  // console.log(options);
  let found = null;

  options.forEach((opt) => {
    if (opt.value == dets.target.value) {
      found = opt;
    }
  });
  h1.textContent = `Selected Device - ${found.textContent}`;
});
```

---

---

Window pe keypress pe event listener

let h1 = document.querySelector("h1");

```js
window.addEventListener("keydown", (dets) => {
  // console.log(dets);
  if (dets.key == " ") h1.textContent = "Space";
  else h1.textContent = dets.key.toUpperCase();
});
```

---

# Event bubbling and Capturing

- jispe event ayega agar uspar listener laga nahi hua toh, hmara event uske parent pe listener dhundhega, or aisa krte krte uper ki taraf move krta rhega.
- normal mode me , event ek element se uske parent ki taraf propogate hota hai. us element pe event listner hua toh bhi, parent pe jaega, and uske parent pe bhi.

# Event Capturing

- Event capturing me event bubbling ka ulta hota hai,
- Jaha bhi event occure hua pattern vaha se niche ki taraf jaega and then,

Iner to outer => Event bubbling
outer to inner => Event capturing

Jab bhi event raise hota hai toh, apka jo event flow / event ptopogation hai woh do tareeke se chalta hai or can say do phases me.
phase 1 -> event top level element se niche ayega,
phase 2 -> event bottomest(event raised element) se toppest ki taraf jaega.

Pahle phase 1 hota hai, then phase 2.

By default phase 1 (Capture phase) off hota hai, and hme capture phase ko on krna pdta hai.

So ek event ke raise hone pe kya hota h>????

1. Toppest element se check hota h, kya us element pe capture phase on h?

- if yes then wo event execute hoga
- if no then us se niche vale element pe same point 1 repeat hoga. jab tak event raised element (original ) nahi aa jata.

2. Event raised vala element ka event chalega.
3. then uper ki taraf events execute honge toppest element tak, but only woh jinme capture phase on nahi h.

Means jo capture phase me chal gaya woh bubble phase me nahi chalega.

---

# Form Handlling and Form Validation

---

# Timers and Intervals

setTimeout(() => {
console.log("Hello");
}, 1000);

setInterval(() => {
console.log("Hello");
}, 1000);

---

let abc = setTimeout(() => {
console.log("Hello");
}, 1000);

clearTimeout(abc);

---

let abc = setInterval(() => {
console.log("Hello");
}, 1000);

clearInterval(abc);

---

let count = 10;
let abc = setInterval(() => {
if (count === 0) clearInterval(abc);
console.log(count);
count--;
}, 1000);

---

---

LocalStorage
SessionStorage
Cookies

LocalStorage => Browser ke andr data store krna jo ki browser band hone pe bhi delete nahi hota
~ 4mb

Session Storage => Browser ke andr data store krna, but tab ke close hote hi, data gayab ho jata hai.

Cookie => Ye bhi data store krta hai, ye browser ki cookies nam ki storage me saved hota hai. Ye kam data or light data ke liye hota hai, wo data jo frqeuently used hota hai.
~ 4kb

```js
// data Store krna
// data access krna
// data remove krna
// data update krna

// create
localStorage.setItem("name", "Anil");

// fetch
console.log(localStorage.getItem("name"));

// update
localStorage.setItem("name", "Anil Solanki");

// remove
localStorage.removeItem("name");
```

cookies => frequently used data hota hai, small data store krne ke liye use hota hai.
~ 4kb ka data store kr skte hai.
cookies me jo bhi data store kroge woh data page reload par automatically server pe jaega, Get request jo hogi index.html home page ke liye, isliye wo cookies ka data bhi request ke header me chala jaega
Vese cookies har request pe jati hai.

reload => index.html ko vapis request means GET request krta hai, server se index.html laata hai.

document.cookie = "email=anil@solanki.com";
document.cookie = "age=22";

cookie see and delete => Edit this Cookie V3

---

LocalStorage me string ke alava kuch bhi other save nahi hoga.
So we stringify array, object data, then parse it

<!-- Array get converted into string, which is not usefull at all. -->

localStorage.setItem("names", ["Anil", "Sunil", "Manish"]);
names : "Anil,Sunil,Manish"

<!-- So we JSON stringify and parse -->

let names = ["Anil", "Suresh", "Manish"];
localStorage.setItem("names", JSON.stringify(names));

names : "[\"Anil\",\"Suresh\",\"Manish\"]"

<!-- Access value again -->

console.log(JSON.parse(localStorage.getItem("names")));

---

# OS Ki dark or light nikalna

window.matchMedia("(prefers-color-scheme: dark)")

Ye above line ek special object deti hai, jisme ek property hoti hai matches, agar wo property ki value
true -> Dark mode on h OS me
false -> Light mode on h OS me
