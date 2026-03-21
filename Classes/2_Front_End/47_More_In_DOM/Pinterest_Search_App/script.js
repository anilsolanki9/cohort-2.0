const people = [
  {
    name: "Aarav Sharma",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  },
  {
    name: "Riya Patel",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
  {
    name: "Kabir Singh",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
  },
  {
    name: "Ananya Verma",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
  },
  {
    name: "Rahul Mehta",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
  },
  {
    name: "Sneha Kapoor",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
  },
  {
    name: "Vikram Joshi",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef",
  },
  {
    name: "Neha Gupta",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
  },
];

let container = document.querySelector(".container");
let overlay = document.querySelector(".overlay");
let searchInp = document.querySelector("#searchinput");
let searchdata = document.querySelector(".searchdata");

function showContent(arr) {
  let clutter = "";
  arr.forEach((obj) => {
    clutter += `<div class="box">
              <img src=${obj.image} class="cursor-pointer" />
              <div class="caption">${obj.name}</div>
            </div>`;
  });

  container.innerHTML = clutter;
}

showContent(people);

searchInp.addEventListener("focus", () => {
  overlay.style.display = "block";
});

searchInp.addEventListener("blur", () => {
  overlay.style.display = "none";
});

searchInp.addEventListener("input", () => {
  // " " ko manage krna hai. " " pe no search
  // console.log(searchInp.value);
  if (searchInp.value !== "") {
    let filteredArray = people.filter((obj) => obj.name.toLowerCase().includes(searchInp.value.trim().toLowerCase()));
    // console.log(filteredArray);

    let clutter = "";
    filteredArray.forEach((obj) => {
      clutter += `<div class="res flex px-8 py-3">
                <i class="ri-search-line font-semibold mr-5"></i>
                <h3 class="font-semibold">${obj.name}</h3>
              </div>`;
    });
    if (filteredArray.length !== 0) {
      searchdata.style.display = "block";
    }
    searchdata.innerHTML = clutter;
  } else {
    searchdata.style.display = "none";
  }
});
