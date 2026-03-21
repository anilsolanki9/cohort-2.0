function clickLimiter() {
  // private variable
  // can't be accessed using console
  let click = 0;
  return function () {
    if (click < 5) {
      click++;
      console.log(`You clicked ${click} times.`);
    } else {
      console.error("Limit Exceeded");
    }
  };
}

let fnc = clickLimiter();
fnc();
fnc();
fnc();
fnc();
fnc();
fnc();
