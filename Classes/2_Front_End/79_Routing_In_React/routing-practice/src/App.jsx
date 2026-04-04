import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Cources from "./pages/Cources";
import AnyCourse from "./pages/AnyCourse";
import CourseDetails from "./pages/CourseDetails";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cources" element={<Cources />} />

        {/* Products Nested Routes */}
        <Route path="/products/mens" element={<Men />} />
        <Route path="/products/womens" element={<Women />} />

        {/* Dynamic Routes */}
        <Route path="/cources/:courseName" element={<AnyCourse />} />

        {/* Nested Dynamic Route */}
        <Route path="/cources/:courseName/details" element={<CourseDetails />} />
      </Routes>
    </div>
  );
};

export default App;
