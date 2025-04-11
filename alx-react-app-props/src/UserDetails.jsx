// src/UserDetails.jsx
import { useContext } from 'react';
import UserContext from './UserContext';
unction UserDetails({ userData }) {
  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;
