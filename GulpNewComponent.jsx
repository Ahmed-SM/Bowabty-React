import React, {useContext, useEffect}  from "react";
import styled from "styled-components";
import {TitleContext} from "../../contexts/TitleContext";
import {useTranslation, Trans} from "react-i18next";
// Gulp Import Anchor


const COMPONENT_NAME = () => {
    const {setTitle}  = useContext(TitleContext);
    const {t} = useTranslation();  
    useEffect(()=>{
        setTitle(Title =>({...Title, Title: t("COMPONENT_NAME:title"), SubTitle: t("userContent:lorem")}));
    },[t, setTitle])
      return (
        <StyledContainer COLOR>


        </StyledContainer>
      );
    }
  export default COMPONENT_NAME;

  const StyledContainer =  styled(COMPONENT_BASE)`
  
  `;
