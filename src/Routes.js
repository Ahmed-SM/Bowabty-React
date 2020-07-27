  import React, {useContext, Suspense} from 'react';
import ErrorBoundary from "./ErrorBoundary";
import {UserContext} from "./contexts/UserContext";
import {TitleProvider} from "./contexts/TitleContext";
import { Switch, Route, Redirect } from 'react-router-dom';

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

// // haytham 20-jul 2020
const Services = React.lazy(()=> import("./components/Services"));
const EditService = React.lazy(()=>import("./components/Services/EditServices"));
const ViewService = React.lazy(()=>import("./components/Services/ViewService"));

// // Sakr 20-jul 2020
const Requests = React.lazy(()=> import("./components/Requests"));
const ViewRequest = React.lazy(()=>import("./components/Requests/ViewRequest"));

// // hamed.h 18-Jun 2020
const AdministrativeServicesDeptOrders = React.lazy(()=>import("./components/AdministrativeServicesDeptOrders"));
{/* Gulp Import Anchor */}
const TestComponent = React.lazy(()=>import("./components/TestComponent"));
const GridExample = React.lazy(()=>import("./components/GridExample"));


const Routes = () => {
    const {IsAuthenticated} = useContext(UserContext);
    return(
        <React.Fragment>
            { IsAuthenticated ?
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

                                <ContainerComponentRoute  exact component={GridExample}  container={Page} path={"/gridexample"}/>
                                <ContainerComponentRoute  exact component={MyOrders}  container={Page} path={"/myorders"}/>
                                <ContainerComponentRoute exact  component={IncomingRequest} container={Page} path={"/incomingrequest"}/>
                                <ContainerComponentRoute exact  component={MyDesk} container={View} path={"/ServiceID=6"}/>
                                <ContainerComponentRoute exact  component={Contacts} container={Page} path={"/Contacts"}/>
                                <ContainerComponentRoute exact  component={ServicesBox} container={Page} path={"/ServiceID=2"}/>
                                
                                {/* ////// haytham */} 
                                <ContainerComponentRoute  exact component={Services}  container={Page} path={"/services"}/>
								<ContainerComponentRoute exact component={EditService}  container={Page} path={"/services/edit"}/>
								<ContainerComponentRoute exact component={ViewService}  container={Page} path={"/services/view"}/>

                                    {/* ////// Sakr */} 
                                <ContainerComponentRoute  exact component={Requests}  container={Page} path={"/Requests"}/>
								<ContainerComponentRoute exact component={ViewRequest}  container={Page} path={"/Requests/view"}/>

                                {/* ////// hamed */}
                                <Route exact  component={AdministrativeServicesDeptOrders}  path={"/ServiceID=5"}/>
                                <Route exact component={LegalAffairs} path={"/ServiceID=2/ServiceID=1"}/>
                                {/* Gulp Route Anchor*/}
								<ContainerComponentRoute exact component={TestComponent}  container={Page} path={["/myorders/add","/myorders/edit","/myorders/view"]}/>

                                
                            </Switch>
                        </ErrorBoundary>
                    </Suspense>
                </TitleProvider>
            </MainLayout> : <Suspense fallback={<LoadLayout/>}> 
                <LoginLayout>
                  <Redirect to="/" />
                </LoginLayout> 
            </Suspense>}
            <Suspense fallback={null}>
                <StickyBox/>
            </Suspense>
         </React.Fragment>
    );
};

export default Routes;