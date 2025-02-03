const API_URL = import.meta.env.VITE_API_URL; // Read from .env file

export const fetchData = async () => {
  const response = await fetch(`${API_URL}/api/user`, {
    method: "GET",
    credentials: "include", // Important if using sessions
  });
  return response.json();
};
