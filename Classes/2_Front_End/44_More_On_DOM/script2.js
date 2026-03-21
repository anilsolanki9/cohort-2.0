let main = document.querySelector('main');
let btn = document.querySelector('button');
let select = document.querySelector('select');

let activeArray = []; // <-- central theme array

// All theme arrays
const themes = {
  emoji: [
    '😎✨',
    '🤙🔥',
    '😼💫',
    '🐼🤍',
    '🦋🌈',
    '😇💖',
    '🧋✨',
    '🥤😎',
    '🐾💙',
    '🎧😌',
    '🌸😽',
    '🦄💫',
    '⭐🤍',
    '🫶💞',
    '🍭🌈',
    '🍀✨',
    '🍓💖',
    '🌙💎',
    '🫧😌',
    '😎🌟',
    '🔥💀',
    '💫👑',
    '🍉✨',
    '🌈🐻',
    '😻💘',
    '😌🌿',
    '🌙🖤',
    '💎✨',
    '🐥🌸',
    '💖🦋',
    '🎮🔥',
    '🎧💫',
    '🐼✨',
    '🌟🦊',
    '👀⭐',
    '💞💫',
    '🍩💗',
    '⭐🔥',
    '💤🌙',
    '😎⚡',
    '💘🐰',
    '🫶🌟',
    '🧸💖',
    '💙🦋',
    '🐱✨',
    '🌸💞',
    '💫🧿',
    '🍔😎',
    '🐯🔥',
    '💜✨',
    '💙💫',
    '🫧💎',
    '🎧💜',
    '💖🦄',
    '💗🫶',
    '🦊🌟',
    '🌈🧸',
    '🍓💖',
    '🌊🐬',
    '🔥💜',
    '💖🐰',
    '🧋💫',
    '🥤💙',
    '🪩✨',
    '⭐💜',
    '🪻💮',
    '🌌✨',
    '🪽💙',
    '🧸💗',
    '🍒💞',
    '🍔🔥',
    '🦄🌟',
    '⚡💜',
    '🎧🪩',
    '💘🦋',
    '🐾💖',
    '🌟💫',
    '📀💜',
    '💎🪩',
    '🐉🔥',
  ],

  tech: [
    'Neon',
    'Quantum',
    'Syntax',
    'Binary',
    'Flux',
    'Cipher',
    'Nexus',
    'Kernel',
    'Vector',
    'Pulse',
    'Pixel',
    'Lambda',
    'Fusion',
    'Glitch',
    'Nova',
    'Orbit',
    'Shadow',
    'Phantom',
    'Prime',
    'Static',
    'Meta',
    'Vortex',
    'Matrix',
    'Echo',
    'Shift',
    'Render',
    'Neural',
    'Hyper',
    'Script',
    'Gamma',
    'Infra',
    'Delta',
    'Astra',
    'Crypto',
    'Zero',
    'Nano',
    'Aura',
    'Spark',
    'Core',
    'Loop',
    'Wave',
    'Byte',
    'Portal',
    'Drift',
    'Logic',
    'Spectra',
  ],

  alphabets: [...'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'],

  binary: ['0', '1'],
};

// On theme change
select.addEventListener('change', () => {
  activeArray = themes[select.value];
});
activeArray = themes['emoji']; // default theme

//------------------------------------------------------------------

function startAction() {
  if (!activeArray.length) return;

  let index = Math.floor(Math.random() * activeArray.length);

  let p = document.createElement('p');
  p.textContent = activeArray[index];
  p.style.position = 'absolute';

  let x = Math.random() * 100;
  let y = Math.random() * 100;
  let scl = Math.random() * 3;

  let c1 = Math.random() * 255;
  let c2 = Math.random() * 255;
  let c3 = Math.random() * 255;

  p.style.left = x + '%';
  p.style.top = y + '%';
  p.style.scale = scl;
  p.style.color = `rgb(${c1},${c2},${c3})`;

  // rotation calculation
  let xFromCenter = x - 50;
  let yFromCenter = 50 - y;
  let thetaRad = Math.atan(xFromCenter / yFromCenter);
  let thetaDeg = thetaRad * (180 / Math.PI);
  if (yFromCenter < 0) thetaDeg += 180;

  p.style.rotate = thetaDeg + 'deg';
  main.appendChild(p);
}

// normal click = single emoji
btn.addEventListener('click', startAction);

//------------------------------------------------------------------
// hold feature
let holdTimer = null;
let activeInterval = null;

// Start on press
btn.addEventListener('mousedown', () => {
  holdTimer = setTimeout(() => {
    startAction();
    activeInterval = setInterval(startAction, 8);
  }, 300);
});

// Stop when released
function stopAll() {
  clearTimeout(holdTimer);
  clearInterval(activeInterval);
  holdTimer = null;
  activeInterval = null;
}

btn.addEventListener('mouseup', stopAll);
btn.addEventListener('mouseleave', stopAll);
