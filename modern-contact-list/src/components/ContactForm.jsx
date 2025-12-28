import React, { useState } from 'react';
import ContactCard from './ContactCard';

const ContactForm = () => {
  // form use state to manage the form
  const [form, setForm] = useState({
    imageUrl: '',
    userName: '',
    userRole: '',
    telNumber: '',
  });

  // all users array which contains object elements, initial value is empty array
  const [allUsers, setAllUsers] = useState([]);

  //on any change in element, input value of respective field get updates by react
  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = ev => {
    ev.preventDefault();
    setAllUsers([...allUsers, form]);
    setForm({ imageUrl: '', userName: '', userRole: '', telNumber: '' });
  };

  const removeHandler = idx => {
    const copyUsers = [...allUsers];
    copyUsers.splice(idx, 1);
    setAllUsers(copyUsers);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 bg-slate-100 p-4 min-h-screen">
      <form
        onSubmit={ev => {
          submitHandler(ev);
        }}
        className="flex-1 h-fit rounded-2xl bg-white shadow-lg p-6 space-y-5"
      >
        <h2 className="text-xl font-semibold text-slate-800">Create Contact</h2>

        {/* Image URL */}
        <div>
          <label className="block text-sm font-medium text-slate-600 mb-1">Profile Image URL</label>
          <input
            type="url"
            name="imageUrl"
            value={form.imageUrl}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
            className="w-full rounded-xl border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-slate-800 transition-all duration-200"
          />
        </div>

        {/* User Name */}
        <div>
          <label className="block text-sm font-medium text-slate-600 mb-1">Name</label>
          <input
            type="text"
            name="userName"
            value={form.userName}
            onChange={handleChange}
            placeholder="Anil Kumar"
            className="w-full rounded-xl border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-slate-800 transition-all duration-200"
          />
        </div>

        {/* User Role */}
        <div>
          <label className="block text-sm font-medium text-slate-600 mb-1">Role</label>
          <input
            type="text"
            name="userRole"
            value={form.userRole}
            onChange={handleChange}
            placeholder="Frontend Developer"
            className="w-full rounded-xl border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-slate-800 transition-all duration-200"
          />
        </div>

        {/* Telephone Number */}
        <div>
          <label className="block text-sm font-medium text-slate-600 mb-1">Phone Number</label>
          <input
            type="tel"
            name="telNumber"
            value={form.telNumber}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className="w-full rounded-xl border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-slate-800 transition-all duration-200"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-slate-900 text-white py-3 hover:bg-slate-800 transition-all duration-200 active:scale-95"
        >
          Save Contact
        </button>
      </form>

      <div className="contactList flex-2 min-h-full p-4 bg-slate-300 rounded-2xl shadow-lg overflow-auto">
        <div className=" grid grid-cols-1 md:grid-cols-2 auto-rows-auto gap-4 overflow-y-hidden">
          {allUsers.map((elem, idx) => {
            return <ContactCard elem={elem} idx={idx} removeHandler={removeHandler} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
