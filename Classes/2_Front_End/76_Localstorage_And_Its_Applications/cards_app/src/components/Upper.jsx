import React from "react";

const Upper = ({profileImg}) => {
  return (
    <div className="w-full h-50 p-3 pb-0">
      <img
        className="w-full h-full object-cover object-center rounded-2xl shadow-md shadow-black/70"
        src={profileImg}
        alt=""
      />
    </div>
  );
};

export default Upper;
