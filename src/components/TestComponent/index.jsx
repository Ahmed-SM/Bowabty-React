import React, {useContext, useEffect}  from "react";
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


const TestComponent = () => {
    const {setTitle}  = useContext(TitleContext);
    const {t} = useTranslation();  
    useEffect(()=>{
        setTitle(Title =>({...Title, Title: t("TestComponent:title"), SubTitle: t("userContent:lorem")}));
    },[t, setTitle])
      return (
        <StyledContainer green>
				<BoxHeader children={<Trans i18nKey={"TestComponent:header"} t={t}></Trans>}/>
				<Formik initialValues={{ name: "", }} validationSchema={null} onSubmit={null}>
					<Form>
						<RichInput>
            <CustomInput width={"30%"} as={"input"} id="name" name="name" type="text"  label={"اسم المتسخدم بالعربية"} placeholder={"فادي محمد احمد"}/>
            <CustomInput width={"30%"} as={"input"} id="name" name="name" type="text" label={"اسم المتسخدم بالإنجليزية"} placeholder={"Fadi Mohamed Ahmed"}/>
				  </RichInput>
          <RichInput>
            <CustomInput width={"30%"} as={"input"} id="name" name="name" type="text" label={"رقم الهاتف"} placeholder={"0501234567"}/>
            <CustomInput width={"30%"} as={"input"} id="name" name="name" type="text" label={"البريد الإلكتروني"} placeholder={"f.Mohamed@ega.rak.ae"}/>
				  </RichInput>
          <RichInput>
            <CustomSelect width={"30%"} id="name" name="name" label={"القسم"} placeholder={"القسم"}>
            <option value={t("myDesk:item")}>
            تقنية المعلومات
            </option>
            </CustomSelect>
            <CustomSelect width={"30%"} id="name" name="name" label={"الوظيفة"} placeholder={"الوظيفة"}>
            <option value={t("myDesk:item")}>
            إداري
            </option>
            </CustomSelect>
				  </RichInput>
          <RichInput>
          <CustomSelect width={"30%"} id="name" name="name" label={"حالة المستخدم"} placeholder={"حالة المستخدم"}>
            <option value={t("myDesk:item")}>
                    نشط
            </option>
            </CustomSelect>
				  </RichInput>
          
						 <CustomButton green type="submit" className="send-btn">حفظ</CustomButton>
					</Form>
					</Formik>


        </StyledContainer>
      );
    }
  export default TestComponent;

  const StyledContainer =  styled(LargeBox)`
  
  `;
