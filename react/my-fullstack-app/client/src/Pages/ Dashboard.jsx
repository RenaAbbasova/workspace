import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is authenticated
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login"); // Redirect to login if no token
      return;
    }

    // Fetch user data (replace with your API endpoint)
    axios.get("https://jsonplaceholder.typicode.com/users/1", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => setUser(response.data))
    .catch((error) => console.error("Error fetching user data:", error));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token
    navigate("/login"); // Redirect to login
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      {user ? (
        <div className="mt-4">
          <p>Welcome, <span className="font-semibold">{user.name}</span>!</p>
          <button className="btn btn-error mt-4" onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}

export default Dashboard;
