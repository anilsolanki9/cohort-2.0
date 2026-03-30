import React, { useState } from "react";

const Card = ({ user }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div className="w-80 h-100 rounded-2xl relative group overflow-hidden">
      <img onLoad={() => setImgLoaded(true)} className={`w-full h-full object-cover object-center ${imgLoaded ? "opacity-100" : "opacity-0"} `} src={user["download_url"]} alt="" />

      {!imgLoaded && <div className="absolute inset-0 bg-zinc-800 animate-pulse" />}

      <div className="absolute -bottom-20 bg-linear-to-t from-black to-transparent left-0 right-0 py-10 px-5 text-3xl group-hover:bottom-0 transition-all duration-300">
        <h2 className="font-bold text-shadow-sm text-shadow-black">{user["author"]}</h2>
      </div>
    </div>
  );
};

export default Card;
