import React, {Suspense} from 'react';
import MainLayout from './layouts/mainLayout'
import LoginLayout from './layouts/loginLayout'
import {Route} from "react-router-dom";
import MyService from "./views/MyService/myService";
import {ServiceContext} from "./contexts/ServiceContext";
import {NewsFeedContext} from "./contexts/NewsFeedContext";
import {DiractionProvider} from "./contexts/DiractionContext";
import {TitleProvider} from "./contexts/TitleContext";
import {servicesList, Newslist, isUserLogged} from './services/MockData';
import './App.css';
import "./i18n";

function App() {
    console.log("App rerendred")
    return (
    <Suspense fallback={<div> Loading.. </div>}>
        <DiractionProvider> { isUserLogged ?
            <ServiceContext.Provider value={servicesList}>
             <TitleProvider>
                <MainLayout>
                    {/* Dynamic Components are passed down to the Layout,
                     The Layout component also wraps up a essential static components*/}
                    <NewsFeedContext.Provider value={Newslist}>
                        <Route exact path="/" component={MyService}/>
                    </NewsFeedContext.Provider>
                </MainLayout>
             </TitleProvider>
            </ServiceContext.Provider> : <LoginLayout/>}
        </DiractionProvider>
        </Suspense>
    );
}

export default App;
