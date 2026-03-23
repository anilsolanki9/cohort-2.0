// function getWeather(city) {
//   let apikey = `278256b90c5153684fadfbf6e5eb76c4`;

//   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`)
//     .then(raw => raw.json())
//     .then(result => {
//       console.log(result);
//     });
// }
/* -------------------------------------------------------------------------- */
// async function getWeather(city) {
//   let apikey = `278256b90c5153684fadfbf6e5eb76c4`;

//   try {
//     //await use krte hai, for asynchronous execution
//     let raw = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`);

//     if (!raw.ok) {
//       throw new Error('Something went wrong'); // ye error throw hoga and catch me err me recieve hoga
//     }

//     let realdata = await raw.json();

//     if (realdata.main.temp < 0) {
//       console.warn(`Temprature is too COLD out there...${realdata.main.temp}`);
//     } else if (realdata.main.temp > 32) {
//       console.warn(`Temprature is too HOT out there...${realdata.main.temp}`);
//     } else {
//       console.log(realdata);
//     }
//   } catch (err) {
//     console.error(err.message);
//   }
// }

// getWeather('jodhpur');

/* -------------------------------------------------------------------------- */

// let usersEmails = ['hello@female.com', 'hyy@hemale.com', 'female@gmail.com'];

// function sendEmail(email) {
//   return new Promise((resolve, reject) => {
//     let time = Math.floor(Math.random() * 5);
//     setTimeout(() => {
//       let probability = Math.floor(Math.random() * 10);
//       if (probability >= 5) {
//         resolve('Email send successfully.');
//       } else {
//         reject('Email not sent...');
//       }
//     }, time * 1000);
//   });
// }

// async function sendEmails(userEmailsList) {
//   let allResults = userEmailsList.map(function (email) {
//     return sendEmail(email)
//       .then(function (data) {
//         return data;
//       })
//       .catch(function (err) {
//         return err;
//       });
//   });

//   //to print all status array
//   let allStatus = await Promise.all(allResults);
//   console.log(allStatus);

//   //to print all statuss
//   allStatus.forEach(status => {
//     console.log(status);
//   });
// }

// sendEmails(usersEmails);

/* ---------------Alternative------------------- */

let usersEmails = ["hello@female.com", "hyy@hemale.com", "female@gmail.com"];

function sendEmail(email) {
  return new Promise((resolve, reject) => {
    let time = Math.floor(Math.random() * 5);
    setTimeout(() => {
      let probability = Math.floor(Math.random() * 10);
      if (probability >= 5) {
        resolve("Email send successfully.");
      } else {
        reject("Email not sent...");
      }
    }, time * 1000);
  });
}

async function sendEmails(userEmailsList) {
  let results = [];
  for (email of usersEmails) {
    await sendEmail(email)
      .then((data) => {
        results.push(data);
      })
      .catch((err) => {
        results.push(err);
      });
  }
  console.log(results);
}

sendEmails(usersEmails);
