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

const ViewDepartment = () => {

    const redirect = ()=>{
        history.push({ pathname:"/userType"});
      }

  const history = useHistory();
  const {setTitle}  = useContext(TitleContext);
    const {t} = useTranslation();  
    const location = useLocation();
    console.log(location.state);
    useEffect(()=>{
        setTitle(Title =>({...Title, Title: t("departement:show")}));
    },[t, setTitle]) 
  
  return (
   
    <>
    {location.state || location.pathname.split("/")[2] === "edit" ?
    <StyledContainer green>
    <BoxHeader children={<Trans i18nKey={"departement:show"} t={t}></Trans>}/>
    <Formik initialValues={{ Deparement_Id : location.state.Deparement_Id,Department_Name_AR: location.state.Deparement_Name_AR, Department_Name_EN: location.state.Deparement_Name_EN}} validationSchema={null} onSubmit={redirect}>
      <Form>
        <RichInput>
        <CustomInput width={"30%"} as={"input"} id="Department_Name_AR" name="Department_Name_AR" type="text"  label={t("departement:Deparement_Name_AR")} placeholder={t("departement:Deparement_Name_AR")} value={location.state.Deparement_Name_AR}/>
        <CustomInput width={"30%"} as={"input"} id="Department_Name_EN" name="Department_Name_EN" type="text"  label={t("departement:Deparement_Name_EN")} placeholder={t("departement:Deparement_Name_EN")} value={location.state.Deparement_Name_EN}/>
      </RichInput>
         <CustomButton green onClick="redirect()" className="send-btn">{t("departement:back")}</CustomButton>
      </Form>
      </Formik>


    </StyledContainer>: <Redirect to={"/"+location.pathname.split("/")[1]} />}
    </>
 
  );
};
export default ViewDepartment;

const StyledContainer =  styled(LargeBox)`
  
`;