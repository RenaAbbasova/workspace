import { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/users", {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        }).then(response => {
            setUsers(response.data);
        }).catch(error => {
            console.error("Failed to load users", error);
        });
    }, []);

    return (
        <div>
            <h2>Users List</h2>
            <ul>
                {users.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>
        </div>
    );
};

export default Users;
