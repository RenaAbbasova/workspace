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
              <th className="py-2 px-4 border-b">Teacher ID</th>
              <th className="py-2 px-4 border-b">Created At</th>
              <th className="py-2 px-4 border-b">Updated At</th>
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
                <td className="py-2 px-4 border-b">{student.teacher_id}</td>
                <td className="py-2 px-4 border-b">{new Date(student.createdAt).toLocaleString()}</td>
                <td className="py-2 px-4 border-b">{new Date(student.updatedAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default Students



