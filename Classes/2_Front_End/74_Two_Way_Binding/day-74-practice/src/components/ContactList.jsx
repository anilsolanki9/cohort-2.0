import React from "react";
import Contact from "./Contact";

const ContactList = ({allUsers, handleDelete}) => {
  return (
    <div id="contactList" className="w-full h-full mt-2 rounded-2xl bg-zinc-500 p-3 flex flex-col gap-3 overflow-y-scroll">
      {allUsers.map((user, idx)=>{
        return <Contact key={idx} id={idx} user={user} handleDelete={handleDelete} />
      })}
    </div>
  );
};

export default ContactList;
