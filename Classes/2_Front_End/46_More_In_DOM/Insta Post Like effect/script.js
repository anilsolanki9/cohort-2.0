console.log("Helo");
let likeDetectLayer = document.querySelector(".like-layer");
let heart = document.querySelector(".heart");

let followBtn = document.querySelector(".follow-btn");

let playBtn = document.querySelector("i.play");
let musicBtn = document.querySelector("i.sound");

let reel = document.querySelector("#reel");

let timer = 0;

let isPlaying = true;
let isMuted = true;

function videoSettingManage(playing, muted) {
  playBtn.className = isPlaying ? "fa-solid fa-pause play" : "fa-solid fa-play play";
  musicBtn.className = isMuted ? "fa-solid fa-volume-xmark sound" : "fa-solid fa-volume-high sound";
}

videoSettingManage(isPlaying, isMuted);

likeDetectLayer.addEventListener("dblclick", (dets) => {
  let rect = likeDetectLayer.getBoundingClientRect();
  let x = dets.clientX - rect.left;
  let y = dets.clientY - rect.top;
  console.log(x, y);
  heart.style.top = y - 50 + "px";
  heart.style.left = x + "px";

  heart.classList.add("animate");
  timer = 0;
  timer = setTimeout(() => {
    heart.classList.remove("animate");
  }, 800);
});

likeDetectLayer.addEventListener("click", () => {
  playBtn.click();
});

followBtn.addEventListener("click", () => {
  if (followBtn.textContent === "Follow") {
    followBtn.textContent = "Following";
    followBtn.style.backgroundColor = "#ffffff6c";
  } else {
    followBtn.textContent = "Follow";
    followBtn.style.backgroundColor = "rgba(255, 255, 255, 0.086)";
  }
});

playBtn.addEventListener("click", () => {
  isPlaying ? reel.pause() : reel.play();
  isPlaying = !isPlaying;
  videoSettingManage(isPlaying, isMuted);
});

musicBtn.addEventListener("click", () => {
  console.log("Hel");
  reel.muted = isMuted ? false : true;
  isMuted = !isMuted;

  videoSettingManage(isPlaying, isMuted);
});

window.addEventListener("keydown", (dets) => {
  if (dets.key === "m") {
    musicBtn.click();
  } else if (dets.key === " ") {
    playBtn.click();
  } else if (dets.key === "f") {
    followBtn.click();
  }
});
