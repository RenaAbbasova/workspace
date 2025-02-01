import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { decodeToken } from "react-jwt"

function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      })

      if (response.ok) {
        const data = await response.json()
        // Store the token in localStorage
        localStorage.setItem("token", data.token)

        // Decode the token
        const decodedToken = decodeToken(data.token)

        if (decodedToken) {
          // Navigate to the dashboard
          navigate("/dashboard", { state: { username: decodedToken.username } })
        } else {
          console.error("Invalid token received")
        }
      } else {
        console.error("Error de autenticación")
      }
    } catch (error) {
      console.error("Error al hacer la solicitud:", error)
    }
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
    </div>
  )
}

export default Login


  
