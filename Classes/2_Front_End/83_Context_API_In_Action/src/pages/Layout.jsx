import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <nav className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 flex flex-col bg-[#454040] text-[#E6F082]">
        <Outlet />
      </main>
    </nav>
  );
};

export default Layout;
