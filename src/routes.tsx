import { createBrowserRouter } from "react-router-dom";
import { Navigate } from "react-router-dom";

// components
import App from "./App";
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Account from "./pages/account/Account";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // Home
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Navigate to="/" />,
      },

      // auth
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },

      // account
      {
        path: "/account",
        element: <Account />,
      },
    ],
  },
]);

export default router;
