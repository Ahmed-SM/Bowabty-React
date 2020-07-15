import React, { useState, createContext } from "react";
const DiractionContext = createContext([{}, () => {}]);
const DiractionProvider = ({ children }) => {
  const [IsLTR, setIsLTR] = useState(window.document.documentElement.lang === "en" ? true : false);
  return (
    <DiractionContext.Provider value={{IsLTR:IsLTR, SetIsLTR:setIsLTR}}>
      {children}
    </DiractionContext.Provider>
  );
};
export { DiractionContext, DiractionProvider };
