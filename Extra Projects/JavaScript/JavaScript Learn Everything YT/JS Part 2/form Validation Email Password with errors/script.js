// input valid h toh add a class valid && message pe add class show and success and message succesffull
// input invalid tpo add class error && message pe add cladd show only, and messsege Unsucessfull

// Strentgh lebel ko accordingly mange kro
// is pass is not matching regex, show error
// password length >=8 but <10 chars add class weak to bars,
// password length >=10 but <=12 then add class medium to bars
// password length >12 chars then add class strong to bars

let email = document.querySelector("#email");
let password = document.querySelector("#password");

let emailMsg = document.querySelector("#emailMsg");
let passwordMsg = document.querySelector("#passwordMsg");

let bars = document.querySelectorAll(".bar");

let form = document.querySelector("form");

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

password.addEventListener("input", () => {
  setTimeout(() => {
    if (!passwordRegex.test(password.value)) {
      password.className = "error";
      passwordMsg.className = "message show";
      passwordMsg.textContent = "Invalid Password Format !!";
    } else {
      password.className = "valid";
      passwordMsg.className = "message show success";
      passwordMsg.textContent = "Valid Password !";
    }
  }, 10000);

  if (password.value.length < 8) {
    bars.forEach((bar) => {
      bar.className = "bar";
    });
  } else if (password.value.length >= 8 && password.value.length < 10) {
    bars.forEach((bar) => {
      bar.className = "bar weak";
    });
  } else if (password.value.length >= 10 && password.value.length < 12) {
    bars.forEach((bar) => {
      bar.className = "bar medium";
    });
  } else if (password.value.length > 12) {
    bars.forEach((bar) => {
      bar.className = "bar strong";
    });
  }
});

email.addEventListener("input", () => {
  setTimeout(() => {
    if (!emailRegex.test(email.value)) {
      email.className = "error";
      emailMsg.className = "message show";
      emailMsg.textContent = "Invalid email!";
    } else {
      email.className = "valid";
      emailMsg.className = "message show success";
      emailMsg.textContent = "Valid Email !";
    }
  }, 7000);
});

function validateEmailPass() {
  if (passwordRegex.test(password.value) && emailRegex.test(email.value)) return true;
  else false;
}

form.addEventListener("submit", (dets) => {
  dets.preventDefault();
  let valid = validateEmailPass();
  if (!valid) {
    console.error("Email password is not valid");
    return;
  } else {
    form.reset;
    alert("Form submitted Successfully!!");
  }
});
