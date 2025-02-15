import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
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
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p className="signup-link">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  )
  }

  export default Login


