import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import ThemeContext from "../contexts/ThemeContext";

const Layout = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className={`flex-1 text-6xl ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
