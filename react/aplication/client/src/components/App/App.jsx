// App.jsx

import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login';
import useToken from './useToken';

function App() {
  const { token, setToken } = useToken();

  return (
    <BrowserRouter>
      <div className="wrapper">
        <h1>Application</h1>
        <Routes>
          {/* If no token, redirect to Login page */}
          {!token ? (
            <Route path="*" element={<Login setToken={setToken} />} />
          ) : (
            <>
              <Route path="/" element={<Dashboard />} />
             
              <Route path="*" element={<Navigate to="/" />} />
            </>
          )}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
