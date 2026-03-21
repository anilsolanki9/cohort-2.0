let inp = document.querySelector("input");
let wrote = document.querySelector(".wrote span");
let left = document.querySelector(".left span");

inp.addEventListener("input", () => {
  console.log(inp.value.length);
  wrote.textContent = inp.value.length;
  left.textContent = 120 - inp.value.length;
  if (Number(wrote.textContent) > 120) {
    left.classList.add("warn");
  } else {
    left.classList.remove("warn");
  }
});
