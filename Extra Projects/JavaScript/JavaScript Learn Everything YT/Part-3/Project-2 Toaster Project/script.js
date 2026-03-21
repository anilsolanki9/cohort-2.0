function createToaster(configs) {
  
  return function (str) {
    let parent = document.querySelector(".parent");

    let div = document.createElement("div");
    div.textContent = str;
    div.className = `toaster inline-block w-fit bg-gray-800 text-white px-6 py-3 rounded shadow-lg pointer-events-none font-bold ${configs.theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-800"}`;

    parent.appendChild(div);
    if (configs.positionX !== "left" || configs.positionY !== "top") {
      parent.classList.add("fixed");
      // classname use kr rhe h because classname is a string, ClassList sirf comma seperated single listes ko allow krta h. 
      parent.className += `${configs.positionX === "right" ? " right-5 items-end" : " left-5 items-start"} ${configs.positionY === "bottom" ? " bottom-5" : " top-5"}`;
    }

    setTimeout(() => {
      parent.removeChild(div);
    }, configs.duration * 1000);
  };
}

let toaster = createToaster({
  positionX: "right",
  positionY: "bottom",
  theme: "dark",
  duration: 3,
});

toaster("Download done 1");

setTimeout(() => {
  toaster("Download done done successfully");
}, 2000);
