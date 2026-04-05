import React from "react";
import { NavLink } from "react-router-dom";

const Cources = () => {
  return (
    <div>
      <h1>All Cources Page</h1>
      <ul className="bg-emerald-200 text-black text-2xl p-4 mt-5 space-y-3 rounded-2xl w-fit mx-auto">
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
