import React from "react";
import styled from "styled-components";
import Header from "./common/Header";
import LoginNav from "./common/LoginNav";
import Login from "../components/Login";

const loginLayout = () => {
    console.log("loginLayout rerendred")
    return (
        <LoginLayout>
            {/* islogged should be removed once there is a authentication */}
            <Header islogged={false}/> 
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