import React, {useContext, useEffect}  from "react";
import styled from "styled-components";
import {TitleContext} from "../../contexts/TitleContext";
import {useTranslation, Trans} from "react-i18next";
import LargeBox from "../Reusables/LargeBox";
import BoxHeader from "../Reusables/BoxHeader";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {CustomInput, CustomFile} from "../Reusables/CustomInputs";
import {CustomButton} from "../Reusables/CustomButton";
import RichInput from "../Reusables/RichInput";
import {faPaperclip} from '@fortawesome/free-solid-svg-icons';

const LegalAffairs = () => {
    console.log("IncomingRequest rerendred")
    const [Title, setTitle] = useContext(TitleContext);
    const {t} = useTranslation();   
    const validation = Yup.object({
        suggestion: Yup.string()
            .min(3, t('login:min'))
            .max(15, t('login:max'))
            .required(t('login:required')),
            textarea: Yup.string().min(3, t('login:min')).max(8, t('login:max')).required(t('login:required')),
            attach: Yup.object().required(t('login:required')),
        });
        const handleOnSubmit = (values)=> {
        };
    useEffect(() => {
        console.log("MyService rerendred use effect")
            setTitle(Title =>({...Title, Title: t("LegalAffairs:title"), SubTitle: t("userContent:lorem")}));
    },[t, setTitle]);

      return (
        <StyledMdContainer green>
            <BoxHeader children={<Trans i18nKey={"LegalAffairs:followUp"} t={t}></Trans>}/>
            <Formik initialValues={{textarea: "", file:""}}
                    validationSchema={validation}
                    onSubmit={handleOnSubmit}>
                    <Form>
                <RichInput >  

            <CustomInput as={"textarea"} label={t("LegalAffairs:textarea")} name="textarea" type="text" placeholder={t("LegalAffairs:textarea")}  rows="15" cols="70" wrap="off"  width={"100%"} /> 
            </RichInput> 
            <RichInput>  
 
            <CustomFile as={"input"} label={t("LegalAffairs:file")} name="file" id="file" type="file" placeholder={t("LegalAffairs:file")} icon={faPaperclip} width={"19rem"}/> 
            </RichInput>      
            <CustomButton green type="submit" className="send-btn"><Trans i18nKey={"myService:sendBtn"} t={t}>ارسال</Trans></CustomButton>
                    </Form>
                </Formik>
            
        </StyledMdContainer>
      );
    }
  export default LegalAffairs;
  const StyledMdContainer =  styled(LargeBox)`
    width:760px;
    height:520px;
    padding: 20px 40px 0 40px;
  `;