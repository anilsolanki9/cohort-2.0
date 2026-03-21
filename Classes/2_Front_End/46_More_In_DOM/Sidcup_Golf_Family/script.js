gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "110px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    markers: false,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    markers: false,
    scrub: 2,
    start: "top -90vh",
    end: "top -200vh",
  },
});

let crsr = document.querySelector("#cursor");
let crsrBlur = document.querySelector("#cursor-blur");

let circleCursorElems = document.querySelectorAll(".circle-crsr");

let mouseX = 0;
let mouseY = 0;
let scale = 1;

document.addEventListener("mousemove", (dets) => {
  mouseX = dets.clientX;
  mouseY = dets.clientY;
  crsr.style.transform = `translate(${mouseX - crsr.clientWidth / 2}px, ${mouseY - crsr.clientHeight / 2}px) scale(${scale})`;
  crsrBlur.style.transform = `translate(${mouseX - crsrBlur.clientWidth / 2}px, ${mouseY - crsrBlur.clientHeight / 2}px)`;
});

// Kuch naya hai

// function animate() {
//   crsr.style.transform = `translate(${mouseX - 12}px, ${mouseY - 12}px)`;
//   crsrBlur.style.transform = `translate(${mouseX - 300}px, ${mouseY - 300}px)`;
//   requestAnimationFrame(animate);
// }

// animate();

circleCursorElems.forEach((elem) => {
  elem.addEventListener("mouseenter", () => {
    crsr.classList.add("circle");
    scale = 4;
  });
  elem.addEventListener("mouseleave", () => {
    crsr.classList.remove("circle");
    scale = 1;
  });
});

let cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.addEventListener("mousemove", (dets) => {
    const rect = card.getBoundingClientRect();
    const x = dets.clientX - rect.left;
    const y = dets.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // rotateX rotate in direction where thumb is on left
    // rotateY rotate in direction where thum is on top
    // Ist cordrant rotateX +ve and rotateY  +vs
    // II cordrant rotateX +ve and rotateY -ve
    //
    // here y x and Cx and Cy and cordinate of cursor and  coordinate of card center wrt top left corner.
    // For a good card rotation
    //
    // Rotation of card on a axis will be decided by the perpendicular distnce od cursor from that axis
    // perpendicular distance of a point x, y from X-axis of (Cx, Cy) is y-Cy, and as in Ist coordinate Cy is bigger then y so we have to make the y-Cy positive so that rotateX can be +ve
    // rotateX = -(y-Cy)

    const rotateX = -(y - centerY) / 15; //
    const rotateY = (x - centerX) / 15;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = `rotateX(${0}deg) rotateY(${0}deg)`;
  });
});

gsap.from("#about-us img, #about-us-in", {
  y: 50,
  opacity: 0,
  duration: 2,
  // stagger: 0.4,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    markers: false,
    start: "top 60%",
    end: "top 55%",
    scrub: 1,
  },
});

gsap.from(".card", {
  scale: 0.8,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    markers: false,
    start: "top 60%",
    end: "top 55%",
    scrub: 2,
  },
});

gsap.from(".q-left", {
  y: -30,
  x: -30,
  scrollTrigger: {
    trigger: ".q-left",
    scroller: "body",
    markers: false,
    start: "top 55%",
    end: "top 50%",
    scrub: 2,
  },
});

gsap.from(".q-right", {
  y: 30,
  x: 30,
  scrollTrigger: {
    trigger: ".q-left",
    scroller: "body",
    markers: false,
    start: "top 55%",
    end: "top 50%",
    scrub: 2,
  },
});

gsap.from("#page3 #cards-container > h2", {
  y: 50,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page3 #cards-container > h2",
    scroller: "body",
    scrub: 1,
    start: "top 95%",
    end: "top 80%",
  },
});
