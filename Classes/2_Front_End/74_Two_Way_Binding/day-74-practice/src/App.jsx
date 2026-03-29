import React, { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import ContactListHeader from "./components/ContactListHeader";

const App = () => {
  const [allUsers, setAllUsers] = useState(localStorage.getItem("allUsers") ? JSON.parse(localStorage.getItem("allUsers")) : []);

  const [query, setQuery] = useState("");

  const filteredUsers = allUsers.filter((user) => user.name.toLowerCase().includes(query.trim().toLowerCase()) || user.contact.includes(query.trim()));

  function handleSearch(query) {
    setQuery(query.toLowerCase().trim());
  }

  function handleDelete(index) {
    const contactToDelete = filteredUsers[index];

    setAllUsers((prev) => prev.filter((user) => user != contactToDelete));
  }

  function addContact(contact) {
    setAllUsers((prev) => [...prev, contact]);
  }

  useEffect(() => {
    localStorage.setItem("allUsers", JSON.stringify(allUsers));
  }, [allUsers]);

  return (
    <div className="flex p-4 gap-4 h-screen">
      <div className="flex-1 bg-zinc-400 p-4 rounded-2xl flex flex-col gap-2">
        <ContactListHeader handleSearch={handleSearch} filteredUsers={filteredUsers} />
        <ContactList allUsers={filteredUsers} handleDelete={handleDelete} />
      </div>
      <div className="flex-1">
        <ContactForm addContact={addContact} />
      </div>
    </div>
  );
};

export default App;
