let select = document.querySelector("select");
let h1 = document.querySelector("h1");
let options = document.querySelectorAll("select option");

select.addEventListener("change", (dets) => {
  // console.log(dets.target.value);

  // console.log(options);
  let found = null;

  options.forEach((opt) => {
    if (opt.value == dets.target.value) {
      found = opt;
    }
  });
  h1.textContent = `Selected Device - ${found.textContent}`;
});
