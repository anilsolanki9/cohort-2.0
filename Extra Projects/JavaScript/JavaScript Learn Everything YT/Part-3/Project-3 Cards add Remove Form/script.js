let form = document.querySelector("form");
let username = document.querySelector("#name");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");
let picUrl = document.querySelector("#picUrl");

const userManeger = {
  users: localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users"))
    : [],

  init: function () {
    form.addEventListener("submit", this.submitForm.bind(this));
    this.renderUI();
  },

  submitForm: function (e) {
    e.preventDefault();
    console.log("Form submitted");
    this.addUser();
    form.reset();
    this.saveToLocalStorage();
    this.renderUI();
  },

  addUser: function () {
    this.users.push({
      username: username.value,
      role: role.value,
      bio: bio.value,
      picUrl: picUrl.value,
    });
  },
  removeUser: function (idx) {
    this.users.splice(idx, 1);
    this.saveToLocalStorage();
    this.renderUI();
  },
  renderUI: function () {
    document.querySelector(".section2").innerHTML = "";
    let sum = "";
    let savedUsers = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : [];
    savedUsers.forEach(user => {
      sum += `<div class="card"> 
                <div class="removeBtn">X</div>
                <div class="top">
                  <img src=${user.picUrl} alt="" />
                </div>
                <div class="bottom">
                  <h2>${user.username}</h2>
                  <p class="role">${user.role}</p>
                  <p class="bio">${user.bio}</p>
                </div>
              </div>`;
    });
    document.querySelector(".section2").innerHTML = sum;

    let allRemoveBtns = document.querySelectorAll(".card .removeBtn");
    allRemoveBtns.forEach((btn, idx) => {
      btn.addEventListener("click", () => {
        userManeger.removeUser(idx);
      });
    });
  },
  saveToLocalStorage: function () {
    localStorage.setItem("users", JSON.stringify(this.users));
  },
};

userManeger.init();
