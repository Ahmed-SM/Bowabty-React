import React from "react";
import styled from "styled-components";
import {Redirect} from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";

const Header = ({leftLogo, rightLogo, Username}) => {
    const { t } = useTranslation();
    console.log("Header component rerendred")
    return (
        <>
            <div>
                <a href="/">
                    <img src={leftLogo} alt="" width="280"/>
                </a>
            </div>
            <WelcomeSection>
                <h5>
                <Trans i18nKey={"welcome"} t={t} >اهلا بك</Trans>
                </h5>
                <h5>{Username}</h5>
            </WelcomeSection>
            <div>
                <a href="/">
                    <img src={rightLogo} alt="" width="240"/>
                </a>
            </div>
        </>
    );
}
export default Header;

const WelcomeSection = styled.div`
    margin-top: 0px;
`;