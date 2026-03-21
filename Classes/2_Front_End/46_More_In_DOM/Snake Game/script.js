/* Html elements */

let board = document.querySelector(".board");

let highestScoreElem = document.querySelector(".high-score");
let scoreElem = document.querySelector(".score");
let timeElem = document.querySelector(".time");

let startBtn = document.querySelector(".btn-start");
let restartBtn = document.querySelector(".btn-restart");

let modal = document.querySelector(".modal");
let startGameModal = document.querySelector(".start-game");
let gameOverModal = document.querySelector(".game-over");

/* Variables */

let boardWidth = board.clientWidth;
let boardHeight = board.clientHeight;

let blockWidth = 50;
let blockHeight = 50;

let intervalId = null;
let timeIntervalID = null;

let sec = 0;

let cols = Math.floor(boardWidth / blockWidth);
let rows = Math.floor(boardHeight / blockHeight);

let blocks = [];

let highestScore = localStorage.getItem("highestScore") || 0;
let score = 0;
let time = "00:00";

/* Logic */

highestScoreElem.textContent = highestScore;

let snake = {
  snakeSegments: [
    {
      r: 1,
      c: 5,
    },
  ],

  direction: "right",

  moveSnake: function (head) {
    snake.snakeSegments.forEach((segment) => {
      let block = blocks[`${segment.r}-${segment.c}`];
      if (block) {
        block.classList.remove("fill");
        block.classList.remove("head");
      }
    });

    snake.snakeSegments.unshift(head);
    snake.snakeSegments.pop();

    snake.snakeSegments.forEach((segment, idx) => {
      blocks[`${segment.r}-${segment.c}`].classList.add("fill");
      if (idx === 0) {
        blocks[`${segment.r}-${segment.c}`].classList.add("head");
      }
    });
  },

  resetSnake: function () {
    snake.snakeSegments.forEach((segment) => {
      blocks[`${segment.r}-${segment.c}`].classList.remove("fill");
      blocks[`${segment.r}-${segment.c}`].classList.remove("head");
    });

    let newSnake = [
      {
        r: 1,
        c: 5,
      },
    ];
    snake.snakeSegments = [...newSnake];
  },
};

let food = {
  r: Math.floor(Math.random() * rows),
  c: Math.floor(Math.random() * cols),
  create: function () {
    blocks[`${this.r}-${this.c}`].classList.remove("food");

    this.r = Math.floor(Math.random() * rows);
    this.c = Math.floor(Math.random() * cols);
    blocks[`${this.r}-${this.c}`].classList.add("food");
  },
  init: function () {
    blocks[`${this.r}-${this.c}`].classList.add("food");
  },
  check: function () {
    let status = snake.snakeSegments.find((segment) => {
      return segment.r === food.r && segment.c === food.c;
    });

    while (status) {
      food.r = Math.floor(Math.random() * rows);
      food.c = Math.floor(Math.random() * cols);
    }
  },
};

function createGrid() {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let block = document.createElement("div");
      block.classList.add("block");
      board.appendChild(block);
      blocks[`${i}-${j}`] = block;
    }
  }
}

createGrid();

function render() {
  // Food
  food.init();
  food.check();

  let head = generateNewHead();

  let collide = snake.snakeSegments.find((segment) => {
    return segment.r === head.r && segment.c === head.c;
  });

  if (head.r < 0 || head.r >= rows || head.c < 0 || head.c >= cols || collide) {
    playSound("gameOverSound");
    restartGame();
    return;
  } else {
    // Agar head food se colide kr gya to,
    if (food.r === head.r && food.c === head.c) {
      playSound("eatSound");
      updateUI();
      snake.snakeSegments.unshift(head);
      food.create();
      food.check();
    }

    snake.moveSnake(head);
  }
}

function updateUI() {
  score++;
  scoreElem.textContent = score;
  if (score > highestScore) highestScore = score;
  highestScoreElem.textContent = highestScore;
  localStorage.setItem("highestScore", highestScore.toString());
}

function generateNewHead() {
  let head = null;

  let snakeSegments = snake.snakeSegments;

  switch (snake.direction) {
    case "right":
      head = { r: snakeSegments[0].r, c: snakeSegments[0].c + 1 };
      break;
    case "left":
      head = { r: snakeSegments[0].r, c: snakeSegments[0].c - 1 };
      break;
    case "up":
      head = { r: snakeSegments[0].r - 1, c: snakeSegments[0].c };
      break;
    case "down":
      head = { r: snakeSegments[0].r + 1, c: snakeSegments[0].c };
      break;
  }

  return head;
}

startBtn.addEventListener("click", () => {
  intervalId = setInterval(() => render(), 300);

  timeIntervalID = setInterval(() => syncTime(), 1000);

  modal.style.display = "none";
  startGameModal.style.display = "none";
});

restartBtn.addEventListener("click", () => {
  snake.resetSnake();
  startBtn.click();
  modal.style.display = "none";
  gameOverModal.style.display = "none";
});

function restartGame() {
  score = 0;
  scoreElem.textContent = score;
  clearInterval(intervalId);
  clearInterval(timeIntervalID);
  snake.direction = "right";
  timeElem.textContent = "00:00";
  sec = 0;
  modal.style.display = "flex";
  gameOverModal.style.display = "flex";
}

document.addEventListener("keydown", (dets) => {
  switch (dets.key) {
    case "ArrowRight":
      snake.direction = "right";
      break;
    case "ArrowLeft":
      snake.direction = "left";
      break;
    case "ArrowUp":
      snake.direction = "up";
      break;
    case "ArrowDown":
      snake.direction = "down";
      break;
  }
});

function syncTime() {
  sec++;
  let mins = Math.floor(sec / 60);
  let secs = sec % 60;

  time = mins.toString().padStart(2, "0") + ":" + secs.toString().padStart(2, "0");
  timeElem.textContent = time;
}

const sounds = {
  eatSound: new Audio("./assets/mixkit-winning-a-coin-video-game-2069.wav"),
  gameOverSound: new Audio("./assets/universfield-game-over-deep-male-voice-clip-352695.mp3"),
};

function playSound(name) {
  const sound = sounds[name];
  if (!sound) return;

  sound.currentTime = 0;
  sound.play();
}
