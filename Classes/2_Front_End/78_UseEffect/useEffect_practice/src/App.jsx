import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    async function getData() {
      try {
        let { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
        setAllUsers(data);
        setFilteredUsers(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    }

    getData();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() == "") setFilteredUsers(allUsers);
    else {
      const filtered = allUsers.filter((user) => {
        return user.name.toLowerCase().includes(searchTerm.toLowerCase().trim());
      });
      setFilteredUsers(filtered);
    }
  }, [searchTerm, allUsers]);

  return (
    <div>
      <input
        className="m-4 px-4 py-1 bg-blue-300 text-black font-bold border-none outline-black outline-offset-1"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value.trim())}
        type="search"
        name="search"
        id="search"
        placeholder="Searc user"
      />
      <section className="flex flex-wrap gap-5 p-5">
        {loading ? (
          <p>Loading...</p>
        ) : (
          filteredUsers.map((user) => {
            return (
              <div key={user.id} className="bg-zinc-800 px-5 py-2 text-white rounded-md">
                <h2>{user.name}</h2>
                <p>{user.phone}</p>
                <p>{user.website}</p>
              </div>
            );
          })
        )}
      </section>
    </div>
  );
};

export default App;
