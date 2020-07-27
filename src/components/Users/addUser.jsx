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
import axios from 'axios';

const funAddUser=()=>{
  
  let requestOptions = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
};
// var e = document.getElementById("User_Type_Id");
//   var User_Type_Id = e.options[e.selectedIndex].value;
  
//   var c = document.getElementById("Job_Id");
//   var Job_Id = c.options[c.selectedIndex].value;
  
//   var d = document.getElementById("Active_Status_Id");
//   var Active_Status_Id = d.options[d.selectedIndex].value;
//


//



var e = document.getElementById("Department_Id");
var val1 = e.options[e.selectedIndex].value;
let PARAMETERS = {
  
    'User_Name_AR' : document.getElementById('User_Name_AR').value,
    'User_Name_EN': document.getElementById('User_Name_EN').value,
    'User_Phone': document.getElementById('User_Phone').value,
    'User_Mail': document.getElementById('User_Phone').value,
    'Login_Name': document.getElementById('Login_Name').value,
    'Login_Pass': document.getElementById('Login_Pass').value,
       'Department_Id': val1,
      'Job_Id': document.getElementById('Job_Id').selectedOptions[0].value,
     'Active_Status_Id': document.getElementById('Active_Status_Id').selectedOptions[0].value,
     'User_Image':'',
    'api_key': 'apikey',
    'api_sig': 'signature',
    'method': 'auth.getMobileSession',
    'format': 'json'
};
var formData = new FormData();


formData.append('PARAMETERS', JSON.stringify(PARAMETERS));
return axios.post('http://localhost:50054/API/ADMIN/SYSTEM/USERS/ADD_USER/',formData, requestOptions)
    .then(response => {
        return response;
    })
    .catch(err => {
        throw err;
    });
 
}
const AddNewUser = () => {
    const {setTitle}  = useContext(TitleContext);
    const {t} = useTranslation();  
    const location = useLocation();
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
      return (
        <>
        {location.state || location.pathname.split("/")[2] === "add" ?
        <StyledContainer green>
				   <h3 align="center"><Trans i18nKey={"myUers:AddNewUser"} t={t}> إضافة مستخدم جديد</Trans></h3>
				<Formik initialValues={{ User_Name_AR: "",User_Name_EN: "",User_Name_EN: "",User_Phone: "",User_Mail: "",Department_Id: "",Active_Status_Id: "" }} validationSchema={null} onSubmit={null}>
					<Form>
          
						<RichInput>
            <CustomInput width={"30%"} as={"input"} id="User_Name_AR" name="User_Name_AR" type="text"  label={"اسم المتسخدم بالعربية"} />
            <CustomInput width={"30%"} as={"input"} id="User_Name_EN" name="User_Name_EN" type="text" label={"اسم المتسخدم بالإنجليزية"} />
            <span
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
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
          height: "70px",
          width: "70px",
          border: "1px dashed black"
        }}
        onClick={() => imageUploader.current.click()}
      >
        <img 
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
            <option value="1">
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
          
						 <CustomButton green type="submit" className="send-btn" onClick={funAddUser} >حفظ</CustomButton>
            
					</Form>
					</Formik>


        </StyledContainer>: <Redirect to={"/"+location.pathname.split("/")[1]} />}
        </>
      );
    }
  export default AddNewUser;

  const StyledContainer =  styled(LargeBox)`
  
  `;
