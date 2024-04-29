import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../Redux/UserSlice";
import { useNavigate } from "react-router-dom";

const users = [
  { username: "freelancer", password: "freelancer123", role: "freelancer" },
  { username: "client", password: "client123", role: "client" },
  { username: "admin", password: "admin123", role: "admin" },
];

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = users.find(
      (user) => user.username === username && user.role === role
    );

    if (user) {
      localStorage.setItem("userData", JSON.stringify(user));
      dispatch(setUser(user));
      console.log("User logged in:", role, user);
      navigate(`/${role}`);
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="User Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
