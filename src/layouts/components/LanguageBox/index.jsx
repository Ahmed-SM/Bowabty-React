import React, {useState, useEffect, useContext} from "react";
import styled from "styled-components";
import {useTranslation, Trans} from "react-i18next";
import {DiractionContext} from "../../../contexts/DiractionContext";

const LanguageBox = () => {
    const {t, i18n} = useTranslation();
    const [lng,setLng] = useState(window.document.documentElement.lang);
    const [isLTR,setIsLTR] = useContext(DiractionContext);
    console.log("Navigation LanguageBox rerendred ")
    const changeLanguage = () => {
        setLng(i18n.language === 'ar'? 'en': 'ar');
        setIsLTR(isLTR === true? false: true)
    };
    useEffect(() => {
        if (i18n.language === lng) return;
        i18n.changeLanguage(lng);
        window.document.documentElement.lang=lng; //a direct call to the actual dom to change the document lang
        console.log("Navigation LanguageBox rerendred useeffect")
    });
    return (
        <StyledLangaugeBox>
            <StyledVerticalLine/>
            <StyledLangaugePosition className="langauge-select">
                <i onClick={changeLanguage}>
                    <Trans i18nKey={"navigation:language"} t={t}>English</Trans>
                </i>
            </StyledLangaugePosition>
            <StyledVerticalLine/>
        </StyledLangaugeBox>
    );
}
export default LanguageBox;

const StyledLangaugeBox = styled.div`
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
const StyledVerticalLine = styled.div`
    margin-top: 20px;
    opacity: 0.4;
    border-left: 1px solid #F6F4F5;
    height: 30px;
`;
const StyledLangaugePosition = styled.div`
    line-height: 4.6 !important;
    cursor:default;
    font-size: 16px;
    & > i {
        cursor:pointer;
        color: white;
    }
`;