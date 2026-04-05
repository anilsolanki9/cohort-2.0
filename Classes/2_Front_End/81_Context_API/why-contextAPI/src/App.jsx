import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
  const [theme, setTheme] = useState("light");

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout theme={theme} setTheme={setTheme} />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
