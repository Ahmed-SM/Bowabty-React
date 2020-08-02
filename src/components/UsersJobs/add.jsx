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

const AddUsersJobs = () => {
  const history = useHistory();
  const {setTitle}  = useContext(TitleContext);
  const redirect = ()=>{
    history.push({ pathname:"/UsersJobs"});
  }
    const {t} = useTranslation();  
    const location = useLocation();
    useEffect(()=>{
        setTitle(Title =>({...Title, Title: t("UsersJobs:title")}));
    },[t, setTitle])

    const add = React.useCallback((values) => {
        // console.log(JSON.stringify(values, null, 2));
        let usersJob = JSON.stringify(values);
        console.log(usersJob);
        
        

        post("ADMIN/USERS_JOBS/ADD_USERSJOB", usersJob).then((s)=>{
            let error = s.data.Error_EN;
            if(error == null || error === "")
            {
              history.push({ pathname:"/UsersJobs"});
            }else{
              alert(error)
            }
            
        })
    }); 
  
  return (
   
    <>
    {location.state || location.pathname.split("/")[2] === "add" ?
    <StyledContainer green>
    <BoxHeader children={<Trans i18nKey={"UsersJobs:addHeader"} t={t}></Trans>}/>
                  <Formik initialValues={{ Job_Name_AR: "", Job_Name_EN: "" }} validationSchema={null} onSubmit={add}>
                      <Form>
                          <RichInput>
                              <CustomInput placeholder={t("UsersJobs:JobName_AR")} width={"30%"} as={"input"} id="Job_Name_AR" name="Job_Name_AR" type="text" label={<Trans i18nKey={"UsersJobs:JobName_AR"} t={t}></Trans>} />
                              <CustomInput placeholder={t("UsersJobs:JobName_EN")} width={"30%"} as={"input"} id="Job_Name_EN" name="Job_Name_EN" type="text" label={<Trans i18nKey={"UsersJobs:JobName_EN"} t={t}></Trans>} />
                          </RichInput>
                          <CustomButton green type="submit" className="send-btn">{<Trans i18nKey={"UsersJobs:save"} t={t}></Trans>}</CustomButton>
                          <CustomButton red onClick={redirect}  className="send-btn">{<Trans i18nKey={"UsersJobs:cancel"} t={t}></Trans>}</CustomButton>
						              <CustomButton purple type="reset"   className="send-btn">{<Trans i18nKey={"UsersJobs:reset"} t={t}></Trans>}</CustomButton>
                      </Form>
                  </Formik>


    </StyledContainer>: <Redirect to={"/"+location.pathname.split("/")[1]} />}
    </>
 
  );
};
export default AddUsersJobs;
const StyledContainer =  styled(LargeBox)`
  
`;