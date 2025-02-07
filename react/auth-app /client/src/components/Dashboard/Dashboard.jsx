import React from 'react';

export default function Dashboard() {
  return(
    <h2>Dashboard</h2>
  );
}

// Inside your Dashboard.jsx or Preferences.jsx
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from localStorage
    navigate('/'); // Redirect to login page
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
