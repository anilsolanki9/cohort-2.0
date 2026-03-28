import React from "react";

const Card = (props) => {
  let user = props.user;

  return (
    <div className="w-fit bg-white space-y-12 rounded-2xl overflow-hidden">
      <div className="w-100 h-50 relative">
        <img src={user.bannerImage} alt="" className="banner w-full h-full object-cover object-center" />
        <img src={user.profileImage} alt="" className="profile absolute -bottom-10 left-10 w-22 h-22 object-cover object-center rounded-full ring-white ring-4" />
      </div>
      <div id="content" className="p-4 pt-0">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">{user.userName}</h2>
            <p className="text-gray-400 font-semibold">{user.role}</p>
          </div>
          <div className={`flex items-center justify-center gap-2 rounded-full px-4 py-1 ${user.isOnline ? "bg-green-400/10" : "bg-red-400/10"} `}>
            <div className={`w-2 h-2 rounded-full ${user.isOnline ? "bg-emerald-400" : "bg-red-400"}   `}></div>
            <p>{user.isOnline ? "Online" : "Offline"}</p>
          </div>
        </div>
        <div className="flex justify-around items-center px-4 py-2 bg-emerald-200/20 rounded-2xl mt-3">
          <div className="flex flex-col text-center justify-center items-center flex-1">
            <h3 className="text-3xl font-bold">4.5</h3>
            <p className="text-lg text-zinc-600">Rating</p>
          </div>
          <div className="flex flex-col text-center justify-center items-center flex-1">
            <h3 className="text-3xl font-bold">200</h3>
            <p className="text-lg text-zinc-600">Hours</p>
          </div>
          <div className="flex flex-col text-center justify-center items-center flex-1">
            <h3 className="text-3xl font-bold">06</h3>
            <p className="text-lg text-zinc-600">Months</p>
          </div>
        </div>
        <a href="#" className="bg-black text-white block text-center w-full py-2 cursor-pointer  rounded-full mt-4">
          Get in Touch
        </a>
      </div>
    </div>
  );
};

export default Card;
