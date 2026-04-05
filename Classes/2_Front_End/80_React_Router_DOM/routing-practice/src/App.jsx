import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Cources from "./pages/Cources";
import Home from "./pages/Home";
import Cohort1 from "./pages/Cohort1";
import Cohort2 from "./pages/Cohort2";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cources">
          <Route index element={<Cources />} />
          <Route path="cohort1" element={<Cohort1 />} />
          <Route path="cohort2" element={<Cohort2 />} />
        </Route>
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
