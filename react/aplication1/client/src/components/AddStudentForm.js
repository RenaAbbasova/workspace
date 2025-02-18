import { useState } from "react"
import { createStudent } from "../api/studentApi"

function AddStudentForm({ teacherId, onStudentAdded }) {
  const [formData, setFormData] = useState({
    dni: "",
    name: "",
    last_name: "",
    date_of_birth: "",
  })
  const [error, setError] = useState("")

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
      const newStudent = await createStudent(teacherId, formData)
      onStudentAdded(newStudent)
      setFormData({
        dni: "",
        name: "",
        last_name: "",
        date_of_birth: "",
      })
    } catch (error) {
      console.error("Error adding student:", error)
      setError(error.message || "Failed to add student. Please try again.")
    }
  }

  return (
    <div className="add-student-form mb-4 bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4">Add New Student</h3>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="dni" className="block mb-1 font-medium">
            DNI:
          </label>
          <input
            type="text"
            id="dni"
            name="dni"
            value={formData.dni}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="name" className="block mb-1 font-medium">
            First Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="last_name" className="block mb-1 font-medium">
            Last Name:
          </label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="date_of_birth" className="block mb-1 font-medium">
            Date of Birth:
          </label>
          <input
            type="date"
            id="date_of_birth"
            name="date_of_birth"
            value={formData.date_of_birth}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="text-center">
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors font-medium"
        >
          Add
        </button>
        </div>
      </form>
    </div>
  )
}

export default AddStudentForm  


















