export async function signup(userData) {
    try {
      console.log("Sending signup data:", userData);
      const response = await fetch("http://localhost:1443/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
  
      console.log("Signup response status:", response.status);
  
      if (!response.ok) {
        const errorData = await response.json();
        console.log("Signup error data:", errorData);
        throw new Error(errorData.message || `Signup failed with status: ${response.status}`);
      }
  
      const responseData = await response.json();
      console.log("Signup response data:", responseData);
      return responseData;
    } catch (error) {
      console.error("Signup error:", error);
      throw error;
    }
  }