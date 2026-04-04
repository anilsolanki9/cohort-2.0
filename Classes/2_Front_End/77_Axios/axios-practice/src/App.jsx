import React, { useState } from "react";
import Card from "./components/Card";
import axios from "axios";

const App = () => {
  const [usersData, setUsersData] = useState([]);

  async function getData() {
    const response = await axios.get("https://picsum.photos/v2/list?page=10&limit=12");
    setUsersData(response.data);
  }

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-4">
      <button onClick={getData} className="px-6 py-2 bg-white text-black rounded-2xl font-bold cursor-pointer active:scale-95 fixed bottom-5 right-5">
        Get Cards
      </button>
      <div className="flex flex-wrap gap-4">
        {usersData.map((user, idx) => {
          return <Card user={user} key={idx} />;
        })}
      </div>
    </div>
  );
};

export default App;
