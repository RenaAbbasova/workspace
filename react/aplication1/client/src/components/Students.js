import { useEffect, useState } from "react"
import { jwtDecode } from "jwt-decode"
import { getStudents, deleteStudent } from "../api/studentApi"
import AddStudentForm from "./AddStudentForm"

function Students() {
  const [students, setStudents] = useState([])
  const [error, setError] = useState("")
  const [teacherId, setTeacherId] = useState(null)
  const [showAddForm, setShowAddForm] = useState(false)

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
        setTeacherId(teacherId)

        const data = await getStudents(teacherId)
        setStudents(data) 
      } catch (error) {
        console.error("Error fetching students:", error)
        setError("An error occurred while fetching students")
      }
    }

    fetchStudents()
  }, [])

  const handleDeleteStudent = async (studentId) => {
    console.log("Student ID to delete:", studentId);  // Log the ID being passed to the function
    if (window.confirm("Are you sure you want to delete this student?")) {
      try {
        await deleteStudent(studentId, teacherId);  // Pass the correct teacherId
        setStudents((prevStudents) => prevStudents.filter((student) => student.id !== studentId));
      } catch (error) {
        console.error("Error deleting student:", error);  // Adjusted error log
        setError("An error occurred while deleting the student");
      }
    }
  };
  
  const handleStudentAdded = (newStudent) => {
    setStudents((prevStudents) => [...prevStudents, newStudent])
    setShowAddForm(false)
  }

  if (error) return <div>Error: {error}</div>

  return (
    <div className="students-container">
      <h1 className="text-2xl font-bold mb-4">Students</h1>
      <button
        onClick={() => setShowAddForm(!showAddForm)}
        className="mb-4 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors"
      >
        {showAddForm ? "Cancel" : "Add New Student"}
      </button>
      {showAddForm && <AddStudentForm teacherId={teacherId} onStudentAdded={handleStudentAdded} />}
      {students.length === 0 ? (
        <p>No students found.</p>
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
                    onClick={() => handleDeleteStudent(student.id)}  // Correctly pass student.id here
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


















