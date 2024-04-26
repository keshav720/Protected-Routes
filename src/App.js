import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import FreelancerScreen from "./components/Freelancer";
import ClientScreen from "./components/Clients";
import AdminScreen from "./components/Admin";
import Login from "./components/Login";

const users = [
  { username: "freelancer", password: "freelancer123", role: "freelancer" },
  { username: "client", password: "client123", role: "client" },
  { username: "admin", password: "admin123", role: "admin" },
];

function App() {
  //please change  your user role from here 
  const currentUser = users[0];

  return (
    <Router>
      <div>
        {currentUser ? (
          <button >Logout</button>
        ) : (
          <Navigate to="/login" />
        )}

        {/* Define protected routes */}
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/freelancer" element={currentUser && currentUser.role === 'freelancer' ? <FreelancerScreen /> : <Navigate to="/" />} />
          <Route path="/client" element={currentUser && currentUser.role === 'client' ? <ClientScreen /> : <Navigate to="/" />} />
          <Route path="/admin" element={currentUser && currentUser.role === 'admin' ? <AdminScreen /> : <Navigate to="/" />} />
          <Route path="/" element={<h1>Welcome to Protected Routes Demo</h1>} />
        </Routes>
      </div>
    </Router>
  );

}

export default App;
