let Allstrips = document.querySelectorAll(".banner-container .exp .exp-grid .strip");

// 270 hue = violate
// 0 = red
// hsl(270, 100%, 50%) = violate
// hsl(0, 100%, 50%) = red
// 35 strips
// 270 / 35 = 7.7 so agar hr ek strip ke bad variable me 7 decrease krenge to, rainbow ban jaega
// let exp = 70% toh, total strips ka sirf 70% hi color hona chahiye, means. 35 *70/ 100 = 24.5 = 24 strips

let degree = 270;
let experience = 70;

Allstrips.forEach(function (strip, idx) {
  if (idx < (35 * experience) / 100) {
    strip.style.backgroundColor = `hsl(${degree}, 100%, 50%)`;
    degree -= 7;
  }
});
