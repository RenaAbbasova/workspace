import { useNavigate } from "react-router-dom"
import { decodeToken } from "react-jwt"

const Layout = ({ children }) => {
  const navigate = useNavigate()
  const token = localStorage.getItem("token")
  const decodedToken = token ? decodeToken(token) : null
  const username = decodedToken ? decodedToken.username : null

  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate("/login")
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">My App</h1>
          {username && (
            <div className="flex items-center">
              <span className="mr-4">Welcome, {username}!</span>
              <button onClick={handleLogout} className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-100">
                Logout
              </button>
            </div>
          )}
        </div>
      </header>

      <main className="flex-grow container mx-auto p-4">{children}</main>

      <footer className="bg-gray-200 p-4 text-center">
        <p>&copy; 2023 My App. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Layout

