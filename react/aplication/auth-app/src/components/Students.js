"use client"

import { useEffect, useState } from "react"
import { jwtDecode } from "jwt-decode"



function Students() {
  const [students, setStudents] = useState([])
  const [error, setError] = useState("")


  

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const token = localStorage.getItem("accessToken")
        if (!token) {
          setError("No authentication token found")
          return
        }

        const decodedToken = jwtDecode(token)
        const teacherId = decodedToken.user.id
     

        const response = await fetch(`http://localhost:1443/api/teacher/${teacherId}/students`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        if (response.ok) {
          const data = await response.json()
          setStudents(data)
        } else {
          setError("Failed to fetch students")
        }
      } catch (error) {
        console.error("Error fetching students:", error)
        setError("An error occurred while fetching students")
      }
    }

    fetchStudents()
  }, [])
  

  const handleDeleteStudent = async (studentId) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      try {
        const token = localStorage.getItem("accessToken")
        const decodedToken = jwtDecode(token)
        const teacherId = decodedToken.user.id  // Get the teacher's ID from the JWT
        
        console.log("Deleting student with ID:", studentId);  // Log student ID
        console.log("Teacher ID from token:", teacherId);  // Log teacher ID


        // Send the DELETE request to the backend
        const response = await fetch(`http://localhost:1443/api/teacher/${teacherId}/students/${studentId}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
  
        if (response.ok) {
          // Update the state to remove the student from the list
          setStudents((prevStudents) =>
            prevStudents.filter((student) => student.id !== studentId)
          )
        } else {
          // Logging the response for further debugging
          const errorMessage = await response.text();
          console.error("Delete failed with status:", response.status);
          console.error("Response body:", errorMessage);
          setError("Failed to delete student")
        }
      } catch (error) {
        console.error("Error deleting student:", error)
        setError("An error occurred while deleting the student")
      }
    }
  }
  
  
  
  

  if (error) return <div>Error: {error}</div>

  return (
    <div className="students-container">
      <h1 className="text-2xl font-bold mb-4">Students</h1>
      {students.length === 0 ? (
        <p>Loading students...</p>
      ) : (
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">DNI</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Last Name</th>
              <th className="py-2 px-4 border-b">Date of Birth</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td className="py-2 px-4 border-b">{student.id}</td>
                <td className="py-2 px-4 border-b">{student.dni}</td>
                <td className="py-2 px-4 border-b">{student.name}</td>
                <td className="py-2 px-4 border-b">{student.last_name}</td>
                <td className="py-2 px-4 border-b">{new Date(student.date_of_birth).toLocaleDateString()}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    onClick={() => handleDeleteStudent(student.id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default Students








