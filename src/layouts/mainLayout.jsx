import React from "react";
import styled from "styled-components";
import Header from "../components/header/header";
import Navigation from "../components/navigation/navigation";
import UserContent from "../components/userContent/userContent";
import ServicesSlider from "../components/servicesSlider/servicesSlider";

const MainLayout = styled.div `
    font-family: 'Cocon Next Arabic', Sans-Serif !important;
    letter-spacing: 0.2px !important;
    background-color:  transparent;
    box-sizing: border-box;
    height:100vh;
    min-height:100%;
`;

const mainLayout = ({children}) => {
    return (
        <MainLayout>
            <Header/>
            <Navigation/>
            <UserContent isVisible={true}/>
            <ServicesSlider/> 
            {children}
        </MainLayout>
    );
}
export default mainLayout;
