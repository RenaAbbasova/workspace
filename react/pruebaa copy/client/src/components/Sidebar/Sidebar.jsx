import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar({ handleLogout }) {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <button onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
