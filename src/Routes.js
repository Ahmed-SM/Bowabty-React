import React from 'react';
import {Route, Redirect} from "react-router-dom";

// import MainLayout from './layouts/MainLayout';
import {IncomingRequest, MyOrders} from './components';
import {Newslist} from './services/MockData';
import {NewsFeedContext} from "./contexts/NewsFeedContext";
// import {LayoutComponentRoute} from "./components";
import LoadLayout from "./layouts/LoadLayout";
const MainLayout = React.lazy(()=> import("./layouts/MainLayout"));
const UserSection = React.lazy(()=> import("./components/UserSection"));
const ServiceSlider = React.lazy(()=> import("./components/ServiceSlider"));
const MyService = React.lazy(()=> import("./components/MyService"));
// const Page  = React.lazy(()=> import( "./containers/Page"));
// const View  = React.lazy(()=> import( "./containers/View"));
// const MyOrders = React.lazy(()=> import("./components/MyOrders"));
// const IncomingRequest = React.lazy(()=> import("./components/IncomingRequest"));


const Routes = () => {
    return(
        // <>
        // <LayoutComponentRoute 
        //     component={ServiceSlider}
        //     exact
        //     container={empty}
        //     layout={MainLayout}
        //     path={["/v/*", "/"]}
        // />
        // <NewsFeedContext.Provider value={Newslist}>
        // <LayoutComponentRoute 
        // component={MyService}
        // exact
        // container={ServiceSlider}
        // layout={View}
        // path={"/"}
        // />
        // </NewsFeedContext.Provider>
        // <LayoutComponentRoute 
        // component={MyOrders}
        // exact
        // container={ServiceSlider}
        // layout={Page}
        // path="/myorders"
        // />
        // <LayoutComponentRoute 
        // component={IncomingRequest}
        // exact
        // container={ServiceSlider}
        // layout={Page}
        // path="/incomingrequest"
        //  />
        // </>
        <React.Suspense fallback={<LoadLayout/>}>
        <MainLayout>
            {/* Dynamic Components are passed down to the Layout,
            The Layout component also wraps up a essential static components*/}
            <Route exact path={"/*"} component={UserSection} />
            <Route exact path={["/v/*", "/"]} component={ServiceSlider}/> {/* Views with Sliders should start /v/NAME_OF_THE_VIEW ✔  */}
            <NewsFeedContext.Provider value={Newslist}>
            {/*  /meeting and the rest of the array are routes that is not used yet  ✖  */}
                <Route exact path={["/", "/meeting", "/useroles", "/user","/1",  ]} component={MyService}/> {/* "/" Default view ✔ */}
            </NewsFeedContext.Provider>
            <Route exact path="/myorders" component={MyOrders}/>{/* /NAME_OF_THE_COMPONENT for pages with no sliders  ✔  */}
            <Route exact path="/incomingrequest" component={IncomingRequest}/>{/* /NAME_OF_THE_COMPONENT for pages with no sliders  ✔  */}
            {/* Redirection on route mismatch ✔ Remove or comment this component if you don't want a Redirection on recompiling */}
            <Redirect  to="/"/> 
        </MainLayout>
        </React.Suspense>
    );
};

export default Routes;