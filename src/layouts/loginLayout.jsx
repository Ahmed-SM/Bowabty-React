import React from "react";
import styled from "styled-components";
import Header from "../components/header/header";
import LoginNav from "../components/navigation/loginNav";
import Login from "../components/login/login";
import StickyBox from "../components/stickyLabel/stickyBox";

const MainLayout = styled.div`
    font-family: 'Cocon Next Arabic', Sans-Serif !important;
    letter-spacing: 0.2px !important;
    background-color:  transparent;
    box-sizing: border-box;
    height:100vh;
    min-height:100%;
`;

const loginLayout = () => {
    console.log("loginLayout rerendred")
    return (
        <MainLayout>
            <Header/>
            <LoginNav/>
            <Login/>
            <StickyBox/>
        </MainLayout>
    );
}
export default loginLayout;
