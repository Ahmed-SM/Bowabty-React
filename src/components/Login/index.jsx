import React, {useContext, useRef } from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";
import { useTranslation, Trans } from "react-i18next";
import { UserContext} from "../../contexts/UserContext";
import {CustomInput} from "../Reusables/CustomInputs"
import {CustomButton} from "../Reusables/CustomButton";
import Auth from "../../services/Api/auth";
import * as Yup from "yup";

const Login = () => {
  const { t } = useTranslation();
  const {IsAuthenticated, SetIsAuthenticated} = useContext(UserContext);
  const ContainerRef = useRef();
  const ButtonRef = useRef();
  const FormRef = useRef();
  const RollerRef = useRef();

  const loginFailed = () =>{
    ContainerRef.current.style.borderBottom= "6px solid #323130";
    ContainerRef.current.style.animation= "";
    FormRef.current.removeAttribute('disabled');
    RollerRef.current.className=" ";
  }

  const validation = Yup.object({
    Login_Name: Yup.string()
        .min(3, t('login:min'))
        .max(15, t('login:max'))
        .required(t('login:required')),
      Login_Pass: Yup.string().min(1, t('login:min')).max(8, t('login:max')).required(t('login:required')),
    });
    const handleOnSubmit = React.useCallback((values)=> {
      console.log(JSON.stringify(values, null, 2));
      let data = JSON.stringify(values);
      ContainerRef.current.style.borderBottom= "6px solid #51ee73";
      ContainerRef.current.style.animation= "barberpole 1s linear infinite";
      FormRef.current.setAttribute('disabled', true);
      RollerRef.current.className="lds-roller";
      Auth.index(data,SetIsAuthenticated, loginFailed);
      },[IsAuthenticated]);
    
  return (
    <StyledLogin>
      <StyledContainer ref={ContainerRef}>
        <StyledHeader>
          <h3><Trans i18nKey={"login:logIn"} t={t}>تسجيل دخول</Trans></h3>
        </StyledHeader>
        <StyledDivider />
          <div ref={RollerRef}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        <StyledGroup dir="auto">
          <Formik initialValues={{Login_Name: "", Login_Pass: ""}}
            validationSchema={validation}
            onSubmit={handleOnSubmit}>
              <Form>
                <fieldset ref={FormRef}>
                <StyledInputGroup>
                  <StyledColumn>
                    <CustomInput label={t('login:username')} name="Login_Name" type="text"/>
                    </StyledColumn>
                    <StyledColumn>
                    <CustomInput label={t('login:password')} name="Login_Pass" type="password"/>
                 </StyledColumn>
                </StyledInputGroup>
                <CustomButton ref={ButtonRef} type="submit"><Trans i18nKey={"login:enter"} t={t}>دخول</Trans></CustomButton>
                </fieldset>
              </Form>
          </Formik>
        </StyledGroup>
      </StyledContainer>
    </StyledLogin>
  );
};
export default Login;

const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  align-items: center;
  -webkit-font-smoothing: antialiased;
  user-select: none;
  background-color: #f6f4f5;
  direction: rtl;
  width: 100%;
  min-height: 80vh;
`;
const StyledContainer = styled.div`
  width: 50rem;
  height: 31rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  min-width: 45rem;
  box-shadow: 0px 0px 8px 3px rgba(0, 0, 0, 0.09);
  background-color: white;
  border-radius: 15px;
  border-bottom: 6px solid #323130;
  @keyframes barberpole {
    100% {
      border-bottom: 6px solid #323130;
    }
`;
const StyledDivider = styled.hr`
  margin-top: 10px;
  width: 90%;
  margin-bottom: 10px;
`;
const StyledHeader = styled.div`
  padding: 0px 10px 0px 10px;
  -webkit-text-stroke: 0.4px black;
  -webkit-text-fill-color: black;

  & > * {
    margin: 2px 0;
  }
`;
const StyledGroup = styled.div`
  display: block;
  width: 100%;
  padding: 0px 40px;
`;
const StyledInputGroup = styled.div`
  width: 100%;
  margin-bottom: 5px;
`;
const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  height:80px;
  width: 100%;
`;

