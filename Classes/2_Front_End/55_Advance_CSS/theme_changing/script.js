let themeBtn = document.querySelector("#theme");

let themes = [
  {
    bg: "rgb(20, 20, 20)",
    bgSec: "rgb(109, 109, 183)",
    text: "rgb(231, 231, 231)",
  },
  {
    bg: "rgb(222, 222, 222)",
    bgSec: "rgb(67, 67, 111)",
    text: "rgb(37, 37, 37)",
  },
  {
    bg: "rgb(120, 62, 171)",
    bgSec: "rgb(62, 42, 85)",
    text: "rgb(231, 231, 231)",
  },
];

// goal => btn pe click then, theme hange honi chahiye, indexes ke basis pe.
// state => index 0, 1, 2 hoga then again 0, 1, 2, hoga. and Properties changehongi
// event => Btn ke click hone pe.
// logic => propeteis set krni hai, index check krna h agar 3 h to 0 kr dena h. and index ++ krna h
// UI => UI updates aa jaenge

handleBtnClick();

function handleBtnClick() {
  let num = 0;
  themeBtn.addEventListener("click", () => {
    if (num === 3) num = 0;
    updateUI(num);
    num++;
  });
}

function updateUI(idx) {
  document.documentElement.style.setProperty("--theme-primary-bg", themes[idx].bg);
  document.documentElement.style.setProperty("--theme-secondary-bg", themes[idx].bgSec);
  document.documentElement.style.setProperty("--theme-primary-text", themes[idx].text);
}
