import React from 'react';
import { useUserContext } from './UserContext';

import ProfilePage from './ProfilePage';

function App() {
  return (
    <UserProvider>
      <ProfilePage />
    </UserProvider>
  );
}

export default App;
