import React,  { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import { TitleContext } from "../../contexts/TitleContext";
import { useTranslation } from "react-i18next";
import {Column} from "devextreme-react/data-grid";
import CustomGrid from "../Reusables/CustomGrid";
import GridRequests from "../../services/Api/gridRequests";

var multiLanguageTemplate = {
  ar:[],
  en:[]
}

const GridExample = () => {
  const [gridData,setGridData] = useState();
  const { setTitle } = useContext(TitleContext);
  const { t, i18n } = useTranslation();
  const componentName = "myorders";
  const [girdAligment, SetGirdAligment] = useState(
    i18n.language === "ar" ? "right " : "left"
  );
  useEffect(() => {
    setTitle((Title) => ({
      ...Title,
      Title: t("myOrders:title"),
      SubTitle: t("userContent:lorem"),
    }));
  }, [t, setTitle]);
  useEffect(() => {
    SetGirdAligment(i18n.language === "ar" ? "right " : "left");
  }, [i18n.language, SetGirdAligment]);
  useEffect(() => {
    setGridData(GridRequests.index(null, "ADMIN/SERVICES/SERVICES/SERVICES_LIST", setGridData, multiLanguageTemplate));
  }, []);

  return (
    <CustomGrid sourceData={gridData} addPath={componentName} editPath={componentName} viewPath={componentName}  addEnabled={false} editEnabled={false}>
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
export default GridExample;
