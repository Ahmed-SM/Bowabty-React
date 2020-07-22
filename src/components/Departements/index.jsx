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
  const testdata = {
    ar: [
    ],
    en: [
    ],
  };
  function getData() {
    get("ADMIN/SYSTEM/DEPARTEMENTS/DEPARTEMENTS_LIST")
      .then((response) => {
        let temp = Object.values(response.data.Data);
        debugger;
        for (let i = 0; i < temp.length; i++) {
          testdata.ar.push(
            {
              Deparement_Name: temp[i].Department_Name_AR,
              Deparement_Id: temp[i].Department_Id,
            });
          testdata.en.push(
            {
              Deparement_Name: temp[i].Department_Name_EN,
              Deparement_Id: temp[i].Department_Id,
            });
        }
        console.log(testdata);
      });
  }
  getData();

  const { setTitle } = useContext(TitleContext);
  const { t, i18n } = useTranslation();
  const componentName = "Departements";
  const [girdAligment, SetGirdAligment] = useState(
    i18n.language === "ar" ? "right " : "left"
  );
  useEffect(() => {
    setTitle((Title) => ({
      ...Title,
      Title: t("Departement:title"),
      SubTitle: t("userContent:lorem"),
    }));
  }, [t, setTitle]);
  useEffect(() => {
    getData();
    SetGirdAligment(i18n.language === "ar" ? "right " : "left");
  }, [i18n.language, SetGirdAligment]);
  return (
    <CustomGrid data={testdata} addPath={"Departements"} editPath={componentName} viewPath={componentName}>
      <Column
        caption={t("IncomingRequest:Id")}
        alignment={girdAligment}
        dataField="Deparement_Id"
        dataType="number"
      />
      <Column
        caption={t("IncomingRequest:Deparement Name")}
        alignment={girdAligment}
        dataField="Deparement_Name"
        dataType="string"
      />
    </CustomGrid>
  );
};
export default Departements;
