// Profile.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useToken from '../App/useToken';

function Profile() {
    const { token } = useToken();
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate('/login');
            return;
        }

        fetch('http://localhost:1443/api/user/me', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
        .then((res) => res.json())
        .then((data) => setUserData(data))
        .catch((err) => {
            console.error('Error fetching user data:', err);
            navigate('/login');
        });
    }, [token, navigate]);

    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Profile</h2>
            <p>Email: {userData.email}</p>
            <p>Active: {userData.active ? 'Yes' : 'No'}</p>
        </div>
    );
}

export default Profile;

