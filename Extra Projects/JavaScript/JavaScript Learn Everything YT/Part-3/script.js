fetch("https://randomuser.me/api/?results=10")
  .then((raw) => raw.json())
  .then((data) => {
    data.results.forEach((user) => {
      // console.log(user);

      const userCard = document.createElement("div");
      userCard.classList.add("user-card");

      const userAvatar = document.createElement("img");
      userAvatar.classList.add("user-avatar");
      userAvatar.src = user.picture.large;
      userAvatar.alt = "User Avatar";

      const userInfo = document.createElement("div");
      userInfo.classList.add("user-info");

      const userName = document.createElement("h2");
      userName.classList.add("user-name");
      userName.textContent = `${user.name.first} ${user.name.last}`;

      const userTitle = document.createElement("p");
      userTitle.classList.add("user-title");
      userTitle.textContent = `${user.location.state}`;

      const userBio = document.createElement("p");
      userBio.classList.add("user-bio");
      userBio.textContent = user.email;

      // button
      const userBtn = document.createElement("button");
      userBtn.classList.add("user-btn");
      userBtn.textContent = "Follow";

      userInfo.appendChild(userName);
      userInfo.appendChild(userTitle);
      userInfo.appendChild(userBio);
      userInfo.appendChild(userBtn);

      userCard.appendChild(userAvatar);
      userCard.appendChild(userInfo);

      document.querySelector("main").appendChild(userCard);
    });
  })
  .catch((err) => console.log(err));
