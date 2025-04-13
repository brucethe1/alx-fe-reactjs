import React from 'react';
import { useUser } from './UserContext';

function UserProfile() {
  const user = useUser();

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserProfile;
