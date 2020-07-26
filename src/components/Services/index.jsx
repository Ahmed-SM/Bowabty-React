import React,  { useContext, useEffect, useState, useRef } from "react";
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import { TitleContext } from "../../contexts/TitleContext";
import { useTranslation } from "react-i18next";
import {Column} from "devextreme-react/data-grid";
import CustomGrid from "../Reusables/CustomGrid";
import ServicesModes from "./ServicesModes";
import GridRequests from "../../services/Api/gridRequests";

const Services = () => {
  const [testData,setTestData] = useState();
  const [singleData, setSingleData]=useState();
  const [servicesMode,SetServicesMode] = useState("grid");  
  const { setTitle } = useContext(TitleContext);
  const { t, i18n } = useTranslation();
  const [girdAligment, SetGirdAligment] = useState(
    i18n.language === "ar" ? "right " : "left"
  );
  const GridRef = useRef();
  const ServicesRef = useRef();

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
    GridRequests.index(null, "ADMIN/SERVICES/SERVICES/SERVICES_LIST", setTestData, null);
  }, [setTestData]);
  useEffect(() => {
    if(servicesMode === "grid"){
      ServicesRef.current.style.display = "none";
        GridRef.current.style.display = "block";
    }else if (servicesMode === "edit" || servicesMode === "view") {
      ServicesRef.current.style.display = "block";
      GridRef.current.style.display = "none";
    }
    }, [servicesMode]);

  const ModeSwitch = (name, data) => {
    console.log(name);
    SetServicesMode(name);
    setSingleData(data.row.data);

  };
  return (
    <>
    <CustomGrid sourceData={testData} addEnabled={false} rowData={ModeSwitch} editEnabled={true} customWidth={"870"} ref={GridRef}>
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
    <ServicesModes ref={ServicesRef} rowData={ModeSwitch} servicesMode={servicesMode} SetServicesMode={SetServicesMode} data={singleData}></ServicesModes>
    </>
  );
};
export default Services;

