import React from "react";
import styled from "styled-components";
import Header from "../components/header/header";
import Navigation from "../components/navigation/navigation";
import UserContent from "../components/userContent/userContent";
import ServiceSlider from "../components/serviceSlider/serviceSlider";
import StickyBox from "../components/stickyLabel/stickyBox";

const MainLayout = styled.div `
    font-family: 'Cocon Next Arabic', Sans-Serif !important;
    letter-spacing: 0.2px !important;
    background-color:  transparent;
    box-sizing: border-box;
    height:100vh;
    min-height:100%;
`;
const userData ={userName:'علياء أحمد مصطفى', userRole:'اخصائي تطوير مؤسس'}

const mainLayout = ({children}) => {
    console.log("mainLayout rerendred")
    return (
        <MainLayout>
            <Header/>
            <Navigation/>
            <UserContent isVisible={true} data={userData}/>
            <ServiceSlider/> 
                {children}
            <StickyBox/>
           
        </MainLayout>
    );
}
export default mainLayout;
