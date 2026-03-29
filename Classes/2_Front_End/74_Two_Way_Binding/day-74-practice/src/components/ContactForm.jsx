import React, { useState } from "react";

const ContactForm = ({addContact}) => {

  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [profile, setProfile] = useState('');

  function isValidURL(str) {
  return /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/\S*)?$/.test(str);
}

   function submitHandler(e){
    e.preventDefault();

    if(name.trim()==="" || contact.trim()=="" || profile.trim()==""){
      console.log("Form field must have something");
      return;
    }

    if(!isValidURL(profile)) {
      addContact({name, contact, profile:`./xyzUser.png`})
    }
      else addContact({name, contact, profile})

    setName("");
    setContact("");
    setProfile("");
  }

  return (
    <div className="bg-[url(https://images.unsplash.com/photo-1773672726538-885c0d878033?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center h-full rounded-2xl flex flex-col justify-center">
      <form 
      onSubmit={submitHandler}
      className="w-120 mx-auto bg-black/20 backdrop-blur-2xl px-5 py-5 space-y-4 rounded-2xl flex flex-col">
        <h2 className="text-3xl font-bold">Add Contact</h2>
        <div className="flex flex-col gap-2 ">
          <label className="text-sm" htmlFor="name">
            Name:
          </label>
          <input required
          onChange={(e)=>{
            setName(e.target.value)
          }}
          value={name}
          className="outline-none bg-blue-200/5 px-3 py-1 focus:ring-2 ring-blue-400 rounded-md duration-150 transition-all" type="text" id="name" autoComplete="off" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm" htmlFor="contact">
            Contact Number:
          </label>
          <input required
          onChange={(e)=>{
            setContact(e.target.value)
          }}
          value={contact}
          className="outline-none bg-blue-200/5 px-3 py-1 focus:ring-2 ring-blue-400 rounded-md duration-150 transition-all" type="text" id="contact" autoComplete="off"  />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm" htmlFor="profile">
            Profile Image:
          </label>
          <input required
          onChange={(e)=>{
            setProfile(e.target.value)
          }}
          value={profile}
          className="outline-none bg-blue-200/5 px-3 py-1 focus:ring-2 ring-blue-400 rounded-md duration-150 transition-all" type="text" id="profile" autoComplete="off"  />
        </div>
        <button type="submit" className="text-center py-1 bg-white/70 text-black font-bold rounded-xl text-xl w-30 self-end active:scale-95 transition-all duration-200">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
