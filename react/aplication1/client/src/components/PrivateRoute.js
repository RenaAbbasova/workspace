import { useState, useEffect } from "react"
import { Navigate } from "react-router-dom"

function PrivateRoute({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem("accessToken")
    setIsAuthenticated(token !== null)
  }, [])

  if (isAuthenticated === null) return <div>Loading...</div>  // Prevent flickering

  return isAuthenticated ? children : <Navigate to="/login" replace />
}

export default PrivateRoute




