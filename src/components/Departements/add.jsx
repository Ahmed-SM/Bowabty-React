import React, {useContext} from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";
import { useTranslation, Trans } from "react-i18next";
import {CustomInput} from "../Reusables/CustomInputs"
import * as Yup from "yup";
import {post} from "../../services/Api/base"

const AddDepartement = () => {
   
    const add = React.useCallback((values) => {
        // console.log(JSON.stringify(values, null, 2));
        let departments = JSON.stringify(values);
        console.log(departments);
        post("RAK/INVITATIONS/DEPARTEMENTS/ADD_DEPARTEMENT", departments).then((s)=>{
            let error = s.data.Error_EN;
            if(error == null || error == "")
            {
                alert("Done!!");
              
            }
        })
    });
  const { t } = useTranslation();
  
  return (
    <StyledAddUser>
      <StyledContainer>
        <StyledHeader>
          <h3 align="center"><Trans i18nKey={"myUers:AddNewUser"} t={t}> إضافة مستخدم جديد</Trans></h3>
        </StyledHeader>
        <StyledDivider />
        <StyledGroup dir="auto">
          <Formik initialValues={{Department_Name_AR: "", Department_Name_EN: ""}}
            // validationSchema={validation}
            // onSubmit={handleOnSubmit}>
            onSubmit = {add}>
              <Form>
                <StyledInputGroup>
                  
                    <StyledColumnSmall>
                     
                    <CustomInput  name="Department_Name_AR" type="text" placeholder="الاسم العربى" id="ar"/>
                  <StyledColumnSpan></StyledColumnSpan>
                    <CustomInput  name="Department_Name_EN" type="text" placeholder=" الإسم الإنجليزى" id="en"/>
                    </StyledColumnSmall>
                  
                  

                    <StyledColumnSmall>

                  <StyledColumnSpan>

                  </StyledColumnSpan>
                    
                    </StyledColumnSmall>
                   <StyledButton type="submit"><Trans i18nKey={"myUsers:Enter"} t={t}>إضافة</Trans></StyledButton>
                </StyledInputGroup>

                
              </Form>
          </Formik>
        </StyledGroup>
      </StyledContainer>
    </StyledAddUser>
  );
};
export default AddDepartement;



const StyledAddUser = styled.div`
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
  min-height: 50vh;
`;
const StyledContainer = styled.div`
  width: 70rem;
  height: 35rem;
  display: block;
  flex-direction: column;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  min-width: 45rem;
  box-shadow: 0px 0px 8px 3px rgba(0, 0, 0, 0.09);
  background-color: white;
  border-radius: 15px;
  border-bottom: 3px solid #323130;
`;
const StyledDivider = styled.hr`
  margin-top: 10px;
  width: 90%;
  margin-bottom: 10px;
`;
const StyledHeader = styled.div`
  padding: 10px 10px 10px 10px;
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
  margin-bottom: 3px;
`;
const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  height:70px;
  width: 61%;
  padding: 20px 20px;
`;
const StyledColumnSmall = styled.div`
  display: flex;
  flex-direction: row;
  height:30px;
  width: 90%;
  ${'' /* margin-right: 10px; */}
  padding: 20px 20px;
`;

const StyledColumnSpan = styled.span`
  display: flex;
  flex-direction: row;
  height:70px;
  width: 10%;
`;
const StyledColumnSpanbtn = styled.span`
  display: flex;
  flex-direction: row;
  height:70px;
  width: 10%;
`;
const StyledButton = styled.button`
  display: block;
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
  background-color: green;
  outline: none;
`;

const StyledSmallButton = styled.button`
  display: block;
  margin-bottom: 0;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  padding: 3px 15px;
  font-size: 14px;
  line-height: 1.42857143;
  border-radius: 4px;
  user-select: none;
  color: #fff;
  background-color: green;
  outline: none;
  height:40%;
`;