import React, {useContext, useEffect ,useRef}  from "react";
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



const EditUsersJobs = () => {

  const RollerRef = useRef();
  const BoxContainer = useRef();
  const redirect = ()=>{
    history.push({ pathname:"/UsersJobs"});
  }
  const Update = ((values) => {
    // BoxContainer.current.className="0.4";
    RollerRef.current.className="lds-roller Styledloader";
    console.log(RollerRef.current.style.opacity);
    let job = JSON.stringify(values);
    post("ADMIN/USERS_JOBS/UPDATE_USERSJOB", job).then((s)=>{
        let error = s.data.Error_EN;
        if(error == null || error === "")
        {
          history.push({ pathname:"/UsersJobs"});
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
        setTitle(Title =>({...Title, Title: t("UsersJobs:title"), SubTitle: t("userContent:lorem")}));
    },[t, setTitle])
    console.log(location.state)
      return (
        <>
        
        {location.state || location.pathname.split("/")[2] === "edit" ?
        <StyledContainer  green>
				<BoxHeader children={<Trans i18nKey={"UsersJobs:editHeader"} t={t}></Trans>}/>
        <div ref={RollerRef}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        <Formik initialValues={{ Job_Id:location.state.Job_Id,
                                 Job_Name_AR: location.state.Job_Name_AR,
                                 Job_Name_EN:location.state.Job_Name_EN,
                                }} validationSchema={null} onSubmit={Update}>
					<Form>
						<RichInput>
            <CustomInput   width={"30%"} as={"input"} id="Job_Name_AR" name="Job_Name_AR" type="text"  label={<Trans i18nKey={"UsersJobs:JobName_AR"} t={t}></Trans>} />
            <CustomInput  width={"30%"} as={"input"} id="Job_Name_EN" name="Job_Name_EN" type="text"  label={<Trans i18nKey={"UsersJobs:JobName_EN"} t={t}></Trans>} />
				  </RichInput>
						 <CustomButton green type="submit" className="send-btn">{<Trans i18nKey={"UsersJobs:save"} t={t}></Trans>}</CustomButton>
						 <CustomButton red type="reset" onClick={redirect} className="send-btn">{<Trans i18nKey={"UsersJobs:cancel"} t={t}></Trans>}</CustomButton>

					</Form>
					</Formik>

        </StyledContainer>: <Redirect to={"/"+location.pathname.split("/")[1]} />}
          
        </>
      );
    }
  export default EditUsersJobs;
  
  const StyledContainer =  styled(LargeBox)`
      position: relative;
  `;
  