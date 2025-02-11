// Users.js
import React, { useEffect, useState } from 'react';

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:1443/api/user', {
            method: 'GET',
        })
        .then((res) => res.json())
        .then((data) => setUsers(data))
        .catch((err) => console.error('Error fetching users:', err));
    }, []);

    return (
        <div>
            <h2>All Users</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.email} - {user.active ? 'Active' : 'Inactive'}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Users;
