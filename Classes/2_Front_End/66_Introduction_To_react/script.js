import { skills as Hell } from "./app.js";

console.log(Hell);

/* ---------------------------------- */

let prm = new Promise((res, rej) => {
  let x = Math.random() * 10;
  if (x > 5) res("x is greater then 5");
  else rej("x is less then 5 , error !!");
});

prm
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });

/* ---------------------------------- */

async function getQuote() {
  try {
    let res = await fetch("https://dummyjson.com/quotes");
    let data = await res.json();
    console.log(data.quotes[0].quote);
  } catch (err) {
    console.error(err);
  }
}

getQuote();

/* ---------------------------------- */

