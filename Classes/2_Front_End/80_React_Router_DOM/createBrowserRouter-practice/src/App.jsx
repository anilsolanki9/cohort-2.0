import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import About from "./pages/About";
import Cources from "./pages/Cources";
import Home from "./pages/Home";

import Layout from "./pages/Layout";
import CourseDetails from "./pages/CourseDetails";
import NotFound from "./NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "cources",
        element: <Cources />,
      },
      {
        path: "cources/:courseId",
        element: <CourseDetails />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
