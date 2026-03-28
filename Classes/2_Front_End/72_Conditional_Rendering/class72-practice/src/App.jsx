import React, { useState } from "react";
import Men from "./components/Men";
import Women from "./components/Women";

const App = () => {
  const [users, setUsers] = useState([
    {
      name: "Sulyam",
      age: 21,
      gender: "male",
    },
    {
      name: "Sanaya",
      age: 19,
      gender: "female",
    },
    {
      name: "Sunita",
      age: 18,
      gender: "female",
    },
    {
      name: "Shyaam",
      age: 21,
      gender: "male",
    },
    {
      name: "Sarthak",
      age: 27,
      gender: "male",
    },
    {
      name: "Naina",
      age: 18,
      gender: "female",
    },
  ]);

  function changeGender(idx) {
    let newUsers = [...users];
    newUsers[idx].gender = newUsers[idx].gender === "male" ? "female" : "male";
    setUsers(newUsers);
  }

  return (
    <div className="flex gap-10 p-10 flex-wrap">
      {users.map((user, idx) => {
        return user.gender === "male" ? <Men key={idx} id={idx} changeGender={changeGender} user={user} /> : <Women key={idx} id={idx} changeGender={changeGender} user={user} />;
      })}
    </div>
  );
};

export default App;
