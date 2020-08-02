import React, {useContext, useEffect} from "react";
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
import { useHistory } from "react-router";;

const AddUserType = () => {
  
  const {setTitle}  = useContext(TitleContext);
    const {t} = useTranslation();  
    const location = useLocation();
    useEffect(()=>{
        setTitle(Title =>({...Title, Title: t("userType:AddUserType")}));
    },[t, setTitle])

    const history = useHistory();

    const redirect = ()=>{
      history.push({ pathname:"/UserType"});
    }

    const add = React.useCallback((values) => {
        // console.log(JSON.stringify(values, null, 2));
        let userType = JSON.stringify(values);
        console.log(userType);
        post("RAK/INVITATIONS/USER_TYPES/ADD_USER_TYPE", userType).then((s)=>{
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
    <BoxHeader children={<Trans i18nKey={"userType:AddUserType"} t={t}></Trans>}/>
    <Formik initialValues={{ User_Type_Name_AR: "", User_Type_Name_EN: ""}} validationSchema={null} onSubmit={add}>
      <Form>
        <RichInput>
        <CustomInput width={"30%"} as={"input"} id="User_Type_Name_AR" name="User_Type_Name_AR" type="text"  label={t("userType:User_Type_Name_AR")} placeholder={t("userType:User_Type_Name_AR")}/>
        <CustomInput width={"30%"} as={"input"} id="User_Type_Name_EN" name="User_Type_Name_EN" type="text" label={t("userType:User_Type_Name_EN")} placeholder={t("userType:User_Type_Name_EN")}/>
      </RichInput>
         <CustomButton green type="submit" className="send-btn">{t("userType:save")}</CustomButton>
         <CustomButton type="" onClick="redirect()">{t("userType:cancel")}</CustomButton>
      </Form>
      </Formik>


    </StyledContainer>: <Redirect to={"/"+location.pathname.split("/")[1]} />}
    </>
 
  );
};
export default AddUserType;

const BtnStyle = styled.button(`
color:red;
`);

const StyledContainer =  styled(LargeBox)`
  
`;