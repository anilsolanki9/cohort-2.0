let main = document.querySelector('main');
let btn = document.querySelector('button');

const techWords = [
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
  'Quantum',
  'Wave',
  'Byte',
  'Portal',
  'Drift',
  'Pixelate',
  'Logic',
  'PulseCore',
  'Spectra',
];

const emojies = [
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
  '🦋🌈',
  '🐼🤍',
  '🌸💞',
  '🫧💎',
  '🍭🌈',
  '🎧💜',
  '💖🦄',
  '🌙💎',
  '💗🫶',
  '🦊🌟',
  '🌈🧸',
  '💫🧿',
  '🍓💖',
  '🌊🐬',
  '🌟💎',
  '🌸🦋',
  '🔥💜',
  '💖🐰',
  '🧋💫',
  '🥤💙',
  '🎀💘',
  '🪩✨',
  '⭐💜',
  '💎✨',
  '🧿💙',
  '🪻💮',
  '🌠💫',
  '💞🌈',
  '🍥💖',
  '🍩💗',
  '💮💜',
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
  '🌼💗',
  '🌟💫',
  '🍀✨',
  '📀💜',
  '💎🪩',
  '🐉🔥',
];

const alphabets = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

const binary = ['0', '1'];

function startAction() {
  let index = Math.floor(Math.random() * emojies.length);
  let p = document.createElement('p');
  p.textContent = emojies[index];
  p.style.position = 'absolute';

  let x = Math.floor(Math.random() * 100);
  let y = Math.floor(Math.random() * 100);
  let scl = Math.floor(Math.random() * 3);
  //extra style
  // let rot = Math.floor(Math.random() * 360);
  let c1 = Math.floor(Math.random() * 256);
  let c2 = Math.floor(Math.random() * 256);
  let c3 = Math.floor(Math.random() * 256);

  p.style.left = x + '%';
  p.style.top = y + '%';
  p.style.scale = scl;
  p.style.color = `rgb(${c1},${c2},${c3})`;
  //normal rotation
  // p.style.rotate = `${rot}deg`;

  //rotation algorithm
  let xFromCenter = x - 50;
  let yFromCenter = 50 - y;
  let thetaRad = Math.atan(xFromCenter / yFromCenter);
  let thetaDeg = thetaRad * (180 / Math.PI);
  if (yFromCenter < 0) {
    p.style.rotate = `${thetaDeg + 180}deg`;
  } else {
    p.style.rotate = `${thetaDeg}deg`;
  }

  main.appendChild(p);
}

btn.addEventListener('click', startAction);

/* -------------------------------------------------------------------------- */
//new hold btn feature
let holdTimer = null;
let activeInterval = null;

// Start when button is pressed
btn.addEventListener('mousedown', () => {
  // Start 2s hold check
  holdTimer = setTimeout(() => {
    startAction(); // run once after 2s
    // start continuous loop after activation
    activeInterval = setInterval(startAction, 5);
  }, 300);
});

function stopAll() {
  clearTimeout(holdTimer);
  clearInterval(activeInterval);
  holdTimer = null;
  activeInterval = null;
}

btn.addEventListener('mouseup', stopAll);
btn.addEventListener('mouseleave', stopAll);
