import React, {useContext, Suspense} from 'react';
import ErrorBoundary from "./ErrorBoundary";
import {UserContext} from "./contexts/UserContext";
import {TitleProvider} from "./contexts/TitleContext";
import { Switch, Route } from 'react-router-dom';

import LoadLayout, {StyledUserContent, StyledServicesContainer, StyledView, StyledMyService, StyledPage} from "./layouts/LoadLayout";
import MainLayout from "./layouts/MainLayout";

const ContainerComponentRoute = React.lazy(()=> import("./components/ContainerComponentRoute"));
const LoginLayout = React.lazy(()=> import("./layouts/LoginLayout"));
const View = React.lazy(()=> import("./containers/View"));
const Page = React.lazy(()=> import("./containers/Page"));
const MyService = React.lazy(()=> import("./components/MyService"));
const UserSection = React.lazy(()=> import("./components/UserSection"));
const ServiceSlider = React.lazy(()=> import("./components/ServiceSlider"));
const MyOrders = React.lazy(()=> import("./components/MyOrders"));
const IncomingRequest = React.lazy(()=> import("./components/IncomingRequest"));
const StickyBox = React.lazy(()=>import("./components/StickyLabel/StickyBox"));

const Routes = () => {
    const [userData] = useContext(UserContext);
    return(
        <React.Fragment>
            { userData ?
            <MainLayout>
                <TitleProvider>
                        <ErrorBoundary>
                            <Switch>
                                
                                <Route exact component={UserSection} fallback={<StyledUserContent/>} path={"/*"}/>
                        
                            </Switch>
                        </ErrorBoundary>
                        <ErrorBoundary>
                            <Switch>

                                <Route exact component={ServiceSlider} fallback={<StyledServicesContainer/>} path={["/v/*", "/"]}/>

                            </Switch>
                        </ErrorBoundary>
                        <ErrorBoundary>
                            <Switch>

                                <ContainerComponentRoute exact component={MyService} container={View} fallback= {<StyledView><StyledMyService/></StyledView>} path={"/"}/>
                                <ContainerComponentRoute  exact component={MyOrders}  container={Page} fallback= {<StyledPage/>} path={"/myorders"}/>
                                <ContainerComponentRoute exact  component={IncomingRequest} container={Page} fallback= {<StyledPage/>} path={"/incomingrequest"}/>

                            </Switch>
                        </ErrorBoundary>
                </TitleProvider>
            </MainLayout> : <Suspense fallback={<LoadLayout/>}><LoginLayout/></Suspense>}
            <Suspense fallback={null}>
                <StickyBox/>
            </Suspense>
         </React.Fragment>
    );
};

export default Routes;