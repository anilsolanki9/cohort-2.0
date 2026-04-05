import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 bg-black text-white text-9xl flex justify-center items-center">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
