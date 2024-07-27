import { createBrowserRouter } from "react-router-dom";
import { Navigate } from "react-router-dom";

// components
import App from "./App";
import Home from "./pages/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Navigate to="/" />,
      },
    ],
  },
]);

export default router;
