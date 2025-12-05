import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import App from "./App";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Verify from "./pages/Auth/Verify";
import ForgotPassword from "./pages/Auth/ForgotPassword";

function AppWrapper() {
  const navigate = useNavigate();

  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );

  const [message, setMessage] = useState({ type: "", text: "" });

useEffect(() => {
  const token = localStorage.getItem("token");
  const path = window.location.pathname;

  const publicRoutes = ["/login", "/register", "/verify", "/forgot"];

  if (!token && !publicRoutes.includes(path)) {
    setIsAuthenticated(false);
    navigate("/login", { replace: true });
  } else if (token) {
    setIsAuthenticated(true);
  }
}, [navigate]);


  //  After successful login
  const handleLoginSuccess = () => {
    localStorage.setItem("token", "true");
    setIsAuthenticated(true);
    setMessage({ type: "success", text: "Login Successfully" });
    navigate("/dispatch/dashboard", { replace: true });
  };

  //  Logout
  const handleLogout = () => {
    const confirmed = window.confirm("Are you sure you want to log out?");
    if (confirmed) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setIsAuthenticated(false);
      navigate("/login", { replace: true });
    }
  };

  return (
    <Routes>
      {/* Login always accessible */}
      <Route
        path="/login"
        element={<Login onLoginSuccess={handleLoginSuccess} />}
      />
      <Route path="/register" element={<Register />} />
      <Route path="/verify" element={<Verify />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* Protected App */}
      <Route
        path="/*"
        element={
          isAuthenticated ? (
            <App onLogout={handleLogout} message={message} />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
    </Routes>
  );
}

export default AppWrapper;
