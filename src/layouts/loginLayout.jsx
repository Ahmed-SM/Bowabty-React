import React from "react";
import styled from "styled-components";
import Header from "../components/header/header";
import LoginNav from "../components/navigation/loginNav";
import Login from "../components/login/login";

const loginLayout = () => {
    console.log("loginLayout rerendred")
    return (
        <LoginLayout>
            <Header/>
            <LoginNav/>
            <Login/>
        </LoginLayout>
    );
}
export default loginLayout;

const LoginLayout = styled.main`
    letter-spacing: 0.2px;
    background-color:  transparent;
    box-sizing: border-box;
    min-height:92%;
`;