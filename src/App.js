import React, {useContext} from "react";
import MainLayout from './layouts/mainLayout'
import LoginLayout from './layouts/loginLayout'
import {Route, Redirect} from "react-router-dom";
import Inbox from "./pages/myOrders/myOrders";
import StickyBox from "./components/stickyLabel/stickyBox";
import {ServiceContext} from "./contexts/ServiceContext";
import {NewsFeedContext} from "./contexts/NewsFeedContext";
import {DiractionProvider} from "./contexts/DiractionContext";
import {UserContext} from "./contexts/UserContext";
import {TitleProvider} from "./contexts/TitleContext";
import {servicesList, Newslist} from './services/MockData';
import './App.css';
import "./i18n";

const ServiceSlider = React.lazy(()=> import("./components/serviceSlider/serviceSlider"));
const MyService = React.lazy(()=> import("./views/myService/myService"));


function App() {
    const [userData , setUserData] = useContext(UserContext);
    console.log("App rerendred")
    return (
        <DiractionProvider>
              { userData ?
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
    );
}

export default App;
