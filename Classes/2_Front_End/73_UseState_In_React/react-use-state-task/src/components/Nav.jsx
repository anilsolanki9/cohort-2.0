import React from "react";

const Nav = ({ theme, toggleTheme }) => {
  return (
    <div className="bg-zinc-400 flex justify-between items-center p-4 mb-5">
      <h1 className="text-3xl">Hello</h1>
      <div
        onClick={toggleTheme}
        className={`bg-white text-black flex justify-center items-center px-5 py-2 text-lg font-bold shadow-lg cursor-pointer active:scale-96 select-none transition-all duration-200 rounded-2xl ${theme === "dark" ? "bg-gray-200 text-zinc-700" : "bg-zinc-700 text-gray-200"}`}
      >
        Theme - light
      </div>
    </div>
  );
};

export default Nav;
