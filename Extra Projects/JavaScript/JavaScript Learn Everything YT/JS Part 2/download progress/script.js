let progressStatus = document.querySelector("h2");
let progressBar = document.querySelector(".progress-bar");
let percent = document.querySelector(".percent");

// 3 seconds me download krvana hai,
// 3 seconds me total 100% progress krni hai, then 1 % ke liye kitna time lgega?
// 1 % ke liye 30 ms lgega right.
// 3000 ms me complete krna h toh, 3000/100 per interval

let count = 0;
let seconds = 10;

let intrerval = setInterval(
  function () {
    count++;
    progressBar.style.width = `${count}%`;
    percent.textContent = `${count}%`;
    if (count == 100) {
      clearInterval(intrerval);
      progressStatus.textContent = "Downloaded";
    }
  },
  (10 * 1000) / 100,
);
