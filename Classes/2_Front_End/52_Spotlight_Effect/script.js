document.addEventListener("mousemove", (eve) => {
  document.body.style.setProperty("--x", eve.clientX + "px");
  document.body.style.setProperty("--y", eve.clientY + "px");
});

let h2 = document.querySelector("h2");
let text = h2.textContent;

let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

h2.addEventListener("mouseenter", () => {
  if (h2.classList.contains("animate")) return;

  let iteration = 0;

  const intrval = setInterval(function () {
    let str = text
      .split("")
      .map((char, idx) => {
        if (idx < iteration) {
          return char;
        } else {
          return characters.split("")[Math.floor(Math.random() * 53)];
        }
      })
      .join("");

    h2.innerText = str;

    iteration += 0.2;
    console.log(iteration / 0.2);
  }, 50);

  h2.classList.add("animate");

  setTimeout(function () {
    clearInterval(intrval);
  });

  setTimeout(function () {
    h2.classList.remove("animate");
  }, text.length * 100);
});
