import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import { TitleContext } from "../../contexts/TitleContext";
import { useTranslation } from "react-i18next";
import { Column } from "devextreme-react/data-grid";
import CustomGrid from "../Reusables/CustomGrid";
import GridRequests from "../../services/Api/gridRequests";

const Departements = () => {

  const [testData,setTestData] = useState()

  const { setTitle } = useContext(TitleContext);
  const { t, i18n } = useTranslation();
  const componentName = "services";
  const [girdAligment, SetGirdAligment] = useState(
    i18n.language === "ar" ? "right " : "left"
  );
  useEffect(() => {
    setTitle((Title) => ({
      ...Title,
      Title: t("departement:title"),
      // SubTitle: t("userContent:lorem"),
    }));
  }, [t, setTitle]);
  useEffect(() => {
    SetGirdAligment(i18n.language === "ar" ? "right " : "left");
  }, [i18n.language, SetGirdAligment]);

  useEffect(() => {
    GridRequests.index(null, "ADMIN/SYSTEM/DEPARTEMENTS/DEPARTEMENTS_LIST", setTestData, null);
  }, []);
      useEffect(() => {
        console.log(testData)
    }, [testData]);

  return (
    <CustomGrid sourceData={testData} addPath={"Departements"} editPath={"Departements"} viewPath={"Departements"}>
      <Column
        caption={t("departement:Deparement_Id")}
        alignment={girdAligment}
        dataField="Department_Id"
        dataType="number"
      />
      <Column
        caption={t("departement:Deparement_Name_AR")}
        alignment={girdAligment}
        dataField="Department_Name_AR"
        dataType="string"
      />
      <Column
        caption={t("departement:Deparement_Name_EN")}
        alignment={girdAligment}
        dataField="Department_Name_EN"
        dataType="string"
      />
    </CustomGrid>
  );
};
export default Departements;


const test = {
  ar: [
    {
      Deparement_Id:"1",
      Deparement_Name:"برمجة"
    },
    {
      Deparement_Id:"1",
      Deparement_Name:"برمجة"
    },
    {
      Deparement_Id:"1",
      Deparement_Name:"برمجة"
    },
  ],
  en: [
    {
      Deparement_Id:"1",
      Deparement_Name:"Programmer"
    },
    {
      Deparement_Id:"1",
      Deparement_Name:"Programmer"
    },
    {
      Deparement_Id:"1",
      Deparement_Name:"Programmer"
    },
  ]
}


