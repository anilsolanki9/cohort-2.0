import React from "react";
import { NavLink } from "react-router-dom";

const Cources = () => {
  return (
    <div className="flex-1 bg-black text-white text-9xl flex flex-col justify-center items-center ">
      <h1>All Cources Page</h1>
      <ul className="bg-emerald-200 text-black text-2xl px-10 py-3 mt-5 space-y-3 rounded-2xl">
        <li className="bg-gray-400 px-3 py-1 rounded-lg">
          <NavLink to="cohort1">Cohort1 Page</NavLink>
        </li>
        <li className="bg-gray-400 px-3 py-1 rounded-lg">
          <NavLink to="cohort2">Cohort2 Page</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Cources;
