import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import Form from "./components/Form";

const App = () => {
  const [usersData, setUsersData] = useState(JSON.parse(localStorage.getItem("usersData")) || []);

  function removeHandler(user) {
    setUsersData((prev) => {
      return prev.filter((us) => us !== user);
    });
  }

  useEffect(() => {
    localStorage.setItem("usersData", JSON.stringify(usersData));
  }, [usersData]);

  return (
    <div className="p-4 min-h-screen bg-black/50">
      <Form setUsersData={setUsersData} />
      <div className="grid grid-cols-3 gap-4 ">
        {usersData.map((user, idx) => {
          return <Card key={idx} user={user} removeHandler={removeHandler} />;
        })}
      </div>
    </div>
  );
};

export default App;
