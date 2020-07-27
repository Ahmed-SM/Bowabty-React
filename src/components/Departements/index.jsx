import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import { TitleContext } from "../../contexts/TitleContext";
import { useTranslation } from "react-i18next";
import { Column } from "devextreme-react/data-grid";
import CustomGrid from "../Reusables/CustomGrid";
import { get } from "../../services/Api/base";

const Departements = () => {

  const [testData, setTestData] = useState({ ar: [], en: [], })

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
    getData(setTestData)
  }, []);

  return (
    <CustomGrid data={testData} addPath={"Departements"} editPath={"Departements"} viewPath={"Departements"}>
      <Column
        caption={t("departement:Deparement_Id")}
        alignment={girdAligment}
        dataField="Deparement_Id"
        dataType="number"
      />
      <Column
        caption={t("departement:Deparement_Name_AR")}
        alignment={girdAligment}
        dataField="Deparement_Name_AR"
        dataType="string"
      />
      <Column
        caption={t("departement:Deparement_Name_EN")}
        alignment={girdAligment}
        dataField="Deparement_Name_EN"
        dataType="string"
      />
    </CustomGrid>
  );
};
export default Departements;

 const getData = (setTestData) => {
  get("ADMIN/SYSTEM/DEPARTEMENTS/DEPARTEMENTS_LIST")
    .then((response) => {
      let temp = Object.values(response.data.Data);
      var testdata = {ar:[] , en:[]};
      for (let i = 0; i < temp.length; i++) {
        testdata.ar.push(
          {
            Deparement_Name_AR: temp[i].Department_Name_AR,
            Deparement_Name_EN: temp[i].Department_Name_EN,
            Deparement_Id: temp[i].Department_Id,
          });
        testdata.en.push(
          {
            Deparement_Name_AR: temp[i].Department_Name_AR,
            Deparement_Name_EN: temp[i].Department_Name_EN,
            Deparement_Id: temp[i].Department_Id,
          });
      }
      setTestData(testdata);
      console.log(testdata);
    });
}

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


