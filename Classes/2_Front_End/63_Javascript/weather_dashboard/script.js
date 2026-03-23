// function getWeather(city) {
//   let apikey = `278256b90c5153684fadfbf6e5eb76c4`;

//   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`)
//     .then((raw) => raw.json())
//     .then((result) => {
//       console.log(result);
//     });
// }
/* -------------------------------------------------------------------------- */
async function getWeather(city) {
  let apikey = `278256b90c5153684fadfbf6e5eb76c4`;

  try {
    //await use krte hai, for asynchronous execution
    let raw = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`);

    if (!raw.ok) {
      throw new Error("Something went wrong"); // ye error throw hoga and catch me err me recieve hoga
    }

    let realdata = await raw.json();

    if (realdata.main.temp < 0) {
      console.warn(`Temprature is too COLD out there...${realdata.main.temp}°C`);
    } else if (realdata.main.temp > 32) {
      console.warn(`Temprature is too HOT out there...${realdata.main.temp}°C`);
    } else {
      console.log(realdata);
    }
  } catch (err) {
    console.error(err.message);
  }
}

getWeather("jodhpur");
