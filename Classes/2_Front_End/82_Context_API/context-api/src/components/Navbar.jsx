import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import ThemeContext from "../contexts/ThemeContext";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className={`flex items-center justify-around py-5 text-lg font-semibold ${theme === "dark" ? "bg-zinc-400" : "bg-zinc-600 text-white"}`}>
      <h2 className="text-3xl">Navar</h2>
      <div className="flex gap-4 items-center justify-center">
        <NavLink style={({ isActive }) => (isActive ? { color: "yellow" } : {})} to="/">
          Home
        </NavLink>
        <NavLink style={({ isActive }) => (isActive ? { color: "yellow" } : {})} to="/about">
          About
        </NavLink>
        <button
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
          }}
          className="bg-orange-400 text-white font-bold text-xl px-4 py-1 rounded-lg"
        >
          Cange Theme
        </button>
      </div>
    </div>
  );
};

export default Navbar;
