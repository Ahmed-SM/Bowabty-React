import React from 'react';
import {ContainerComponentRoute} from "./components";
import {Newslist} from './services/MockData';
import {NewsFeedContext} from "./contexts/NewsFeedContext";
import LoadLayout, {StyledUserContent, StyledServicesContainer, StyledView, StyledMyService} from "./layouts/LoadLayout";
import Page from "./containers/Page";


const  MainLayout = React.lazy(()=> import("./layouts/MainLayout"));
const Shallow = React.lazy(()=> import("./containers/Shallow"));
const View = React.lazy(()=> import("./containers/View"));
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

    );
};

export default Routes;