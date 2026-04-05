import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Cources from "./pages/Cources";
import Home from "./pages/Home";

import Layout from "./pages/Layout";
import CourseDetails from "./pages/CourseDetails";
import NotFound from "./NotFound";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cources" element={<Cources />} />
          <Route path="/cources/:courseId" element={<CourseDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
