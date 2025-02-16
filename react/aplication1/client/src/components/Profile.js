import { useEffect, useState } from "react"
import { jwtDecode } from "jwt-decode"

function Profile() {
  const [user, setUser] = useState(null)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem("accessToken")
        if (!token) {
          setError("No authentication token found")
          return
        }

        const decodedToken = jwtDecode(token)
        const userId = decodedToken.user.id

        const response = await fetch(`http://localhost:1443/api/user/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        if (response.ok) {
          const data = await response.json()
          setUser(data)
        } else {
          setError("Failed to fetch user profile")
        }
      } catch (error) {
        console.error("Error fetching user profile:", error)
        setError("An error occurred while fetching user profile")
      }
    }

    fetchUserProfile()
  }, [])

  if (error) return <div>Error: {error}</div>
  if (!user) return <div>Loading...</div>

  return (
    <div className="profile-container">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Type</th>
            <th className="py-2 px-4 border-b">Active</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border-b">{user.id}</td>
            <td className="py-2 px-4 border-b">{user.email}</td>
            <td className="py-2 px-4 border-b">{user.type}</td>
            <td className="py-2 px-4 border-b">{user.active ? "Yes" : "No"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Profile

