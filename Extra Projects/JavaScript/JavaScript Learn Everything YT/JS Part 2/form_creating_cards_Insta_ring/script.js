let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let cardsContainer = document.querySelector("#cards-container");

function createCard({ age, gender, name, email, imgSrc }) {
  // --- top section ---
  const img = document.createElement("img");
  img.src = imgSrc;
  img.alt = name;
  img.onerror = () => {
    img.src = "https://whitedotpublishers.com/wp-content/uploads/2022/05/male-placeholder-image.jpeg";
    img.onerror = null;
  };

  const gap = document.createElement("div");
  gap.classList.add("gap");
  gap.appendChild(img);

  const ring = document.createElement("div");
  ring.classList.add("ring");
  ring.appendChild(gap);

  const top = document.createElement("div");
  top.classList.add("top");
  top.appendChild(ring);

  // --- bottom section ---
  const ageP = document.createElement("p");
  ageP.innerHTML = `Age : <span class="age">${age}</span>`;

  const genderP = document.createElement("p");
  genderP.innerHTML = `Gender : <span class="gender">${gender}</span>`;

  const nameH1 = document.createElement("h1");
  nameH1.classList.add("name");
  nameH1.textContent = name;

  const emailA = document.createElement("a");
  emailA.classList.add("email");
  emailA.href = `mailto:${email}`;
  emailA.textContent = email;

  const bottom = document.createElement("div");
  bottom.classList.add("bottom");
  bottom.append(ageP, genderP, nameH1, emailA);

  // --- card ---
  const card = document.createElement("div");
  card.classList.add("card");
  card.append(top, bottom);

  return card;
}

form.addEventListener("submit", (dets) => {
  dets.preventDefault();
  console.log(dets);

  console.log(inputs[0], inputs[1], inputs[2], inputs[3], inputs[4]);

  const newCard = createCard({
    name: inputs[0].value,
    age: inputs[1].value,
    gender: inputs[2].value,
    email: inputs[3].value,
    imgSrc: inputs[4].value,
  });

  cardsContainer.appendChild(newCard);

  form.reset();
});
