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
const Requests = () => {
  const [testData,setTestData] = useState(session)
  const { setTitle } = useContext(TitleContext);
  const { t, i18n } = useTranslation();
  const componentName = "Requests";
  const [girdAligment, SetGirdAligment] = useState(
    i18n.language === "ar" ? "right " : "left"
  );
  useEffect(() => {
    setTitle((Title) => ({
      ...Title,
      Title: t("Request:title"),
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
    setTestData(GridRequests.index(null,"ADMIN/SYSTEM/REQUEST/REQUESTS_LIST", setTestData, session));
  }, []);

  return (
    <CustomGrid sourceData={testData.data} addPath={componentName} editPath={componentName} addEnabled={false} viewPath={componentName}>
      <Column
            caption={t("Request:requestCode")}
            alignment={girdAligment}
            dataField="requestCode"
            dataType="number"
          />
          {i18n.language === 'ar'?
            <Column
              caption={t("Request:mainServiceName")}
              alignment={girdAligment}
              dataField={"Main_Service_Name_AR"}
              dataType="string"
            />
            : 
            <Column
            caption={t("Request:mainServiceName")}
            alignment={girdAligment}
            dataField="Main_Service_Name_EN"
            dataType="string"
          />
          }
            {i18n.language === 'ar'?
            <Column
            caption={t("Request:serviceName")}
            alignment={girdAligment}
            dataField="Service_Name_AR"
            dataType="string"
          />
            : 
            <Column
            caption={t("Request:serviceName")}
            alignment={girdAligment}
            dataField="Service_Name_EN"
            dataType="string"
          />
          }
           {i18n.language === 'ar'?
            <Column
            caption={t("Request:requesteDate")}
            alignment={girdAligment}
            dataField="requesteDate_AR"
            dataType="date"
          />
            : 
            <Column
            caption={t("Request:requesteDate")}
            alignment={girdAligment}
            dataField="requesteDate_EN"
            dataType="date"
          />
          }
           {i18n.language === 'ar'?
            <Column
            caption={t("Request:requestUserName")}
            alignment={girdAligment}
            dataField="requestUserName_AR"
            dataType="string"
          />
            : 
            <Column
            caption={t("Request:requestUserName")}
            alignment={girdAligment}
            dataField="requestUserName_EN"
            dataType="string"
          />
          }
          {i18n.language === 'ar'?
            <Column
            caption={t("Request:requestStatus")}
            alignment={girdAligment}
            dataField="requestStatus_AR"
            dataType="string"
          />
            : 
            <Column
            caption={t("Request:requestStatus")}
            alignment={girdAligment}
            dataField="requestStatus_EN"
            dataType="string"
          />
          }
    </CustomGrid>
  );
};

// const pageSizes = [10, 25, 50, 100];
// const testdata = {
//   ar: [
//     {
//       requestCode: "32131",
//       mainServiceName: "القرطاسية",
//       serviceName: "طلب آلة حاسبة",
//       requesteDate: "21/12/2018",
//       requestUserName: "فادي محمد احمد",
//       requestStatus: "تم الإغلاق",
//     },
//     {
//       requestCode: "42343",
//       mainServiceName: "الصيانة لمكتبي",
//       serviceName: "إنارة",
//       requesteDate: "25/12/2018",
//       requestUserName: "مصطفى خالد ايماعيل",
//       requestStatus: "تحت الإجراء ",
//     },
//     {
//       requestCode: "34342",
//       mainServiceName: "طلبات متنوعة",
//       serviceName: "حجز عزبة عوافي",
//       requesteDate: "01/11/2018",
//       requestUserName: "محمد علي باشا",
//       requestStatus: "منجز ",
//     },
//     {
//       requestCode: "32131",
//       mainServiceName: "الموارد البشرية",
//       serviceName: "شهادة راتب",
//       requesteDate: "05/11/2018",
//       requestUserName: "يزن محمد احمد",
//       requestStatus: "تحت الإجراء ",
//     },
//     {
//       requestCode: "32131",
//       mainServiceName: "القرطاسية",
//       serviceName: "طلب آلة حاسبة",
//       requesteDate: "21/12/2018",
//       requestUserName: "فادي محمد احمد",
//       requestStatus: "تم الإغلاق ",
//     },
//     {
//       requestCode: "42343",
//       mainServiceName: "الصيانة لمكتبي",
//       serviceName: "إنارة",
//       requesteDate: "25/12/2018",
//       requestUserName: "مصطفى خالد ايماعيل",
//       requestStatus: "تحت الإجراء ",
//     },
//     {
//       requestCode: "34342",
//       mainServiceName: "طلبات متنوعة",
//       serviceName: "حجز عزبة عوافي",
//       requesteDate: "01/11/2018",
//       requestUserName: "محمد علي باشا",
//       requestStatus: "منجز ",
//     },
//     {
//       requestCode: "32131",
//       mainServiceName: "الموارد البشرية",
//       serviceName: "شهادة راتب",
//       requesteDate: "05/11/2018",
//       requestUserName: "يزن محمد احمد",
//       requestStatus: "تحت الإجراء ",
//     },
//     {
//       requestCode: "32131",
//       mainServiceName: "القرطاسية",
//       serviceName: "طلب آلة حاسبة",
//       requesteDate: "21/12/2018",
//       requestUserName: "فادي محمد احمد",
//       requestStatus: "تم الإغلاق ",
//     },
//     {
//       requestCode: "42343",
//       mainServiceName: "الصيانة لمكتبي",
//       serviceName: "إنارة",
//       requesteDate: "25/12/2018",
//       requestUserName: "مصطفى خالد ايماعيل",
//       requestStatus: "تحت الإجراء",
//     },
//     {
//       requestCode: "34342",
//       mainServiceName: "طلبات متنوعة",
//       serviceName: "حجز عزبة عوافي",
//       requesteDate: "01/11/2018",
//       requestUserName: "محمد علي باشا",
//       requestStatus: "منجز",
//     },
//     {
//       requestCode: "32131",
//       mainServiceName: "الموارد البشرية",
//       serviceName: "شهادة راتب",
//       requesteDate: "05/11/2018",
//       requestUserName: "يزن محمد احمد",
//       requestStatus: "تحت الإجراء ",
//     },
//   ],
//   en: [
//     {
//       requestCode: "32131",
//       mainServiceName: "stationery",
//       serviceName: "Order Calculator",
//       requesteDate: "12/21/2018",
//       requestUserName: "Fadi Mohamed Ahmed",
//       requestStatus: "closed",
//     },
//     {
//       requestCode: "42343",
//       mainServiceName: "Maintenance for my office",
//       serviceName: "Lighting",
//       requesteDate: "25/12/2018",
//       requestUserName: "Mustafa Khaled Ismail",
//       requestStatus: "Under Action",
//     },
//     {
//       requestCode: "34342",
//       mainServiceName: "Miscellaneous Orders",
//       serviceName: "Awafi Izbat Reservation",
//       requesteDate: "01/11/2018",
//       requestUserName: "Muhammad Ali Pasha",
//       requestStatus: "Completed",
//     },
//     {
//       requestCode: "32131",
//       mainServiceName: "Human Resources",
//       serviceName: "Salary Certificate",
//       requesteDate: "05/11/2018",
//       requestUserName: "Muhammad Ahmad weighs",
//       requestStatus: "Under Action",
//     },
//     {
//       requestCode: "32131",
//       mainServiceName: "stationery",
//       serviceName: "Order Calculator",
//       requesteDate: "12/21/2018",
//       requestUserName: "Fadi Mohamed Ahmed",
//       requestStatus: "closed",
//     },
//     {
//       requestCode: "42343",
//       mainServiceName: "Maintenance for my office",
//       serviceName: "Lighting",
//       requesteDate: "25/12/2018",
//       requestUserName: "Mustafa Khaled Ismail",
//       requestStatus: "Under Action",
//     },
//     {
//       requestCode: "34342",
//       mainServiceName: "Miscellaneous Orders",
//       serviceName: "Awafi Izbat Reservation",
//       requesteDate: "01/11/2018",
//       requestUserName: "Muhammad Ali Pasha",
//       requestStatus: "Completed",
//     },
//     {
//       requestCode: "32131",
//       mainServiceName: "Human Resources",
//       serviceName: "Salary Certificate",
//       requesteDate: "05/11/2018",
//       requestUserName: "Muhammad Ahmad weighs",
//       requestStatus: "Under Action",
//     },
//     {
//       requestCode: "32131",
//       mainServiceName: "stationery",
//       serviceName: "Order Calculator",
//       requesteDate: "12/21/2018",
//       requestUserName: "Fadi Mohamed Ahmed",
//       requestStatus: "closed",
//     },
//     {
//       requestCode: "42343",
//       mainServiceName: "Maintenance for my office",
//       serviceName: "Lighting",
//       requesteDate: "25/12/2018",
//       requestUserName: "Mustafa Khaled Ismail",
//       requestStatus: "Under Action",
//     },
//     {
//       requestCode: "34342",
//       mainServiceName: "Miscellaneous Orders",
//       serviceName: "Awafi Izbat Reservation",
//       requesteDate: "01/11/2018",
//       requestUserName: "Muhammad Ali Pasha",
//       requestStatus: "Completed",
//     },
//     {
//       requestCode: "32131",
//       mainServiceName: "Human Resources",
//       serviceName: "Salary Certificate",
//       requesteDate: "05/11/2018",
//       requestUserName: "Muhammad Ahmad weighs",
//       requestStatus: "Under Action",
//     },
//   ],
// };
export default Requests;
