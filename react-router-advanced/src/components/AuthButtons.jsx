// src/components/AuthButtons.jsx
import React from 'react';
import { login, logout, isAuthenticated } from '../auth';

function AuthButtons() {
  return (
    <div>
      {isAuthenticated() ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
}

export default AuthButtons;
