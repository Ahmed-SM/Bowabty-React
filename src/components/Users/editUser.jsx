import React, {useContext, useEffect,useState,useRef}  from "react";
import styled from "styled-components";
import {TitleContext} from "../../contexts/TitleContext";
import {useTranslation, Trans} from "react-i18next";
import logo from "../../assets/default.jpeg";
// Gulp Import Anchor
import LargeBox from "../Reusables/LargeBox";
import RichInput from "../Reusables/RichInput";
import {useLocation, Redirect} from "react-router-dom";
import { CustomInput, CustomSelect, CustomRadio } from "../Reusables/CustomInputs";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { CustomButton } from "../Reusables/CustomButton";
import BoxHeader from "../Reusables/BoxHeader";
import {post,get} from "../../services/Api/base";
import { useHistory } from "react-router";

const EditUser = () => {
//
const RollerRef = useRef();
//
  const redirect = ()=>{
    history.push({ pathname:"/Users"});
  }
  const ShowAll=()=>{
    history.push({ pathname:"/Users"});
  }
  const Update = React.useCallback((values) => {
    //
    RollerRef.current.className="lds-roller Styledloader";
    let requestOptions = {
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
      }
  };
    //
    let PARAMETER = values;
    console.log(PARAMETER);
    var formData = new FormData();


formData.append('PARAMETERS', JSON.stringify(PARAMETER));
    post("ADMIN/SYSTEM/USERS/UPDATE_USER",formData, requestOptions).then((s)=>{
        let error = s.data.Error_EN;
        if(error == null || error === "")
        {
         
          history.push({ pathname:"/Users"});
        }
    })
});
const [Users_Type_Data,setUsers_Type_Data] = useState({ar: [],en: [],})
const [Active_Status_Data,setActive_Status_Data] = useState({ar: [],en: [],})
const [Job_Data,setJob_Data] = useState({ar: [],en: [],})
const [Dep_Data,setDep_Data] = useState({ar: [],en: [],})
    const {setTitle}  = useContext(TitleContext);
    const {t} = useTranslation();  
    const location = useLocation();
    const history = useHistory();
    useEffect(()=>{
        setTitle(Title =>({...Title, Title: t("Services:title"), SubTitle: t("userContent:lorem")}));
    },[t, setTitle])
    console.log(location.state)

    //
    const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);
  const handleImageUpload = e => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = e => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
     
    }
  };
 
    //
useEffect(() => {
  ACTIVE_STATUS(setActive_Status_Data)
}, []);
//

//
useEffect(() => {
  Users_Type(setUsers_Type_Data)
}, []);
//
//
useEffect(() => {
  Jobs_Data(setJob_Data)
}, []);
//
useEffect(() => {
  User_Dep(setDep_Data)
}, []);
//
useEffect(() => {
  Users_Type(setUsers_Type_Data)
}, []);
//
      return (
        <>
        {location.state || location.pathname.split("/")[2] === "edit" ?
        <StyledContainer green>
				<BoxHeader children={<Trans i18nKey={"TestComponent:header"} t={t}></Trans>}/>
        <div ref={RollerRef}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        <Formik initialValues={{ User_Id: location.state.User_Id,User_Name_AR:location.state.User_Name_AR,User_Name_EN:location.state.User_Name_EN,
        User_Phone:location.state.User_Phone,User_Mail:location.state.User_Mail,Department_Id:location.state.Department_Id,Job_Id:location.state.Job_Id,
        Active_Status_Id:location.state.Active_Status_Id,User_Type_Id:location.state.User_Type_Id,Login_Name:location.state.Login_Name,Login_Pass:location.state.Login_Pass,
        Department_Id:location.state.Department_Id,Job_Id:location.state.Job_Id

        
        }} validationSchema={null} onSubmit={Update}>
					<Form>
						<RichInput>
            <CustomInput width={"30%"} as={"input"} id="User_Name_AR" name="User_Name_AR" type="text"  label={"اسم المتسخدم بالعربية"} placeholder={"فادي محمد احمد"}/>
            <CustomInput width={"30%"} as={"input"} id="User_Name_EN" name="User_Name_EN" type="text" label={"اسم المتسخدم بالإنجليزية"} placeholder={"Fadi Mohamed Ahmed"}/>
            <span
     style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      // position: "absolute",
      top:"20%",
      left:"80px"
      
    }}
    >
      <input
        type="file"
        accept="image/*"
          onChange={handleImageUpload}
         ref={imageUploader}
        style={{
          display: "none"
        }}
      />
      <span
        style={{
          height: "90px",
          width: "90px",
          // border: "1px dashed black",
        
        
          borderRadius: 150 / 2,
          overflow: "hidden",
          borderWidth: 5,
          borderColor: "red"
          
        }}
       onClick={() => imageUploader.current.click()}
      >
        <img src={logo} alt="" width="280" 
          ref={uploadedImage}
          style={{
            width: "100%",
            height: "100%",
            position: "acsolute"
            
          }}
        />
      </span>
      Click to upload Image
    </span>
				  </RichInput>
          <RichInput>
            <CustomInput width={"30%"} as={"input"} id="Login_Name" name="Login_Name" type="text" label={" اسم الدخول"} />
            <CustomInput width={"30%"} as={"input"} id="Login_Pass" name="Login_Pass" type="password" label={"كلمة المرور "} />
				  </RichInput>
          <RichInput>
            <CustomInput width={"30%"} as={"input"} id="User_Phone" name="User_Phone" type="text" label={"رقم الهاتف"} placeholder={"0501234567"}/>
            <CustomInput width={"30%"} as={"input"} id="User_Mail" name="User_Mail" type="text" label={"البريد الإلكتروني"} placeholder={"f.Mohamed@ega.rak.ae"}/>
				  </RichInput>
          <RichInput>
            <CustomSelect width={"30%"} id="Department_Id" name="Department_Id" label={"القسم"} placeholder={"القسم"}>
            {Dep_Data.ar.map(item => (
        <option
          key={item.Department_Id}
          value={item.Department_Id}
        >
          {item.Department_Name_AR}
        </option>
      ))}
            </CustomSelect>
            <CustomSelect width={"30%"} id="Job_Id" name="Job_Id" label={"الوظيفة"} placeholder={"الوظيفة"}>
            {Job_Data.ar.map(item => (
        <option
          key={item.Job_Id}
          value={item.Job_Id}
        >
          {item.Job_Name_AR}
        </option>
      ))}
            </CustomSelect>
				  </RichInput>
          <RichInput>
          <CustomSelect width={"30%"} id="Active_Status_Id" name="Active_Status_Id" label={"حالة المستخدم"} placeholder={"حالة المستخدم"}>
          {Active_Status_Data.ar.map(item => (
        <option
          key={item.Active_Status_Id}
          value={item.Active_Status_Id}
        >
          {item.Active_Status_Name_AR}
        </option>
      ))}
            </CustomSelect>
            <CustomSelect width={"30%"} id="User_Type_Id" name="User_Type_Id" label={"نوع المستخدم"} placeholder={"نوع المستخدم"}>
            {Users_Type_Data.ar.map(item => (
        <option
          key={item.User_Type_Id}
          value={item.User_Type_Id}
        >
          {item.User_Type_Name_AR}
        </option>
      ))}

            </CustomSelect>
				  </RichInput>
          
						 <CustomButton green type="submit" className="send-btn">حفظ</CustomButton>
             <CustomButton green type="submit" onClick={ShowAll} className="send-btn">إلغـاء</CustomButton>
					</Form>
					</Formik>


        </StyledContainer>: <Redirect to={"/"+location.pathname.split("/")[1]} />}
        </>
      );
    }
  export default EditUser;

  const StyledContainer =  styled(LargeBox)`
  position: relative;
  `;
 
  const ACTIVE_STATUS = (setActive_Status_Data) =>{
    get("ADMIN/SYSTEM/LOOKUPS/ACTIVE_STATUS")
      .then((response) => {
        console.log(response)
        var Active_Status_Data = {ar:[] , en:[]};
        let temp = Object.values(response.data.Data);
        for (let i = 0; i < temp.length; i++) {
          Active_Status_Data.ar.push(
            {
              Active_Status_Id: temp[i].Active_Status_Id,
              Active_Status_Name_AR: temp[i].Active_Status_Name_AR,
            
            });
            Active_Status_Data.en.push(
            {
              Active_Status_Id: temp[i].Active_Status_Id,
           
              Active_Status_Name_EN: temp[i].Active_Status_Name_EN,
            });
        }
        setActive_Status_Data(Active_Status_Data);
      });
  }
  //
  
  
  const Users_Type = (setUsers_Type_Data) =>{
    get("ADMIN/SYSTEM/LOOKUPS/USER_TYPES")
      .then((response) => {
        console.log(response)
        var Users_Type_Data = {ar:[] , en:[]};
        let temp = Object.values(response.data.Data);
        for (let i = 0; i < temp.length; i++) {
          Users_Type_Data.ar.push(
            {
              User_Type_Id: temp[i].User_Type_Id,
              User_Type_Name_AR: temp[i].User_Type_Name_AR,
            
            });
            Users_Type_Data.en.push(
            {
              User_Type_Id: temp[i].User_Type_Id,
           
              User_Type_Name_EN: temp[i].User_Type_Name_EN,
            });
        }
        setUsers_Type_Data(Users_Type_Data);
      });


  }
  
  //
  
  const Jobs_Data = (setJob_Data) =>{
  get("ADMIN/USERS_JOBS/USERSJOB_LIST")
    .then((response) => {
      console.log(response)
      var Job_Data = {ar:[] , en:[]};
      let temp = Object.values(response.data.Data);
      for (let i = 0; i < temp.length; i++) {
        Job_Data.ar.push(
          {
            Job_Id: temp[i].Job_Id,
            Job_Name_AR: temp[i].Job_Name_AR,
          
          });
          Job_Data.en.push(
          {
            Job_Id: temp[i].Job_Id,
         
            Job_Name_EN: temp[i].Job_Name_EN,
          });
      }
      setJob_Data(Job_Data);
    });
}
  //
  const User_Dep = (setDep_Data) =>{
    get("ADMIN/SYSTEM/DEPARTEMENTS/DEPARTEMENTS_LIST")
      .then((response) => {
        console.log(response)
        var Dep_Data = {ar:[] , en:[]};
        let temp = Object.values(response.data.Data);
        for (let i = 0; i < temp.length; i++) {
          Dep_Data.ar.push(
            {
              Department_Id: temp[i].Department_Id,
              Department_Name_AR: temp[i].Department_Name_AR,
            
            });
            Dep_Data.en.push(
            {
              Department_Id: temp[i].Department_Id,
           
              Department_Name_EN: temp[i].Department_Name_EN,
            });
        }
        setDep_Data(Dep_Data);
      });
  }

  //