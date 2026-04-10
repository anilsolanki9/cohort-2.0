let cursor1 = document.querySelector(".cursor-1");
let cursor2 = document.querySelector(".cursor-2");

let x = 0;
let y = 0;

document.addEventListener("mousemove", (evt) => {
  // console.log(evt.clientX, evt.clientY);
  x = evt.clientX;
  y = evt.clientY;

  move();
});

function move() {
  cursor1.style.transform = `translateX(${x - 15}px) translateY(${y - 15}px)`;
  cursor2.style.transform = `translateX(${x - 30}px) translateY(${y - 30}px)`;
  requestAnimationFrame(move);
}
