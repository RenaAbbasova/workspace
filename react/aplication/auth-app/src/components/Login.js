"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../styles/Login.css"


function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    try {
      const response = await fetch("http://localhost:1443/token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      })
      if (response.ok) {
        const { token } = await response.json()
        localStorage.setItem("accessToken", token)
        navigate("/dashboard")
      } else {
        setError("Login failed. Please check your credentials.")
      }
    } catch (error) {
      console.error("Error during login:", error)
      setError("An error occurred. Please try again.")
    }
  }

  
  return (
    <div className="login-container">
      <h3>Login to your account</h3>
      <form onSubmit={handleSubmit}>
        {error && <p className="error">{error}</p>}
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="Enter Username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-footer">
          <button type="submit">Login</button>
          <a href="/forgot-password">Forgot password?</a>
        </div>
      </form>
    </div>
  )
}

export default Login


