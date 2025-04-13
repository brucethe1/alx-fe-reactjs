import React, { createContext, useContext } from 'react';

// Create a UserContext
const UserContext = createContext();

// Create a UserProvider component
export const UserProvider = ({ children, value }) => {
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext
export const useUser = () => {
  return useContext(UserContext);
};

export default UserContext;
