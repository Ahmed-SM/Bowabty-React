import React, { useState, createContext } from "react";
const TitleContext = createContext([{}, () => {}]);
const TitleProvider = ({ children }) => {

  const [title, SetTitle] = useState({Title:"", SubTitle:""});
  return (
    <TitleContext.Provider value={{Title:title, setTitle:SetTitle}}>
      {children}
    </TitleContext.Provider>
  );
};

export { TitleContext, TitleProvider };
