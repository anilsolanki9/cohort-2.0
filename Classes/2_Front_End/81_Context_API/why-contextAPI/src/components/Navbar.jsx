import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ theme, setTheme }) => {
  return (
    <nav className=" flex justify-between items-center px-10 py-2 bg-black/50">
      <h2 className="text-3xl">Navbar</h2>
      <div className="flex gap-4 text-xl font-semibold">
        <NavLink
          style={({ isActive }) => {
            return isActive ? { color: "red", textDecoration: "underline" } : { color: "black" };
          }}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return isActive ? { color: "red", textDecoration: "underline" } : { color: "black" };
          }}
          to="/about"
        >
          About
        </NavLink>
        <button
          onClick={() => {
            setTheme(theme === "light" ? "dark" : "light");
          }}
          className="bg-emerald-400 text-white font-bold tracking-wider px-5 py-1 rounded-lg cursor-pointer"
        >
          Change Theme
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
