import React from "react";
import { useLocation } from "react-router-dom";

import Header from "./components/layout/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/layout/Footer";

import { Toaster } from "@/components/ui/toaster";

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

      <Toaster />
    </div>
  );
};

export default App;
