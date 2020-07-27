import React,  { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import { TitleContext } from "../../contexts/TitleContext";
import { useTranslation } from "react-i18next";
import {Column} from "devextreme-react/data-grid";
import CustomGrid from "../Reusables/CustomGrid";
import { get } from "../../services/Api/base";

const Services = () => {
const [testData,setTestData] = useState({ar: [],en: [],})

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
    setTestData(getData())
  }, []);
  return (
    <CustomGrid data={testdata} addPath={componentName} editPath={componentName} viewPath={componentName}>
      <Column
            caption={t("Services:Service_Code")}
            alignment={girdAligment}
            dataField="Service_Code"
            dataType="number"
          />
          <Column
            caption={t("Services:Main_Service_Name")}
            alignment={girdAligment}
            dataField="Main_Service_Name"
            dataType="string"
          />
          <Column
            caption={t("Services:Service_Name")}
            alignment={girdAligment}
            dataField="Service_Name"
            dataType="string"
          />
          <Column
            caption={t("Services:Active_Status_Name")}
            alignment={girdAligment}
            dataField="Active_Status_Name"
            dataType="string"
          />
    </CustomGrid>
  );
};
export default Services;


const getData = () =>{
  get("ADMIN/SERVICES/SERVICES/SERVICES_LIST")
    .then((response) => {
      console.log(response)
      let temp = Object.values(response.data.Data);
      for (let i = 0; i < temp.length; i++) {
        testdata.ar.push(
          {
            Main_Service_Name: temp[i].Main_Service_Name_AR,
            Service_Code: temp[i].Service_Code,
          });
        testdata.en.push(
          {
            Main_Service_Name: temp[i].Main_Service_Name_EN,
            Service_Code: temp[i].Service_Code,
          });
      }
      return testdata
    });
}


// const pageSizes = [10, 25, 50, 100];
const testdata = {
  ar: [
    {
      Main_Service_Name : "طلبات اداريه ",
      Service_Name:"طلب سياره",
      Service_Code : "123",
      Service_Id:"1",
      Active_Status_Name:"فعال",
      Service_Name_AR:"طلب سياره",
      Service_Name_EN:"car request",
      Service_Max_Received_Time:"2",
      Service_Max_Received_Time_Type_Id:"1",
      Service_Max_Processing_Time:"1",
      Service_Max_Processing_Time_Type_Id:"1",
      Service_Max_Review_Time:"3",
      Service_Max_Review_Time_Type_Id:"2",
      Service_Max_Confirmation_Time:"1",
      Service_Max_Confirmation_Time_Id:"1",
      Active_Status_Id:"2"
    }
  ],
  en: [
    {
      Main_Service_Name : "maintain services",
      Service_Name:"car request",
      Service_Code : "123",
      Service_Id:"1",
      Active_Status_Name:"active",
      Service_Name_AR:"طلب سياره",
      Service_Name_EN:"car request",
      Service_Max_Received_Time:"2",
      Service_Max_Received_Time_Type_Id:"2",
      Service_Max_Processing_Time:"1",
      Service_Max_Processing_Time_Type_Id:"1",
      Service_Max_Review_Time:"3",
      Service_Max_Review_Time_Type_Id:"2",
      Service_Max_Confirmation_Time:"1",
      Service_Max_Confirmation_Time_Type_Id:"1",
      Active_Status_Id:"2"

    }
  ],
};