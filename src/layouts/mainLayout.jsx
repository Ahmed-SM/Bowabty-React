import React from "react";
import styled from "styled-components";
import Header from "../containers/Header";
import Navigation from "../components/navigation/navigation";
import UserSection from "../containers/UserSection";


const mainLayout = ({children}) => {
    console.log("mainLayout rerendred")
    return (
        <MainLayout>
            <Header/>
            <Navigation/>
            <UserSection isVisible={true}/>
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