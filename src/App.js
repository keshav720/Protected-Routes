import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import FreelancerScreen from "./components/Freelancer";
import ClientScreen from "./components/Clients";
import AdminScreen from "./components/Admin";
import Login from "./components/Login";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./Redux/UserSlice";
import Logout from "./components/Logout";
const users = [
  { username: "freelancer", password: "freelancer123", role: "freelancer" },
  { username: "client", password: "client123", role: "client" },
  { username: "admin", password: "admin123", role: "admin" },
];

function App() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state?.user);

  return (
    <Router>
      <div>
        {currentUser?.user ? (
           <Logout/>
        ) : (
          <Navigate to="/login" />
        )}
        <Routes>
          <Route path="/login" element={<Login />} />

          {/* Protected routes with conditional rendering and redirect */}
          <Route
            path="/freelancer"
            element={
              currentUser?.role === "freelancer" ? (
                <FreelancerScreen />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
          <Route
            path="/client"
            element={
              currentUser?.role === "client" ? (
                <ClientScreen />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
          <Route
            path="/admin"
            element={
              currentUser?.role === "admin" ? (
                <AdminScreen />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />

          <Route path="/" element={<h1>Welcome to Protected Routes Demo</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
