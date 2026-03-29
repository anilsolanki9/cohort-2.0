import React from "react";

const Lower = ({ user, removeHandler }) => {
  return (
    <div className="p-4 flex flex-col">
      <h2 className="text-3xl font-bold">{user.name}</h2>
      <p className="text-zinc-700">{user.role}</p>
      <button
        onClick={() => {
          removeHandler(user);
        }}
        className="bg-red-500 px-5 py-1 rounded text-white font-bold text-2xl cursor-pointer active:scale-95 mt-3 "
      >
        Remove
      </button>
    </div>
  );
};

export default Lower;
