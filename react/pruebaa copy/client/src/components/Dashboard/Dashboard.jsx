import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar'; // Import Sidebar component
import { decodeToken } from 'react-jwt'; // For decoding token

export default function Dashboard() {
  const navigate = useNavigate();

  // Decode the token to fetch user details
  const token = localStorage.getItem('token');
  const decodedToken = token ? decodeToken(token) : null;
  const userType = decodedToken ? decodedToken.type : ''; // 'admin' or 'teacher'

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from localStorage
    navigate('/'); // Redirect to the login page
  };

  return (
    <div className="dashboard-layout">
      <Sidebar handleLogout={handleLogout} />
      
      <div className="content">
        <h2>Welcome to your Dashboard!</h2>
        <p>User Type: {userType}</p> {/* Display user type */}
        
        {/* Admin/Teacher Specific Views */}
        {userType === 'admin' && (
          <div>
            <h3>Admin View</h3>
            {/* Add admin-specific components, e.g., user management */}
          </div>
        )}
        
        {userType === 'teacher' && (
          <div>
            <h3>Teacher View</h3>
            {/* Add teacher-specific components, e.g., students' list */}
          </div>
        )}
      </div>
    </div>
  );
}


