// src/UserContext.js
import React, { createContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children, value }) => {
  return (
    <User Context.Provider value={value}>
      {children}
    </User Context.Provider>
  );
};

export const useUser Context = () => {
  return React.useContext(UserContext);
};

export default UserContext;
