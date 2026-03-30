import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import axios from "axios";
import Buttons from "./components/Buttons";

const App = () => {
  const [usersData, setUsersData] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // because 1 and 2 are same, so i am starting from page 2 (optional)
    const apiPage = page + 1;

    async function getData() {
      setLoading(true);

      const response = await axios.get(`https://picsum.photos/v2/list?page=${apiPage}&limit=${limit}`);

      setUsersData(response.data);
      setLoading(false);
    }

    getData();
  }, [page, limit]);

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-4">
      <Buttons page={page} setPage={setPage} setLimit={setLimit} limit={limit} />

      <div className="flex flex-wrap gap-4">
        {loading
          ? Array.from({ length: limit }).map((_, i) => {
              return <div key={i} className="w-80 h-100 rounded-2xl relative group overflow-hidden" />;
            })
          : usersData.map((user) => {
              return <Card user={user} key={user.id} />;
            })}
      </div>
    </div>
  );
};

export default App;
