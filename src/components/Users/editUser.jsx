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


const TestComponent = () => {
    const {setTitle}  = useContext(TitleContext);
    const {t} = useTranslation();  
    const location = useLocation();
    useEffect(()=>{
        setTitle(Title =>({...Title, Title: t("TestComponent:title"), SubTitle: t("userContent:lorem")}));
    },[t, setTitle])
    console.log(location.state)
      return (
        <>
        {location.state || location.pathname.split("/")[2] === "edit" ?
        <StyledContainer green>
				<BoxHeader children={<Trans i18nKey={"TestComponent:header"} t={t}></Trans>}/>
                <Formik initialValues={{ User_Name_AR: "",User_Name_EN: "",User_Name_EN: "",User_Phone: "",User_Mail: "",Department_Id: "",Active_Status_Id: "" }} validationSchema={null} onSubmit={null}>
					<Form>
						<RichInput>
                        <CustomInput width={"30%"} as={"input"} id="Login_Name" name="Login_Name" type="text" label={" اسم الدخول"} placeholder={location.state.userName} />
            <CustomInput width={"30%"} as={"input"} id="Login_Pass" name="Login_Pass" type="text" label={"كلمة المرور "} />
				  </RichInput>
          <RichInput>
          <CustomInput width={"30%"} as={"input"} id="User_Phone" name="User_Phone" type="text" label={"رقم الهاتف"} />
            <CustomInput width={"30%"} as={"input"} id="User_Mail" name="User_Mail" type="text" label={"البريد الإلكتروني"} />
				  </RichInput>
          <RichInput>
          <CustomSelect width={"30%"} id="Department_Id" name="Department_Id" label={"القسم"} placeholder={"القسم"}>
            <option value={t("myDesk:item")}>
            تقنية المعلومات
            </option>
            </CustomSelect>
            <CustomSelect width={"30%"} id="Job_Id" name="Job_Id" label={"الوظيفة"} placeholder={"الوظيفة"}>
            <option value={t("myDesk:item")}>
            إداري
            </option>
            </CustomSelect>
				  </RichInput>
          <RichInput>
          <CustomSelect width={"30%"} id="Active_Status_Id" name="Active_Status_Id" label={"حالة المستخدم"} placeholder={"حالة المستخدم"}>
            <option value={t("myDesk:item")}>
                    نشط
            </option>
            </CustomSelect>
				  </RichInput>
          
						 <CustomButton green type="submit" className="send-btn">حفظ</CustomButton>
					</Form>
					</Formik>


        </StyledContainer>: <Redirect to={"/"+location.pathname.split("/")[1]} />}
        </>
      );
    }
  export default TestComponent;

  const StyledContainer =  styled(LargeBox)`
  
  `;
