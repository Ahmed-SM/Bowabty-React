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
import { useHistory } from "react-router";;



const EditServices = () => {

  const redirect = ()=>{
    history.push({ pathname:"/services"});
  }
  const Update = ((values) => {
    let service = JSON.stringify(values);
    console.log(service);
    post("ADMIN/SERVICES/SERVICES/UPDATE_SERVICES", service).then((s)=>{
        let error = s.data.Error_EN;
        if(error == null || error === "")
        {
          history.push({ pathname:"/services"});
        }else{
          alert(error)
        }
    })
  });
    const {setTitle}  = useContext(TitleContext);
    const {t} = useTranslation();  
    const location = useLocation();
    const history = useHistory();
    useEffect(()=>{
        setTitle(Title =>({...Title, Title: t("Services:title"), SubTitle: t("userContent:lorem")}));
    },[t, setTitle])
    console.log(location.state)
      return (
        <>
        
        {location.state || location.pathname.split("/")[2] === "add" ?
        <StyledContainer green>
				<BoxHeader children={<Trans i18nKey={"Services:Editheader"} t={t}></Trans>}/>
        <Formik initialValues={{ Service_Id:location.state.Service_Id,
                                 Service_Max_Received_Time: location.state.Service_Max_Received_Time,
                                 Service_Max_Received_Time_Type_Id:location.state.Service_Max_Received_Time_Type_Id,
                                 Service_Max_Processing_Time:location.state.Service_Max_Processing_Time,
                                 Service_Max_Processing_Time_Type_Id:location.state.Service_Max_Processing_Time_Type_Id,
                                 Service_Max_Review_Time:location.state.Service_Max_Review_Time,
                                 Service_Max_Review_Time_Type_Id:location.state.Service_Max_Review_Time_Type_Id,
                                 Service_Max_Confirmation_Time:location.state.Service_Max_Confirmation_Time,
                                 Service_Max_Confirmation_Time_Type_Id:location.state.Service_Max_Confirmation_Time_Type_Id,
                                 Active_Status_Id:location.state.Active_Status_Id  }} validationSchema={null} onSubmit={Update}>
					<Form>
						<RichInput>
            <CustomInput  width={"30%"} as={"input"} id="Edit_Service_Name_Arabic" name="Edit_Service_Name_Arabic" type="text"  label={<Trans i18nKey={"Services:Edit_Service_Name_Arabic"} t={t}></Trans>} value={location.state.Service_Name_AR}/>
            <CustomInput  width={"30%"} as={"input"} id="Edit_Service_Name_English" name="Edit_Service_Name_English" type="text"  label={<Trans i18nKey={"Services:Edit_Service_Name_English"} t={t}></Trans>} value={location.state.Service_Name_EN}/>
				  </RichInput>
          <RichInput>
            <CustomInput width={"30%"} as={"input"} id="Service_Max_Received_Time" name="Service_Max_Received_Time" type="text" label={<Trans i18nKey={"Services:Service_Max_Received_Time"} t={t}></Trans>} placeholder={location.state.Service_Max_Received_Time}/>
            <CustomSelect placeholder={location.state.Service_Max_Received_Time_Type_Id} width={"30%"} id="Service_Max_Received_Time_Type_Id" name="Service_Max_Received_Time_Type_Id" label="-" >
            <option value="0">{t("Services:option_day")}</option>
            <option value="1">{t("Services:option_hour")}</option>
            <option value="2">{t("Services:option_minute")}</option>
            </CustomSelect>
		      </RichInput>

          <RichInput>
            <CustomInput width={"30%"} as={"input"} id="Service_Max_Processing_Time" name="Service_Max_Processing_Time" type="text" label={<Trans i18nKey={"Services:Service_Max_Processing_Time"} t={t}></Trans>} placeholder={location.state.Service_Max_Processing_Time}/>
            <CustomSelect placeholder={location.state.Service_Max_Processing_Time_Type_Id} width={"30%"} id="Service_Max_Processing_Time_Type_Id" name="Service_Max_Processing_Time_Type_Id" label="-" >
            <option value="0">{t("Services:option_day")}</option>
            <option value="1">{t("Services:option_hour")}</option>
            <option value="2">{t("Services:option_minute")}</option>
            </CustomSelect>
		      </RichInput>

          <RichInput>
            <CustomInput width={"30%"} as={"input"} id="Service_Max_Review_Time" name="Service_Max_Review_Time" type="text" label={<Trans i18nKey={"Services:Service_Max_Review_Time"} t={t}></Trans>} placeholder={location.state.Service_Max_Review_Time}/>
            <CustomSelect placeholder={location.state.Service_Max_Review_Time_Type_Id} width={"30%"} id="Service_Max_Review_Time_Type_Id" name="Service_Max_Review_Time_Type_Id" label="-" >
            <option value="0">{t("Services:option_day")}</option>
            <option value="1">{t("Services:option_hour")}</option>
            <option value="2">{t("Services:option_minute")}</option>
            </CustomSelect>
		      </RichInput>

          <RichInput>
            <CustomInput width={"30%"} as={"input"} id="Service_Max_Confirmation_Time" name="Service_Max_Confirmation_Time" type="text" label={<Trans i18nKey={"Services:Service_Max_Confirmation_Time"} t={t}></Trans>} placeholder={location.state.Service_Max_Confirmation_Time}/>
            <CustomSelect placeholdere={location.state.Service_Max_Confirmation_Time_Type_Id} width={"30%"} id="Service_Max_Confirmation_Time_Type_Id" name="Service_Max_Confirmation_Time_Type_Id" label="-" >
            <option value="0">{t("Services:option_day")}</option>
            <option value="1">{t("Services:option_hour")}</option>
            <option value="2">{t("Services:option_minute")}</option>
            </CustomSelect>
		      </RichInput>
          
          <RichInput>
          <CustomSelect placeholder={location.state.Active_Status_Id} width={"30%"} id="Active_Status_Name" name="Active_Status_Id" label={<Trans i18nKey={"Services:Active_Status_Name"} t={t}></Trans>}>
            <option value="0">{t("Services:option_stopped")} </option>
            <option value="1">{t("Services:option_active")} </option>
            <option value="2">{t("Services:option_deleted")} </option>
            </CustomSelect>
				  </RichInput>
          
						 <CustomButton green type="submit" className="send-btn">حفظ</CustomButton>
						 <CustomButton red type="reset" onClick={redirect} className="send-btn">الغاء</CustomButton>

					</Form>
					</Formik>


        </StyledContainer>: <Redirect to={"/"+location.pathname.split("/")[1]} />}
        </>
      );
    }
  export default EditServices;

  

  const StyledContainer =  styled(LargeBox)`
  
  `;
