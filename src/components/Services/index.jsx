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
const Services = () => {
  const [testData,setTestData] = useState(session)
  const { setTitle } = useContext(TitleContext);
  const { t, i18n } = useTranslation();
  const componentName = "services";
  const [girdAligment, SetGirdAligment] = useState(
    i18n.language === "ar" ? "right " : "left"
  );
  useEffect(() => {
    setTitle((Title) => ({
      ...Title,
      Title: t("Services:title"),
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
    setTestData(GridRequests.index(null, "ADMIN/SERVICES/SERVICES/SERVICES_LIST", setTestData, session));
  }, []);

  return (
    <CustomGrid sourceData={testData.data} addPath={componentName} editPath={componentName} addEnabled={false} viewPath={componentName}>
      <Column
            caption={t("Services:Service_Code")}
            alignment={girdAligment}
            dataField="Service_Code"
            dataType="number"
          />
          {i18n.language === 'ar'?
            <Column
              caption={t("Services:Main_Service_Name")}
              alignment={girdAligment}
              dataField={"Main_Service_Name_AR"}
              dataType="string"
            />
            : 
            <Column
            caption={t("Services:Main_Service_Name")}
            alignment={girdAligment}
            dataField="Main_Service_Name_EN"
            dataType="string"
          />
          }
            {i18n.language === 'ar'?
            <Column
            caption={t("Services:Service_Name")}
            alignment={girdAligment}
            dataField="Service_Name_AR"
            dataType="string"
          />
            : 
            <Column
            caption={t("Services:Service_Name")}
            alignment={girdAligment}
            dataField="Service_Name_EN"
            dataType="string"
          />
          }
          {i18n.language === 'ar'?
            <Column
            caption={t("Services:Active_Status_Name")}
            alignment={girdAligment}
            dataField="Active_Status_Name_AR"
            dataType="string"
          />
            : 
            <Column
            caption={t("Services:Active_Status_Name")}
            alignment={girdAligment}
            dataField="Active_Status_Name_EN"
            dataType="string"
          />
          }
    </CustomGrid>
  );
};
export default Services;


// const getData = (setTestData) =>{
//   get("ADMIN/SERVICES/SERVICES/SERVICES_LIST")
//     .then((response) => {
//       console.log(response)
//       var testdata = {ar:[] , en:[]};
//       let temp = Object.values(response.data.Data);
//       for (let i = 0; i < temp.length; i++) {
//         testdata.ar.push(
//           {
//             Main_Service_Name: temp[i].Main_Service_Name_AR,
//             Service_Code: temp[i].Service_Code,
//             Service_Name:temp[i].Service_Name_AR,
//             Service_Id:temp[i].Service_Id,
//             Active_Status_Name:temp[i].Active_Status_Name_AR,
//             Active_Status_Name_AR:temp[i].Active_Status_Name_AR,
//             Active_Status_Name_EN:temp[i].Active_Status_Name_EN,
//             Service_Name_AR:temp[i].Service_Name_AR,
//             Service_Name_EN:temp[i].Service_Name_EN,
//             Service_Max_Received_Time:temp[i].Service_Max_Received_Time,
//             Service_Max_Received_Time_Type_Id:temp[i].Service_Max_Received_Time_Type_Id,
//             Service_Max_Processing_Time:temp[i].Service_Max_Processing_Time,
//             Service_Max_Processing_Time_Type_Id:temp[i].Service_Max_Processing_Time_Type_Id,
//             Service_Max_Review_Time:temp[i].Service_Max_Review_Time,
//             Service_Max_Review_Time_Type_Id:temp[i].Service_Max_Review_Time_Type_Id,
//             Service_Max_Confirmation_Time:temp[i].Service_Max_Confirmation_Time,
//             Service_Max_Confirmation_Time_Type_Id:temp[i].Service_Max_Confirmation_Time_Type_Id,
//             Active_Status_Id:temp[i].Active_Status_Id
//           });
//         testdata.en.push(
//           {
//             Main_Service_Name: temp[i].Main_Service_Name_EN,
//             Service_Code: temp[i].Service_Code,
//             Service_Name:temp[i].Service_Name_EN,
//             Service_Id:temp[i].Service_Id,
//             Active_Status_Name:temp[i].Active_Status_Name_EN,
//             Active_Status_Name_AR:temp[i].Active_Status_Name_AR,
//             Active_Status_Name_EN:temp[i].Active_Status_Name_EN,
//             Service_Name_AR:temp[i].Service_Name_AR,
//             Service_Name_EN:temp[i].Service_Name_EN,
//             Service_Max_Received_Time:temp[i].Service_Max_Received_Time,
//             Service_Max_Received_Time_Type_Id:temp[i].Service_Max_Received_Time_Type_Id,
//             Service_Max_Processing_Time:temp[i].Service_Max_Processing_Time,
//             Service_Max_Processing_Time_Type_Id:temp[i].Service_Max_Processing_Time_Type_Id,
//             Service_Max_Review_Time:temp[i].Service_Max_Review_Time,
//             Service_Max_Review_Time_Type_Id:temp[i].Service_Max_Review_Time_Type_Id,
//             Service_Max_Confirmation_Time:temp[i].Service_Max_Confirmation_Time,
//             Service_Max_Confirmation_Time_Type_Id:temp[i].Service_Max_Confirmation_Time_Type_Id,
//             Active_Status_Id:"0"
//           });
//       }
//       setTestData(testdata);

//     });
// }


// const pageSizes = [10, 25, 50, 100];
// const testdata = {
//   ar: [
//     {
//       Main_Service_Name : "طلبات اداريه ",
//       Service_Code : "123",
//       Service_Name:"طلب سياره",
//       Service_Id:"3",
//       Active_Status_Name:"فعال",
//       Service_Name_AR:"طلب سياره",
//       Service_Name_EN:"car request",
//       Service_Max_Received_Time:"2",
//       Service_Max_Received_Time_Type_Id:"1",
//       Service_Max_Processing_Time:"1",
//       Service_Max_Processing_Time_Type_Id:"1",
//       Service_Max_Review_Time:"3",
//       Service_Max_Review_Time_Type_Id:"2",
//       Service_Max_Confirmation_Time:"1",
//       Service_Max_Confirmation_Time_Type_Id:"1",
//       Active_Status_Id:"0"
//     }
//   ],
//   en: [
//     {
//       Main_Service_Name : "maintain services",
//       Service_Code : "123",
//       Service_Name:"car request",
//       Service_Id:"3",
//       Active_Status_Name:"active",
//       Service_Name_AR:"طلب سياره",
//       Service_Name_EN:"car request",
//       Service_Max_Received_Time:"2",
//       Service_Max_Received_Time_Type_Id:"2",
//       Service_Max_Processing_Time:"1",
//       Service_Max_Processing_Time_Type_Id:"1",
//       Service_Max_Review_Time:"3",
//       Service_Max_Review_Time_Type_Id:"2",
//       Service_Max_Confirmation_Time:"1",
//       Service_Max_Confirmation_Time_Type_Id:"1",
//       Active_Status_Id:"0"

//     }
//   ],
// };