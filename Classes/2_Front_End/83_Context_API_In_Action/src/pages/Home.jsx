import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleBtn = () => {
    navigate("/products");
  };

  return (
    <div className="flex-1 w-full h-full flex flex-col items-center justify-center">
      <h1 className="text-5xl">Hello to our Fake Store</h1>
      <button onClick={handleBtn} className="bg-[#D8D365] text-[#454040] font-bold text-xl px-4 py-2 rounded-lg mt-4 cursor-pointer active:scale-95">
        Check Products
      </button>
    </div>
  );
};

export default Home;
