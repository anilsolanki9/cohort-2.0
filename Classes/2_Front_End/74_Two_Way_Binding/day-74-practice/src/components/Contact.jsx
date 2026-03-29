import React from "react";

const Contact = ({user, id, handleDelete}) => {
  return (
    <div id="contact-card" className="bg-zinc-600 rounded-2xl shrink-0 flex h-20 gap-4">
      <div className="w-23 h-full">
        <img
          className="w-full h-full object-cover object-center rounded-l-2xl"
          src={user.profile}
          alt=""
        />
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <h2 className="text-xl font-bold tracking-wide text-[#e5e5e5] leading-4">{user.name}</h2>
        <p className="font-mono text-zinc-400 font-semibold tracking-widest">{user.contact}</p>
      </div>
      <div className="w-25 flex items-center justify-start gap-4 mr-2">
        <i onClick={()=>{
          handleDelete(id);
        }} className="ri-delete-bin-line w-10 h-10 flex items-center justify-center bg-zinc-400 rounded-full  cursor-pointer active:scale-95 hover:text-red-600 hover:bg-red-200 transition-all duration-150"></i>
        <i className="ri-phone-fill w-10 h-10 flex items-center justify-center bg-zinc-400 rounded-full cursor-pointer active:scale-95 hover:text-green-600 hover:bg-emerald-200 transition-all duration-150"></i>
      </div>
    </div>
  );
};

export default Contact;
