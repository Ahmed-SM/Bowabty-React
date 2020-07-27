import React,  { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import { TitleContext } from "../../contexts/TitleContext";
import { useTranslation } from "react-i18next";
import {Column} from "devextreme-react/data-grid";
import CustomGrid from "../Reusables/CustomGrid";
import { get } from "../../services/Api/base";
const MyUsers = () => {


  const [testData,setTestData] = useState({ar: [],en: [],})

  const { setTitle } = useContext(TitleContext);
  const { t, i18n } = useTranslation();
  const componentName = "Users";
  const [girdAligment, SetGirdAligment] = useState(
    i18n.language === "ar" ? "right " : "left"
  );
  useEffect(() => {
    setTitle((Title) => ({
      ...Title,
      Title: t("myUers:title"),
      SubTitle: t("userContent:lorem"),

    }));
  }, [t, setTitle]);
  useEffect(() => {
    SetGirdAligment(i18n.language === "ar" ? "right " : "left");
  }, [i18n.language, SetGirdAligment]);

  useEffect(() => {
    getData(setTestData)
  }, []);
  return (

<CustomGrid data={testData} addPath={componentName} editPath={componentName} viewPath={componentName}>
<Column
            caption={t("myUers:User_Id")}
            alignment={girdAligment}
            dataField="User_Id"
            dataType="string"
           
          />
          <Column
            caption={t("myUers:User_Name_AR")}
            alignment={girdAligment}
            dataField="userName"
            dataType="string"
            
          />
          <Column
            caption={t("myUers:userPhone")}
            alignment={girdAligment}
            dataField="User_Phone"
            dataType="string"
           
          />
          <Column
            caption={t("myUers:userMail")}
            alignment={girdAligment}
            dataField="User_Mail"
            dataType="string"
           
          />
          <Column
            caption={t("myUers:loginName")}
            alignment={girdAligment}
            dataField="Login_Name"
            dataType="string"
          
          />
          <Column
            caption={t("myUers:loginPassword")}
            alignment={"center"}
            dataField="Login_Pass"
            dataType="string"
            
          /> 
            <Column
            caption={t("myUers:userType")}
            alignment={"center"}
            dataField="User_Type_Id"
            dataType="string"
          
          /> 
            <Column
            caption={t("myUers:job")}
            alignment={"center"}
            dataField="Job_Id"
            dataType="string"
          
          /> 
            <Column
            caption={t("myUers:userActive_Status")}
            alignment={"center"}
            dataField="Active_Status_Id"
            dataType="string"
          
          /> 
            <Column
            caption={t("myUers:userImage")}
            alignment={"center"}
            dataField="User_Image"
            dataType="string"
          
          /> 
          
    </CustomGrid>
  );
};
  export default MyUsers;

  // const pageSizes = [10, 25, 50, 100];
  // const testdata = {
  //   "ar":[
    
  //     {
        
  //       "userName": "محمدصابر",
  //       "loginName": "M.Saber",
  //       "loginPassword": "123",
  //       "userType": "مدير النظام",
  //       "job": " المدير ",
  //       "userActive_Status": "فعــال",
  //        "userImage": "",
  //        "userPhone":"01013697637"
       
  //     }
  // ],
  //   "en":[
    
    
  //     {
  //       "userName": "MohammedSaber",
  //       "loginName": "M.Saber",
  //       "loginPassword": "123",
  //       "userType": "Admin",
  //       "job": "Manager",
  //       "userActive_Status": "Active",
  //       "userPhone":"01013697637",
  //        "userImage": ""
      
  //     }
  //   ]
  // };
  const getData = (setTestData) =>{
    get("/ADMIN/SYSTEM/USERS/USERS_LIST")
      .then((response) => {
        console.log(response)
        var testdata = {ar:[] , en:[]};
        let temp = Object.values(response.data.Data);
        for (let i = 0; i < temp.length; i++) {
          testdata.ar.push(
            {
              User_Name_AR: temp[i].User_Name_AR,
         
              User_Phone: temp[i].User_Phone,
              User_Mail: temp[i].User_Mail,
              Login_Name: temp[i].Login_Name,
              Login_Pass: temp[i].Login_Pass,
              User_Type_Id: temp[i].User_Type_Id,
              Job_Id: temp[i].Job_Id,
              Active_Status_Id: temp[i].Active_Status_Id,
              User_Image: temp[i].User_Image,
            });
          testdata.en.push(
            {
              User_Name_AR: temp[i].User_Name_AR,
         
              User_Phone: temp[i].User_Phone,
              User_Mail: temp[i].User_Mail,
              Login_Name: temp[i].Login_Name,
              Login_Pass: temp[i].Login_Pass,
              User_Type_Id: temp[i].User_Type_Id,
              Job_Id: temp[i].Job_Id,
              Active_Status_Id: temp[i].Active_Status_Id,
              User_Image: temp[i].User_Image,
            });
        }
        setTestData(testdata);
      });
  }
  