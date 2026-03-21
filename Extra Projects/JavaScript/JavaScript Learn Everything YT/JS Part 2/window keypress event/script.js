let h1 = document.querySelector("h1");

window.addEventListener("keydown", (dets) => {
  // console.log(dets);
  if (dets.key == " ") h1.textContent = "Space";
  else h1.textContent = dets.key.toUpperCase();
});
