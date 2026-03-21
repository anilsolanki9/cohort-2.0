let count = document.querySelector(".count");

let counter = 0;
function updateCount(dets) {
  let id = +dets.target.id;

  if (id === 0) {
    counter++;
    count.textContent = counter;
  } else if (id === 1) {
    counter--;
    count.textContent = counter;
  } else {
    counter = 0;
    count.textContent = counter;
  }
}

let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", updateCount);
});
