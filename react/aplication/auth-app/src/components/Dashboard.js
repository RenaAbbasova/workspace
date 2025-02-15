import "../styles/Dashboard.css" 
import { useEffect, useState } from "react"
import { Link, Outlet, useNavigate } from "react-router-dom"
import { jwtDecode } from "jwt-decode"

function Dashboard() {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("accessToken")
    if (token) {
      const decodedToken = jwtDecode(token)
      setUser(decodedToken.user)
    } else {
      navigate("/login")  // Redirect if no token
    }
  }, [navigate])

  const logout = () => {
    localStorage.removeItem("accessToken")
    navigate("/login")
  }

  if (!user) return <div>Loading...</div>

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <nav>
          <ul>
            <li><Link to="profile">Profile</Link></li>
            {user.type === "admin" && <li><Link to="users">Users</Link></li>}
            {user.type === "teacher" && <li><Link to="students">Students</Link></li>}
            <li><button onClick={logout}>Logout</button></li>
          </ul>
        </nav>
      </div>

      {/* Main Content (Outlet renders the nested route) */}
      <main className="dashboard-content">
        <Outlet />
      </main>
    </div>
  )
}

export default Dashboard


