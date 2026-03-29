import React from "react";
import Upper from "./Upper";
import Lower from "./Lower";

const Card = ({ user, removeHandler }) => {
  return (
    <div className="w-100 bg-zinc-200 rounded-2xl">
      <Upper profileImg={user.profileImg} />
      <Lower user={user} removeHandler={removeHandler} />
    </div>
  );
};

export default Card;
