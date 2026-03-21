let count = 0;
let seconds = 3;

let card = document.querySelector(".card");
let progress = document.querySelector(".progress");

let interval = setInterval(
  () => {
    count++;
    card.classList.add("showing");
    progress.style.width = `${count}%`;
    if (count === 100) {
      clearInterval(interval);
      card.classList.remove("showing");
    }
  },
  (seconds * 1000) / 100,
);
