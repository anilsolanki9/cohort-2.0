let btn = document.querySelector("#btn");
let fileInp = document.querySelector("input#fileInp");

btn.addEventListener("click", () => {
  fileInp.click();
});

fileInp.addEventListener("change", (dets) => {
  // console.log(dets.target.files[0].name);
  btn.textContent = dets?.target?.files[0]?.name ?? "Upload File";
});
