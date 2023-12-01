import React, { createContext, useContext, useState } from "react";

// Create the AuthContext
const AuthContext = createContext();

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState("");
  console.log('isAuthenticated',isAuthenticated)

  const login = (dataAuth) => {
    setIsAuthenticated(dataAuth);
  };

  const logout = () => {
    setIsAuthenticated(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};