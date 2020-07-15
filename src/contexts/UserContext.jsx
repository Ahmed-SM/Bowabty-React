import React, { useState, createContext } from "react";
const UserContext = createContext([{}, () => {}]);
const UserProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("accessToken") !== null); // 📌 LOGIN: localStorage.getItem("accessToken") !== null 📌
  return (
    <UserContext.Provider value={{IsAuthenticated:isAuthenticated, SetIsAuthenticated:setIsAuthenticated}}>
      {children}
    </UserContext.Provider>
  );
};
export { UserContext, UserProvider };
