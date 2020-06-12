import React, {useContext} from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";
import { useTranslation, Trans } from "react-i18next";
import { UserContext} from "../../contexts/UserContext";
import {CustomInput} from ".."
import * as Yup from "yup";

const Login = () => {
    console.log("Login rerendred ")
  const { t } = useTranslation();
  const {setUserData} = useContext(UserContext);
  const validation = Yup.object({
    username: Yup.string()
        .min(3, t('login:min'))
        .max(15, t('login:max'))
        .required(t('login:required')),
      password: Yup.string().min(3, t('login:min')).max(8, t('login:max')).required(t('login:required')),
    });
    const handleOnSubmit = (values) =>{
        setTimeout(()=>{
            console.log(JSON.stringify(values, null, 2));
            setUserData(true);
        },1000)
    }
  return (
    <StyledLogin>
      <StyledContainer>
        <StyledHeader>
          <h3><Trans i18nKey={"login:logIn"} t={t}>تسجيل دخول</Trans></h3>
        </StyledHeader>
        <StyledDivider />
        <StyledGroup dir="auto">
          <Formik initialValues={{username: "", password: ""}}
            validationSchema={validation}
            onSubmit={handleOnSubmit}>
              <Form>
                <StyledInputGroup>
                  <StyledColumn>
                    <CustomInput label={t('login:username')} name="username" type="text"/>
                    </StyledColumn>
                    <StyledColumn>
                    <CustomInput label={t('login:password')} name="password" type="password"/>
                 </StyledColumn>
                </StyledInputGroup>
                <StyledButton type="submit"><Trans i18nKey={"login:enter"} t={t}>دخول</Trans></StyledButton>
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
const StyledButton = styled.button`
  display: inline-block;
  margin-bottom: 0;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  padding: 3px 32px;
  font-size: 14px;
  line-height: 1.42857143;
  border-radius: 4px;
  user-select: none;
  color: #fff;
  background-color: #3c4652;
  outline: none;
`;
