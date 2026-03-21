let main = document.querySelector("#main");
let outer = document.querySelector(".outer");
let inner = document.querySelector(".inner");

inner.addEventListener("click", () => {
  console.log("I am inner and i was clicked");
});

outer.addEventListener("click", () => {
  console.log("I am outer and i was clicked");
});

main.addEventListener("click", () => {
  console.log("I am main and i was clicked");
});
