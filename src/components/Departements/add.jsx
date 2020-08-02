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

const AddDepartement = () => {
  const history = useHistory();
  const {setTitle}  = useContext(TitleContext);
    const {t} = useTranslation();  
    const location = useLocation();
    useEffect(()=>{
        setTitle(Title =>({...Title, Title: t("departement:AddDepartement")}));
    },[t, setTitle])

    const add = React.useCallback((values) => {
        // console.log(JSON.stringify(values, null, 2));
        let departments = JSON.stringify(values);
        console.log(departments);
        
        const redirect = ()=>{
          history.push({ pathname:"/departement"});
        }

        post("RAK/INVITATIONS/DEPARTEMENTS/ADD_DEPARTEMENT", departments).then((s)=>{
            let error = s.data.Error_EN;
            if(error == null || error == "")
            {
              redirect();             
            }
            
        })
    }); 
  
  return (
   
    <>
    {location.state || location.pathname.split("/")[2] === "add" ?
    <StyledContainer green>
    <BoxHeader children={<Trans i18nKey={"departement:AddDepartement"} t={t}></Trans>}/>
    <Formik initialValues={{ Department_Name_AR: "", Department_Name_EN: ""}} validationSchema={null} onSubmit={add}>
      <Form>
        <RichInput>
        <CustomInput width={"30%"} as={"input"} id="Department_Name_AR" name="Department_Name_AR" type="text"  label={t("departement:Deparement_Name_AR")} placeholder={t("departement:Deparement_Name_AR")}/>
        <CustomInput width={"30%"} as={"input"} id="Department_Name_EN" name="Department_Name_EN" type="text" label={t("departement:Deparement_Name_EN")} placeholder={t("departement:Deparement_Name_EN")}/>
      </RichInput>
         <CustomButton green type="submit" className="send-btn">{t("departement:save")}</CustomButton>
         <CustomButton green>{t("userType:cancel")}</CustomButton>
      </Form>
      </Formik>


    </StyledContainer>: <Redirect to={"/"+location.pathname.split("/")[1]} />}
    </>
 
  );
};
export default AddDepartement;

const StyledContainer =  styled(LargeBox)`
  
`;