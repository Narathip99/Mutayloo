import React from "react";
import { useLocation } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";

import Header from "./components/layout/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/layout/Footer";

import { Toaster } from "@/components/ui/toaster";

const App: React.FC = () => {
  const location = useLocation();

  return (
    <AuthProvider>
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
    </AuthProvider>
  );
};

export default App;
