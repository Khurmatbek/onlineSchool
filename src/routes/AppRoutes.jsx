import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import App from "../App";
import Header from "../components/Header/Header";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,

  }
]);
