import React from "react";
import styled from "styled-components";
import Header from "../components/header/header";
import Navigation from "../components/navigation/navigation";
import UserContent from "../components/userContent/userContent";

const mainLayout = ({children}) => {
    console.log("mainLayout rerendred")
    return (
        <MainLayout>
            <Header/>
            <Navigation/>
            <UserContent isVisible={true} data={userData}/>
                {children}
        </MainLayout>
    );
}
export default mainLayout;

const MainLayout = styled.div`
    font-family: 'Cocon Next Arabic', Sans-Serif;
    letter-spacing: 0.2px;
    background-color:  transparent;
    box-sizing: border-box;
    min-height:92%;
`;
const userData ={userName:'علياء أحمد مصطفى', userRole:'اخصائي تطوير مؤسس'}