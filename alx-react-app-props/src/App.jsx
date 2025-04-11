import React from 'react';
import { UserProvider } from './UserContext'; // Import the UserProvider
import ProfilePage from './ProfilePage';

function App() {
  return (
    <UserProvider>
      <ProfilePage />
    </UserProvider>
  );
}

export default App;
