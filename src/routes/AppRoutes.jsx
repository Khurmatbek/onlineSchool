import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import App from "../App";
import Header from "../components/Header/Header";
import OnlineLessons from "../pages/OnlineLessons/OnlineLessons";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <OnlineLessons />,
  },
]);
