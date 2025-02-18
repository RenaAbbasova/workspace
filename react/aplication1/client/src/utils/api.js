// Helper function to handle API requests

export async function apiRequest(url, method = "GET", body = null) {
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



 
  