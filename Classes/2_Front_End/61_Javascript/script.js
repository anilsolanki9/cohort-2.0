// fetch("https://randomuser.me/api/")
//   .then((rawData) => rawData.json())
//   .then((realData) => {
//     console.log(realData.results[0].name.first);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

/* ------ promise and try catch ----- */

// let prm = new Promise((resolve, reject) => {
//   let x = Math.random() * 10;
//   setTimeout(() => {
//     if (x < 5) resolve();
//     else reject("x is greater then equal to 5");
//   }, 3000);
// });

// prm
//   .then(function () {
//     console.log("x is less then 5");
//   })
//   .catch(function (err) {
//     console.error(err);
//   });

/* ---------------------------------- */

// Jaha jaha .then() use hota hai, us se bachne ke liye async await use kr skte hai.

// fetch().then().then() etc. ko  we can write as

// async function abcd() {
//   let raw = await fetch("https://randomuser.me/api");
//   let data =  await raw.json();
//   console.log(data);
// }

// abcd();

/* ---------------------------------- */

// function getNum() {
//   return new Promise((res, rej) => {
//     let num = Math.random() * 10;
//     setTimeout(() => {
//       if (num < 5) res("Less then 5");
//       else rej("Greater then 5");
//     }, 1000);
//   });
// }

// async function abcd() {
//   let prm = await getNum();
//   console.log(prm);
// }

// abcd();

// await me chahe resolve ho ya reject, ek hi jagah aa jaega.

/* ---------------------------------- */
