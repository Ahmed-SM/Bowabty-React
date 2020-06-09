import React, {Suspense} from 'react';
import MainLayout from './layouts/mainLayout'
import LoginLayout from './layouts/loginLayout'
import {Route, Redirect} from "react-router-dom";
import Inbox from "./views/InBoxService/inBox";
import StickyBox from "./components/stickyLabel/stickyBox";
import {ServiceContext} from "./contexts/ServiceContext";
import {NewsFeedContext} from "./contexts/NewsFeedContext";
import {DiractionProvider} from "./contexts/DiractionContext";
import {TitleProvider} from "./contexts/TitleContext";
import {servicesList, Newslist, isUserLogged} from './services/MockData';
import './App.css';
import "./i18n";

const ServiceSlider = React.lazy(()=> import("./components/serviceSlider/serviceSlider"));
const MyService = React.lazy(()=> import("./views/MyService/myService"));


function App() {
    console.log("App rerendred")
    return (
    <Suspense fallback={<div> Loading.. </div>}>
        <DiractionProvider>  { isUserLogged ?
            <ServiceContext.Provider value={servicesList}>
             <TitleProvider>
                <MainLayout> {/* ✨ غير, عدل او اقترح طرق احسن للروتينج اذا ينفع ✨ */}
                    {/* Dynamic Components are passed down to the Layout,
                     The Layout component also wraps up a essential static components*/}
                    <Route exact path={["/v/*", "/"]} component={ServiceSlider}/> {/* Views with Sliders should start /v/NAME_OF_THE_VIEW ✔  */}
                    <NewsFeedContext.Provider value={Newslist}>
                        <Route exact path="/" component={MyService}/> {/* Default view ✔  */}
                    </NewsFeedContext.Provider>
                    <Route exact path="/inbox" component={Inbox}/>{/* /NAME_OF_THE_COMPONENT for pages with no sliders  ✔  */}
                    <Redirect  to="/"/> {/* Redirection on route mismatch ✔ */}
                </MainLayout>
             </TitleProvider>
            </ServiceContext.Provider> : <LoginLayout/>}
            <StickyBox/>
        </DiractionProvider>
        </Suspense>
    );
}

export default App;
