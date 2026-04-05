import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = ({ theme, setTheme }) => {
  return (
    <div className={`min-h-screen bg-linear-to-bl flex flex-col ${theme === "light" ? "from-red-300 to-blue-400 text-black" : "from-zinc-800 to-blue-700 text-white"}`}>
      <Navbar theme={theme} setTheme={setTheme} />

      <main className="flex-1 flex items-center justify-center text-5xl">
        <Outlet />
      </main>

      <Footer theme={theme} />
    </div>
  );
};

export default Layout;
