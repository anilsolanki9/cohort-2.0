import React from "react";
import { useNavigate } from "react-router-dom";

const BackBtn = () => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(-1);
      }}
      className="absolute bottom-5 right-8 px-5 py-3 bg-blue-400 font-bold rounded-2xl text-white text-shadow-md text-shadow-black/50 cursor-pointer active:scale-95 transition-all duration-150 select-none"
    >
      BackBtn
    </div>
  );
};

export default BackBtn;
