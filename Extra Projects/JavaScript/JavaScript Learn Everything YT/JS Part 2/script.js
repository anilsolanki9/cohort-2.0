// create new cards
// save data in local storage
// show cards from localstorage
// handle buttons
// handle filters

let cardsStack = document.querySelector(".card-stack");

let addNote = document.querySelector("#add-note");
let nextBtn = document.querySelector("#next-btn");
let lastBtn = document.querySelector("#last-btn");

let notesPage = document.querySelector(".notes-page");
let formPage = document.querySelector(".form-page");

const btnCreate = document.querySelector(".btn-create");
let closeFormBtn = document.querySelector("#close-form-btn");

let form = document.querySelector("form");

const imageUrl = document.querySelector("#imageUrl");
const fullName = document.querySelector("#fullName");
const homeTown = document.querySelector("#homeTown");
const purpose = document.querySelector("#purpose");

let category = null;

let cardsData = JSON.parse(localStorage.getItem("cardsData")) || [];

// CODE Starts here

function showForm() {
  notesPage.style.display = "none";
  formPage.style.display = "flex";
}

function hideForm() {
  notesPage.style.display = "flex";
  formPage.style.display = "none";
}

addNote.addEventListener("click", showForm);

closeFormBtn.addEventListener("click", hideForm);

form.addEventListener("submit", (dets) => {
  dets.preventDefault();
  category = document.querySelector('input[name="category"]:checked');
  if (imageUrl.value.trim() !== "" && fullName.value.trim() !== "" && homeTown.value.trim() !== "" && purpose.value.trim() !== "" && document.querySelector('input[name="category"]:checked')) {
    console.log("Form is valid and submitted");

    cardsData.push({
      imageUrl: imageUrl.value,
      fullName: fullName.value,
      homeTown: homeTown.value,
      purpose: purpose.value,
      category: category.value,
    });

    localStorage.setItem("cardsData", JSON.stringify(cardsData));

    showCards(cardsData);
    form.reset();
    hideForm();
  }
});

function showCards(arr) {
  cardsStack.innerHTML = "";
  arr.forEach((task) => {
    const card = document.createElement("div");
    card.className = "card";

    // avatar
    const avatar = document.createElement("img");
    avatar.className = "avatar";
    avatar.src = task.imageUrl;
    avatar.alt = task.fullName;

    // name
    const name = document.createElement("div");
    name.className = "name";
    name.textContent = task.fullName;

    // info container
    const info = document.createElement("div");
    info.className = "info";

    // info row 1
    const infoRow1 = document.createElement("div");
    infoRow1.className = "info-row";

    const homeTownLabel = document.createElement("span");
    homeTownLabel.textContent = "Home town";

    const homeTownValue = document.createElement("span");
    homeTownValue.textContent = task.homeTown;

    infoRow1.append(homeTownLabel, homeTownValue);

    // info row 2
    const infoRow2 = document.createElement("div");
    infoRow2.className = "info-row";

    const bookingLabel = document.createElement("span");
    bookingLabel.textContent = "Purpose";

    const bookingValue = document.createElement("span");
    bookingValue.textContent = task.purpose;

    infoRow2.append(bookingLabel, bookingValue);

    // append rows to info
    info.append(infoRow1, infoRow2);

    // actions
    const actions = document.createElement("div");
    actions.className = "actions";

    // call button
    const callBtn = document.createElement("button");
    callBtn.className = "btn btn-call";

    const callIcon = document.createElement("i");
    callIcon.className = "ri-phone-fill";

    callBtn.append(callIcon, " Call");

    // message button
    const messageBtn = document.createElement("button");
    messageBtn.className = "btn btn-message";
    messageBtn.textContent = "Message";

    // append buttons
    actions.append(callBtn, messageBtn);

    // assemble card
    card.append(avatar, name, info, actions);

    // attach

    cardsStack.appendChild(card);
  });
}

showCards(cardsData);

nextBtn.addEventListener("click", () => {
  let newArr = [];
  let first = cardsData[0];

  for (let i = 0; i < cardsData.length; i++) {
    newArr[i - 1] = cardsData[i];
  }
  newArr[cardsData.length - 1] = first;
  cardsData = [...newArr];
  showCards(cardsData);
});

lastBtn.addEventListener("click", () => {
  let newArr = [];
  let last = cardsData[cardsData.length - 1];

  for (let i = 0; i < cardsData.length - 1; i++) {
    newArr[i + 1] = cardsData[i];
  }
  newArr[0] = last;
  cardsData = [...newArr];
  showCards(cardsData);
});

let dots = document.querySelectorAll(".dot");

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    dots.forEach((dot) => {
      dot.classList.remove("selected");
    });
    console.log(dot);
    dot.classList.add("selected");
    filterCards(dot);
  });
});

function filterCards(elem) {
  let filteredArray = cardsData.filter((card) => {
    return elem.classList.contains(card.category);
  });
  showCards(filteredArray);
}
