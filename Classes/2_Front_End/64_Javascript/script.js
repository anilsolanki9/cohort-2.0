/* ---------- Deounce code ---------- */

let inp = document.querySelector("#search");

// function debounce(fn, delay) {
//   let timer = 0;
//   return function (...args) {
//     clearTimeout(timer);
//     timer = setTimeout(fn.bind(this, ...args), delay);
//   };
// }

// function handleInput(e) {
//   console.log("Hello");
//   console.log(e.target.value);
// }

// const debounceHandle = debounce(handleInput, 2000);

// inp.addEventListener("input", debounceHandle);

/* ------------ Throttle ------------ */

function throttle(fn, delay) {
  let last = 0;

  return function () {
    let now = Date.now();
    if (now - last >= delay) {
      last = now;
      fn();
    }
  };
}

let throttleHandle = throttle(() => {
  console.log("Hello");
}, 500);

inp.addEventListener("input", throttleHandle);
