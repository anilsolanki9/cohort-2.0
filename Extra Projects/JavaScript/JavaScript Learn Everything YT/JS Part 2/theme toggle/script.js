// Setting the theme based on OS theme
function setDarkOrLight() {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.body.className = "dark";
  } else {
    document.body.className = "light";
  }
}

setDarkOrLight();

// Agar localstorage me data hai toh, use theme me set kr do.

if (localStorage.getItem("theme")) {
  document.body.className = localStorage.getItem("theme");
}

// OS ke theme change hone pe te chalega

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function () {
  if (!localStorage.getItem("theme")) setDarkOrLight();
});

// Toggle butn

let toggleBtn = document.querySelector(".toggleBtn");

// Button ke click hone pe theme toggle
toggleBtn.addEventListener("click", () => {
  if (document.body.classList.contains("light")) {
    document.body.className = "dark";
    localStorage.setItem("theme", "dark");
  } else {
    document.body.className = "light";
    localStorage.setItem("theme", "light");
  }
});
