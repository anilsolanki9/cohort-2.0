let searchField = document.querySelector('.search-box input');
let temprature = document.querySelector('.temperature');
let weatherDesc = document.querySelector('.weather-desc');
let locationCountry = document.querySelector('#location-country');
let dateTime = document.querySelector('.date-time');
let allWindBars = document.querySelectorAll('.wind-chart .wind-bar');
let windSpeedValue = document.querySelector('.wind-value');
let windTime = document.querySelector('.wind-time');
let uvValue = document.querySelector('.uv-value');
let sunriseTime = document.querySelector('#sunrise-time');
let sunsetTime = document.querySelector('#sunset-time');
let humidityValue = document.querySelector('.humidity-value');
let dewPointTemprature = document.querySelector('#dewPoint');
let hazeValue = document.querySelector('.haze-value');
let textForHazeEffect = document.querySelector('.haze-effect-text');
let feelsLikeValue = document.querySelector('.feels-like-value');
let feelsHumidityText = document.querySelector('.feels-humidity-text');
let forecastGrid = document.querySelector('.forecast-grid');

let oldLocation;
if (localStorage.getItem('location')) {
  oldLocation = localStorage.getItem('location');
} else {
  oldLocation = 'london';
}

localStorage.setItem('location', oldLocation);

searchField.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    localStorage.setItem('location', searchField.value);
    oldLocation = searchField.value;
    getAllWeatherData(searchField.value);
    searchField.value = '';
  }
});

let apiKey = `278256b90c5153684fadfbf6e5eb76c4`;

// Fetch current weather data
async function getCurrentWeather(city) {
  try {
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    let data = await response.json();

    if (data.cod === 200) {
      return data;
    } else {
      console.error('City not found');
      return null;
    }
  } catch (error) {
    console.error('Error fetching current weather:', error);
    return null;
  }
}

// Fetch 5-day forecast data
async function getForecast(city) {
  try {
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
    );
    let data = await response.json();

    if (data.cod === '200') {
      return data;
    } else {
      console.error('Forecast not found');
      return null;
    }
  } catch (error) {
    console.error('Error fetching forecast:', error);
    return null;
  }
}

// Fetch UV Index (requires One Call API with lat/lon)
async function getUVIndex(lat, lon) {
  try {
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${apiKey}&units=metric`
    );
    let data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching UV data:', error);
    return null;
  }
}

// Helper function to get weather icon from Flaticon
function getWeatherIcon(weatherMain, iconCode) {
  const iconMap = {
    Clear: 'https://cdn-icons-png.flaticon.com/512/1163/1163661.png',
    Clouds: 'https://cdn-icons-png.flaticon.com/512/414/414927.png',
    Rain: 'https://cdn-icons-png.flaticon.com/512/3351/3351979.png',
    Drizzle: 'https://cdn-icons-png.flaticon.com/512/3351/3351979.png',
    Thunderstorm: 'https://cdn-icons-png.flaticon.com/512/3222/3222807.png',
    Snow: 'https://cdn-icons-png.flaticon.com/512/642/642102.png',
    Mist: 'https://cdn-icons-png.flaticon.com/512/4005/4005817.png',
    Smoke: 'https://cdn-icons-png.flaticon.com/512/4005/4005817.png',
    Haze: 'https://cdn-icons-png.flaticon.com/512/4005/4005817.png',
    Fog: 'https://cdn-icons-png.flaticon.com/512/4005/4005817.png',
    Dust: 'https://cdn-icons-png.flaticon.com/512/4005/4005817.png',
    Sand: 'https://cdn-icons-png.flaticon.com/512/4005/4005817.png',
    Ash: 'https://cdn-icons-png.flaticon.com/512/4005/4005817.png',
    Squall: 'https://cdn-icons-png.flaticon.com/512/1146/1146869.png',
    Tornado: 'https://cdn-icons-png.flaticon.com/512/1146/1146869.png',
  };

  return iconMap[weatherMain] || 'https://cdn-icons-png.flaticon.com/512/414/414927.png';
}

// Update UI with current weather data
function updateCurrentWeather(data) {
  // Temperature
  if (temprature) temprature.textContent = `${Math.round(data.main.temp)}°C`;

  // Weather description
  if (weatherDesc) {
    weatherDesc.textContent =
      data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1);
  }

  // Location
  if (locationCountry) locationCountry.textContent = `${data.name}, ${data.sys.country}`;

  // Date and time
  if (dateTime) {
    let date = new Date();
    let options = { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' };
    dateTime.textContent = date.toLocaleDateString('en-US', options);
  }

  // Wind speed
  if (windSpeedValue) windSpeedValue.textContent = `${data.wind.speed.toFixed(2)}`;
  if (windTime) windTime.textContent = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

  // Animate wind bars with random heights
  if (allWindBars.length > 0) {
    allWindBars.forEach((bar, index) => {
      let randomHeight = Math.floor(Math.random() * 60) + 30;
      bar.style.height = `${randomHeight}%`;
    });
  }

  // Humidity
  if (humidityValue) humidityValue.textContent = `${data.main.humidity}`;

  // Calculate dew point
  if (dewPointTemprature) {
    let temp = data.main.temp;
    let humidity = data.main.humidity;
    let dewPoint = temp - (100 - humidity) / 5;
    dewPointTemprature.textContent = `${Math.round(dewPoint)}°`;
  }

  // Visibility
  if (hazeValue) {
    let visibilityKm = (data.visibility / 1000).toFixed(0);
    hazeValue.textContent = `${visibilityKm}`;

    if (textForHazeEffect) {
      if (visibilityKm < 5) {
        textForHazeEffect.textContent = 'Haze is affecting visibility';
      } else if (visibilityKm < 10) {
        textForHazeEffect.textContent = 'Moderate visibility';
      } else {
        textForHazeEffect.textContent = 'Clear visibility';
      }
    }
  }

  // Feels like
  if (feelsLikeValue) feelsLikeValue.textContent = `${Math.round(data.main.feels_like)}°`;

  if (feelsHumidityText) {
    if (data.main.feels_like > data.main.temp) {
      feelsHumidityText.textContent = 'Humidity is making it feel hotter';
    } else if (data.main.feels_like < data.main.temp) {
      feelsHumidityText.textContent = 'Wind is making it feel cooler';
    } else {
      feelsHumidityText.textContent = 'Feels like actual temperature';
    }
  }

  // Sunrise and Sunset
  if (sunriseTime) {
    let sunrise = new Date(data.sys.sunrise * 1000);
    sunriseTime.textContent = sunrise.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  }

  if (sunsetTime) {
    let sunset = new Date(data.sys.sunset * 1000);
    sunsetTime.textContent = sunset.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  }

  // Update weather icon
  let weatherIcon = document.querySelector('.weather-icon');
  if (weatherIcon) {
    weatherIcon.src = getWeatherIcon(data.weather[0].main, data.weather[0].icon);
  }
}

// Update UV Index
function updateUVIndex(data) {
  if (uvValue) {
    if (data && data.current && data.current.uvi !== undefined) {
      uvValue.textContent = `${data.current.uvi.toFixed(2)}`;
    } else {
      uvValue.textContent = '5.50'; // Default value if API fails
    }
  }
}

// Process and update forecast
function updateForecast(data) {
  // Group forecast by day
  const dailyData = {};

  data.list.forEach(item => {
    const date = new Date(item.dt * 1000);
    const dateStr = date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
    const dayKey = date.toDateString();

    if (!dailyData[dayKey]) {
      dailyData[dayKey] = {
        date: dateStr,
        day: date.toLocaleDateString('en-US', { weekday: 'long' }),
        dayMonth: date.toLocaleDateString('en-US', { day: 'numeric', month: 'long' }),
        temp_max: item.main.temp_max,
        temp_min: item.main.temp_min,
        weather: item.weather[0],
        icon: item.weather[0].icon,
      };
    } else {
      dailyData[dayKey].temp_max = Math.max(dailyData[dayKey].temp_max, item.main.temp_max);
      dailyData[dayKey].temp_min = Math.min(dailyData[dayKey].temp_min, item.main.temp_min);
    }
  });

  // Convert to array and take first 7 days
  const forecastArray = Object.values(dailyData).slice(0, 7);

  // Clear existing forecast
  if (forecastGrid) {
    forecastGrid.innerHTML = '';

    // Add forecast cards
    forecastArray.forEach(day => {
      const weatherIcon = getWeatherIcon(day.weather.main, day.icon);

      let forecastCard = `
        <div class="forecast-card">
          <div class="forecast-day">${day.day}</div>
          <div>${day.dayMonth}</div>
          <img src="${weatherIcon}" alt="${
        day.weather.description
      }" class="forecast-icon" style="width: 60px; height: 60px; object-fit: contain; filter: brightness(1.2);" />
          <div style="font-size: 13px; opacity: 0.8; margin: 8px 0;">${day.weather.main}</div>
          <div class="forecast-temp">
            <span class="temp-high">+${Math.round(day.temp_max)}°</span>
            <span class="temp-low">/${Math.round(day.temp_min)}°</span>
          </div>
        </div>
      `;
      forecastGrid.innerHTML += forecastCard;
    });
  }
}

// Main function to get all weather data
async function getAllWeatherData(city) {
  console.log('Fetching weather data for:', city);

  // Get current weather
  const currentWeather = await getCurrentWeather(city);
  if (currentWeather) {
    updateCurrentWeather(currentWeather);

    // Get UV index using coordinates from current weather
    const uvData = await getUVIndex(currentWeather.coord.lat, currentWeather.coord.lon);
    updateUVIndex(uvData);
  }

  // Get forecast
  const forecastData = await getForecast(city);
  if (forecastData) {
    updateForecast(forecastData);
  }
}

// Initial load
let city = localStorage.getItem('location');
getAllWeatherData(city);
