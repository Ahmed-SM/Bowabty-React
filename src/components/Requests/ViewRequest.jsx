import React, {useContext, useEffect}  from "react";
import styled from "styled-components";
import {TitleContext} from "../../contexts/TitleContext";
import {useTranslation, Trans} from "react-i18next";
// Gulp Import Anchor
import LargeBox from "../Reusables/LargeBox";
import RichInput from "../Reusables/RichInput";
import {useLocation, Redirect} from "react-router-dom";
import { CustomInput, CustomSelect, CustomRadio } from "../Reusables/CustomInputs";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { CustomButton } from "../Reusables/CustomButton";
import BoxHeader from "../Reusables/BoxHeader";
import {post} from "../../services/Api/base";
import { useHistory } from "react-router";



const ViewRequest = () => {

  const redirect = ()=>{
    history.push({ pathname:"/requests"});
  }
  
    const {setTitle}  = useContext(TitleContext);
    const {t} = useTranslation();  
    const location = useLocation();
    const history = useHistory();
    useEffect(()=>{
        setTitle(Title =>({...Title, Title: t("Request:title"), SubTitle: t("userContent:lorem")}));
    },[t, setTitle])
    console.log(location.state)
      return (
        <>
        
        {location.state || location.pathname.split("/")[2] === "view" ?
        <StyledContainer green>
				<BoxHeader children={<Trans i18nKey={"Request:ViewHeader"} t={t}></Trans>}/>
        <Formik initialValues={{ Request_Code:location.state.Request_Code,
                                  Main_Service_Name: location.state.Main_Service_Name_AR,
                                  Main_Service_Name: location.state.Main_Service_Name_EN,
                                  Service_Name:location.state.Service_Name_AR,
                                  Service_Name:location.state.Service_Name_EN,
                                  Request_Date:location.state.Request_Date,
                                  Request_User_Name:location.state.Request_User_Name_AR,
                                  Request_User_Name:location.state.Request_User_Name_EN,
                                  Active_Status_Name:location.state.Request_Status_Name_AR,
                                  Active_Status_Name:location.state.Request_Status_Name_EN,
                                              }} validationSchema={null} onSubmit={null}>
					<Form>
          <RichInput>
            <CustomInput width={"30%"} as={"input"} id="Request_Code" name="Request_Date" type="text" label={<Trans i18nKey={"Request:requestCode"} t={t}></Trans>} value={location.state.Request_Code}/>
		      </RichInput>
						<RichInput>
            <CustomInput  width={"30%"} as={"input"} id="Main_Service_Name_Arabic" name="Main_Service_Name_Arabic" type="text"  label={<Trans i18nKey={"Request:Main_Service_Name_Arabic"} t={t}></Trans>} value={location.state.Main_Service_Name_AR}/>
            <CustomInput  width={"30%"} as={"input"} id="Main_Service_Name_English" name="Main_Service_Name_English" type="text"  label={<Trans i18nKey={"Request:Main_Service_Name_English"} t={t}></Trans>} value={location.state.Main_Service_Name_EN}/>
				  </RichInput>
          <RichInput>
            <CustomInput  width={"30%"} as={"input"} id="Edit_Service_Name_Arabic" name="Edit_Service_Name_Arabic" type="text"  label={<Trans i18nKey={"Request:Service_Name_Arabic"} t={t}></Trans>} value={location.state.Service_Name_AR}/>
            <CustomInput  width={"30%"} as={"input"} id="Edit_Service_Name_English" name="Edit_Service_Name_English" type="text"  label={<Trans i18nKey={"Request:Service_Name_English"} t={t}></Trans>} value={location.state.Service_Name_EN}/>
				  </RichInput>
          <RichInput>
            <CustomInput width={"30%"} as={"input"} id="Request_User_Name_Arabic" name="Request_User_Name_Arabic" type="text" label={<Trans i18nKey={"Request:Request_User_Name_Arabic"} t={t}></Trans>} value={location.state.Request_User_Name_AR}/>
            <CustomInput width={"30%"} as={"input"} id="Request_User_Name_English" name="Request_User_Name_English" type="text" label={<Trans i18nKey={"Request:Request_User_Name_English"} t={t}></Trans>} value={location.state.Request_User_Name_AR}/>
		      </RichInput>

          <RichInput>
            <CustomInput width={"30%"} as={"input"} id="Request_Date" name="Request_Date" type="text" label={<Trans i18nKey={"Request:requesteDate"} t={t}></Trans>} value={location.state.Request_Date}/>
		      </RichInput>

          <RichInput>
            <CustomInput width={"30%"} as={"input"} id="Request_Status_Name_AR" name="Request_Status_Name_AR" type="text" label={<Trans i18nKey={"Request:Request_Status_Name_AR"} t={t}></Trans>} value={location.state.Request_Status_Name_AR}/>
            <CustomInput width={"30%"} as={"input"} id="Request_Status_Name_EN" name="Request_Status_Name_EN" type="text" label={<Trans i18nKey={"Request:Request_Status_Name_EN"} t={t}></Trans>} value={location.state.Request_Status_Name_EN}/>
		      </RichInput>

						 <CustomButton red type="reset" onClick={redirect} className="send-btn">الغاء</CustomButton>

					</Form>
					</Formik>


        </StyledContainer>: <Redirect to={"/"+location.pathname.split("/")[1]} />}
        </>
      );
    }
  export default ViewRequest;
  
  const StyledContainer =  styled(LargeBox)`
  
  `;
