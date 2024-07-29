import React, { createContext, useContext, useState, useEffect } from "react";
import { AuthContextType } from "@/types/authContextType";
import { getProfile } from "@/api/userApi";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<any>(null);

  const login = async (token: string) => {
    localStorage.setItem("authToken", token);
    setIsAuthenticated(true);
    const userProfile = await getProfile(token);
    setUser(userProfile);
    localStorage.setItem("user", JSON.stringify(userProfile)); // Save user profile to localStorage
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user"); // Remove user profile from localStorage
    setIsAuthenticated(false);
    setUser(null);
  };

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      login(token);
    } else {
      // If token doesn't exist, we can also remove user data from localStorage
      localStorage.removeItem("user");
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, login, logout, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
