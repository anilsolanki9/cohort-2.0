import React from "react";

const Card = ({ user }) => {
  return (
    <div className="w-80 h-100 rounded-2xl relative group overflow-hidden">
      <img className="w-full h-full object-cover object-center" src={user["download_url"]} alt="" />
      <div className="absolute -bottom-20 bg-linear-to-t from-black to-transparent left-0 right-0 py-10 px-5 text-3xl group-hover:bottom-0 transition-all duration-300">
        <h2 className="font-bold text-shadow-sm text-shadow-black">{user["author"]}</h2>
      </div>
    </div>
  );
};

export default Card;
