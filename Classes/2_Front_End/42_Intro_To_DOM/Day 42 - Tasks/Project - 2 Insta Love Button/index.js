// HTML parsed as DOM tree,
// document is the root of that DOM tree

// document.querySelector('h1')
// document.querySelector('#main')
// document.querySelector('.class');
// innerHTML
// textContent
// innerText

// selecting HTML element
let h1 = document.querySelector('h1');
console.log(h1);

let h2 = document.querySelector('h2');
console.log(h2);

// Changing HTML
h1.innerHTML = 'Hyy i am H1';

// Changing CSS
h1.style.color = 'red';
h1.style.fontSize = '3rem';
h1.style.backgroundColor = 'lightblue';

// Event Listners (mousemove, mousedown, keydown, click, ...)
h1.addEventListener('click', function () {
  console.log('Hello h1 get clicked');
});

h2.addEventListener('mousemove', function () {
  console.log('Hello h2 get hover');
});

window.addEventListener('keydown', function (dets) {
  console.log(dets.key);
});

document.querySelector('button').addEventListener('click', function () {
  console.log('Hello btn get clicked');
  h1.style.color = '#1f1f1f';
});

// get element by className
let para = document.getElementsByClassName('para');
// console.log(para);// array of elements having class para, Nodelist hota hai, HTML Collection like
console.log(para[0]);
para[0].style.color = 'yellow';

// querySelector('h1') only selects first h1,
// so to select all h1, we use querySelectorAll('h1')

let allH1 = document.querySelectorAll('h1');
allH1.forEach(h1 => {
  h1.style.backgroundColor = 'green';
});

// Aaj ka task hai, ek button increment decrement simple page - a counter
// https://www.youtube.com/watch?v=2IPEp_4obGw&t=22s
// https://www.youtube.com/watch?v=_7IR39vOKfU
