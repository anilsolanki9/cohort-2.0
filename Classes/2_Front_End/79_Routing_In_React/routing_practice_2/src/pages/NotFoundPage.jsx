import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="bg-red-950 absolute top-0 left-0 h-screen w-screen text-white/80 flex flex-col gap-5 justify-center items-center text-7xl font-bold tracking-wider">
      <h1>404 Page Not Found</h1>
      <Link to="/" className="bg-emerald-400 px-5 py-2 leading-tight rounded-2xl mt-4">
        Go to Home Page
      </Link>
    </div>
  );
};

export default NotFoundPage;
