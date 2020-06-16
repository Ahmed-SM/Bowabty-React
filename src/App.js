import React from "react";
import { DiractionProvider } from "./contexts/DiractionContext";
import Routes from "./Routes";
import "./App.css";
import "./i18n";

function App() {
  console.log("App rerendred");
  return (
    <DiractionProvider>
      <Routes />
    </DiractionProvider>
  );
}

export default App;
