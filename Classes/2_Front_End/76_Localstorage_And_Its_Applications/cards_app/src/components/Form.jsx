import React, { useState } from "react";

const Form = ({ setUsersData }) => {
  const [userData, setUserData] = useState({ name: "", role: "", profileImg: "" });

  function submitHandler(e) {
    e.preventDefault();
    setUsersData((prev) => {
      return [...prev, userData];
    });
  }
  
  return (
    <div className="pb-3">
      <form onSubmit={submitHandler} action="" className="flex gap-2">
        <input
          onChange={(e) => {
            setUserData((prev) => {
              return { ...prev, name: e.target.value };
            });
          }}
          className="bg-black text-white font-semibold text-2xl px-5 py-2 rounded border-none outline-none"
          type="text"
          placeholder="name"
        />
        <input
          onChange={(e) => {
            setUserData((prev) => {
              return { ...prev, role: e.target.value };
            });
          }}
          className="bg-black text-white font-semibold text-2xl px-5 py-2 rounded border-none outline-none"
          type="text"
          placeholder="role"
        />
        <input
          onChange={(e) => {
            setUserData((prev) => {
              return { ...prev, profileImg: e.target.value };
            });
          }}
          className="bg-black text-white font-semibold text-2xl px-5 py-2 rounded border-none outline-none"
          type="text"
          placeholder="image url"
        />
        <button className="bg-zinc-100 text-black font-semibold text-2xl px-5 py-2 rounded border-none outline-none" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
