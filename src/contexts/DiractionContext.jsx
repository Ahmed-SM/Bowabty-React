import React, { useState, createContext } from "react";
const DiractionContext = createContext([{}, () => {}]);
const DiractionProvider = ({ children }) => {
  const [isLTR, setIsLTR] = useState(false);
  return (
    <DiractionContext.Provider value={[isLTR, setIsLTR]}>
      {children}
    </DiractionContext.Provider>
  );
};
export { DiractionContext, DiractionProvider };
