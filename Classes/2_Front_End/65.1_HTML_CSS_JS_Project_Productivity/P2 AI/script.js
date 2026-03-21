// Modal Management
const modals = {
  todo: 'todo-modal',
  planner: 'planner-modal',
  quotes: 'quotes-modal',
  timer: 'timer-modal',
  goals: 'goals-modal',
};

document.querySelectorAll('.feature-card').forEach(card => {
  card.addEventListener('click', () => {
    const modalType = card.dataset.modal;
    const modalId = modals[modalType];
    document.getElementById(modalId).classList.add('active');
    if (modalType === 'quotes') loadQuote();
  });
});

function closeModal(modalId) {
  document.getElementById(modalId).classList.remove('active');
}

// Storage Helper
const storage = {
  get: key => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  },
  set: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
};

// Todo List
let todos = storage.get('todos') || [];

function renderTodos() {
  const list = document.getElementById('todo-list');
  list.innerHTML = todos
    .map(
      (todo, idx) => `
        <div class="item">
          <div class="item-text">
            <h5>${todo.task}</h5>
            <span class="imp-badge ${todo.imp ? 'show' : ''}">Important</span>
          </div>
          <button class="complete-btn" onclick="completeTodo(${idx})">
            <i class="ri-check-line"></i> Complete
          </button>
        </div>
      `
    )
    .join('');
}

document.getElementById('todo-form').addEventListener('submit', e => {
  e.preventDefault();
  const input = document.getElementById('todo-input');
  const details = document.getElementById('todo-details');
  const important = document.getElementById('todo-important');

  todos.push({
    task: input.value,
    details: details.value,
    imp: important.checked,
  });

  storage.set('todos', todos);
  renderTodos();
  input.value = '';
  details.value = '';
  important.checked = false;
});

function completeTodo(idx) {
  todos.splice(idx, 1);
  storage.set('todos', todos);
  renderTodos();
}

renderTodos();

// Daily Planner
const hours = Array.from({ length: 18 }, (_, i) => `${6 + i}:00 - ${7 + i}:00`);
let plannerData = storage.get('planner') || {};

function renderPlanner() {
  const grid = document.getElementById('planner-grid');
  grid.innerHTML = hours
    .map(
      (time, idx) => `
        <div class="time-slot">
          <div class="time-label">${time}</div>
          <input type="text" 
                 data-idx="${idx}" 
                 value="${plannerData[idx] || ''}" 
                 placeholder="What's planned?">
        </div>
      `
    )
    .join('');

  grid.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', e => {
      plannerData[e.target.dataset.idx] = e.target.value;
      storage.set('planner', plannerData);
    });
  });
}

renderPlanner();

// Motivation Quotes
async function loadQuote() {
  try {
    const response = await fetch('https://motivational-spark-api.vercel.app/api/quotes/random');
    const data = await response.json();
    document.getElementById('quote-text').textContent = data.quote;
    document.getElementById('quote-author').textContent = `~ ${data.author}`;
  } catch (error) {
    document.getElementById('quote-text').textContent = 'The only way to do great work is to love what you do.';
    document.getElementById('quote-author').textContent = '~ Steve Jobs';
  }
}

// Pomodoro Timer
let timerInterval = null;
let totalSeconds = 25 * 60;
let isWorkSession = true;

function updateTimerDisplay() {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  document.getElementById('timer-display').textContent = `${String(minutes).padStart(2, '0')}:${String(
    seconds
  ).padStart(2, '0')}`;
}

function startTimer() {
  if (timerInterval) return;

  timerInterval = setInterval(() => {
    if (totalSeconds > 0) {
      totalSeconds--;
      updateTimerDisplay();
    } else {
      clearInterval(timerInterval);
      timerInterval = null;

      if (isWorkSession) {
        totalSeconds = 5 * 60;
        isWorkSession = false;
        document.getElementById('session-badge').textContent = 'Break Time';
        document.getElementById('session-badge').style.background = 'var(--accent-primary)';
      } else {
        totalSeconds = 25 * 60;
        isWorkSession = true;
        document.getElementById('session-badge').textContent = 'Work Session';
        document.getElementById('session-badge').style.background = 'var(--success)';
      }
      updateTimerDisplay();
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  totalSeconds = 25 * 60;
  isWorkSession = true;
  document.getElementById('session-badge').textContent = 'Work Session';
  document.getElementById('session-badge').style.background = 'var(--success)';
  updateTimerDisplay();
}

document.getElementById('start-btn').addEventListener('click', startTimer);
document.getElementById('pause-btn').addEventListener('click', pauseTimer);
document.getElementById('reset-btn').addEventListener('click', resetTimer);

// Daily Goals
let goals = storage.get('goals') || [];

function renderGoals() {
  const grid = document.getElementById('goals-grid');
  grid.innerHTML = goals
    .map(
      (goal, idx) => `
        <div class="goal-card">
          <div class="goal-number">${idx + 1}</div>
          <span class="imp-badge ${
            goal.imp ? 'show' : ''
          }" style="position: absolute; top: 1rem; right: 1rem;">Important</span>
          <div class="goal-text">${goal.text}</div>
          <button class="complete-btn" onclick="completeGoal(${idx})">
            <i class="ri-check-line"></i> Complete
          </button>
        </div>
      `
    )
    .join('');
}

document.getElementById('goals-form').addEventListener('submit', e => {
  e.preventDefault();
  const input = document.getElementById('goal-input');
  const important = document.getElementById('goal-important');

  goals.push({
    text: input.value,
    imp: important.checked,
  });

  storage.set('goals', goals);
  renderGoals();
  input.value = '';
  important.checked = false;
});

function completeGoal(idx) {
  goals.splice(idx, 1);
  storage.set('goals', goals);
  renderGoals();
}

renderGoals();

// Weather & Date/Time
async function updateWeather() {
  try {
    const response = await fetch(
      'https://api.weatherapi.com/v1/current.json?key=2be78eea8cc34d8f91540933252412&q=jodhpur'
    );
    const data = await response.json();

    document.querySelector('.location').textContent = `${data.location.name}, ${data.location.region}`;
    document.querySelector('.temp').textContent = `${data.current.temp_c}°C`;
    document.querySelector('.condition').textContent = data.current.condition.text;
    document.querySelector('.precipitation').textContent = `Heat Index: ${data.current.heatindex_c}°C`;
    document.querySelector('.humidity').textContent = `Humidity: ${data.current.humidity}%`;
    document.querySelector('.wind').textContent = `Wind: ${data.current.wind_kph} km/h`;
  } catch (error) {
    console.log('Weather data unavailable');
  }
}

function updateDateTime() {
  const now = new Date();
  const months = [
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
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const date = `${now.getDate()} ${months[now.getMonth()]}, ${now.getFullYear()}`;
  const hours = now.getHours();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const displayHours = hours % 12 || 12;
  const time = `${days[now.getDay()]}, ${String(displayHours).padStart(2, '0')}:${String(now.getMinutes()).padStart(
    2,
    '0'
  )}:${String(now.getSeconds()).padStart(2, '0')} ${ampm}`;

  document.querySelector('.date').textContent = date;
  document.querySelector('.day-time').textContent = time;
}

setInterval(updateDateTime, 1000);
updateDateTime();
updateWeather();

// Theme Changer
const themes = [
  ['#0a0e27', '#151932', '#1e2440', '#00d9ff', '#7000ff'],
  ['#0d1b2a', '#1b263b', '#415a77', '#00d9ff', '#e63946'],
  ['#1a1a2e', '#16213e', '#0f3460', '#00d9ff', '#e94560'],
  ['#191919', '#2d2d2d', '#3a3a3a', '#00d9ff', '#ff6b6b'],
  ['#13111c', '#1e1b2e', '#2b2640', '#00d9ff', '#9d4edd'],
  ['#0b132b', '#1c2541', '#3a506b', '#00d9ff', '#5bc0be'],
];

let currentTheme = storage.get('currentTheme') || 0;

function applyTheme(idx) {
  const theme = themes[idx];
  document.documentElement.style.setProperty('--bg-primary', theme[0]);
  document.documentElement.style.setProperty('--bg-secondary', theme[1]);
  document.documentElement.style.setProperty('--bg-tertiary', theme[2]);
  document.documentElement.style.setProperty('--accent-primary', theme[3]);
  document.documentElement.style.setProperty('--accent-secondary', theme[4]);
}

applyTheme(currentTheme);

document.querySelector('.theme-btn').addEventListener('click', () => {
  currentTheme = (currentTheme + 1) % themes.length;
  applyTheme(currentTheme);
  storage.set('currentTheme', currentTheme);
});

// Close modal on outside click
document.querySelectorAll('.modal').forEach(modal => {
  modal.addEventListener('click', e => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });
});
