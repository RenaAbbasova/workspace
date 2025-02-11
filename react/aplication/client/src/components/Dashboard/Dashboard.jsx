import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";  // ✅ CORRECT (named export)

import "./Dashboard.css";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("accessToken"));
  const navigate = useNavigate();

  useEffect(() => {
    // If token is not available, navigate to login
    if (!token) {
      navigate("/login");
      return;
    }

    // If we have a token, try to decode it
    try {
      const decodedToken = jwtDecode(token); // Decode token
      if (decodedToken && decodedToken.user) {
        setUser(decodedToken.user);  // Update user data based on decoded token
      }
    } catch (error) {
      console.error("Error decoding token:", error);
      localStorage.removeItem("accessToken");
      // Reset token to null to avoid unnecessary re-renders
      if (token) {
        setToken(null);
      }
      navigate("/login");
    }
  }, [token, navigate]); // Dependency array includes `token` to trigger effect on change
  const logout = () => {
    setToken(null);
    localStorage.removeItem("accessToken");
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <nav>
          <ul>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            {user?.type === "admin" && (
              <li>
                <Link to="/users">Users</Link>
              </li>
            )}
            {user?.type === "teacher" && (
              <li>
                <Link to="/students">Students</Link>
              </li>
            )}
            <li>
              <a href="/login" onClick={logout}>
                Logout
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}


