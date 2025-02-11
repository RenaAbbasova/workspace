/* "use client"

import { useEffect, useState } from "react"

function Users() {
  const [users, setUsers] = useState([])
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("accessToken")
        const response = await fetch("http://localhost:1443/api/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        if (response.ok) {
          const data = await response.json()
          setUsers(data)
        } else {
          setError("Failed to fetch users")
        }
      } catch (error) {
        console.error("Error fetching users:", error)
        setError("An error occurred while fetching users")
      }
    }

    fetchUsers()
  }, [])

  if (error) return <div>Error: {error}</div>

  return (
    <div>
      <h1>Users</h1>
      {users.length === 0 ? (
        <p>Loading users...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.username} - {user.type}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Users */

"use client"

import { useEffect, useState } from "react"

function Users() {
  const [users, setUsers] = useState([])
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("accessToken")
        const response = await fetch("http://localhost:1443/api/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        if (response.ok) {
          const data = await response.json()
          setUsers(data)
        } else {
          setError("Failed to fetch users")
        }
      } catch (error) {
        console.error("Error fetching users:", error)
        setError("An error occurred while fetching users")
      }
    }

    fetchUsers()
  }, [])

  if (error) return <div>Error: {error}</div>

  return (
    <div className="users-container">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      {users.length === 0 ? (
        <p>Loading users...</p>
      ) : (
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
            {users.map((user) => (
              <tr key={user.id}>
                <td className="py-2 px-4 border-b">{user.id}</td>
                <td className="py-2 px-4 border-b">{user.email}</td>
                <td className="py-2 px-4 border-b">{user.type}</td>
                <td className="py-2 px-4 border-b">{user.active ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default Users

