import React from "react";
import styled from "styled-components";
import HeaderComponent from "../components/header/header"
import rakLogo from "../assets/RAK.png";
import logo from "../assets/logo.png";

const Header = () => {
    console.log("Header container rerendred")
    return (
        <StyledHeader className="user-select" >
            <HeaderComponent leftLogo={logo} rightLogo={rakLogo} Username={"Aamna Ahmed AlNaqbii"}/>
        </StyledHeader>
    );
}
export default Header;

const StyledHeader = styled.header`
    width: 100%;
    height: 72px;
    box-sizing: border-box;
    padding: 0px 30px;
    justify-content: space-between;
    text-align: center;
    display: inline-flex !important;
    flex-direction: row-reverse;
    flex-wrap: nowrap;
    user-select: none;
`;