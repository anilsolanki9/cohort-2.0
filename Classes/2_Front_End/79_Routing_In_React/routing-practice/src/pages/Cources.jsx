import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      navigate(`/cources/${e.target.value}`);
    }
  };

  return (
    <div className="bg-black/80 text-white/80 min-h-[calc(100vh-60px)] flex justify-center items-center text-7xl flex-col">
      All Cources
      <input onKeyDown={handleKeyDown} type="text" placeholder="Search course..." className="border-2 rounded-2xl outline-none flex items-center px-10 py-3 text-2xl mt-4" />
    </div>
  );
};

export default About;
