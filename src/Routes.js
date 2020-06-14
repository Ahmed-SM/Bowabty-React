import React, {useContext} from 'react';

import {UserContext} from "./contexts/UserContext";
import {TitleProvider} from "./contexts/TitleContext";


import LoadLayout, {StyledUserContent, StyledServicesContainer, StyledView, StyledMyService} from "./layouts/LoadLayout";

const ContainerComponentRoute = React.lazy(()=> import("./components/ContainerComponentRoute"));
const LoginLayout = React.lazy(()=> import("./layouts/loginLayout"));
const MainLayout = React.lazy(()=> import("./layouts/MainLayout"));
const Shallow = React.lazy(()=> import("./containers/Shallow"));
const View = React.lazy(()=> import("./containers/View"));
const Page = React.lazy(()=> import("./containers/Page"));
const UserSection = React.lazy(()=> import("./components/UserSection"));
const ServiceSlider = React.lazy(()=> import("./components/ServiceSlider"));
const MyService = React.lazy(()=> import("./components/MyService"));
const MyOrders = React.lazy(()=> import("./components/MyOrders"));
const IncomingRequest = React.lazy(()=> import("./components/IncomingRequest"));

const Routes = () => {
    const [userData] = useContext(UserContext);
    return(
        <>{ userData ?
        <React.Suspense fallback={<LoadLayout/>}>
            <MainLayout>
                <TitleProvider>

                    <React.Suspense fallback={<StyledUserContent/>}>
                        <ContainerComponentRoute exact component={UserSection} container={Shallow} path={"/*"}/>
                    </React.Suspense>
                    
                    <React.Suspense fallback={<StyledServicesContainer/>}>
                        <ContainerComponentRoute exact component={ServiceSlider} container={Shallow} path={["/v/*", "/"]}/>
                    </React.Suspense>
                 
                    <React.Suspense fallback={<StyledView><StyledMyService/></StyledView>}> 
                        <ContainerComponentRoute exact component={MyService} container={View} path={"/"}/>
                    </React.Suspense>

                    <React.Suspense fallback={<div>Loading... </div>}>
                        <ContainerComponentRoute exact component={MyOrders}  container={Page} path="/myorders"/>
                    </React.Suspense>

                    <React.Suspense fallback={<div>Loading... </div>}>
                        <ContainerComponentRoute exact component={IncomingRequest} container={Page} path="/incomingrequest"/>
                    </React.Suspense>

                </TitleProvider>
            </MainLayout>
    
        </React.Suspense> : <React.Suspense fallback={<LoadLayout/>}><LoginLayout/></React.Suspense>}
        </>
    );
};

export default Routes;