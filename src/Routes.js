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
const Departement = React.lazy(()=>import("./components/Departements"));
const AddDepartement = React.lazy(()=>import("./components/Departements/add"));
const EditDepartement = React.lazy(()=>import("./components/Departements/Edit"));
const ViewDepartement = React.lazy(()=>import("./components/Departements/view"));
const userType = React.lazy(()=>import("./components/UserType"));
const AddUserType = React.lazy(()=>import("./components/UserType/add"));
const EditUserType = React.lazy(()=>import("./components/UserType/edit"));
const ViewUserType = React.lazy(()=>import("./components/UserType/view"));
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

// // haytham 20-jul 2020
const Services = React.lazy(()=> import("./components/Services"));
const EditService = React.lazy(()=>import("./components/Services/EditServices"));
const ViewService = React.lazy(()=>import("./components/Services/ViewService"));

// // Sakr 20-jul 2020
const Requests = React.lazy(()=> import("./components/Requests"));
const ViewRequest = React.lazy(()=>import("./components/Requests/ViewRequest"));

// // hamed.h 18-Jun 2020
const AdministrativeServicesDeptOrders = React.lazy(()=>import("./components/AdministrativeServicesDeptOrders"));
const UsersJobs = React.lazy(()=> import("./components/UsersJobs"));
const UsersJobDetails = React.lazy(()=> import("./components/UsersJobs/view"));
const editUsersJobs = React.lazy(()=>import("./components/UsersJobs/edit"));
const addUsersJobs = React.lazy(()=>import("./components/UsersJobs/add"));

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
                            
                                <ContainerComponentRoute exact  component={viewUser} container={Page} path={"/Users/view"}/>
                                <ContainerComponentRoute exact  component={EditUser} container={Page} path={"/Users/edit"}/>
                                <ContainerComponentRoute exact  component={AddNewUser} container={Page} path={"/Users/add"}/>
                                <ContainerComponentRoute exact  component={Users} container={Page} path={"/Users"}/>

                                <ContainerComponentRoute  exact component={GridExample}  container={Page} path={"/gridexample"}/>
                                <ContainerComponentRoute  exact component={MyOrders}  container={Page} path={"/myorders"}/>
                                <ContainerComponentRoute  exact component={Departement}  container={Page} path={"/departement"}/>
                                <ContainerComponentRoute  exact component={AddDepartement}  container={Page} path={"/departements/add"}/>
                                <ContainerComponentRoute  exact component={EditDepartement}  container={Page} path={"/departements/edit"}/>    
                                <ContainerComponentRoute  exact component={ViewDepartement}  container={Page} path={"/departements/view"}/>                           
                                <ContainerComponentRoute  exact component={userType}  container={Page} path={"/userType"}/>
                                <ContainerComponentRoute  exact component={AddUserType}  container={Page} path={"/userType/add"}/>
                                <ContainerComponentRoute  exact component={EditUserType}  container={Page} path={"/userType/edit"}/>
                                <ContainerComponentRoute  exact component={ViewUserType}  container={Page} path={"/userType/view"}/>
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
                                <ContainerComponentRoute  exact component={UsersJobs}  container={Page} path={"/UsersJobs"}/>
                                <ContainerComponentRoute  exact component={UsersJobDetails}  container={Page} path={"/UsersJobs/view"}/>
                                <ContainerComponentRoute  exact component={editUsersJobs}  container={Page} path={"/UsersJobs/edit"}/>
                                <ContainerComponentRoute  exact component={addUsersJobs}  container={Page} path={"/UsersJobs/add"}/>
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