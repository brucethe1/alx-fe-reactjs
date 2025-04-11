import React from 'react';
import { useUserContext } from './UserContext'; // Import the custom hook

function UserDetails() {
  const userData = useUserContext(); // Consume context

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;
