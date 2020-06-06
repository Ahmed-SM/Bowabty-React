import React, {useContext} from "react";
import styled from "styled-components";
import rakLogo from "../../assets/RAK.png";
import logo from "../../assets/logo.png";
import { useTranslation, Trans } from "react-i18next";


const StyledHeader = styled.header`
    width: 100%;
    box-sizing: border-box;
    padding: 0px 30px;
    justify-content: space-between;
    text-align: center;
    display: inline-flex !important;
    flex-direction: row-reverse;
    flex-wrap: nowrap;
    user-select: none;
    & > * {
        height: 82.3px;
    }
`;
const WelcomeSection = styled.div`
    margin-top: 0px;
`;

const Header = () => {
    const { t } = useTranslation();
    console.log("Header rerendred")
    return (
        <StyledHeader className="user-select" >
            <div>
                <a href="#">
                    <img src={logo} alt="" width="280"/>
                </a>
            </div>
            <WelcomeSection>
                <h5 data-translate="welcome" id="welcome-element">
                <Trans i18nKey={"welcome"} t={t} >اهلا بك</Trans>
                </h5>
                <h5 id="logged-user">Aamna Ahmed AlNaqbii</h5>
            </WelcomeSection>
            <div>
                <a href="#">
                    <img src={rakLogo} alt="" width="240"/>
                </a>
            </div>
        </StyledHeader>
    );
}
export default Header;
