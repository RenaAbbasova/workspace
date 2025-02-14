"use client"

import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { signup } from "../api"
import "../styles/Signup.css"

function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    type: "teacher", // Default to teacher, can be changed if needed
  })
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    try {
      await signup(formData)
      console.log("Signup successful")
      navigate("/login")
    } catch (error) {
      console.error("Error during signup:", error)
      setError(error.message || "Signup failed. Please try again.")
    }
  }

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Sign Up</h2>
        {error && <p className="error">{error}</p>}
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="type">User Type:</label>
          <select id="type" name="type" value={formData.type} onChange={handleChange} required>
            <option value="teacher">Teacher</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <p className="login-link">
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </div>
  )
}

export default Signup





