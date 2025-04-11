import React, { createContext, useContext } from 'react';

// 1. Create the context
const UserContext = createContext();

// 2. Define the provider component
export const UserProvider = ({ children }) => {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    // 3. Wrap the children in the context provider
    <UserContext.Provider value={userData}>
      {children}
    </UserContext.Provider>
  );
};

// 4. Create a custom hook to consume the context
export const useUserContext = () => useContext(UserContext);
