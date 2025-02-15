import { useEffect, useState } from "react"
import { getUsers, deleteUser } from "../api"


function Users() {
  const [users, setUsers] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      const data = await getUsers()
      setUsers(data)
    } catch (err) {
      setError(err.message)
    }
  }

  const handleDeleteUser = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await deleteUser(id)
        setUsers(users.filter((user) => user.id !== id))
      } catch (err) {
        setError(err.message)
      }
    }
  }

  if (error) return <div>Error: {error}</div>

  return (
    <div>
      <h2>Users</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Type</th>
            <th>Active</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td>{user.type}</td>
              <td>{user.active ? "Yes" : "No"}</td>
              <td>
                <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Users


