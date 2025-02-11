// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar({ isAdmin, isTeacher, logout }) {
    return (
        <div className="sidebar">
            <ul>
                <li><Link to="/profile">Profile</Link></li>
                {isAdmin && <li><Link to="/users">Users</Link></li>}
                {isTeacher && <li><Link to="/students">Students</Link></li>}
                <li><button onClick={logout}>Logout</button></li>
            </ul>
        </div>
    );
}

export default Sidebar;
