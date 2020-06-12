import React, {useContext, Suspense} from "react";
import LoginLayout from './layouts/loginLayout'
import { BrowserRouter } from 'react-router-dom';
import {ServiceContext} from "./contexts/ServiceContext";
import {DiractionProvider} from "./contexts/DiractionContext";
import {UserContext} from "./contexts/UserContext";
import {TitleProvider} from "./contexts/TitleContext";
import {servicesList} from './services/MockData';
import Routes from "./Routes";
import './App.css';
import "./i18n";

const StickyBox = React.lazy(()=>import("./components/StickyLabel?delay=200"));


function App() {
    const [userData] = useContext(UserContext);
    console.log("App rerendred")
    return (
        <DiractionProvider>
              { userData ?
            <ServiceContext.Provider value={servicesList}>
             <TitleProvider>
                <BrowserRouter>
                    <Routes/>
                </BrowserRouter>
             </TitleProvider>
            </ServiceContext.Provider> : <LoginLayout/>}
            <Suspense fallback={null}>
                <StickyBox/>
            </Suspense>
        </DiractionProvider>
    );
}

export default App;
