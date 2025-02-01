import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './routes/Login';
import Dashboard from './routes/Dashboard';
import Layout from "./routes/Layout";
// Componente para proteger rutas
const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("token") !== null
  return isAuthenticated ? <Layout>{children}</Layout> : <Navigate to="/login" />
}

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="/" element={<Navigate to="/dashboard" />} />
      </Routes>
    </Router>
  )
}

export default App



