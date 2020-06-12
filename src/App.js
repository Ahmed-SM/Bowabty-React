import React, {useContext, Suspense} from "react";
import LoginLayout from './layouts/loginLayout'
import {StickyBox} from "./components";
import {ServiceContext} from "./contexts/ServiceContext";
import {DiractionProvider} from "./contexts/DiractionContext";
import {UserContext} from "./contexts/UserContext";
import {TitleProvider} from "./contexts/TitleContext";
import {servicesList} from './services/MockData';
import Routes from "./Routes";
import './App.css';
import "./i18n";

function App() {
    const [userData] = useContext(UserContext);
    console.log("App rerendred")
    return (
        <DiractionProvider>
              { userData ?
            <ServiceContext.Provider value={servicesList}>
             <TitleProvider>
                 <React.Suspense fallback={null}>

             <Routes/>
                 </React.Suspense>
             </TitleProvider>
            </ServiceContext.Provider> : <LoginLayout/>}
            <Suspense fallback={null}>
            <StickyBox/>
            </Suspense>
        </DiractionProvider>
    );
}

export default App;
