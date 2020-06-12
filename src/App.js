import React, {useContext, Suspense} from "react";
import LoginLayout from './layouts/loginLayout'

import {ServiceContext} from "./contexts/ServiceContext";
import {DiractionProvider} from "./contexts/DiractionContext";
import {UserContext} from "./contexts/UserContext";
import {TitleProvider} from "./contexts/TitleContext";
import {servicesList} from './services/MockData';
import Routes from "./Routes";
import './App.css';
import "./i18n";

const StickyBox = React.lazy(()=>import("./components/StickyLabel"));
function App() {
    const [userData] = useContext(UserContext);
    console.log("App rerendred")
    return (
        <DiractionProvider>
              { userData ?
            <ServiceContext.Provider value={servicesList}>
             <TitleProvider>
                <Routes/>
             </TitleProvider>
            </ServiceContext.Provider> : <LoginLayout/>}
            <Suspense fallback={null}>
                <StickyBox/>
            </Suspense>
        </DiractionProvider>
    );
}

export default App;
