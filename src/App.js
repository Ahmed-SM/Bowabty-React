import React from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DiractionProvider } from "./contexts/DiractionContext";
import {UserProvider} from "./contexts/UserContext";
import Routes from "./Routes";
import "./App.css";
import "./i18n";

function App() {
  return (
    <DiractionProvider> 
        <UserProvider>
          <Routes />
        </UserProvider>
        <ToastContainer rtl/>
    </DiractionProvider>
  );
}

export default App;
