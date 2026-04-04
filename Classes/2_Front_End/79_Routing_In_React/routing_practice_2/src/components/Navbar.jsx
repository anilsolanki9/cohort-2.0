import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-10 h-15 bg-emerald-400 text-white font-bold">
      <h2 className="text-2xl">Navbar</h2>
      <ul className="flex gap-4 text-lg">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => {
              return isActive ? `text-violet-500` : `hover:text-violet-500 transition-all duration-200`;
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => {
              return isActive ? `text-violet-500` : `hover:text-violet-500 transition-all duration-200`;
            }}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className={({ isActive }) => {
              return isActive ? `text-violet-500` : `hover:text-violet-500 transition-all duration-200`;
            }}
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cources"
            className={({ isActive }) => {
              return isActive ? `text-violet-500` : `hover:text-violet-500 transition-all duration-200`;
            }}
          >
            Cources
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
