import React from "react";

const Navbar = ({ setFormMode }) => {
  return (
    <div className="px-10 py-4 flex items-center justify-between">
      <h2 className="text-4xl">Manage Student Marks</h2>
      <button
        onClick={() => {
          setFormMode(true);
        }}
        className="bg-Accent text-Bg font-bold px-5 py-2 rounded-2xl cursor-pointer active:scale-95"
      >
        Add Student <i className="ri-add-line"></i>
      </button>
    </div>
  );
};

export default Navbar;
