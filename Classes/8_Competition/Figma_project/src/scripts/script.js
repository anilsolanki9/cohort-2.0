// Layer move btns
let moveUpBtn = document.querySelector(".move-up");
let moveDownBtn = document.querySelector(".move-down");

// Layers container
let layers = document.querySelector(".layers");

// Create element btns
let createRectBtn = document.querySelector(".add-rect");
let createTextBtn = document.querySelector(".add-text");

// Saving btns
let saveAsJsonBtn = document.querySelector(".save-json");
let saveAsHtmlBtn = document.querySelector(".save-html");

// Canvas
let canvas = document.querySelector(".canvas");

let allCanvasElements = [
  {
    id: 1,
    type: "rectangle",
    x: 150,
    y: 200,
    width: 250,
    height: 200,
    bgColor: "#3effdf",
    textContent: "",
    zIndex: 1,
  },
  {
    id: 2,
    type: "text",
    x: 200,
    y: 150,
    width: 300,
    height: 100,
    bgColor: "#624dff",
    textContent: "Welcome to the editor interface",
    zIndex: 2,
  },
  {
    id: 3,
    type: "rectangle",
    x: 50,
    y: 300,
    width: 200,
    height: 150,
    bgColor: "#7ef762",
    textContent: "",
    zIndex: 3,
  },
  {
    id: 4,
    type: "text",
    x: 400,
    y: 80,
    width: 250,
    height: 80,
    bgColor: "#f6f65f",
    textContent: "This text can be edited and styled",
    zIndex: 4,
  },
  {
    id: 5,
    type: "rectangle",
    x: 300,
    y: 250,
    width: 180,
    height: 220,
    bgColor: "#ff6e30",
    textContent: "",
    zIndex: 5,
  },
  {
    id: 6,
    type: "text",
    x: 120,
    y: 500,
    width: 280,
    height: 90,
    bgColor: "#e83ddc",
    textContent: "Final element showing text content",
    zIndex: 6,
  },
];

// Select state
let selectedElementId = null;
let currentElement = selectElement && allCanvasElements.find((elem) => elem.id == selectedElementId);

// All elements DOM element
let allElems = document.querySelectorAll(".element");

// Properties inputs
let widthInp = document.querySelector("#width");
let heightInp = document.querySelector("#height");
let colorInp = document.querySelector("#bg-color");
let textContentInp = document.querySelector("#textarea-inp");
// form-container
let formContainer = document.querySelector(".form-container");

function renderElements() {
  canvas.innerHTML = "";
  allCanvasElements.forEach((elem) => {
    const el = document.createElement("div");

    // 👉 class + id
    el.className = `element ${elem.type} ${elem.id == selectedElementId ? "selected" : ""}`;
    el.dataset.id = elem.id;

    // 👉 positioning + size
    el.style.position = "absolute";
    el.style.left = elem.x + "px";
    el.style.top = elem.y + "px";
    el.style.width = elem.width + "px";
    el.style.height = elem.height + "px";
    el.style.zIndex = elem.zIndex;
    el.style.backgroundColor = elem.bgColor;

    // 👉 text specific
    if (elem.type === "text") {
      const textDiv = document.createElement("div");
      textDiv.className = "text-content";
      textDiv.textContent = elem.textContent;
      el.appendChild(textDiv);
    }

    // 👉 outline
    const outline = document.createElement("div");
    outline.className = "outline";

    const bar = document.createElement("div");
    bar.className = "bar";

    const rotateHandle = document.createElement("div");
    rotateHandle.className = "rotate-handle";

    bar.appendChild(rotateHandle);
    outline.appendChild(bar);
    el.appendChild(outline);

    // 👉 resize handles
    ["tl", "tr", "bl", "br"].forEach((pos) => {
      const handle = document.createElement("div");
      handle.className = `${pos} handle`;
      el.appendChild(handle);
    });
    canvas.appendChild(el);
  });

  allElems = document.querySelectorAll(".element");
}

renderElements();

function renderLayersList() {
  layers.innerHTML = "";

  allCanvasElements.forEach((elem) => {
    let el = document.createElement("div");
    el.dataset.id = elem.id;
    el.classList.add("layer");

    let layerId = document.createElement("p");
    layerId.classList.add("layer-id");
    layerId.textContent = elem.id;

    let layerType = document.createElement("p");
    layerType.classList.add("layer-type");
    layerType.textContent = elem.type;

    el.appendChild(layerId);
    el.appendChild(layerType);

    layers.appendChild(el);
  });
}

renderLayersList();

canvas.addEventListener("click", (e) => {
  if (e.target.classList[0] == "canvas") {
    selectElement(null);
  } else {
    selectElement(e.target.closest(".element").dataset.id);
  }
});

function selectElement(id) {
  if (selectedElementId == id) return;
  removeIndicators();

  selectedElementId = id;

  currentElement = selectElement && allCanvasElements.find((elem) => elem.id == selectedElementId);

  console.log(selectedElementId);
  showIndicators();

  if (selectedElementId) {
    updatePropertiesPenal();
  }
}

function removeIndicators() {
  let allElems = document.querySelectorAll(`[data-id]`);
  allElems.forEach((elem) => elem.classList.remove("selected"));
}

function showIndicators() {
  if (!selectedElementId) return;

  const selElem = document.querySelector(`.element[data-id="${selectedElementId}"]`);
  const listItem = document.querySelector(`.layer[data-id="${selectedElementId}"]`);

  if (selElem) {
    selElem.classList.add("selected");
    listItem.classList.add("selected");
  }
}

function updatePropertiesPenal() {
  if (selectedElementId) formContainer.classList.add("selected");
  else formContainer.classList.remove("selected");

  widthInp.value = currentElement.width;
  heightInp.value = currentElement.height;
  colorInp.value = currentElement.bgColor;
  textContentInp.value = currentElement.textContent;
}

function enableForm() {
  widthInp.addEventListener("input", (e) => {
    if (!selectedElementId) return;

    updateElement(selectedElementId, {
      width: Number(e.target.value),
    });
  });

  heightInp.addEventListener("input", (e) => {
    if (!selectedElementId) return;

    updateElement(selectedElementId, {
      height: Number(e.target.value),
    });
  });

  colorInp.addEventListener("input", (e) => {
    if (!selectedElementId) return;

    updateElement(selectedElementId, {
      bgColor: e.target.value,
    });
  });

  textContentInp.addEventListener("input", (e) => {
    if (!selectedElementId) return;

    updateElement(selectedElementId, {
      textContent: e.target.value,
    });
  });
}

enableForm();

function updateElement(id, updates) {
  const elem = allCanvasElements.find((el) => el.id == id);

  if (!elem) return;

  Object.assign(elem, updates);
  syncElementToDOM(elem);
  renderElements();
}

function syncElementToDOM(elem) {
  const el = document.querySelector(`.element[data-id='${elem.id}']`);

  if (!el) return;

  el.style.width = elem.width + "px";
  el.style.height = elem.height + "px";
  el.style.left = elem.x + "px";
  el.style.top = elem.y + "px";
  el.style.backgroundColor = el.bgColor;

  if (elem.type == "text") {
    const text = el.querySelector(".text-content");
    if (text) text.textContent = elem.textContent;
  }
}


