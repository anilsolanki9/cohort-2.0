let outer = document.querySelector(".outer");
let inner = document.querySelector(".inner");

window.addEventListener("mousemove", function (dets) {
  // console.log(dets);
  outer.style.top = dets.clientY + "px";
  outer.style.left = dets.clientX + "px";

  inner.style.top = dets.clientY + "px";
  inner.style.left = dets.clientX + "px";
});
