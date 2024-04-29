import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../Redux/UserSlice";
import { useNavigate } from "react-router-dom";
const Logout = () => {
  const dispatch = useDispatch();
const navigate=useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("userData");
    dispatch(setUser(null));
    navigate("/login");
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
