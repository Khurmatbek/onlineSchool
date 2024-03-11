import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import App from "../App";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  
]);
