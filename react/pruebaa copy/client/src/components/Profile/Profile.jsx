import React from 'react';
import { decodeToken } from 'react-jwt';

export default function Profile() {
  const token = localStorage.getItem('token');
  const decodedToken = token ? decodeToken(token) : null;

  return (
    <div className="profile">
      <h2>Profile</h2>
      {decodedToken ? (
        <div>
          <p><strong>ID:</strong> {decodedToken?.id || "Not Available"}</p>
          <p><strong>Email:</strong> {decodedToken?.email || "Not Available"}</p>
          <p><strong>User Type:</strong> {decodedToken?.type || "Not Available"}</p>

        </div>
      ) : (
        <p>No user data available</p>
      )}
    </div>
  );
}
