import React from "react";

const Men = ({ user, id, changeGender }) => {
  return (
    <div className="h-40 w-50 bg-blue-800 text-white flex items-center justify-center flex-col rounded-xl">
      <h2 className="text-3xl">{user.name}</h2>
      <p>{user.age}</p>
      <p>{user.gender}</p>
      <button
        onClick={() => {
          changeGender(id);
        }}
        className="bg-black text-white px-4 py-1 rounded-2xl mt-2 cursor-pointer active:scale-95"
      >
        Change Gender
      </button>
    </div>
  );
};

export default Men;
