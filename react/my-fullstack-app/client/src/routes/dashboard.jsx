import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { isExpired, decodeToken } from 'react-jwt';

function Dashboard() {
  const [username, setUsername] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token || isExpired(token)) {
      // Token no existe o ha expirado
      navigate('/login');
    } else {
      const decodedToken = decodeToken(token);
      
      if (decodedToken) {
        setUsername(decodedToken.username);
      } else {
        // Token inválido
        localStorage.removeItem('token');
        navigate('/login');
      }
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div>
      <h1>Bienvenido al Dashboard</h1>
      {username && <p>Hola, {username}!</p>}
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
}

export default Dashboard;

