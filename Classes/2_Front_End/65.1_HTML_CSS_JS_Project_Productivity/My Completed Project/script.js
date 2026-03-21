function openFeatures() {
  let allElems = document.querySelectorAll('.elem');
  let allFullElemsPages = document.querySelectorAll('.fullElem');
  let allFullElemPagesBackBtn = document.querySelectorAll('.fullElem .back');

  allElems.forEach(function (elem) {
    //elem pe event listner lagaya
    elem.addEventListener('click', function () {
      // console.log(elem.id);
      //fullElem pages ko target kiya, and us array me se elem.id index vale element ko target kr diya
      // console.log(allFullElems[elem.id]);
      allFullElemsPages[elem.id].style.display = 'block';
    });
  });

  allFullElemPagesBackBtn.forEach(function (backBtn) {
    backBtn.addEventListener('click', function () {
      allFullElemsPages[backBtn.id].style.display = 'none';
    });
  });
}
openFeatures();

function todoList() {
  let currentTasks = [];

  if (localStorage.getItem('currentTasks')) {
    currentTasks = JSON.parse(localStorage.getItem('currentTasks'));
  } else {
    console.log('Current task is empty');
  }

  function renderTask() {
    let allTasksContainer = document.querySelector('.allTask');
    let sum = '';

    currentTasks.forEach(function (elem, idx) {
      sum += `<div class="task">
              <h5>${elem.task} <span class="${elem.imp}">imp</span></h5>
              <button id="${idx}">Mark as Completed</button>
            </div>`;
    });
    allTasksContainer.innerHTML = sum;
    localStorage.setItem('currentTasks', JSON.stringify(currentTasks));

    let allMarkAsCompleteBtn = document.querySelectorAll('.allTask .task button');
    allMarkAsCompleteBtn.forEach(function (btn) {
      btn.addEventListener('click', function () {
        currentTasks.splice(btn.id, 1);
        renderTask();
      });
    });
  }
  renderTask();

  let form = document.querySelector('.todo-container .addTask form');
  let taskInput = document.querySelector('.todo-container .addTask form #task-input');
  let taskDetailsInput = document.querySelector('.todo-container .addTask form textarea');
  let taskCheckbox = document.querySelector('.todo-container .addTask form #check');

  form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    currentTasks.push({
      task: taskInput.value,
      details: taskDetailsInput.value,
      imp: taskCheckbox.checked,
    });
    taskInput.value = '';
    taskDetailsInput.value = '';
    taskCheckbox.checked = false;
    renderTask();
  });
}

todoList();

function dailyPlanner() {
  let dailyPlanner = document.querySelector('.day-planner');
  let dayPlanData = JSON.parse(localStorage.getItem('dayPlanData')) || {};
  let hours = Array.from({ length: 18 }, (_, idx) => `${6 + idx}:00 - ${7 + idx}:00`);

  let sum = '';
  hours.forEach((elem, idx) => {
    let savedData = dayPlanData[idx] || '';
    sum += `<div class="day-planner-time">
            <p>${elem}</p>
            <input id='${idx}' type="text" placeholder="..." value='${savedData}' />
          </div>`;
  });
  dailyPlanner.innerHTML = sum;

  let dayPlannerInput = document.querySelectorAll('.day-planner input');
  dayPlannerInput.forEach(elem => {
    elem.addEventListener('input', function () {
      dayPlanData[elem.id] = elem.value;
      localStorage.setItem('dayPlanData', JSON.stringify(dayPlanData));
    });
  });
}

dailyPlanner();

function motivationQuote() {
  let motivationQuoteContent = document.querySelector('.motivation-2 h1');
  let motivationAuthor = document.querySelector('.motivation-3 h2');

  async function fetchQuote() {
    let response = await fetch(`https://motivational-spark-api.vercel.app/api/quotes/random`);
    let data = await response.json();
    motivationQuoteContent.innerHTML = data.quote;
    motivationAuthor.innerHTML = `~ ${data.author}`;
  }

  fetchQuote();
}

motivationQuote();

function pomodoroTimer() {
  let timer = document.querySelector('.pomo-timer h1');
  let startBtn = document.querySelector('.pomo-timer .pomo-btn .start-timer');
  let pauseBtn = document.querySelector('.pomo-timer .pomo-btn .pause-timer');
  let resetBtn = document.querySelector('.pomo-timer .pomo-btn .reset-timer');
  let sessionText = document.querySelector('.pomo-timer .session');

  let timerInterval = null;
  let totalSeconds = 25 * 60;
  let workSession = true;

  function updateTimer() {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    timer.innerHTML = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }

  function startTimer() {
    clearInterval(timerInterval);
    if (workSession) {
      timerInterval = setInterval(() => {
        if (totalSeconds > 0) {
          totalSeconds--;
          updateTimer();
        } else {
          workSession = false;
          clearInterval(timerInterval);
          totalSeconds = 5 * 60;
          timer.innerHTML = '05:00';
          sessionText.innerHTML = `Break Time`;
          sessionText.style.backgroundColor = `var(--blue)`;
        }
      }, 1000);
    } else {
      timerInterval = setInterval(() => {
        if (totalSeconds > 0) {
          totalSeconds--;
          updateTimer();
        } else {
          workSession = true;
          clearInterval(timerInterval);
          totalSeconds = 25 * 60;
          timer.innerHTML = '25:00';
          sessionText.innerHTML = `Work Session`;
          sessionText.style.backgroundColor = `var(--green)`;
        }
      }, 5);
    }
  }

  function pauseTimer() {
    clearInterval(timerInterval);
  }

  function resetTimer() {
    totalSeconds = 25 * 60;
    sessionText.innerHTML = `Work Session`;
    sessionText.style.backgroundColor = `var(--green)`;
    workSession = true;
    clearInterval(timerInterval);
    updateTimer();
  }

  startBtn.addEventListener('click', startTimer);
  pauseBtn.addEventListener('click', pauseTimer);
  resetBtn.addEventListener('click', resetTimer);
}

pomodoroTimer();

function dailyGoals() {
  let currentGoals = [];

  if (localStorage.getItem('currentGoals')) {
    currentGoals = JSON.parse(localStorage.getItem('currentGoals'));
  } else {
    console.log('Current goals list is empty');
  }

  function renderGoals() {
    let allGoalsContainer = document.querySelector('.allGoals');

    let sum = '';

    currentGoals.forEach(function (elem, idx) {
      sum += `<div class="goal">
              <span class="goal-number">${idx + 1}</span>
              <span class="${elem.imp} imp">imp</span>
              <h5>${elem.details}</h5>
              <button id="${idx}">Mark as Completed</button>
            </div>`;
    });

    allGoalsContainer.innerHTML = sum;
    localStorage.setItem('currentGoals', JSON.stringify(currentGoals));

    let allMarkAsCompleteBtn = document.querySelectorAll('.allGoals .goal button');

    allMarkAsCompleteBtn.forEach(function (btn) {
      btn.addEventListener('click', function () {
        currentGoals.splice(btn.id, 1);
        renderGoals();
      });
    });
  }

  renderGoals();

  let form = document.querySelector('.daily-goals-container .addGoal form');

  let goalDetailsInput = document.querySelector('.daily-goals-container .addGoal form textarea');

  let goalCheckbox = document.querySelector('.daily-goals-container .addGoal form #tick');

  form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    currentGoals.push({
      details: goalDetailsInput.value,
      imp: goalCheckbox.checked,
    });

    goalDetailsInput.value = '';
    goalCheckbox.checked = false;
    renderGoals();
  });
}

dailyGoals();

function weatherFunctionality() {
  const APIkey = `2be78eea8cc34d8f91540933252412`;

  let city = 'Jodhpur';
  if (localStorage.getItem('city')) {
    city = localStorage.getItem('city');
  } else {
    city = 'Jodhpur';
    localStorage.setItem('city', city);
  }

  let header = document.querySelector('.allElems header');
  let date = document.querySelector('header .header1 .date');
  let dayTime = document.querySelector('header .header1 .day-time');
  let currentLocation = document.querySelector('header .header1 .current-location');
  let temprature = document.querySelector('header .header2 .temp');
  let condition = document.querySelector('header .header2 .condition');
  let precipitation = document.querySelector('header .header2 .precipitation');
  let humidity = document.querySelector('header .header2 .humidity');
  let wind = document.querySelector('header .header2 .wind');

  currentLocation.addEventListener('click', function () {
    city = prompt('Enter Your City');
    localStorage.setItem('city', city);
    weatherFunctionality();
  });

  async function weatherAPI() {
    let response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${APIkey}&q=${city}`);

    let data = await response.json();

    currentLocation.innerHTML = `${data.location.name}(${data.location.region})`;

    temprature.innerHTML = `${data.current.temp_c} °C`;

    condition.innerHTML = `${data.current.condition.text}`;

    precipitation.innerHTML = `Heat Index: ${data.current.heatindex_c}%`;

    humidity.innerHTML = `Humidity: ${data.current.humidity}%`;

    wind.innerHTML = `Wind: ${data.current.wind_kph} km/h`;
  }

  function getDate() {
    let data = new Date();

    const allMonths = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    let allDaysName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let hours = data.getHours();

    let counter = Math.floor((hours + 2) / 3);

    header.style.backgroundImage = `url('./assets/day-images/${counter - 1}.png')`;
    header.style.backgroundSize = `cover`;
    header.style.backgroundPosition = `center`;

    let ampm = hours >= 12 ? 'PM' : 'AM';
    if (hours >= 12) hours -= 12;

    let minutes = data.getMinutes();
    let seconds = data.getSeconds();
    let tarik = data.getDate();
    let weekDay = allDaysName[data.getDay()];

    let month = allMonths[data.getMonth()];
    let year = data.getFullYear();

    date.innerHTML = `${tarik} ${month}, ${year}`;
    dayTime.innerHTML = `${weekDay}, ${String(hours).padStart('2', '0')}:${String(minutes).padStart('2', '0')}:${String(
      seconds
    ).padStart('2', '0')} ${ampm}`;
  }

  setInterval(function () {
    getDate();
  }, 1000);

  weatherAPI();
}

weatherFunctionality();

function themeChange() {
  let themeBtn = document.querySelector('.nav-inner .theme');
  let rootElement = document.documentElement;
  let flag = 0;

  let currentTheme = [];

  if (localStorage.getItem('currentTheme')) {
    currentTheme = JSON.parse(localStorage.getItem('currentTheme'));
    rootElement.style.setProperty('--pri', currentTheme[0]);
    rootElement.style.setProperty('--sec', currentTheme[1]);
    rootElement.style.setProperty('--tri1', currentTheme[2]);
    rootElement.style.setProperty('--tri2', currentTheme[3]);
    flag = currentTheme[4];
  } else {
    currentTheme = ['#f8f4e1', '#381c0a', '#feba17', '#74512d', 0];
    rootElement.style.setProperty('--pri', currentTheme[0]);
    rootElement.style.setProperty('--sec', currentTheme[1]);
    rootElement.style.setProperty('--tri1', currentTheme[2]);
    rootElement.style.setProperty('--tri2', currentTheme[3]);
    flag = currentTheme[4];
  }

  themeBtn.addEventListener('click', function () {
    let themes = [
      ['#f8f4e1', '#381c0a', '#feba17', '#74512d'],
      ['#F6F0D7', '#89986D', '#C5D89D', '#9CAB84'],
      ['#F4EEFF', '#424874', '#DCD6F7', '#A6B1E1'],
      ['#FCF9EA', '#A8BBA3', '#FFA239', '#97A87A'],
      ['#F7EFE5', '#674188', '#E4C988', '#C3ACD0'],
      ['#EEF5FF', '#176B87', '#64CCC5', '#B4D4FF'],
      ['#FFF4F4', '#BE3144', '#F05941', '#872341'],
      ['#F1F6F9', '#394867', '#9BA4B5', '#212A3E'],
      ['#FAF3E0', '#4A4A48', '#B68973', '#8D7B68'],
      ['#F5F5F5', '#222831', '#00ADB5', '#393E46'],
      ['#FFF8F0', '#3A4F7A', '#E36414', '#6B728E'],
    ];

    function themeRender() {
      flag++;
      if (flag == themes.length) flag = 0;
      currentTheme[0] = themes[flag][0];
      currentTheme[1] = themes[flag][1];
      currentTheme[2] = themes[flag][2];
      currentTheme[3] = themes[flag][3];
      currentTheme[4] = flag; // saving flag inside array, to use later

      rootElement.style.setProperty('--pri', currentTheme[0]);
      rootElement.style.setProperty('--sec', currentTheme[1]);
      rootElement.style.setProperty('--tri1', currentTheme[2]);
      rootElement.style.setProperty('--tri2', currentTheme[3]);
    }

    themeRender();
    localStorage.setItem('currentTheme', JSON.stringify(currentTheme));
  });
}

themeChange();
