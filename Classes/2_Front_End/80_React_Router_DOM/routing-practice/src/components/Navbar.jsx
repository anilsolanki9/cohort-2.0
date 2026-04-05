import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-black/30 flex h-15 justify-between px-10 items-center">
      <h2 className="text-3xl">Navbar</h2>

      <ul className="flex gap-5 text-2xl">
        <li>
          <NavLink className={({ isActive }) => (isActive ? "active" : "pending") + ` navlink`} to="/">
            Home
          </NavLink>
        </li>

        <li>
          <NavLink className={({ isActive }) => (isActive ? "active" : "pending") + ` navlink`} to="/about">
            About
          </NavLink>
        </li>

        <li>
          <NavLink className={({ isActive }) => (isActive ? "active" : "pending") + ` navlink`} to="/cources">
            Cources
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
