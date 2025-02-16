import { apiRequest } from "../utils/api";
  
export async function getUser(id) {
    return apiRequest(`/api/user/${id}`)
}
  
export async function createUser(userData) {
    return apiRequest("/api/user", "POST", userData)
}
  
export async function updateUser(id, updates) {
    return apiRequest(`/api/user/${id}`, "PUT", updates)
}

export async function deleteUser(id) {
    try {
      const response = await fetch(`http://localhost:1443/api/user/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
  
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`)
      }
  
      return response.json()
    } catch (error) {
      console.error("Error in deleteUser:", error)
      throw error
    }
  }
  
export async function getUsers() {
  try {
    const response = await fetch("http://localhost:1443/api/user", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    return response.json()
  } catch (error) {
    console.error("Error in getUsers:", error)
    throw error
  }
}

