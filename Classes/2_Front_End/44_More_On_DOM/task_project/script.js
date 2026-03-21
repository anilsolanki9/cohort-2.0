let select = document.querySelector(".select");
let selected = document.querySelector(".selected");
let options = document.querySelector(".options");
let content = document.querySelector(".content");
let btn = document.querySelector("button");

let isSelectOpen = false;

let timer = 0;

let elements = {
  emojis: ["🔥", "⚡", "💥", "🌈", "🎯", "🚀", "💎", "🌟", "🎉", "🦋", "🌊", "🍀", "🎸", "🦄", "🌙", "☀️", "🍭", "🎭", "🏆", "💫", "🌺", "🎪", "🦊", "🐉", "🌸", "💜", "🎨", "🔮", "🍄", "🦁"],
  binary: ["0", "1"],
  alphabets: [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ],
  techWords: [
    "null",
    "undefined",
    "boolean",
    "string",
    "integer",
    "float",
    "array",
    "object",
    "function",
    "class",
    "module",
    "import",
    "export",
    "async",
    "await",
    "promise",
    "callback",
    "closure",
    "prototype",
    "iterator",
    "generator",
    "recursion",
    "algorithm",
    "compile",
    "runtime",
    "syntax",
    "debug",
    "deploy",
    "render",
    "fetch",
    "cache",
    "cookie",
    "token",
    "payload",
    "endpoint",
    "API",
    "REST",
    "JSON",
    "XML",
    "HTTP",
    "HTTPS",
    "TCP",
    "IP",
    "DNS",
    "SSL",
    "SSH",
    "Git",
    "Docker",
    "kernel",
    "daemon",
    "thread",
    "mutex",
    "socket",
    "binary",
    "hex",
    "byte",
    "RAM",
    "CPU",
    "GPU",
    "CLI",
    "IDE",
    "regex",
    "enum",
    "stack",
    "queue",
    "heap",
    "tree",
    "graph",
    "hash",
    "loop",
    "index",
    "pointer",
    "malloc",
    "struct",
    "typedef",
    "lambda",
    "pragma",
    "buffer",
    "bitwise",
    "compiler",
    "linker",
    "parser",
    "lexer",
    "minify",
    "bundler",
    "webpack",
    "babel",
    "npm",
    "yarn",
    "pip",
    "sudo",
    "chmod",
    "bash",
    "shell",
    "terminal",
    "grep",
    "curl",
    "ping",
    "localhost",
    "port",
    "router",
    "proxy",
    "firewall",
    "latency",
    "throughput",
    "bandwidth",
    "encryption",
    "hash",
    "SHA",
    "RSA",
    "OAuth",
    "JWT",
    "CRUD",
    "MVC",
    "OOP",
    "DRY",
    "SOLID",
  ],
};
let myElementsArray = elements["binary"];

select.addEventListener("click", (dets) => {
  if (dets.target.className !== "selected") {
    selected.textContent = dets.target.textContent;
    myElementsArray = elements[dets.target.id];
  }
  options.classList.toggle("visible");
  isSelectOpen ? (isSelectOpen = false) : (isSelectOpen = true);

  clearTimeout(timer);
  timer = setTimeout(() => {
    options.classList.remove("visible");
    isSelectOpen = false;
  }, 3000);
});

window.addEventListener("click", (dets) => {
  if (dets.target.className == "features" && isSelectOpen) {
    isSelectOpen = false;
    options.classList.toggle("visible");
  }
});

btn.addEventListener("click", () => {
  let idx = Math.floor(Math.random() * myElementsArray.length);
  let x = Math.random() * 100; // coordinate of x in %
  let y = Math.random() * 100; // coordinate of y in %
  let c1 = Math.floor(Math.random() * 256);
  let c2 = Math.floor(Math.random() * 256);
  let c3 = Math.floor(Math.random() * 256);
  let rot = Math.random() * 360; // rotation
  let scl = Math.random() * 4; // scale
  let h1 = document.createElement("h1");
  h1.textContent = myElementsArray[idx];
  h1.style.top = y + "%";
  h1.style.left = x + "%";
  h1.style.color = `rgb(${c1}, ${c2} , ${c3} )`;
  h1.style.rotate = rot + "deg";
  h1.style.scale = scl;

  content.appendChild(h1);
});
