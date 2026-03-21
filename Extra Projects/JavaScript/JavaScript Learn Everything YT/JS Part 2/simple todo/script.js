let ul = document.querySelector("ul");

ul.addEventListener("click", (dets) => {
  // console.log((dets.target.style.textDecoration = "line-through"));
  dets.target.classList.toggle("lt");
});
