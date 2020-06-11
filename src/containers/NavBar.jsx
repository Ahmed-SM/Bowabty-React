import React from "react";
import styled from "styled-components";
import HeaderComponent from "../components/header/header"
import rakLogo from "../assets/RAK.png";
import logo from "../assets/logo.png";

const Navbar = () => {
    return (
        <StyledHeader className="user-select" >
            <HeaderComponent leftLogo={logo} rightLogo={rakLogo} Username={"Aamna Ahmed AlNaqbii"}/>
        </StyledHeader>
    );
}
export default Navbar;