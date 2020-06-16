import React, { useState, createContext } from "react";
const UserContext = createContext([{}, () => {}]);
const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(true); // 📌 LOGIN: change this to false to enable Login 📌
  return (
    <UserContext.Provider value={[userData, setUserData]}>
      {children}
    </UserContext.Provider>
  );
};
export { UserContext, UserProvider };
