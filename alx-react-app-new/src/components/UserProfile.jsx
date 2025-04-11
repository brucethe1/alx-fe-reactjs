import React, { createContext, useContext } from 'react';

// Create Context
const UserContext = createContext();

// Create a custom provider component
export const UserProvider = ({ children }) => {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      {children}
    </UserContext.Provider>
  );
};

// Export useContext hook for easier consumption
export const useUserContext = () => useContext(UserContext);
