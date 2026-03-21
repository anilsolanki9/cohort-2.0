let h1 = document.querySelector('h1');
let incBtn = document.querySelector('button#inc');
let decBtn = document.querySelector('button#dec');
let resetBtn = document.querySelector('button#reset');

let count = Number(localStorage.getItem('count')) || 0;

function render() {
  h1.textContent = count;
  localStorage.setItem('count', count);
}

render();

incBtn.addEventListener('click', function () {
  count++;
  render();
});

decBtn.addEventListener('click', function () {
  count--;
  render();
});

resetBtn.addEventListener('click', function () {
  count = 0;
  render();
});
