let progressBar = document.querySelector(".inner");
let h2 = document.querySelector("h2");
let btn = document.querySelector("button");
let card = document.querySelector(".card");
let effectCard = document.querySelector(".shadow");
let boundryCard = document.querySelector(".boundry-box");

let width = card.offsetWidth;
let height = card.offsetHeight;

btn.addEventListener("click", function () {
  let x = 0;
  btn.style.opacity = 0.3;
  btn.style.pointerEvents = "none";

  let timeInMs = Math.floor(50 + Math.random() * 30);
  console.log("Your file will be downloaded in " + timeInMs / 10 + " seconds");

  let int = setInterval(function () {
    x++;
    progressBar.style.width = x + "%";
    h2.textContent = x + "%";
  }, timeInMs);

  setTimeout(function () {
    clearInterval(int);
    btn.textContent = "Downloaded";
  }, timeInMs * 100);
});

card.addEventListener("mousemove", function (e) {
  const rect = effectCard.getBoundingClientRect();

  // Humko at the end, card box ke respect me, uske top and left edge se coordinates chahiye mouse ke.

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  effectCard.style.opacity = 1; // glow visible while hovering

  // smooth circular radial glow
  effectCard.style.background = `radial-gradient(circle 250px at ${x}px ${y}px, rgba(161, 79, 255, 0.89) 5%,transparent 50%)`;

  // Border animation
  // center ke coordinates
  const cx = rect.left + (rect.left - rect.right) / 2;
  const cy = rect.top + (rect.top - rect.bottom) / 2;

  const angleDeg = ((Math.atan2(x - cx, -(y - cy)) * 180) / Math.PI + 360) % 360;

  boundryCard.style.background = `conic-gradient(
    from ${angleDeg}deg,
    rgb(183, 106, 255),
    rgb(179, 46, 255),
    transparent,
    transparent,
    transparent,
    transparent,
    transparent,
    transparent,
    transparent,
    transparent,
    transparent,
    rgb(179, 46, 255),
    rgb(183, 106, 255)
  )`;
});

card.addEventListener("mouseleave", function () {
  effectCard.style.opacity = 0;
});

document.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "f") {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    }
  }

  if (e.key === "Escape") {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  }
});
