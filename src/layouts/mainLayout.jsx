import React from "react";
import styled from "styled-components";
import {Header} from "./components";
import {MainNav} from "./components";


const mainLayout = ({children}) => {
    console.log("mainLayout rerendred")
    return (
        <MainLayout>
            <Header/>
            <MainNav/>
            {children}
        </MainLayout>
    );
}
export default mainLayout;

const MainLayout = styled.main`
    letter-spacing: 0.2px;
    background-color:  transparent;
    box-sizing: border-box;
    min-height:92%;
`;
