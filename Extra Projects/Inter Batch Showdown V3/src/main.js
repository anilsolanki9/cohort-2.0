let currentPage = "page-1";
let pages = {
  "page-1": {
    name: "Page 1",
    elements: [],
  },
};

let selectedElementId = null;
let isDragging = false;
let isResizing = false;
let currentResizeHandle = null;
let dragStartX = 0;
let dragStartY = 0;
let elementStartX = 0;
let elementStartY = 0;
let elementStartWidth = 0;
let elementStartHeight = 0;
let elementCounter = { rectangle: 0, circle: 0, text: 0 };

const MIN_SIZE = 40;

// ===========================
// DOM REFERENCES
// ===========================

const canvas = document.getElementById("canvas");
const layersList = document.querySelector(".layers-list");
const pagesList = document.querySelector(".pages-section .items-list");
const projectTitleInput = document.getElementById("projectTitle");

// Property panel inputs
const posXInput = document.querySelector("#posX");
const posYInput = document.querySelector("#posY");
const rotationInput = document.querySelector("#rotation");
const widthInput = document.querySelector("#width");
const heightInput = document.querySelector("#height");
const elemOpacityInput = document.querySelector("#elemOpacity");
const cornerRadiusInput = document.querySelector("#cornerRadius");
const bgColorInput = document.querySelector("#fillColor");
const bgColorTextInput = document.querySelector("#bgColorText");
const bgOpacityInput = document.querySelector("#bgOpacity");
const textColorInput = document.querySelector("#textColor");
const textColorTextInput = document.querySelector("#textColorText");
const textOpacityInput = document.querySelector("#textOpacity");
const textContentTextarea = document.querySelector("#textArea");

// Buttons
const layerUpBtn = document.querySelector(".layer-up-btn");
const layerDownBtn = document.querySelector(".layer-down-btn");
const addPageBtn = document.querySelector(".add-page-btn");
const rotate90Btn = document.querySelector("#rotate90Btn");
const rotate45Btn = document.querySelector("#rotate45Btn");
const exportHTMLBtn = document.querySelector("#exportHtml");
const exportJSONBtn = document.querySelector("#exportJson");

// Dock items
const rectangleBtn = document.querySelector("#CreateRectBtn");
const circleBtn = document.querySelector("#CreateCircleBtn");
const textBtn = document.querySelector("#createTextBtn");

// ===========================
// INITIALIZATION
// ===========================

function init() {
  loadFromLocalStorage();
  renderPages();
  loadPage(currentPage);
  setupEventListeners();
}

// ===========================
// LOCAL STORAGE
// ===========================

function saveToLocalStorage() {
  // Save current page elements before saving
  if (currentPage && pages[currentPage]) {
    pages[currentPage].elements = getCurrentElements();
  }

  localStorage.setItem("designEditorPages", JSON.stringify(pages));
  localStorage.setItem("designEditorCurrentPage", currentPage);
  localStorage.setItem("designEditorCounters", JSON.stringify(elementCounter));

  // Save project title
  if (projectTitleInput) {
    localStorage.setItem("designEditorProjectTitle", projectTitleInput.value);
  }
}

function loadFromLocalStorage() {
  const savedPages = localStorage.getItem("designEditorPages");
  const savedCurrentPage = localStorage.getItem("designEditorCurrentPage");
  const savedCounters = localStorage.getItem("designEditorCounters");
  const savedProjectTitle = localStorage.getItem("designEditorProjectTitle");

  if (savedPages) {
    pages = JSON.parse(savedPages);
  }
  if (savedCurrentPage) {
    currentPage = savedCurrentPage;
  }
  if (savedCounters) {
    elementCounter = JSON.parse(savedCounters);
  }
  if (savedProjectTitle && projectTitleInput) {
    projectTitleInput.value = savedProjectTitle;
  }
}

// ===========================
// PAGE MANAGEMENT
// ===========================

function renderPages() {
  pagesList.innerHTML = "";
  const pageKeys = Object.keys(pages);

  pageKeys.forEach(pageId => {
    const pageItem = document.createElement("div");
    pageItem.className = "page-item";
    pageItem.dataset.pageId = pageId;
    if (pageId === currentPage) {
      pageItem.style.background = "#383838";
    }
    pageItem.innerHTML = `<p>${pages[pageId].name}</p>`;
    pageItem.addEventListener("click", () => loadPage(pageId));
    pagesList.appendChild(pageItem);
  });
}

function loadPage(pageId) {
  // Save current page before switching
  if (currentPage && pages[currentPage]) {
    pages[currentPage].elements = getCurrentElements();
  }

  currentPage = pageId;
  selectedElementId = null;
  canvas.innerHTML = "";

  if (pages[pageId] && pages[pageId].elements) {
    pages[pageId].elements.forEach(elementData => {
      createElementFromData(elementData);
    });
  }

  renderPages();
  renderLayers();
  updatePropertiesPanel();
  saveToLocalStorage();
}

function createNewPage() {
  const pageCount = Object.keys(pages).length + 1;
  const newPageId = `page-${pageCount}`;
  pages[newPageId] = {
    name: `Page ${pageCount}`,
    elements: [],
  };
  loadPage(newPageId);
}

// ===========================
// ELEMENT CREATION
// ===========================

function createElement(type) {
  elementCounter[type]++;

  const element = document.createElement("div");
  const elementId = `${type}-${Date.now()}`;
  element.id = elementId;
  element.className = `box`;
  element.classList.add(
    `${type === "text" ? "text-box" : type === "circle" ? "circle-box" : "rectangle-box"}`
  );
  if (type === "rectangle") {
    element.classList.add("rectangle-box");
  }
  element.dataset.type = type;
  element.dataset.name = `${type.charAt(0).toUpperCase() + type.slice(1)} ${elementCounter[type]}`;
  element.dataset.locked = "false";
  element.dataset.visible = "true";

  // Get current number of elements for z-index
  const currentZIndex = canvas.children.length;

  const defaultProps = {
    x: `${type === "circle" ? 100 : type === "text" ? 200 : 300}`,
    y: `${type === "circle" ? 100 : type === "text" ? 200 : 300}`,
    width: 150,
    height: 150,
    angle: 0,
    elemOpacity: 100,
    cornerRadius: type === "circle" ? 0 : type === "text" ? 10 : 0,
    bgColor:
      type === "rectangle"
        ? "#4f46e5"
        : type === "circle"
          ? "#22c55e"
          : "#0091ff",
    bgOpacity: 100,
    textColor: "#ffffff",
    textOpacity: 100,
    textContent: type === "text" ? "Text" : "",
    zIndex: currentZIndex,
  };

  applyStylesToElement(element, defaultProps);

  if (type === "text") {
    element.textContent = defaultProps.textContent;
  }

  canvas.appendChild(element);
  selectElement(elementId);
  renderLayers();
  saveToLocalStorage();
}

function createElementFromData(data) {
  const element = document.createElement("div");
  element.id = data.id;
  element.className = `box ${data.type === "text" ? "text-box" : data.type === "circle" ? "circle-box" : "rectangle-box"}`;
  element.dataset.type = data.type;
  element.dataset.name =
    data.name || `${data.type} ${elementCounter[data.type]}`;
  element.dataset.locked = String(data.locked || false);
  element.dataset.visible = String(data.visible !== false);

  applyStylesToElement(element, data);

  if (data.type === "text") {
    element.textContent = data.textContent || "Text";
  }

  canvas.appendChild(element);
}

function applyStylesToElement(element, props) {
  element.style.left = `${props.x}px`;
  element.style.top = `${props.y}px`;
  element.style.width = `${props.width}px`;
  element.style.height = `${props.height}px`;
  element.style.transform = `rotate(${props.angle}deg)`;
  element.style.opacity = props.elemOpacity / 100;

  // Apply border radius based on type
  if (element.dataset.type === "circle" || props.type === "circle") {
    element.style.borderRadius = "50%";
  } else {
    element.style.borderRadius = `${props.cornerRadius}px`;
  }

  element.style.zIndex = props.zIndex || 0;

  // Background color with opacity
  const bgColor = (props.bgColor || "#000000").replace("#", "");
  const r = parseInt(bgColor.substr(0, 2), 16) || 0;
  const g = parseInt(bgColor.substr(2, 2), 16) || 0;
  const b = parseInt(bgColor.substr(4, 2), 16) || 0;
  element.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${props.bgOpacity / 100})`;

  // Text color with opacity
  if (element.dataset.type === "text" || props.type === "text") {
    const textColor = (props.textColor || "#ffffff").replace("#", "");
    const tr = parseInt(textColor.substr(0, 2), 16) || 255;
    const tg = parseInt(textColor.substr(2, 2), 16) || 255;
    const tb = parseInt(textColor.substr(4, 2), 16) || 255;
    element.style.color = `rgba(${tr}, ${tg}, ${tb}, ${props.textOpacity / 100})`;
  }

  // Visibility
  if (props.visible === false) {
    element.style.display = "none";
  } else {
    element.style.display = element.dataset.type === "text" ? "flex" : "block";
  }
}

// ===========================
// SELECTION
// ===========================

function selectElement(elementId) {
  // Remove all handles first
  removeAllHandles();

  // Remove previous selection
  document
    .querySelectorAll(".box")
    .forEach(el => el.classList.remove("selected"));

  selectedElementId = elementId;
  const element = document.getElementById(elementId);

  if (element) {
    element.classList.add("selected");
    addHandlesToElement(element);
    updatePropertiesPanel();
    highlightLayer(elementId);
  }
}

function deselectElement() {
  removeAllHandles();
  document
    .querySelectorAll(".box")
    .forEach(el => el.classList.remove("selected"));
  selectedElementId = null;
  updatePropertiesPanel();
  removeLayerHighlight();
}

function removeAllHandles() {
  document.querySelectorAll(".handle").forEach(handle => handle.remove());
}

function addHandlesToElement(element) {
  // Remove any existing handles first
  element.querySelectorAll(".handle").forEach(h => h.remove());

  ["tl", "tr", "bl", "br"].forEach(pos => {
    const handle = document.createElement("div");
    handle.className = `handle ${pos}`;
    handle.dataset.handle = pos;
    element.appendChild(handle);
  });
}

function highlightLayer(elementId) {
  document.querySelectorAll(".layer-item").forEach(item => {
    if (item.dataset.elementId === elementId) {
      item.style.background = "#383838";
    } else {
      item.style.background = "";
    }
  });
}

function removeLayerHighlight() {
  document.querySelectorAll(".layer-item").forEach(item => {
    item.style.background = "";
  });
}

// ===========================
// LAYERS PANEL
// ===========================

function renderLayers() {
  layersList.innerHTML = "";
  const elements = Array.from(canvas.querySelectorAll(".box"));

  // Sort elements by z-index (highest first)
  elements.sort((a, b) => {
    const zIndexA = parseInt(a.style.zIndex) || 0;
    const zIndexB = parseInt(b.style.zIndex) || 0;
    return zIndexB - zIndexA;
  });

  elements.forEach(element => {
    const layerItem = document.createElement("div");
    layerItem.className = "layer-item";
    layerItem.dataset.elementId = element.id;

    const type = element.dataset.type;
    const iconSrc =
      type === "rectangle"
        ? "./dock-icons/rectangle.svg"
        : type === "circle"
          ? "./dock-icons/circle.svg"
          : "./dock-icons/text.svg";

    const isLocked = element.dataset.locked === "true";
    const isVisible = element.dataset.visible !== "false";

    layerItem.innerHTML = `
      <div class="item-left">
        <img loading="lazy" src="${iconSrc}" alt="" />
        <p>${element.dataset.name}</p>
      </div>
      <div class="item-right">
        <div class="icon-btn lock-btn" style="opacity: ${isLocked ? 1 : ""}">
          <img loading="lazy" src="./left-aside-icons/${isLocked ? "lock" : "unlock"}.svg" alt="" />
        </div>
        <div class="icon-btn eye-btn" style="opacity: ${!isVisible ? 1 : ""}">
          <img loading="lazy" src="./left-aside-icons/${isVisible ? "eye-open" : "eye-closed"}.svg" alt="" />
        </div>
      </div>
    `;

    layerItem.querySelector(".item-left").addEventListener("click", e => {
      e.stopPropagation();
      selectElement(element.id);
    });

    layerItem.querySelector(".lock-btn").addEventListener("click", e => {
      e.stopPropagation();
      toggleLock(element.id);
    });

    layerItem.querySelector(".eye-btn").addEventListener("click", e => {
      e.stopPropagation();
      toggleVisibility(element.id);
    });

    layersList.appendChild(layerItem);
  });

  if (selectedElementId) {
    highlightLayer(selectedElementId);
  }
}

function toggleLock(elementId) {
  const element = document.getElementById(elementId);
  const isLocked = element.dataset.locked === "true";
  element.dataset.locked = String(!isLocked);
  renderLayers();
  saveToLocalStorage();
}

function toggleVisibility(elementId) {
  const element = document.getElementById(elementId);
  const isVisible = element.dataset.visible !== "false";
  element.dataset.visible = String(!isVisible);

  if (isVisible) {
    element.style.display = "none";
  } else {
    element.style.display = element.dataset.type === "text" ? "flex" : "block";
  }

  renderLayers();
  saveToLocalStorage();
}

function moveLayerUp() {
  if (!selectedElementId) return;

  const elements = Array.from(canvas.querySelectorAll(".box"));
  const selectedElement = document.getElementById(selectedElementId);

  // Sort by z-index to get proper order
  elements.sort((a, b) => {
    const zIndexA = parseInt(a.style.zIndex) || 0;
    const zIndexB = parseInt(b.style.zIndex) || 0;
    return zIndexA - zIndexB;
  });

  const currentIndex = elements.indexOf(selectedElement);

  // Move up means increase z-index (swap with next higher element)
  if (currentIndex < elements.length - 1) {
    const currentZ = parseInt(selectedElement.style.zIndex) || 0;
    const nextElement = elements[currentIndex + 1];
    const nextZ = parseInt(nextElement.style.zIndex) || 0;

    selectedElement.style.zIndex = nextZ;
    nextElement.style.zIndex = currentZ;

    renderLayers();
    saveToLocalStorage();
  }
}

function moveLayerDown() {
  if (!selectedElementId) return;

  const elements = Array.from(canvas.querySelectorAll(".box"));
  const selectedElement = document.getElementById(selectedElementId);

  // Sort by z-index to get proper order
  elements.sort((a, b) => {
    const zIndexA = parseInt(a.style.zIndex) || 0;
    const zIndexB = parseInt(b.style.zIndex) || 0;
    return zIndexA - zIndexB;
  });

  const currentIndex = elements.indexOf(selectedElement);

  // Move down means decrease z-index (swap with next lower element)
  if (currentIndex > 0) {
    const currentZ = parseInt(selectedElement.style.zIndex) || 0;
    const prevElement = elements[currentIndex - 1];
    const prevZ = parseInt(prevElement.style.zIndex) || 0;

    selectedElement.style.zIndex = prevZ;
    prevElement.style.zIndex = currentZ;

    renderLayers();
    saveToLocalStorage();
  }
}

// ===========================
// PROPERTIES PANEL
// ===========================

function updatePropertiesPanel() {
  if (!selectedElementId) {
    clearPropertiesPanel();
    return;
  }

  const element = document.getElementById(selectedElementId);
  if (!element) return;

  if (posXInput) posXInput.value = parseInt(element.style.left) || 0;
  if (posYInput) posYInput.value = parseInt(element.style.top) || 0;

  const transform = element.style.transform;
  const angle = transform.match(/rotate\(([^)]+)deg\)/)?.[1] || 0;
  if (rotationInput) rotationInput.value = `${angle}°`;

  if (widthInput) widthInput.value = `${parseInt(element.style.width)}px`;
  if (heightInput) heightInput.value = `${parseInt(element.style.height)}px`;

  if (elemOpacityInput)
    elemOpacityInput.value = `${Math.round(parseFloat(element.style.opacity || 1) * 100)}%`;

  // Corner radius - don't show for circles
  if (cornerRadiusInput) {
    if (element.dataset.type === "circle") {
      cornerRadiusInput.value = 0;
    } else {
      cornerRadiusInput.value = parseInt(element.style.borderRadius) || 0;
    }
  }

  const bgColor = rgbaToHex(element.style.backgroundColor);
  if (bgColorInput) bgColorInput.value = bgColor.hex;
  if (bgColorTextInput) bgColorTextInput.value = bgColor.hex.replace("#", "");
  if (bgOpacityInput) bgOpacityInput.value = `${bgColor.opacity}%`;

  if (element.dataset.type === "text") {
    const textColor = rgbaToHex(element.style.color);
    if (textColorInput) textColorInput.value = textColor.hex;
    if (textColorTextInput)
      textColorTextInput.value = textColor.hex.replace("#", "");
    if (textOpacityInput) textOpacityInput.value = `${textColor.opacity}%`;
    if (textContentTextarea) textContentTextarea.value = element.textContent;
  }
}

function clearPropertiesPanel() {
  if (posXInput) posXInput.value = "";
  if (posYInput) posYInput.value = "";
  if (rotationInput) rotationInput.value = "";
  if (widthInput) widthInput.value = "";
  if (heightInput) heightInput.value = "";
  if (elemOpacityInput) elemOpacityInput.value = "";
  if (cornerRadiusInput) cornerRadiusInput.value = "";
  if (bgColorTextInput) bgColorTextInput.value = "";
  if (bgOpacityInput) bgOpacityInput.value = "";
  if (textColorTextInput) textColorTextInput.value = "";
  if (textOpacityInput) textOpacityInput.value = "";
  if (textContentTextarea) textContentTextarea.value = "";
}

function rgbaToHex(rgba) {
  if (!rgba) return { hex: "#000000", opacity: 100 };

  const match = rgba.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
  if (!match) return { hex: "#000000", opacity: 100 };

  const r = parseInt(match[1]).toString(16).padStart(2, "0");
  const g = parseInt(match[2]).toString(16).padStart(2, "0");
  const b = parseInt(match[3]).toString(16).padStart(2, "0");
  const opacity = match[4] ? Math.round(parseFloat(match[4]) * 100) : 100;

  return { hex: `#${r}${g}${b}`, opacity };
}

function updateElementProperty(property, value) {
  if (!selectedElementId) return;

  const element = document.getElementById(selectedElementId);
  if (!element || element.dataset.locked === "true") return;

  switch (property) {
    case "x":
      const maxX = canvas.offsetWidth - element.offsetWidth;
      element.style.left = `${Math.max(0, Math.min(maxX, value))}px`;
      break;
    case "y":
      const maxY = canvas.offsetHeight - element.offsetHeight;
      element.style.top = `${Math.max(0, Math.min(maxY, value))}px`;
      break;
    case "width":
      const newWidth = Math.max(MIN_SIZE, value);
      const maxWidthAtCurrentX =
        canvas.offsetWidth - parseInt(element.style.left);
      element.style.width = `${Math.min(newWidth, maxWidthAtCurrentX)}px`;
      break;
    case "height":
      const newHeight = Math.max(MIN_SIZE, value);
      const maxHeightAtCurrentY =
        canvas.offsetHeight - parseInt(element.style.top);
      element.style.height = `${Math.min(newHeight, maxHeightAtCurrentY)}px`;
      break;
    case "rotation":
      element.style.transform = `rotate(${value}deg)`;
      break;
    case "elemOpacity":
      element.style.opacity = value / 100;
      break;
    case "cornerRadius":
      // Don't apply corner radius to circles
      if (element.dataset.type !== "circle") {
        element.style.borderRadius = `${value}px`;
      }
      break;
    case "bgColor":
    case "bgOpacity":
      updateBackgroundColor(element);
      break;
    case "textColor":
    case "textOpacity":
      updateTextColor(element);
      break;
    case "textContent":
      element.textContent = value;
      break;
  }

  saveToLocalStorage();
}

function updateBackgroundColor(element) {
  const hexColor = (bgColorTextInput?.value || "000000")
    .replace("#", "")
    .padStart(6, "0");
  const opacityStr = (bgOpacityInput?.value || "100").replace(/[%\s]/g, "");
  const opacity = parseInt(opacityStr) || 0;

  const r = parseInt(hexColor.substr(0, 2), 16);
  const g = parseInt(hexColor.substr(2, 2), 16);
  const b = parseInt(hexColor.substr(4, 2), 16);

  element.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${opacity / 100})`;
  if (bgColorInput) bgColorInput.value = `#${hexColor}`;
}

function updateTextColor(element) {
  const hexColor = (textColorTextInput?.value || "ffffff")
    .replace("#", "")
    .padStart(6, "0");
  const opacityStr = (textOpacityInput?.value || "100").replace(/[%\s]/g, "");
  const opacity = parseInt(opacityStr) || 0;

  const r = parseInt(hexColor.substr(0, 2), 16);
  const g = parseInt(hexColor.substr(2, 2), 16);
  const b = parseInt(hexColor.substr(4, 2), 16);

  element.style.color = `rgba(${r}, ${g}, ${b}, ${opacity / 100})`;
  if (textColorInput) textColorInput.value = `#${hexColor}`;
}

// ===========================
// DRAG AND RESIZE
// ===========================

function handleMouseDown(e) {
  if (e.target.classList.contains("handle")) {
    const element = e.target.parentElement;
    if (element.dataset.locked === "true") return;

    isResizing = true;
    currentResizeHandle = e.target.dataset.handle;
    selectedElementId = element.id;
    selectElement(element.id);

    dragStartX = e.clientX;
    dragStartY = e.clientY;
    elementStartX = parseInt(element.style.left);
    elementStartY = parseInt(element.style.top);
    elementStartWidth = element.offsetWidth;
    elementStartHeight = element.offsetHeight;

    e.preventDefault();
    e.stopPropagation();
    return;
  }

  if (e.target.classList.contains("box")) {
    const element = e.target;
    if (element.dataset.locked === "true") {
      selectElement(element.id);
      return;
    }

    isDragging = true;
    selectedElementId = element.id;
    selectElement(element.id);

    dragStartX = e.clientX;
    dragStartY = e.clientY;
    elementStartX = parseInt(element.style.left);
    elementStartY = parseInt(element.style.top);

    e.preventDefault();
    e.stopPropagation();
    return;
  }

  if (e.target === canvas || e.target.id === "canvas") {
    deselectElement();
  }
}

function handleMouseMove(e) {
  if (!selectedElementId) return;

  const element = document.getElementById(selectedElementId);
  if (!element || element.dataset.locked === "true") return;

  if (isDragging) {
    const deltaX = e.clientX - dragStartX;
    const deltaY = e.clientY - dragStartY;

    let newX = elementStartX + deltaX;
    let newY = elementStartY + deltaY;

    newX = Math.max(
      0,
      Math.min(canvas.offsetWidth - element.offsetWidth, newX)
    );
    newY = Math.max(
      0,
      Math.min(canvas.offsetHeight - element.offsetHeight, newY)
    );

    element.style.left = `${newX}px`;
    element.style.top = `${newY}px`;

    if (posXInput) posXInput.value = Math.round(newX);
    if (posYInput) posYInput.value = Math.round(newY);
  }

  if (isResizing) {
    const deltaX = e.clientX - dragStartX;
    const deltaY = e.clientY - dragStartY;

    let newWidth = elementStartWidth;
    let newHeight = elementStartHeight;
    let newX = elementStartX;
    let newY = elementStartY;

    switch (currentResizeHandle) {
      case "br":
        newWidth = elementStartWidth + deltaX;
        newHeight = elementStartHeight + deltaY;
        break;
      case "bl":
        newWidth = elementStartWidth - deltaX;
        newHeight = elementStartHeight + deltaY;
        newX = elementStartX + deltaX;
        break;
      case "tr":
        newWidth = elementStartWidth + deltaX;
        newHeight = elementStartHeight - deltaY;
        newY = elementStartY + deltaY;
        break;
      case "tl":
        newWidth = elementStartWidth - deltaX;
        newHeight = elementStartHeight - deltaY;
        newX = elementStartX + deltaX;
        newY = elementStartY + deltaY;
        break;
    }

    // Apply minimum size
    if (newWidth < MIN_SIZE) {
      newWidth = MIN_SIZE;
      if (currentResizeHandle.includes("l")) {
        newX = elementStartX + elementStartWidth - MIN_SIZE;
      }
    }

    if (newHeight < MIN_SIZE) {
      newHeight = MIN_SIZE;
      if (currentResizeHandle.includes("t")) {
        newY = elementStartY + elementStartHeight - MIN_SIZE;
      }
    }

    // Constrain to canvas
    if (newX < 0) {
      newWidth = newWidth + newX;
      newX = 0;
    }
    if (newY < 0) {
      newHeight = newHeight + newY;
      newY = 0;
    }
    if (newX + newWidth > canvas.offsetWidth) {
      newWidth = canvas.offsetWidth - newX;
    }
    if (newY + newHeight > canvas.offsetHeight) {
      newHeight = canvas.offsetHeight - newY;
    }

    element.style.width = `${newWidth}px`;
    element.style.height = `${newHeight}px`;
    element.style.left = `${newX}px`;
    element.style.top = `${newY}px`;

    if (widthInput) widthInput.value = `${Math.round(newWidth)}px`;
    if (heightInput) heightInput.value = `${Math.round(newHeight)}px`;
    if (posXInput) posXInput.value = Math.round(newX);
    if (posYInput) posYInput.value = Math.round(newY);
  }
}

function handleMouseUp() {
  if (isDragging || isResizing) {
    saveToLocalStorage();
  }
  isDragging = false;
  isResizing = false;
  currentResizeHandle = null;
}

// ===========================
// KEYBOARD CONTROLS
// ===========================

function handleKeyDown(e) {
  if (!selectedElementId) return;

  const element = document.getElementById(selectedElementId);
  if (!element || element.dataset.locked === "true") return;

  if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") {
    return;
  }

  switch (e.key) {
    case "Delete":
    case "Backspace":
      deleteElement(selectedElementId);
      e.preventDefault();
      break;
    case "ArrowLeft":
      moveElement(-5, 0);
      e.preventDefault();
      break;
    case "ArrowRight":
      moveElement(5, 0);
      e.preventDefault();
      break;
    case "ArrowUp":
      moveElement(0, -5);
      e.preventDefault();
      break;
    case "ArrowDown":
      moveElement(0, 5);
      e.preventDefault();
      break;
  }
}

function moveElement(deltaX, deltaY) {
  if (!selectedElementId) return;

  const element = document.getElementById(selectedElementId);
  if (!element || element.dataset.locked === "true") return;

  const currentX = parseInt(element.style.left);
  const currentY = parseInt(element.style.top);

  let newX = currentX + deltaX;
  let newY = currentY + deltaY;

  newX = Math.max(0, Math.min(canvas.offsetWidth - element.offsetWidth, newX));
  newY = Math.max(
    0,
    Math.min(canvas.offsetHeight - element.offsetHeight, newY)
  );

  element.style.left = `${newX}px`;

  element.style.top = `${newY}px`;
  updatePropertiesPanel();
  saveToLocalStorage();
}
function deleteElement(elementId) {
  const element = document.getElementById(elementId);
  if (element && element.dataset.locked !== "true") {
    element.remove();
    deselectElement();
    renderLayers();
    saveToLocalStorage();
  }
}
// ===========================
// DATA MANAGEMENT
// ===========================
function getCurrentElements() {
  const elements = Array.from(canvas.querySelectorAll(".box"));
  return elements.map(element => {
    const transform = element.style.transform;
    const angle = parseFloat(transform.match(/rotate\(([^)]+)deg\)/)?.[1]) || 0;
    const bgColor = rgbaToHex(element.style.backgroundColor);
    const textColor =
      element.dataset.type === "text"
        ? rgbaToHex(element.style.color)
        : { hex: "#ffffff", opacity: 100 };

    return {
      id: element.id,
      type: element.dataset.type,
      name: element.dataset.name,
      x: parseInt(element.style.left) || 0,
      y: parseInt(element.style.top) || 0,
      width: parseInt(element.style.width) || 100,
      height: parseInt(element.style.height) || 100,
      angle: angle,
      elemOpacity: Math.round(parseFloat(element.style.opacity || 1) * 100),
      cornerRadius:
        element.dataset.type === "circle"
          ? 0
          : parseInt(element.style.borderRadius) || 0,
      bgColor: bgColor.hex,
      bgOpacity: bgColor.opacity,
      textColor: textColor.hex,
      textOpacity: textColor.opacity,
      textContent: element.dataset.type === "text" ? element.textContent : "",
      locked: element.dataset.locked === "true",
      visible: element.dataset.visible !== "false",
      zIndex: parseInt(element.style.zIndex) || 0,
    };
  });
}
// ===========================
// EXPORT FUNCTIONS
// ===========================
function exportJSON() {
  const data = getCurrentElements();
  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${projectTitleInput.value || "design"}.json`;
  a.click();
  URL.revokeObjectURL(url);
}
function exportHTML() {
  const elements = getCurrentElements();
  let html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${projectTitleInput.value || "Design Export"}</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: Arial, sans-serif; }
    .canvas { position: relative; width: 100%; height: 100vh; background: #000; }
    .element { position: absolute; }
  </style>
</head>
<body>
  <div class="canvas">
`;
  elements.forEach(el => {
    const bgColor = el.bgColor.replace("#", "");
    const r = parseInt(bgColor.substr(0, 2), 16);
    const g = parseInt(bgColor.substr(2, 2), 16);
    const b = parseInt(bgColor.substr(4, 2), 16);
    const bgRgba = `rgba(${r}, ${g}, ${b}, ${el.bgOpacity / 100})`;
    let textStyle = "";
    if (el.type === "text") {
      const textColor = el.textColor.replace("#", "");
      const tr = parseInt(textColor.substr(0, 2), 16);
      const tg = parseInt(textColor.substr(2, 2), 16);
      const tb = parseInt(textColor.substr(4, 2), 16);
      const textRgba = `rgba(${tr}, ${tg}, ${tb}, ${el.textOpacity / 100})`;
      textStyle = `color: ${textRgba}; display: flex; align-items: center; justify-content: center; font-size: 14px;`;
    }

    const borderRadius = el.type === "circle" ? "50%" : `${el.cornerRadius}px`;

    html += `    <div class="element" style="
  left: ${el.x}px;
  top: ${el.y}px;
  width: ${el.width}px;
  height: ${el.height}px;
  transform: rotate(${el.angle}deg);
  opacity: ${el.elemOpacity / 100};
  background-color: ${bgRgba};
  border-radius: ${borderRadius};
  ${textStyle}
  z-index: ${el.zIndex};
">${el.type === "text" ? el.textContent : ""}</div>
`;
  });
  html += `  </div>
</body>
</html>`;
  const blob = new Blob([html], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${projectTitleInput.value || "design"}.html`;
  a.click();
  URL.revokeObjectURL(url);
}
// ===========================
// EVENT LISTENERS SETUP
// ===========================
function setupEventListeners() {
  // Canvas interactions
  canvas.addEventListener("mousedown", handleMouseDown);
  document.addEventListener("mousemove", handleMouseMove);
  document.addEventListener("mouseup", handleMouseUp);
  // Keyboard
  document.addEventListener("keydown", handleKeyDown);
  // Dock buttons
  rectangleBtn?.addEventListener("click", () => createElement("rectangle"));
  circleBtn?.addEventListener("click", () => createElement("circle"));
  textBtn?.addEventListener("click", () => createElement("text"));
  // Layer buttons
  layerUpBtn?.addEventListener("click", moveLayerUp);
  layerDownBtn?.addEventListener("click", moveLayerDown);
  // Page button
  addPageBtn?.addEventListener("click", createNewPage);
  // Rotation buttons
  rotate90Btn?.addEventListener("click", () => {
    if (selectedElementId) {
      const element = document.getElementById(selectedElementId);
      if (element && element.dataset.locked !== "true") {
        const currentAngle =
          parseFloat(
            element.style.transform.match(/rotate\(([^)]+)deg\)/)?.[1]
          ) || 0;
        updateElementProperty("rotation", currentAngle + 90);
        updatePropertiesPanel();
      }
    }
  });
  rotate45Btn?.addEventListener("click", () => {
    if (selectedElementId) {
      const element = document.getElementById(selectedElementId);
      if (element && element.dataset.locked !== "true") {
        const currentAngle =
          parseFloat(
            element.style.transform.match(/rotate(([^)]+)deg)/)?.[1]
          ) || 0;
        updateElementProperty("rotation", currentAngle + 45);
        updatePropertiesPanel();
      }
    }
  });
  // Export buttons
  exportJSONBtn?.addEventListener("click", exportJSON);
  exportHTMLBtn?.addEventListener("click", exportHTML);
  // Property inputs
  posXInput?.addEventListener("input", e =>
    updateElementProperty("x", parseInt(e.target.value) || 0)
  );
  posYInput?.addEventListener("input", e =>
    updateElementProperty("y", parseInt(e.target.value) || 0)
  );
  rotationInput?.addEventListener("input", e => {
    const value = e.target.value.replace(/[°\s]/g, "");
    updateElementProperty("rotation", parseFloat(value) || 0);
  });
  widthInput?.addEventListener("input", e => {
    const value = e.target.value.replace(/[px\s]/g, "");
    updateElementProperty("width", parseInt(value) || MIN_SIZE);
  });
  heightInput?.addEventListener("input", e => {
    const value = e.target.value.replace(/[px\s]/g, "");
    updateElementProperty("height", parseInt(value) || MIN_SIZE);
  });
  elemOpacityInput?.addEventListener("input", e => {
    const value = e.target.value.replace(/[%\s]/g, "");
    updateElementProperty("elemOpacity", parseInt(value) || 0);
  });
  cornerRadiusInput?.addEventListener("input", e => {
    updateElementProperty("cornerRadius", parseInt(e.target.value) || 0);
  });
  bgColorInput?.addEventListener("input", e => {
    if (bgColorTextInput)
      bgColorTextInput.value = e.target.value.replace("#", "");
    if (selectedElementId) updateElementProperty("bgColor", e.target.value);
  });
  bgColorTextInput?.addEventListener("input", e => {
    const value = e.target.value.replace("#", "");
    if (bgColorInput) bgColorInput.value = `#${value}`;
    if (selectedElementId) updateElementProperty("bgColor", value);
  });
  bgOpacityInput?.addEventListener("input", e => {
    const value = e.target.value.replace(/[%\s]/g, "");
    if (selectedElementId)
      updateElementProperty("bgOpacity", parseInt(value) || 0);
  });
  textColorInput?.addEventListener("input", e => {
    if (textColorTextInput)
      textColorTextInput.value = e.target.value.replace("#", "");
    if (selectedElementId) updateElementProperty("textColor", e.target.value);
  });
  textColorTextInput?.addEventListener("input", e => {
    const value = e.target.value.replace("#", "");
    if (textColorInput) textColorInput.value = `#${value}`;
    if (selectedElementId) updateElementProperty("textColor", value);
  });
  textOpacityInput?.addEventListener("input", e => {
    const value = e.target.value.replace(/[%\s]/g, "");
    if (selectedElementId)
      updateElementProperty("textOpacity", parseInt(value) || 0);
  });
  textContentTextarea?.addEventListener("input", e => {
    if (selectedElementId) updateElementProperty("textContent", e.target.value);
  });
  // Project title auto-save
  projectTitleInput?.addEventListener("input", () => {
    saveToLocalStorage();
  });
}
// ===========================
// START THE APPLICATION
// ===========================
init();
