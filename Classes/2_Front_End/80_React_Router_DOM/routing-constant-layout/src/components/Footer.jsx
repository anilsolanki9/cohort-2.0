import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black/30 flex h-15 justify-between px-10 items-center">
      <h3 className="text-3xl">Footer</h3>
      <ul className="flex gap-5 text-2xl">
        <li className="bg-zinc-600 text-white font-bold px-4 py-1 rounded-lg select-none">
          <NavLink style={{ color: "white" }} to="/">
            Home
          </NavLink>
        </li>
        <li
          onClick={() => {
            navigate(-1);
          }}
          className="bg-zinc-600 text-white font-bold px-4 py-1 rounded-lg cursor-pointer select-none"
        >
          Back
        </li>
      </ul>
    </div>
  );
};

export default Footer;
