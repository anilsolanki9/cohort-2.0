let a = document.querySelector(".a");
let b = document.querySelector(".b");
let c = document.querySelector(".c");
let btn = document.querySelector(".btn");

a.addEventListener(
  "click",
  () => {
    console.log("event of a was raised");
  },
  true,
);

b.addEventListener("click", () => {
  console.log("event of b was raised");
});

c.addEventListener(
  "click",
  () => {
    console.log("event of c was raised");
  },
  true,
);

btn.addEventListener("click", () => {
  console.log("event of btn was raised");
});
