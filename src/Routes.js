import React from 'react';
import MainLayout from './layouts/MainLayout';
import {ContainerComponentRoute} from "./components";
import {Newslist} from './services/MockData';
import {NewsFeedContext} from "./contexts/NewsFeedContext";
import LoadLayout, {StyledUserContent, StyledServicesContainer, StyledView, StyledMyService} from "./layouts/LoadLayout";


// 💥💥💥💥💥
const Shallow = React.lazy(()=> import("./containers/Shallow"));
const View = React.lazy(()=> import("./containers/View"));
const Page = React.lazy(()=> import("./containers/Page"));
const UserSection = React.lazy(()=> import("./components/UserSection"));
const ServiceSlider = React.lazy(()=> import("./components/ServiceSlider"));
const MyService = React.lazy(()=> import("./components/MyService"));
const MyOrders = React.lazy(()=> import("./components/MyOrders"));
const IncomingRequest = React.lazy(()=> import("./components/IncomingRequest"));


const Routes = () => {
    return(
        <React.Suspense fallback={<LoadLayout/>}>
            <MainLayout>
                <React.Suspense fallback={<StyledUserContent/>}>
                <ContainerComponentRoute exact component={UserSection} container={Shallow} path={"/*"}/>
                </React.Suspense>

                <React.Suspense fallback={<StyledServicesContainer/>}>
                <ContainerComponentRoute exact component={ServiceSlider} container={Shallow} path={["/v/*", "/"]}/>
                </React.Suspense>

                <NewsFeedContext.Provider value={Newslist}>
                <React.Suspense fallback={<StyledView><StyledMyService/></StyledView>}> 
                <ContainerComponentRoute exact component={MyService} container={View} path={"/"}/>
                </React.Suspense>
                </NewsFeedContext.Provider>

                <React.Suspense fallback={<div>Loading... </div>}>
                <ContainerComponentRoute exact component={MyOrders}  container={Page} path="/myorders"/>
                </React.Suspense>

                <React.Suspense fallback={<div>Loading... </div>}>
                <ContainerComponentRoute exact component={IncomingRequest} container={Page} path="/incomingrequest"/>
                </React.Suspense>
            </MainLayout>
        </React.Suspense>

        // <React.Suspense fallback={<LoadLayout/>}>
        // <MainLayout>
        //     {/* Dynamic Components are passed down to the Layout,
        //     The Layout component also wraps up a essential static components*/}
        //     <Route exact path={"/*"} component={UserSection} />
        //     <Route exact path={["/v/*", "/"]} component={ServiceSlider}/> {/* Views with Sliders should start /v/NAME_OF_THE_VIEW ✔  */}
        //     <NewsFeedContext.Provider value={Newslist}>
        //     {/*  /meeting and the rest of the array are routes that is not used yet  ✖  */}
        //         <Route exact path={["/", "/meeting", "/useroles", "/user","/1",  ]} component={MyService}/> {/* "/" Default view ✔ */}
        //     </NewsFeedContext.Provider>
        //     <Route exact path="/myorders" component={MyOrders}/>{/* /NAME_OF_THE_COMPONENT for pages with no sliders  ✔  */}
        //     <Route exact path="/incomingrequest" component={IncomingRequest}/>{/* /NAME_OF_THE_COMPONENT for pages with no sliders  ✔  */}
        //     {/* Redirection on route mismatch ✔ Remove or comment this component if you don't want a Redirection on recompiling */}
        //     <Redirect  to="/"/> 
        // </MainLayout>
        // </React.Suspense> *}
    );
};

export default Routes;