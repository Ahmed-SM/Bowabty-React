import React from "react";
import { DiractionProvider } from "./contexts/DiractionContext";
import {UserProvider} from "./contexts/UserContext";
import Routes from "./Routes";
import "./App.css";
import "./i18n";

function App() {
  console.log("App rerendred");
  return (
    <DiractionProvider>
        <UserProvider>
          <Routes />
        </UserProvider>
    </DiractionProvider>
  );
}

export default App;
