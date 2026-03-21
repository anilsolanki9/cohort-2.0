const people = [
  {
    name: "Ethan Caldwell",
    pic: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=600&auto=format&fit=crop&q=60",
    bio: "Adventurous soul who loves hiking, coffee, and chasing sunsets daily.",
  },
  {
    name: "Marcus Rivera",
    pic: "https://images.unsplash.com/photo-1461800919507-79b16743b257?w=600&auto=format&fit=crop&q=60",
    bio: "Photographer by passion, traveler by choice, dreamer by nature always.",
  },
  {
    name: "Noah Bennett",
    pic: "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?w=600&auto=format&fit=crop&q=60",
    bio: "Software engineer who builds cool things and breaks them even faster.",
  },
  {
    name: "Sophia Lane",
    pic: "https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?w=600&auto=format&fit=crop&q=60",
    bio: "Bookworm, minimalist, and firm believer that tea fixes everything always.",
  },
  {
    name: "Isla Fontaine",
    pic: "https://images.unsplash.com/photo-1560087637-bf797bc7796a?w=600&auto=format&fit=crop&q=60",
    bio: "Fashion designer with an eye for detail and love for bold colors.",
  },
  {
    name: "Chloe Hartman",
    pic: "https://plus.unsplash.com/premium_photo-1681493353999-a3eea8b95e1d?w=600&auto=format&fit=crop&q=60",
    bio: "Yoga instructor and wellness coach helping people find their inner peace.",
  },
  {
    name: "Amara Osei",
    pic: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&auto=format&fit=crop&q=60",
    bio: "Journalist uncovering stories that matter, one honest headline at a time.",
  },
  {
    name: "Lena Voss",
    pic: "https://images.unsplash.com/photo-1571234018566-1d3cc5d2991a?w=600&auto=format&fit=crop&q=60",
    bio: "Painter who sees the world in colors nobody else notices around them.",
  },
  {
    name: "Priya Nair",
    pic: "https://images.unsplash.com/photo-1580420999020-c89790fde43c?w=600&auto=format&fit=crop&q=60",
    bio: "Data scientist by day, amateur chef by night, always hungry for knowledge.",
  },
];

// show all users
// search user
// filter krna
// show filtered users

let cardsContainer = document.querySelector(".cards-container");
let inp = document.querySelector("input");
let errorMsg = document.querySelector(".error-msg");

function showUsers(arr) {
  arr.forEach((user) => {
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = user.pic;
    img.alt = "";
    img.className = "bg-img";

    const blurredLayer = document.createElement("div");
    blurredLayer.className = "blurred-layer";
    blurredLayer.style.backgroundImage = `url(${user.pic})`;

    const content = document.createElement("div");
    content.className = "content";

    const h3 = document.createElement("h3");
    h3.textContent = user.name;

    const p = document.createElement("p");
    p.textContent = user.bio;

    content.append(h3, p);
    card.append(img, blurredLayer, content);

    cardsContainer.appendChild(card);
  });
}

showUsers(people);

inp.addEventListener("input", () => {
  // console.log(inp.value);
  let newarr = people.filter((user) => {
    return user.name.toLowerCase().includes(inp.value.toLowerCase());
  });
  cardsContainer.innerHTML = "";
  if (newarr.length > 0) {
    showUsers(newarr);
    errorMsg.classList.remove("show");
  } else {
    errorMsg.classList.add("show");
  }
});
