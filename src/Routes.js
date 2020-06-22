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
const LegalAffairs = React.lazy(()=> import("./components/LegalAffairs"));
const StickyBox = React.lazy(()=>import("./components/StickyLabel/StickyBox"));
const MyDesk = React.lazy(()=>import("./components/MyDesk"));
const Contacts = React.lazy(()=>import("./components/ContactBox"));
const ServicesBox = React.lazy(()=>import("./components/ServicesBox"));

const Routes = () => {
    const [userData] = useContext(UserContext);
    return(
        <React.Fragment>
            { userData ?
            <MainLayout>
                <TitleProvider>
                    <Suspense fallback={<StyledUserContent/>}>
                        <ErrorBoundary>
                            <Switch>
                                <Route exact component={UserSection} path={"/*"}/>

                            </Switch>
                        </ErrorBoundary>
                    </Suspense>   
                    <Suspense fallback={<StyledServicesContainer/>}>
                        <ErrorBoundary>
                            <Switch>

                            <Route exact component={ServiceSlider} path={["/v/*", "/"]}/>
                            <Route exact component={ServiceSlider} path={"/ServiceID=2"}/>

                            </Switch>
                        </ErrorBoundary>
                    </Suspense>
                    <Suspense fallback={<StyledView><StyledMyService/></StyledView>}>
                        <ErrorBoundary>
                            <Switch>

                                <ContainerComponentRoute exact component={MyService} container={View} path={"/"}/>
                           
                            </Switch>
                        </ErrorBoundary>
                    </Suspense>
                    <Suspense fallback={<StyledPage/>}>
                        <ErrorBoundary>
                            <Switch>

                                <ContainerComponentRoute  exact component={MyOrders}  container={Page} path={"/myorders"}/>
                                <ContainerComponentRoute exact  component={IncomingRequest} container={Page} path={"/incomingrequest"}/>
                                <ContainerComponentRoute exact  component={MyDesk} container={View} path={"/ServiceID=6"}/>
                                <ContainerComponentRoute exact  component={Contacts} container={Page} path={"/Contacts"}/>
                                <ContainerComponentRoute exact  component={ServicesBox} container={Page} path={"/ServicesBox"}/>
                                <ContainerComponentRoute exact  component={LegalAffairs} container={View} path={"/ServiceID=2"}/>
                                {/* <Route exact component={LegalAffairs} path={"/LegalAffairs"}/> */}

                            </Switch>
                        </ErrorBoundary>
                    </Suspense>
                </TitleProvider>
            </MainLayout> : <Suspense fallback={<LoadLayout/>}> <LoginLayout/> </Suspense>}
            <Suspense fallback={null}>
                <StickyBox/>
            </Suspense>
         </React.Fragment>
    );
};

export default Routes;