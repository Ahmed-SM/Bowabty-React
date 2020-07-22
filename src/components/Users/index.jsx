import React,  { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import { TitleContext } from "../../contexts/TitleContext";
import { useTranslation } from "react-i18next";
import {Column} from "devextreme-react/data-grid";
import CustomGrid from "../Reusables/CustomGrid";

const MyUsers = () => {
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
  
  return (
    <CustomGrid data={testdata} addPath={componentName} editPath={componentName} viewPath={componentName}>
      <Column
            caption={t("myUers:User_Id")}
            alignment={girdAligment}
            dataField="User_Id"
            dataType="string"
            width={120}
          />
          <Column
            caption={t("myUers:userName")}
            alignment={girdAligment}
            dataField="userName"
            dataType="string"
            width={120}
          />
          <Column
            caption={t("myUers:userPhone")}
            alignment={girdAligment}
            dataField="userPhone"
            dataType="string"
            width={120}
          />
          <Column
            caption={t("myUers:userMail")}
            alignment={girdAligment}
            dataField="userMail"
            dataType="string"
            width={120}
          />
          <Column
            caption={t("myUers:loginName")}
            alignment={girdAligment}
            dataField="loginName"
            dataType="string"
            width={120}
          />
          <Column
            caption={t("myUers:loginPassword")}
            alignment={"center"}
            dataField="loginPassword"
            dataType="string"
            width={120}
          /> 
            <Column
            caption={t("myUers:userType")}
            alignment={"center"}
            dataField="userType"
            dataType="string"
            width={120}
          /> 
            <Column
            caption={t("myUers:job")}
            alignment={"center"}
            dataField="job"
            dataType="string"
            width={120}
          /> 
            <Column
            caption={t("myUers:userActive_Status")}
            alignment={"center"}
            dataField="userActive_Status"
            dataType="string"
            width={120}
          /> 
            <Column
            caption={t("myUers:userImage")}
            alignment={"center"}
            dataField="userImage"
            dataType="string"
            width={120}
          /> 
          
    </CustomGrid>
  );
};
  export default MyUsers;

  // const pageSizes = [10, 25, 50, 100];
  const testdata = {
    "ar":[
    
      {
        "userName": "محمدصابر",
        "loginName": "M.Saber",
        "loginPassword": "123",
        "userType": "مدير النظام",
        "job": " المدير ",
        "userActive_Status": "فعــال",
         "userImage": "",
         "userPhone":"01013697637"
       
      }
  ],
    "en":[
    
    
      {
        "userName": "MohammedSaber",
        "loginName": "M.Saber",
        "loginPassword": "123",
        "userType": "Admin",
        "job": "Manager",
        "userActive_Status": "Active",
        "userPhone":"01013697637",
         "userImage": ""
      
      }
    ]
  };
