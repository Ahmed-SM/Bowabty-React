import React,  { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import { TitleContext } from "../../contexts/TitleContext";
import { useTranslation } from "react-i18next";
import {Column} from "devextreme-react/data-grid";
import CustomGrid from "../Reusables/CustomGrid";
import { get } from "../../services/Api/base";
import GridRequests from "../../services/Api/gridRequests";
var session={data:[]};
const MyUsers = () => {


  // const [testData,setTestData] = useState({ar: [],en: [],})
  const [testData,setTestData] = useState(session);
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
    //   console.log(session)
    //   if(session.data.length){
    //     return;
    //  }
      setTestData(GridRequests.index(null, "/ADMIN/SYSTEM/USERS/USERS_LIST", setTestData, session));
    }, []);
    return (
      <CustomGrid sourceData={testData.data} addPath={componentName} editPath={componentName} addEnabled={false} viewPath={componentName}>
<Column
            caption={t("myUers:User_Id")}
            alignment={girdAligment}
            dataField="User_Id"
            dataType="string"
           
          />
           {i18n.language === 'ar'?
           <Column
            caption={t("myUers:User_Name")}
            alignment={girdAligment}
            dataField={"User_Name_AR"}
            dataType="string"
           
          />
          :
            <Column
            caption={t("myUers:User_Name")}
            alignment={girdAligment}
            dataField="User_Name_EN"
            dataType="string"
           
          />
  }
  
          {/* <Column
            caption={t("myUers:userMail")}
            alignment={girdAligment}
            dataField="User_Mail"
            dataType="string"
           
          /> */}
         
          <Column
            caption={t("myUers:loginName")}
            alignment={girdAligment}
            dataField="Login_Name"
            dataType="string"
          
          />
         
           

           {i18n.language === 'ar'?
           <Column
            caption={t("myUers:userType")}
            alignment={girdAligment}
            dataField={"User_Type_Name_AR"}
            dataType="string"
           
          />
          :
            <Column
            caption={t("myUers:userType")}
            alignment={girdAligment}
            dataField="User_Type_Name_EN"
            dataType="string"
           
          />
  }

           
           
{i18n.language === 'ar'?
           <Column
            caption={t("myUers:Job")}
            alignment={girdAligment}
            dataField={"Job_Name_AR"}
            dataType="string"
           
          />
          :
            <Column
            caption={t("myUers:Job")}
            alignment={girdAligment}
            dataField="Job_Name_EN"
            dataType="string"
           
          />
  }

{i18n.language === 'ar'?
           <Column
            caption={t("myUers:userActive_Status")}
            alignment={girdAligment}
            dataField={"Active_Status_Name_AR"}
            dataType="string"
           
          />
          :
            <Column
            caption={t("myUers:userActive_Status")}
            alignment={girdAligment}
            dataField="Active_Status_Name_EN"
            dataType="string"
           
          />
  }
    {i18n.language === 'ar'?
           <Column
            caption={t("myUers:dep")}
            alignment={girdAligment}
            dataField={"Department_Name_AR"}
            dataType="string"
           
          />
          :
            <Column
            caption={t("myUers:userType")}
            alignment={girdAligment}
            dataField="Department_Name_EN"
            dataType="string"
           
          />
  }

    </CustomGrid>
  );
};
  export default MyUsers;

  