import React, {useContext, useEffect,useState,useRef}  from "react";
import logo from "../../assets/default.jpeg";
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
import axios from 'axios';
import { get,post } from "../../services/Api/base";
import { useHistory } from "react-router";




const AddNewUser = () => {
 
  const RollerRef = useRef()

  const funAddUser=()=>{
 
    RollerRef.current.className="lds-roller Styledloader";
    let requestOptions = {
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
      }
  };
  var e = document.getElementById("Department_Id");
  var val1 = e.options[e.selectedIndex].value;
  
  //
  var Active_Status = document.getElementById("Active_Status_Id");
  var Active_Status_Value = Active_Status.options[Active_Status.selectedIndex].value;
  //
  //
  var UserType = document.getElementById("User_Type_Id");
  var User_Type_Value = UserType.options[UserType.selectedIndex].value;
  //
  //
  var Job = document.getElementById("Job_Id");
  var User_Job = Job.options[Job.selectedIndex].value;
  //
  var Dep = document.getElementById("Department_Id");
  var dep = Dep.options[Dep.selectedIndex].value;
  //
  //
  let PARAMETER = {
    
      'User_Name_AR' : document.getElementById('User_Name_AR').value,
      'User_Name_EN': document.getElementById('User_Name_EN').value,
      'User_Phone': document.getElementById('User_Phone').value,
      'User_Mail': document.getElementById('User_Phone').value,
      'Login_Name': document.getElementById('Login_Name').value,
      'Login_Pass': document.getElementById('Login_Pass').value,
         'Department_Id': dep,
        'Job_Id': User_Job,
       'Active_Status_Id': Active_Status_Value,
       'User_Type_Id':User_Type_Value,
       'User_Image':'',
      'api_key': 'apikey',
      'api_sig': 'signature',
      'method': 'auth.getMobileSession',
      'format': 'json'
  };
  
  
  var formData = new FormData();
  
  
  formData.append('PARAMETERS', JSON.stringify(PARAMETER));
  
  // return axios.post('http://localhost:50054/API/ADMIN/SYSTEM/USERS/ADD_USER/',formData, requestOptions)
  //     .then(response => {
  //       alert("Added Succedded")
  //       return response;
  
  //     })
  //     .catch(err => {
  //         throw err;
  //     });
  post("ADMIN/SYSTEM/USERS/ADD_USER",formData, requestOptions).then((s)=>{
    let error = s.data.Error_EN;
    if(error == null || error === "")
    {
   
      history.push({ pathname:"/Users"});
    }
}) 
  }
  



  const ShowAll=()=>{
    history.push({ pathname:"/Users"});
  }
    const {setTitle}  = useContext(TitleContext);
    const [Users_Type_Data,setUsers_Type_Data] = useState({ar: [],en: [],})
    const [Active_Status_Data,setActive_Status_Data] = useState({ar: [],en: [],})
    const [Job_Data,setJob_Data] = useState({ar: [],en: [],})
    const [Dep_Data,setDep_Data] = useState({ar: [],en: [],})
    const {t} = useTranslation();  
    const location = useLocation();
    const history = useHistory();
   
    useEffect(() => {
    setTitle((Title) => ({
      ...Title,
      Title: t("myUers:AddNewUser"),
      SubTitle: t("myUers:AddNewUser"),
    }));
  }, [t, setTitle]);
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
useEffect(() => {
  User_Dep(setDep_Data)
}, []);
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

//
const validation = Yup.object({
 
  User_Name_AR : Yup.string()
  .min(3,)
  .max(15)
  .required(),
  User_Name_EN: Yup.string()
  .min(3)
  .max(15)
  .required()
 
  
});
      return (
        <>
        {location.state || location.pathname.split("/")[2] === "add" ?
        <StyledContainer green>
				   <h3 align="center"><Trans i18nKey={"myUers:AddNewUser"} t={t}> إضافة مستخدم جديد</Trans></h3>
           <div ref={RollerRef}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
				<Formik initialValues={{ User_Name_AR: "",User_Name_EN: "",User_Name_EN: "",User_Phone: "",User_Mail: "",Department_Id: "",Active_Status_Id: "" }} validationSchema={validation} onSubmit={ShowAll}>
					<Form>
          
						<RichInput>
            <CustomInput width={"30%"} as={"input"} id="User_Name_AR" name="User_Name_AR" type="text"  label={"اسم المتسخدم بالعربية"} />
            <CustomInput width={"30%"} as={"input"} id="User_Name_EN" name="User_Name_EN" type="text" label={"اسم المتسخدم بالإنجليزية"} />
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
      <input id="img"
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
            <CustomInput width={"30%"} as={"input"} id="Login_Pass" name="Login_Pass" type="text" label={"كلمة المرور "} />
				  </RichInput>
          <RichInput>
            <CustomInput width={"30%"} as={"input"} id="User_Phone" name="User_Phone" type="text" label={"رقم الهاتف"} />
            <CustomInput width={"30%"} as={"input"} id="User_Mail" name="User_Mail" type="text" label={"البريد الإلكتروني"} />
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
            {/* <option value={t("myDesk:item")}>
                    نشط
            </option> */}

{Active_Status_Data.ar.map(item => (
        <option
          key={item.Active_Status_Id}
          value={item.Active_Status_Id}
        >
          {item.Active_Status_Name_AR}
        </option>
      ))}


            </CustomSelect> 
            <CustomSelect width={"30%"} id="User_Type_Id" name="User_Type_Id" label={"نوع المستخدم"} placeholder={"حالة المستخدم"}>
           
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
          
						 <CustomButton green type="submit" className="send-btn" onClick={funAddUser} >حفظ</CustomButton>
             <CustomButton green type="submit" onClick={ShowAll} className="send-btn"  >إلغاء</CustomButton>
					</Form>
					</Formik>


        </StyledContainer>: <Redirect to={"/"+location.pathname.split("/")[1]} />}
        </>
      );
    }
  export default AddNewUser;

  
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
//
