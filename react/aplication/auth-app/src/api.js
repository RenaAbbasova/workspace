// Helper function to handle API requests
async function apiRequest(url, method = "GET", body = null) {
    const token = localStorage.getItem("accessToken")
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    }
  
    const options = {
      method,
      headers,
      body: body ? JSON.stringify(body) : null,
    }
  
    const response = await fetch(`http://localhost:1443${url}`, options)
    if (!response.ok) {
      throw new Error(`API request failed: ${response.statusText}`)
    }
    return response.json()
  }
  
  // User-related functions
  export async function getUsers() {
    return apiRequest("/api/user")
  }
  
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
    return apiRequest(`/api/user/${id}`, "DELETE")
  }
  
  // Student-related functions
export async function getStudents(teacherId) {
  return apiRequest(`/api/teacher/${teacherId}/students`);
}

export async function createStudent(teacherId, studentData) {
  return apiRequest(`/api/teacher/${teacherId}/students`, "POST", studentData);
}

export async function updateStudent(teacherId, studentId, updates) {
  return apiRequest(`/api/teacher/${teacherId}/students`, "PUT", { studentId, ...updates });
}

export async function deleteStudent(teacherId, studentId) {
  return apiRequest(`/api/teacher/${teacherId}/students/${studentId}`, "DELETE");
}

  
  // Authentication function
  export async function login(username, password) {
    const response = await fetch("http://localhost:1443/token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    })
  
    if (!response.ok) {
      throw new Error("Login failed")
    }
  
    const data = await response.json()
    localStorage.setItem("accessToken", data.token)
    return data
  }
  
  export async function logout() {
    localStorage.removeItem("accessToken")
  }

  export async function signup(userData) {
    try {
      console.log("Sending signup data:", userData)
      const response = await fetch("http://localhost:1443/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      })
  
      console.log("Signup response status:", response.status)
  
      if (!response.ok) {
        const errorData = await response.json()
        console.log("Signup error data:", errorData)
        throw new Error(errorData.message || `Signup failed with status: ${response.status}`)
      }
  
      const responseData = await response.json()
      console.log("Signup response data:", responseData)
      return responseData
    } catch (error) {
      console.error("Signup error:", error)
      throw error
    }
  }
  
  