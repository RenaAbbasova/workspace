import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { signup } from "../api/signupApi"
import "../styles/Signup.css"

function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    dni: "",
    name: "",
    last_name: "",
    date_of_birth: "",
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
      const response = await signup(formData)
      console.log("Signup successful:", response)
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
          <label htmlFor="dni">DNI:</label>
          <input type="text" id="dni" name="dni" value={formData.dni} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="name">First Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="last_name">Last Name:</label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="date_of_birth">Date of Birth:</label>
          <input
            type="date"
            id="date_of_birth"
            name="date_of_birth"
            value={formData.date_of_birth}
            onChange={handleChange}
            required
          />
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










