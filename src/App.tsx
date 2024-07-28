import React from "react";
import { useLocation } from "react-router-dom";

import Header from "./components/layout/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/layout/Footer";

const App: React.FC = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Outlet />
      </main>

      {location.pathname === "/login" ||
      location.pathname === "/register" ? null : (
        <Footer />
      )}
    </div>
  );
};

export default App;
