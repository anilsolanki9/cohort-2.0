let keys = document.querySelectorAll(".container div");
let box = document.querySelector(".container");

// All songs are preloaded, to increase speed and performance
const pianoAudios = {
  Q: new Audio("./assets/0.mp3"),
  W: new Audio("./assets/1.mp3"),
  E: new Audio("./assets/2.mp3"),
  R: new Audio("./assets/3.mp3"),
  T: new Audio("./assets/4.mp3"),
  Y: new Audio("./assets/5.mp3"),
  U: new Audio("./assets/6.mp3"),
  I: new Audio("./assets/7.mp3"),
  O: new Audio("./assets/8.mp3"),
  P: new Audio("./assets/9.mp3"),

  A: new Audio("./assets/10.mp3"),
  S: new Audio("./assets/11.mp3"),
  D: new Audio("./assets/12.mp3"),
  F: new Audio("./assets/13.mp3"),
  G: new Audio("./assets/14.mp3"),
  H: new Audio("./assets/15.mp3"),
  J: new Audio("./assets/16.mp3"),
  K: new Audio("./assets/17.mp3"),
  L: new Audio("./assets/18.mp3"),
  M: new Audio("./assets/19.mp3"),
  N: new Audio("./assets/20.mp3"),

  1: new Audio("./assets/21.mp3"),
  2: new Audio("./assets/22.mp3"),
  3: new Audio("./assets/23.mp3"),
  4: new Audio("./assets/24.mp3"),
  5: new Audio("./assets/25.mp3"),
  6: new Audio("./assets/26.mp3"),
  7: new Audio("./assets/27.mp3"),
  8: new Audio("./assets/28.mp3"),
  9: new Audio("./assets/29.mp3"),
  0: new Audio("./assets/30.mp3"),

  Z: new Audio("./assets/31.mp3"),
  X: new Audio("./assets/32.mp3"),
  C: new Audio("./assets/33.mp3"),
  V: new Audio("./assets/34.mp3"),
  B: new Audio("./assets/35.mp3"),
};


keys.forEach(function (key) {
  key.addEventListener("click", function () {
    const aud = pianoAudios[key.textContent];
    aud.currentTime = 0;
    aud.play();
  });
});

window.addEventListener("keydown", function (dets) {
  let key = dets.key;
  if (typeof dets.key !== "number") key = dets.key.toUpperCase();

  if (key >= 0 || (key >= "A" && key < "Z")) {
    const aud = pianoAudios[key];
    aud.currentTime = 0;
    aud.play();
    //for animation in key
    keys.forEach(function (btn) {
      if (btn.innerHTML === key) {
        if (btn.classList.contains("key")) {
          btn.classList.add("animate");
          setTimeout(() => {
            btn.classList.remove("animate");
          }, 250);
        } else {
          btn.classList.add("SharpAnimate");
          setTimeout(() => {
            btn.classList.remove("SharpAnimate");
          }, 250);
        }
      }
    });
  }
});

let isClicked = false;

document.addEventListener("mousedown", function () {
  isClicked = true;
});

document.addEventListener("mouseup", function () {
  isClicked = false;
});

let lastPlayedKey = null;

box.addEventListener("mousemove", function (e) {
  if (!isClicked) return;

  const keyEl = e.target;

  if (!keyEl.classList.contains("key") && !keyEl.classList.contains("sharpKey")) return;

  const keyText = keyEl.textContent;

  if (lastPlayedKey === keyText) return;
  lastPlayedKey = keyText;

  const aud = pianoAudios[keyText];
  if (!aud) return;

  aud.currentTime = 0;
  aud.play();

  if (keyEl.classList.contains("key")) {
    keyEl.classList.add("animate");
    setTimeout(() => keyEl.classList.remove("animate"), 100);
  } else {
    keyEl.classList.add("SharpAnimate");
    setTimeout(() => keyEl.classList.remove("SharpAnimate"), 100);
  }
});

document.addEventListener("mouseup", () => {
  lastPlayedKey = null;
});

box.addEventListener("touchstart", function (e) {
  isClicked = true;

  const touch = e.touches[0];
  const el = document.elementFromPoint(touch.clientX, touch.clientY);

  playByTouch(el);
});

box.addEventListener("touchmove", function (e) {
  if (!isClicked) return;

  const touch = e.touches[0];
  const el = document.elementFromPoint(touch.clientX, touch.clientY);

  playByTouch(el);
});

box.addEventListener("touchend", function () {
  isClicked = false;
  lastPlayedKey = null;
});

function playByTouch(el) {
  if (!el) return;

  if (!el.classList.contains("key") && !el.classList.contains("sharpKey")) return;

  const keyText = el.textContent;

  if (lastPlayedKey === keyText) return;
  lastPlayedKey = keyText;

  const aud = pianoAudios[keyText];
  if (!aud) return;

  aud.currentTime = 0;
  aud.play();

  if (el.classList.contains("key")) {
    el.classList.add("animate");
    setTimeout(() => el.classList.remove("animate"), 150);
  } else {
    el.classList.add("SharpAnimate");
    setTimeout(() => el.classList.remove("SharpAnimate"), 150);
  }
}
