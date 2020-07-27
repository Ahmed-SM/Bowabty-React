import React, {useContext, useEffect, useState, useCallback} from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";
import { useTranslation, Trans } from "react-i18next";
import * as Yup from "yup";
import {post} from "../../services/Api/base"
import RichInput from "../Reusables/RichInput";

import {TitleContext} from "../../contexts/TitleContext";
// Gulp Import Anchor
import LargeBox from "../Reusables/LargeBox";
import {useLocation, Redirect} from "react-router-dom";
import { CustomInput, CustomSelect, CustomRadio } from "../Reusables/CustomInputs";
import { CustomButton } from "../Reusables/CustomButton";
import BoxHeader from "../Reusables/BoxHeader";
import { useHistory } from "react-router-dom";

const ViewUserType = () => {

    const redirect = ()=>{
        history.push({ pathname:"/userType"});
      }

  const history = useHistory();
  const {setTitle}  = useContext(TitleContext);
    const {t} = useTranslation();  
    const location = useLocation();
    console.log(location.state);
    useEffect(()=>{
        setTitle(Title =>({...Title, Title: t("userType:show")}));
    },[t, setTitle]) 
  
  return (
   
    <>
    {location.state || location.pathname.split("/")[2] === "edit" ?
    <StyledContainer green>
    <BoxHeader children={<Trans i18nKey={"userType:show"} t={t}></Trans>}/>
    <Formik initialValues={{ User_Type_Id : location.state.UserType_Id,User_Type_Name_AR: location.state.UserType_Name_AR, User_Type_Name_EN: location.state.UserType_Name_EN}} validationSchema={null} onSubmit={redirect}>
      <Form>
        <RichInput>
        <CustomInput width={"30%"} as={"input"} id="User_Type_Name_AR" name="User_Type_Name_AR" type="text"  label={t("userType:User_Type_Name_AR")} placeholder={t("userType:User_Type_Name_AR")} value={location.state.User_Type_Name_AR}/>
        <CustomInput width={"30%"} as={"input"} id="User_Type_Name_EN" name="User_Type_Name_EN" type="text" label={t("userType:User_Type_Name_EN")} placeholder={t("userType:User_Type_Name_EN")} value={location.state.User_Type_Name_EN}/>
      </RichInput>
         <CustomButton green onClick="redirect()" className="send-btn">{t("userType:back")}</CustomButton>
      </Form>
      </Formik>


    </StyledContainer>: <Redirect to={"/"+location.pathname.split("/")[1]} />}
    </>
 
  );
};
export default ViewUserType;

const StyledContainer =  styled(LargeBox)`
  
`;