let p = document.querySelector('p');

let text = p.textContent;

let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

let iteration = 0;

p.addEventListener('mouseenter', function () {
  randomText();
});

function randomText() {
  let intr = setInterval(() => {
    let str = text
      .split('')
      .map((char, idx) => {
        if (idx < iteration) {
          return char;
        }
        return characters.split('')[Math.floor(Math.random() * 52)];
      })
      .join('');
    iteration += 0.25;
    p.textContent = str;

    if (iteration > text.length + 1) {
      iteration = 0;
      clearInterval(intr);
      return;
    }
  }, 30);
}
