import React, {useContext, Suspense} from 'react';

import {UserContext} from "./contexts/UserContext";
import {TitleProvider} from "./contexts/TitleContext";
import { Switch, Route } from 'react-router-dom';

import LoadLayout, {StyledUserContent, StyledServicesContainer, StyledView, StyledMyService} from "./layouts/LoadLayout";
import MainLayout from "./layouts/MainLayout";

const ContainerComponentRoute = React.lazy(()=> import("./components/ContainerComponentRoute"));
const LoginLayout = React.lazy(()=> import("./layouts/loginLayout"));
const View = React.lazy(()=> import("./containers/View"));
const Page = React.lazy(()=> import("./containers/Page"));
const UserSection = React.lazy(()=> import("./components/UserSection"));
const ServiceSlider = React.lazy(()=> import("./components/ServiceSlider"));
const MyService = React.lazy(()=> import("./components/MyService"));
const MyOrders = React.lazy(()=> import("./components/MyOrders"));
const IncomingRequest = React.lazy(()=> import("./components/IncomingRequest"));
const StickyBox = React.lazy(()=>import("./components/StickyLabel/StickyBox"));

const Routes = () => {
    const [userData] = useContext(UserContext);
    return(
        <>{ userData ?
            <MainLayout>
                <TitleProvider>
                    <Suspense fallback={<StyledUserContent/>}>
                        <Switch>
                            
                            <Route component={UserSection} path={"/*"}/>
                       
                        </Switch>
                    </Suspense>   
                    <Suspense fallback={<StyledServicesContainer/>}>
                        <Switch>

                            <Route component={ServiceSlider} path={["/v/*", "/"]}/>

                        </Switch>
                    </Suspense>
                    <Suspense fallback={<StyledView><StyledMyService/></StyledView>}>
                        <Switch>

                            <ContainerComponentRoute  component={MyService} container={View} path={"/"}/>
                            <ContainerComponentRoute  component={MyOrders}  container={Page} path={"/myorders"}/>
                            <ContainerComponentRoute  component={IncomingRequest} container={Page} path={"/incomingrequest"}/>
                            
                        </Switch>
                    </Suspense>
                </TitleProvider>
            </MainLayout> : <Suspense fallback={<LoadLayout/>}><LoginLayout/></Suspense>}
            <Suspense fallback={null}>
                <StickyBox/>
            </Suspense>
         </>
    );
};

export default Routes;