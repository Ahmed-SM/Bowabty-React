import React, {useState, useEffect, useContext} from "react";
import styled from "styled-components";
import { useTranslation, Trans } from "react-i18next";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faYoutube, faFacebookF, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons';
import {Link} from "react-router-dom";
import {DiractionContext} from "../../contexts/DiractionContext";

const StyledNavigation = styled.nav `
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
const StyledLeftSection = styled.div `
    clear: both;
    display: inline-flex;
    flex-direction: row-reverse;
    flex-wrap: nowrap;
    margin:0 10px;
`;

const StyledSocialBox = styled.div `
    justify-content: space-around;
    display: inline-flex;
    flex-direction: row-reverse;
    flex-wrap: nowrap;
    

    width: 200px;
    & > div {
        max-width: 35px;
    }
`;
const StyledSocialPosition = styled.div `
    display: block;
    width: 70px;
    color: white;
    line-height: 4.5;
    & > i {
        font-size: 25px;  
    }
    & > * {
        color: white;
    }
`;
const StyledLangaugeBox = styled.div `
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    min-width: 110px;
    
    & > i{
        font-size: 16.2px;
        transition: all 0.1s;
        box-shadow: -10px 35px 46px -12px rgba(0,0,0,0.75);
    }
`;
const StyledVerticalLine = styled.div `
    margin-top: 20px;
    opacity: 0.4;
    border-left: 1px solid #F6F4F5;
    height: 30px;
`;
const StyledLangaugePosition = styled.div `
    line-height: 4.6 !important;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    & > * {
        color: white;
    }
`;

const LoginNav = () => {
    console.log("Navigation rerendred")
    const { t, i18n } = useTranslation();
    const [ lng, setLng] = useState('ar');
    const [isLTR, setIsLTR] = useContext(DiractionContext);
    const changeLanguage = () => {
        setLng(lng === 'ar' ? 'en' : 'ar');
        setIsLTR(isLTR === true ? false : true )
      };
    useEffect(()=>{
        if (i18n.language === lng) return;
        i18n.changeLanguage(lng);
        console.log("Navigation rerendred useeffect")
    },[lng, i18n]);

    return (
        <StyledNavigation isLTR={isLTR}>
            <StyledLeftSection>
                <StyledSocialBox>
                    <StyledSocialPosition>
                        <Link   className="social-icon" to="/">
                            <FontAwesomeIcon  size="1x" icon={faYoutube}>
                                
                            </FontAwesomeIcon>
                        </Link>
                    </StyledSocialPosition>
                    <StyledSocialPosition>
                        <Link  className="social-icon" to="/">
                            <FontAwesomeIcon  size="1x" icon={faInstagram}/>
                        </Link>
                    </StyledSocialPosition>
                    <StyledSocialPosition>
                        <Link  className="social-icon" to="/">
                            <FontAwesomeIcon  size="1x" icon={faTwitter}/>
                        </Link>
                    </StyledSocialPosition>
                    <StyledSocialPosition>
                        <Link  className="social-icon" to="/">
                            <FontAwesomeIcon size="1x" icon={faFacebookF}/>
                        </Link>
                    </StyledSocialPosition>
                </StyledSocialBox>
                <StyledLangaugeBox>
                    <StyledVerticalLine/>
                    <StyledLangaugePosition className="langauge-select">
                        <i  onClick={changeLanguage} ><Trans i18nKey={"navigation.language"} t={t}>English</Trans></i>
                    </StyledLangaugePosition>
                    <StyledVerticalLine/>
                </StyledLangaugeBox>
            </StyledLeftSection>
        </StyledNavigation>
    );
}
export default LoginNav;