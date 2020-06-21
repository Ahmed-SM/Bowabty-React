import React, { useState, createContext } from "react";
const TitleContext = createContext([{}, () => {}]);
const TitleProvider = ({ children }) => {

  const [Title, setTitle] = useState({Title:"", SubTitle:""});
  return (
    <TitleContext.Provider value={[Title, setTitle]}>
      {children}
    </TitleContext.Provider>
  );
};

export { TitleContext, TitleProvider };
