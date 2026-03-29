import React from "react";

const ContactListHeader = ({handleSearch, filteredUsers}) => {


  return (
    <>
      <h1 className="text-4xl text-[#191536] font-bold">Your Contacts</h1>
      <p className="text-md pl-2 text-white/70">{filteredUsers.length} available</p>
      <div className="flex items-center space-x-2 bg-zinc-300 px-4 py-1.5 pl-3 rounded-full focus-within:ring-2 focus-within:ring-blue-600 transition-all duration-150 w-100">
        <i className="ri-search-line text-black"></i>
        <input
          onChange={(e)=>{
            handleSearch(e.target.value);
          }}
          

        className="outline-none border-none placeholder:text-black/70 text-black flex items-center w-full font-mono text-lg" type="search" placeholder="search by name or number" />
      </div>
    </>
  );
};

export default ContactListHeader;
