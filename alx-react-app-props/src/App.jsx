import React from 'react';
import { UserProvider } from './UserContext';
import UserProfile from './UserProfile';

const user = {
  name: 'Bruce',
  email: 'bruce@example.com'
};

function App() {
  return (
    <UserProvider value={user}>
      <UserProfile />
    </UserProvider>
  );
}

export default App;
