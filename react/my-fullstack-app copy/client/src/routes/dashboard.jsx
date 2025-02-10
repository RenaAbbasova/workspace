import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Dashboard = () => {
  const [user, setUser] = useState(null)
  const [error, setError] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token")
      if (!token) {
        navigate("/login")
        return
      }

      try {
        const response = await fetch("http://localhost:3000/auth/users", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (response.ok) {
          const data = await response.json()
          setUser(data.user)
        } else {
          throw new Error("Failed to fetch user data")
        }
      } catch (error) {
        console.error("Error fetching user data:", error)
        setError("Failed to load user data")
        localStorage.removeItem("token")
        navigate("/login")
      }
    }

    fetchUserData()
  }, [navigate])

  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate("/login")
  }

  if (error) {
    return <div className="text-red-500">{error}</div>
  }

  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <h2 className="text-3xl font-extrabold text-gray-900">Welcome to the Dashboard</h2>
                <p>Email: {user.email}</p>
                <p>User Type: {user.type}</p>
                <p>Active: {user.active ? "Yes" : "No"}</p>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard



