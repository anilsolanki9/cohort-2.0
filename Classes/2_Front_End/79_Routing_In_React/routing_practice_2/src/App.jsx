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
import NotFoundPage from "./pages/NotFoundPage";
import BackBtn from "./components/BackBtn";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products">
          <Route index element={<Products />} />
          {/* Products Nested Routes */}
          <Route path="mens" element={<Men />} />
          <Route path="womens" element={<Women />} />
        </Route>

        <Route path="/cources" element={<Cources />} />

        {/* Dynamic Routes */}
        <Route path="/cources/:courseName" element={<AnyCourse />} />

        {/* Nested Dynamic Route */}
        <Route path="/cources/:courseName/details" element={<CourseDetails />} />

        {/* Universal Route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <BackBtn />
    </div>
  );
};

export default App;
