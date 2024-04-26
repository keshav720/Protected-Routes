import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import FreelancerScreen from "./components/Freelancer";
import ClientScreen from "./components/Clients";
import AdminScreen from "./components/Admin";
import Login from "./components/Login";
import { useDispatch,useSelector } from "react-redux";
import { setUser } from './Redux/UserSlice';

const users = [
  { username: "freelancer", password: "freelancer123", role: "freelancer" },
  { username: "client", password: "client123", role: "client" },
  { username: "admin", password: "admin123", role: "admin" },
];

function App() {
 // const currentUser = users[0];
  const dispatch = useDispatch(); 
 const currentUser = useSelector(state => state?.user); 
  console.log("current---",currentUser?.user?.role);

  const handleLogout = () => {
    localStorage.removeItem('userData');
    dispatch(setUser(null));
  };

  return (
    <Router>
      <div>
        {currentUser ? (
          <button onClick={handleLogout} >Logout</button>
        ) : (
          <Navigate to="/login" />
        )}
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/freelancer" element={currentUser && currentUser?.user?.role === 'freelancer' ? <FreelancerScreen /> : <Navigate to="/" />} />
          <Route path="/client" element={currentUser && currentUser?.user?.role === 'client' ? <ClientScreen /> : <Navigate to="/" />} />
          <Route path="/admin" element={currentUser && currentUser?.user?.role === 'admin' ? <AdminScreen /> : <Navigate to="/" />} />
          <Route path="/" element={<h1>Welcome to Protected Routes Demo</h1>} />
        </Routes>
      </div>
    </Router>
  );
}
 
export default App;
