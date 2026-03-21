let main = document.querySelector('main');

for (let i = 1; i < 100; i++) {
  setTimeout(() => {
    createLine(i);
  }, 300);
}

let left = 0;

function createLine(i) {
  let div = document.createElement('div');
  div.classList.add('line');
  div.classList.add(`line${i}`);
  while (left !== Math.floor(Math.random() * main.clientWidth) + 'px') {
    div.style.left = Math.floor(Math.random() * main.clientWidth) + 'px';
    left = Math.floor(Math.random() * main.clientWidth) + 'px';
  }
  main.appendChild(div);
  createBinary(i);
}

function createBinary(i) {
  setInterval(() => {
    let childDiv = document.createElement('div');
    childDiv.textContent = Math.floor(Math.random() * 2);
    document.querySelector(`.line${i}`).prepend(childDiv);
  }, 210);
}
