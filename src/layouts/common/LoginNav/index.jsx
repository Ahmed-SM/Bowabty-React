import React, {useContext} from "react";
import styled from "styled-components";
import LanguageBox from "../LanguageBox";
import SocialBox from "../SocialBox";
import {DiractionContext} from "../../../contexts/DiractionContext";

const LoginNav = () => {
    console.log("Navigation rerendred")
    const [isLTR] = useContext(DiractionContext);

    return (
        <StyledNavigation isLTR={isLTR}>
            <StyledLeftSection>
              <SocialBox/>
              <LanguageBox/>
            </StyledLeftSection>
        </StyledNavigation>
    );
}
export default LoginNav;

const StyledNavigation = styled.nav`
    justify-content: space-between;
    width: 100%;
    background-color: #3C4652;
    height: 66px;
    box-shadow: 0px 7px 5px 0px rgba(0, 0, 0, 0.31);
    text-align: center;
    display: inline-flex;
    flex-direction: row;
    flex-wrap: nowrap;
    ${({ isLTR }) => isLTR && `
    direction: rtl;
  `}
`;
const StyledLeftSection = styled.div`
    clear: both;
    display: inline-flex;
    flex-direction: row-reverse;
    flex-wrap: nowrap;
    margin:0 10px;
`;