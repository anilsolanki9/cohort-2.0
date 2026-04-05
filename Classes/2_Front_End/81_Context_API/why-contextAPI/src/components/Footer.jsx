import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" flex justify-between items-center px-10 py-2">
      <h2 className="text-2xl">Footer</h2>
      <div className="text-xl">
        <NavLink to="/">Home</NavLink>
      </div>
    </footer>
  );
};

export default Footer;
