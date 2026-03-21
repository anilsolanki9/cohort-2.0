/* ============================================
   DOM ELEMENTS
   ============================================ */
const board          = document.querySelector(".board");
const highestScoreElems = document.querySelectorAll(".high-score");
const scoreElems     = document.querySelectorAll(".score");
const timeElems      = document.querySelectorAll(".time");

const startBtn       = document.querySelector(".btn-start");
const restartBtn     = document.querySelector(".btn-restart");

const modal          = document.querySelector(".modal");
const startGameModal = document.querySelector(".start-game");
const gameOverModal  = document.querySelector(".game-over");
const newRecordBadge = document.querySelector(".new-record");

/* ============================================
   VARIABLES
   ============================================ */
let boardWidth  = board.clientWidth;
let boardHeight = board.clientHeight;

const blockSize = 50;

let intervalId     = null;
let timeIntervalID = null;
let sec            = 0;

let cols = Math.floor(boardWidth  / blockSize);
let rows = Math.floor(boardHeight / blockSize);

let blocks = {};

let highestScore = Number(localStorage.getItem("highestScore")) || 0;
let score        = 0;

/* ============================================
   INIT DISPLAY
   ============================================ */
updateAllScoreDisplays();

/* ============================================
   SNAKE
   ============================================ */
const snake = {
  snakeSegments: [{ r: 1, c: 5 }],
  direction: "right",
  nextDirection: "right",

  moveSnake(head) {
    this.snakeSegments.forEach(seg => {
      const block = blocks[`${seg.r}-${seg.c}`];
      if (block) {
        block.classList.remove("fill", "head");
      }
    });

    this.snakeSegments.unshift(head);
    this.snakeSegments.pop();

    this.snakeSegments.forEach((seg, idx) => {
      const block = blocks[`${seg.r}-${seg.c}`];
      if (block) {
        block.classList.add("fill");
        if (idx === 0) block.classList.add("head");
      }
    });
  },

  resetSnake() {
    this.snakeSegments.forEach(seg => {
      const block = blocks[`${seg.r}-${seg.c}`];
      if (block) block.classList.remove("fill", "head");
    });
    this.snakeSegments = [{ r: 1, c: 5 }];
    this.direction     = "right";
    this.nextDirection = "right";
  },

  grow(head) {
    this.snakeSegments.forEach(seg => {
      const block = blocks[`${seg.r}-${seg.c}`];
      if (block) block.classList.remove("head");
    });

    this.snakeSegments.unshift(head);

    this.snakeSegments.forEach((seg, idx) => {
      const block = blocks[`${seg.r}-${seg.c}`];
      if (block) {
        block.classList.add("fill");
        if (idx === 0) block.classList.add("head");
      }
    });
  },
};

/* ============================================
   FOOD
   ============================================ */
const food = {
  r: Math.floor(Math.random() * rows),
  c: Math.floor(Math.random() * cols),

  place() {
    this._clearConflicts();
    const block = blocks[`${this.r}-${this.c}`];
    if (block) block.classList.add("food");
  },

  reposition() {
    const block = blocks[`${this.r}-${this.c}`];
    if (block) block.classList.remove("food");
    this.r = Math.floor(Math.random() * rows);
    this.c = Math.floor(Math.random() * cols);
    this._clearConflicts();
    const newBlock = blocks[`${this.r}-${this.c}`];
    if (newBlock) newBlock.classList.add("food");
  },

  _clearConflicts() {
    let onSnake = snake.snakeSegments.some(s => s.r === this.r && s.c === this.c);
    let tries = 0;
    while (onSnake && tries < 100) {
      this.r = Math.floor(Math.random() * rows);
      this.c = Math.floor(Math.random() * cols);
      onSnake = snake.snakeSegments.some(s => s.r === this.r && s.c === this.c);
      tries++;
    }
  },
};

/* ============================================
   GRID
   ============================================ */
function createGrid() {
  board.innerHTML = "";
  blocks = {};
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const block = document.createElement("div");
      block.classList.add("block");
      board.appendChild(block);
      blocks[`${i}-${j}`] = block;
    }
  }
}

createGrid();

/* ============================================
   GAME LOOP
   ============================================ */
function render() {
  // Commit buffered direction
  snake.direction = snake.nextDirection;

  const head = generateNewHead();

  const hitWall  = head.r < 0 || head.r >= rows || head.c < 0 || head.c >= cols;
  const hitSelf  = snake.snakeSegments.some(s => s.r === head.r && s.c === head.c);

  if (hitWall || hitSelf) {
    playSound("gameOverSound");
    triggerGameOver();
    return;
  }

  if (food.r === head.r && food.c === head.c) {
    playSound("eatSound");
    updateScore();
    snake.grow(head);
    food.reposition();
  } else {
    snake.moveSnake(head);
  }
}

function generateNewHead() {
  const { r, c } = snake.snakeSegments[0];
  switch (snake.direction) {
    case "right": return { r,     c: c + 1 };
    case "left":  return { r,     c: c - 1 };
    case "up":    return { r: r - 1, c };
    case "down":  return { r: r + 1, c };
  }
}

/* ============================================
   SCORE
   ============================================ */
function updateScore() {
  score++;
  const isNewRecord = score > highestScore;
  if (isNewRecord) highestScore = score;
  localStorage.setItem("highestScore", highestScore.toString());
  updateAllScoreDisplays();

  // Pop animation on score chip
  const scoreChip = document.querySelector(".stat-chip--score .stat-value");
  scoreChip.classList.remove("score-pop");
  void scoreChip.offsetWidth; // reflow
  scoreChip.classList.add("score-pop");
}

function updateAllScoreDisplays() {
  scoreElems.forEach(el => el.textContent = score);
  highestScoreElems.forEach(el => el.textContent = highestScore);
}

/* ============================================
   TIME
   ============================================ */
function syncTime() {
  sec++;
  const mins = Math.floor(sec / 60);
  const secs = sec % 60;
  const timeStr = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  timeElems.forEach(el => el.textContent = timeStr);
}

/* ============================================
   GAME FLOW
   ============================================ */
function startGame() {
  clearIntervals();
  intervalId     = setInterval(render,    200);
  timeIntervalID = setInterval(syncTime, 1000);
}

function triggerGameOver() {
  clearIntervals();
  const isNewRecord = score >= highestScore && score > 0;
  newRecordBadge.style.display = isNewRecord ? "block" : "none";
  modal.style.display          = "flex";
  gameOverModal.style.display  = "flex";
  startGameModal.style.display = "none";
}

function clearIntervals() {
  clearInterval(intervalId);
  clearInterval(timeIntervalID);
}

/* ============================================
   BUTTON HANDLERS
   ============================================ */
startBtn.addEventListener("click", () => {
  food.place();
  startGame();
  modal.style.display          = "none";
  startGameModal.style.display = "none";
});

restartBtn.addEventListener("click", () => {
  // Reset state
  score = 0;
  sec   = 0;
  updateAllScoreDisplays();
  timeElems.forEach(el => el.textContent = "00:00");

  snake.resetSnake();
  food.reposition();
  startGame();

  modal.style.display          = "none";
  gameOverModal.style.display  = "none";
});

/* ============================================
   KEYBOARD INPUT
   ============================================ */
const OPPOSITES = { right: "left", left: "right", up: "down", down: "up" };

document.addEventListener("keydown", e => {
  const map = {
    ArrowRight: "right", ArrowLeft: "left", ArrowUp: "up", ArrowDown: "down",
    KeyD: "right", KeyA: "left", KeyW: "up", KeyS: "down",
    d: "right", a: "left", w: "up", s: "down",
  };

  const newDir = map[e.code] || map[e.key];
  if (!newDir) return;

  // Prevent reversing
  if (newDir !== OPPOSITES[snake.direction]) {
    snake.nextDirection = newDir;
  }

  // Prevent page scroll
  if (["ArrowRight","ArrowLeft","ArrowUp","ArrowDown"].includes(e.key)) {
    e.preventDefault();
  }
});

/* ============================================
   SOUNDS
   ============================================ */
const sounds = {
  eatSound:      new Audio("./assets/mixkit-winning-a-coin-video-game-2069.wav"),
  gameOverSound: new Audio("./assets/universfield-game-over-deep-male-voice-clip-352695.mp3"),
};

function playSound(name) {
  const sound = sounds[name];
  if (!sound) return;
  sound.currentTime = 0;
  sound.play().catch(() => {}); // ignore autoplay block
}

/* ============================================
   RESIZE HANDLING
   ============================================ */
window.addEventListener("resize", () => {
  boardWidth  = board.clientWidth;
  boardHeight = board.clientHeight;
  const newCols = Math.floor(boardWidth  / blockSize);
  const newRows = Math.floor(boardHeight / blockSize);
  if (newCols !== cols || newRows !== rows) {
    cols = newCols;
    rows = newRows;
    clearIntervals();
    createGrid();
    snake.resetSnake();
    food.r = Math.floor(Math.random() * rows);
    food.c = Math.floor(Math.random() * cols);
    modal.style.display          = "flex";
    startGameModal.style.display = "flex";
    gameOverModal.style.display  = "none";
  }
});
