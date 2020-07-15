import React, { useState, createContext } from "react";
const UserContext = createContext([{}, () => {}]);
const UserProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("accessToken") !== null); // 📌 LOGIN: change this to false to enable Login 📌
  return (
    <UserContext.Provider value={{IsAuthenticated:isAuthenticated, SetIsAuthenticated:setIsAuthenticated}}>
      {children}
    </UserContext.Provider>
  );
};
export { UserContext, UserProvider };
