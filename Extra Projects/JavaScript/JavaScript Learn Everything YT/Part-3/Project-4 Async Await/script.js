// https://randomuser.me/api/?results=10 // foe 10 users

fetch("https://randomuser.me/api/?results=10")
  .then(raw => raw.json())
  .then(data => {
    // console.log(data.results); // array
    data.results.forEach(function (user) {
      console.log(user);
      // outer card
      const card = document.createElement("div");
      card.className =
        "max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden w-full";

      // cover image div
      const cover = document.createElement("div");
      cover.className = "bg-cover bg-center h-40";
      cover.style.backgroundImage = `url(${user.picture.large})`;

      // content wrapper
      const content = document.createElement("div");
      content.className = "p-4";

      // flex row
      const flexRow = document.createElement("div");
      flexRow.className = "flex items-center";

      // avatar
      const avatar = document.createElement("img");
      avatar.className =
        "w-16 h-16 rounded-full border-2 border-gray-300 object-cover object-center";
      avatar.src = user.picture.large;
      avatar.alt = "User Avatar";

      // name + role wrapper
      const info = document.createElement("div");
      info.className = "ml-4";

      // name
      const name = document.createElement("h2");
      name.className = "text-xl font-semibold text-gray-800";
      name.textContent = user.name.first + " " + user.name.last;

      // role
      const role = document.createElement("p");
      role.className = "text-gray-600";
      role.textContent = user.location.country;

      // description
      const desc = document.createElement("p");
      desc.className = "mt-4 text-gray-600";
      desc.textContent = user.email;

      // buttons wrapper
      const btnGroup = document.createElement("div");
      btnGroup.className = "mt-4 flex justify-between";

      // follow button
      const followBtn = document.createElement("button");
      followBtn.className =
        "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600";
      followBtn.textContent = "Follow";

      // message button
      const messageBtn = document.createElement("button");
      messageBtn.className =
        "bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300";
      messageBtn.textContent = "Message";

      /* ===== append structure ===== */

      info.append(name, role);
      flexRow.append(avatar, info);
      btnGroup.append(followBtn, messageBtn);

      content.append(flexRow, desc, btnGroup);
      card.append(cover, content);

      // finally add to DOM
      document.querySelector("#wrapper").append(card);
    });
  });
