import React, { useState } from "react";
import Gender from "./components/Gender";
import Nav from "./components/Nav";

const App = () => {
  const [gender, setGender] = useState("Male");

  const changeGender = () => {
    if (gender == "Male") {
      setGender("Female");
    } else if (gender == "Female") {
      setGender("Other");
    } else {
      setGender("Male");
    }
  };

  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  }

  return (
    <div className={`p-10 h-screen ${theme === "light" ? "bg-gray-200 text-zinc-700" : "bg-zinc-700 text-gray-200"} transition-all duration-200`}>
      <Nav theme={theme} toggleTheme={toggleTheme} />
      <h1 className="text-5xl font-bold text-amber-300 pb-5">Your gender is ~ {gender}</h1>
      <button onClick={changeGender} className="px-3 py-2 bg-red-400 rounded-md font-bold shadow-blue-400 shadow-md active:scale-95 transition-all duration-300 transition-ease mr-4">
        Change Gender
      </button>
      <Gender gender={gender} />
    </div>
  );
};

export default App;
