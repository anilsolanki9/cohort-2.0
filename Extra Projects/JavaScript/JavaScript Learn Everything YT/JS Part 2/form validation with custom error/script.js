function customSelect() {
  const customSelect = document.querySelector(".custom-select");
  const selected = customSelect.querySelector(".selected");
  const options = customSelect.querySelector(".options");
  const items = customSelect.querySelectorAll("li");

  // toggle open
  selected.addEventListener("click", () => {
    options.classList.toggle("open");
  });

  // select option
  items.forEach((item) => {
    item.addEventListener("click", () => {
      selected.textContent = item.textContent;

      // set active
      items.forEach((i) => i.classList.remove("active"));
      item.classList.add("active");

      options.classList.remove("open");
    });
  });

  // close on outside click
  document.addEventListener("click", (e) => {
    if (!customSelect.contains(e.target)) {
      options.classList.remove("open");
    }
  });
}

customSelect();

let nm = document.querySelector("#name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");

form.addEventListener("submit", (dets) => {
  dets.preventDefault();
  // console.log("Hello i am submitted");

  if (nm.value.length <= 2) {
    document.querySelector("#nameError").style.display = "initial";
  } else {
    document.querySelector("#nameError").style.display = "hidden";
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let ans = emailRegex.test(email.value); // true or false return krta hai.
  console.log(ans);
});
