import React, { Suspense} from "react";
import { BrowserRouter } from 'react-router-dom';
import {DiractionProvider} from "./contexts/DiractionContext";
import Routes from "./Routes";
import './App.css';
import "./i18n";

const StickyBox = React.lazy(()=>import("./components/StickyLabel/StickyBox"));


function App() {
    
    console.log("App rerendred")
    return (
        <DiractionProvider>
            <BrowserRouter>
                <Routes/>
            </BrowserRouter>
            <Suspense fallback={null}>
                <StickyBox/>
            </Suspense>
        </DiractionProvider>
    );
}

export default App;
