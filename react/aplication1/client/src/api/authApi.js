//auth - related function

export async function login(username, password) {
  const response = await fetch("http://localhost:1443/token", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }

  const data = await response.json();
  localStorage.setItem("accessToken", data.token);
  return data;
}

export async function logout() {
  localStorage.removeItem("accessToken");
} 



