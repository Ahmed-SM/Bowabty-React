import React from "react";
import styled from "styled-components";
import rakLogo from "../../../assets/RAK.png";
import logo from "../../../assets/logo.png";
import { device } from "../../../device";
import { useTranslation, Trans } from "react-i18next";

const Header = ({ islogged }) => {
  const { t } = useTranslation();
  console.log("Header container rerendred");
  return (
    <StyledHeader className="user-select">
      <StyledItem>
        <a href="/">
          <img src={logo} alt="" width="280" />
        </a>
      </StyledItem>
      {islogged ? 
        <WelcomeSection>
          <h5>
            <Trans i18nKey={"welcome"} t={t}>
              اهلا بك
            </Trans>
          </h5>
          <h5>Aamna Ahmed AlNaqbii</h5>
        </WelcomeSection> : <></>}
      <StyledItem>
        <a href="/">
          <img src={rakLogo} alt="" width="240" />
        </a>
      </StyledItem>
    </StyledHeader>
  );
};
Header.defaultProps = {
    islogged: true,
  };
export default Header;

const StyledHeader = styled.header`
  width: 100%;
  height: 72px;
  box-sizing: border-box;
  padding: 0px 30px;
  justify-content: space-between;
  text-align: center;
  display: inline-flex;
  flex-direction: row-reverse;
  flex-wrap: nowrap;
  user-select: none;
  @media ${device.mobileL} {
    display: block;
    height: fit-content;
    padding: 0px;
  };
  
`;
const StyledItem = styled.div`
  display: inline-flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: nowrap;
`;
const WelcomeSection = styled.div`
  display: inline-flex;
  justify-content: space-around;
  flex-direction: column;
  flex-wrap: nowrap;
  margin-top: 0px;
  @media ${device.mobileL} {
    background:#F6F4F5;
    width:100%
  };
`;
