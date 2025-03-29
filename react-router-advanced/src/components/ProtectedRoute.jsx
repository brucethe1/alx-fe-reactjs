import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth'; // Make sure the path is correct

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth(); // Assuming `useAuth` returns an object with `isAuthenticated`

  // If the user is not authenticated, redirect to the login page or another route
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // If authenticated, allow access to the children (protected route)
  return children;
};

export default ProtectedRoute;
