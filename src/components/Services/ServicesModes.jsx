import React, {useContext, useEffect ,useRef, useState}  from "react";
import styled from "styled-components";
import {TitleContext} from "../../contexts/TitleContext";
import {useTranslation, Trans} from "react-i18next";
// Gulp Import Anchor
import LargeBox from "../Reusables/LargeBox";
import RichInput from "../Reusables/RichInput";
import { CustomInput, CustomSelect, CustomRadio } from "../Reusables/CustomInputs";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { CustomButton } from "../Reusables/CustomButton";
import BoxHeader from "../Reusables/BoxHeader";
import {post} from "../../services/Api/base";



const ServicesModes = ({servicesMode, data, SetServicesMode, mode}, ref) => {
  const RollerRef = useRef();
  const Update = ((values) => {
    // BoxContainer.current.className="0.4";
    RollerRef.current.className="lds-roller Styledloader";
    console.log(RollerRef.current.style.opacity);
    let service = JSON.stringify(values);
    post("ADMIN/SERVICES/SERVICES/UPDATE_SERVICES", service).then((s)=>{
        let error = s.data.Error_EN;
        if(error == null || error === "")
        {
            SetServicesMode("grid");
        }else{
          alert(error)
        }
    })
  });
    const {setTitle}  = useContext(TitleContext);
    const {t} = useTranslation();  
    useEffect(()=>{
        setTitle(Title =>({...Title, Title: t("Services:title"), SubTitle: t("userContent:lorem")}));
    },[t, setTitle])
      return (
        <StyledContainer  ref={ref} green>
				<BoxHeader children={<Trans i18nKey={"Services:Editheader"} t={t}></Trans>}/>
        <div ref={RollerRef}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        { servicesMode && data ?
        <Formik initialValues={{ Service_Id:data.Service_Id,
                                 Service_Max_Received_Time: data.Service_Max_Received_Time,
                                 Service_Max_Received_Time_Type_Id:data.Service_Max_Received_Time_Type_Id,
                                 Service_Max_Processing_Time:data.Service_Max_Processing_Time,
                                 Service_Max_Processing_Time_Type_Id:data.Service_Max_Processing_Time_Type_Id,
                                 Service_Max_Review_Time:data.Service_Max_Review_Time,
                                 Service_Max_Review_Time_Type_Id:data.Service_Max_Review_Time_Type_Id,
                                 Service_Max_Confirmation_Time:data.Service_Max_Confirmation_Time,
                                 Service_Max_Confirmation_Time_Type_Id:data.Service_Max_Confirmation_Time_Type_Id,
                                 Active_Status_Id:data.Active_Status_Id  }} validationSchema={null} onSubmit={Update}>
			<Form>
            <fieldset >
			<RichInput>
            <CustomInput  width={"30%"} as={"input"} id="Edit_Service_Name_Arabic" name="Edit_Service_Name_Arabic" type="text"  label={<Trans i18nKey={"Services:Edit_Service_Name_Arabic"} t={t}></Trans>} value={data.Service_Name_AR}/>
            <CustomInput  width={"30%"} as={"input"} id="Edit_Service_Name_English" name="Edit_Service_Name_English" type="text"  label={<Trans i18nKey={"Services:Edit_Service_Name_English"} t={t}></Trans>} value={data.Service_Name_EN}/>
			</RichInput>
          <RichInput>
            <CustomInput width={"30%"} as={"input"} id="Service_Max_Received_Time" name="Service_Max_Received_Time" type="text" label={<Trans i18nKey={"Services:Service_Max_Received_Time"} t={t}></Trans>} />
            <CustomSelect  width={"30%"} id="Service_Max_Received_Time_Type_Id" name="Service_Max_Received_Time_Type_Id" label="-" >
            <option value="0">{t("Services:option_day")}</option>
            <option value="1">{t("Services:option_hour")}</option>
            <option value="2">{t("Services:option_minute")}</option>
            </CustomSelect>
		      </RichInput>

          <RichInput>
            <CustomInput width={"30%"} as={"input"} id="Service_Max_Processing_Time" name="Service_Max_Processing_Time" type="text" label={<Trans i18nKey={"Services:Service_Max_Processing_Time"} t={t}></Trans>} />
            <CustomSelect  width={"30%"} id="Service_Max_Processing_Time_Type_Id" name="Service_Max_Processing_Time_Type_Id" label="-" >
            <option value="0">{t("Services:option_day")}</option>
            <option value="1">{t("Services:option_hour")}</option>
            <option value="2">{t("Services:option_minute")}</option>
            </CustomSelect>
		      </RichInput>

          <RichInput>
            <CustomInput width={"30%"} as={"input"} id="Service_Max_Review_Time" name="Service_Max_Review_Time" type="text" label={<Trans i18nKey={"Services:Service_Max_Review_Time"} t={t}></Trans>}/>
            <CustomSelect  width={"30%"} id="Service_Max_Review_Time_Type_Id" name="Service_Max_Review_Time_Type_Id" label="-" >
            <option value="0">{t("Services:option_day")}</option>
            <option value="1">{t("Services:option_hour")}</option>
            <option value="2">{t("Services:option_minute")}</option>
            </CustomSelect>
		      </RichInput>

          <RichInput>
            <CustomInput width={"30%"} as={"input"} id="Service_Max_Confirmation_Time" name="Service_Max_Confirmation_Time" type="text" label={<Trans i18nKey={"Services:Service_Max_Confirmation_Time"} t={t}></Trans>}/>
            <CustomSelect  width={"30%"} id="Service_Max_Confirmation_Time_Type_Id" name="Service_Max_Confirmation_Time_Type_Id" label="-" >
            <option value="0">{t("Services:option_day")}</option>
            <option value="1">{t("Services:option_hour")}</option>
            <option value="2">{t("Services:option_minute")}</option>
            </CustomSelect>
		      </RichInput>
          
          <RichInput>
          <CustomSelect  width={"30%"} id="Active_Status_Name" name="Active_Status_Id" label={<Trans i18nKey={"Services:Active_Status_Name"} t={t}></Trans>}>
            <option value="0">{t("Services:option_stopped")} </option>
            <option value="1">{t("Services:option_active")} </option>
            </CustomSelect>
				  </RichInput>
          
            </fieldset>
                        { servicesMode === "edit"?
                            <CustomButton green type="submit" className="send-btn">حفظ</CustomButton>
                            :
                            <></>
                        }
						 <CustomButton red type="reset" onClick={()=>SetServicesMode("grid")} className="send-btn">الغاء</CustomButton>
					</Form>
					</Formik>
                    :
                    <></>
        }
        </StyledContainer>
      );
    }
  export default React.forwardRef(ServicesModes);

  

  const StyledContainer =  styled(LargeBox)`
    display:none;
  `;

  