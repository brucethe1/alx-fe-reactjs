// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const isLoggedIn = false;  // Simulate user authentication status

function ProtectedRoute({ children }) {
  if (!isLoggedIn) {
    // Redirect to login page if user is not authenticated
    return <Navigate to="/" />;
  }
  return children;
}

export default ProtectedRoute;
