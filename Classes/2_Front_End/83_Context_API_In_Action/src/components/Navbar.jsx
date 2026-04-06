import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-[#605B51] px-10 py-2 flex  justify-between items-center">
      <h2 className="text-2xl uppercase font-extrabold tracking-wider text-black text-shadow-2xs text-shadow-yellow-300">I am Navbar</h2>

      <div className="space-x-4 text-lg">
        <NavLink style={({ isActive }) => (isActive ? { color: "yellow" } : { color: "white" })} to="/">
          Home
        </NavLink>
        <NavLink style={({ isActive }) => (isActive ? { color: "yellow" } : { color: "white" })} to="/about">
          About
        </NavLink>
        <NavLink style={({ isActive }) => (isActive ? { color: "yellow" } : { color: "white" })} to="/products">
          Products
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
