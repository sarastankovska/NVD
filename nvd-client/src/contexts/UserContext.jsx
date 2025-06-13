import { createContext, useContext, useState } from "react";

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user"); 
  };
  return (
    <UserContext.Provider value={{ user, setUser,logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
