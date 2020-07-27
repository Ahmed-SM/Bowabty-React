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
const Users = React.lazy(()=>import("./components/Users"));
const AddNewUser = React.lazy(()=>import("./components/Users/addUser"));
const EditUser = React.lazy(()=>import("./components/Users/editUser"));
const viewUser = React.lazy(()=>import("./components/Users/view"));
// // hamed.h 18-Jun 2020
const AdministrativeServicesDeptOrders = React.lazy(()=>import("./components/AdministrativeServicesDeptOrders"));
{/* Gulp Import Anchor */}
const TestComponent = React.lazy(()=>import("./components/TestComponent"));


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
                            
                            <ContainerComponentRoute exact  component={viewUser} container={Page} path={"/Users/view"}/>
                                <ContainerComponentRoute exact  component={EditUser} container={Page} path={"/Users/edit"}/>
                                <ContainerComponentRoute exact  component={AddNewUser} container={Page} path={"/Users/add"}/>
                                <ContainerComponentRoute exact  component={Users} container={Page} path={"/Users"}/>
                                <ContainerComponentRoute  exact component={MyOrders}  container={Page} path={"/myorders"}/>
                                <ContainerComponentRoute exact  component={IncomingRequest} container={Page} path={"/incomingrequest"}/>
                                <ContainerComponentRoute exact  component={MyDesk} container={View} path={"/ServiceID=6"}/>
                                <ContainerComponentRoute exact  component={Contacts} container={Page} path={"/Contacts"}/>
                                <ContainerComponentRoute exact  component={ServicesBox} container={Page} path={"/ServiceID=2"}/>
                                {/* ////// hamed */}
                                <Route exact  component={AdministrativeServicesDeptOrders}  path={"/ServiceID=5"}/>
                                <Route exact component={LegalAffairs} path={"/ServiceID=2/ServiceID=1"}/>
                                {/* Gulp Route Anchor*/}
								<ContainerComponentRoute exact component={TestComponent}  container={Page} path={"/myorders/add"}/>
								<ContainerComponentRoute exact component={TestComponent}  container={Page} path={"/myorders/edit"}/>
								<ContainerComponentRoute exact component={TestComponent}  container={Page} path={"/myorders/view"}/>

                                
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