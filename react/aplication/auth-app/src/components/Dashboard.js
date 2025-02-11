"use client"

import { useEffect, useState } from "react"
import { Link, Route, Routes, useNavigate, useLocation } from "react-router-dom"
import { jwtDecode } from "jwt-decode"
import Profile from "./Profile"
import Users from "./Users"
import Students from "./Students"

function Dashboard() {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const token = localStorage.getItem("accessToken")
    if (token) {
      const decodedToken = jwtDecode(token)
      setUser(decodedToken.user)
    }
  }, [])

  const logout = () => {
    localStorage.removeItem("accessToken")
    navigate("/login")
  }

  if (!user) return null

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <nav>
          <ul>
            <li>
              <Link to="/dashboard/profile">Profile</Link>
            </li>
            {user.type === "admin" && (
              <li>
                <Link to="/dashboard/users">Users</Link>
              </li>
            )}
            {user.type === "teacher" && (
              <li>
                <Link to="/dashboard/students">Students</Link>
              </li>
            )}
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          </ul>
        </nav>
      </div>
      <main className="dashboard-content">
        <Routes>
          <Route path="/" element={<h2>Welcome to your Dashboard</h2>} />
          <Route path="profile" element={<Profile />} />
          <Route path="users" element={<Users />} />
          <Route path="students" element={<Students />} />
        </Routes>
      </main>
    </div>
  )
}

export default Dashboard



