import React from "react";
import ReactDOM from "react-dom/client";
// styles
import "@/styles/globals.css";
import "@/styles/tailwind.css";

// routes
import { RouterProvider } from "react-router-dom";
import router from "./routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
