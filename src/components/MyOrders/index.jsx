import React,  { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import { TitleContext } from "../../contexts/TitleContext";
import { useTranslation } from "react-i18next";
import {Column} from "devextreme-react/data-grid";
import CustomGrid from "../Reusables/CustomGrid";

const MyOrders = () => {
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
  return (
    <CustomGrid data={testdata} addPath={componentName} editPath={componentName} viewPath={componentName}  addEnabled={false} editEnabled={false}>
      <Column
            caption={t("IncomingRequest:orderNumber")}
            alignment={girdAligment}
            dataField="orderNumber"
            dataType="number"
          />
          <Column
            caption={t("IncomingRequest:orderType")}
            alignment={girdAligment}
            dataField="orderType"
            dataType="string"
          />
          <Column
            caption={t("IncomingRequest:orderDetails")}
            alignment={girdAligment}
            dataField="orderDetails"
            dataType="string"
          />
          <Column
            caption={t("IncomingRequest:OrderDate")}
            alignment={girdAligment}
            dataField="orderDate"
            dataType="date"
          />
          <Column
            caption={t("IncomingRequest:issuerName")}
            alignment={girdAligment}
            dataField="issuerName"
            dataType="string"
          />
          <Column
            caption={t("IncomingRequest:orderStatus")}
            alignment={"center"}
            dataField="orderStatus"
            dataType="string"
          /> 
    </CustomGrid>
  );
};
export default MyOrders;

// const pageSizes = [10, 25, 50, 100];
const testdata = {
  ar: [
    {
      orderNumber: "32131",
      orderType: "القرطاسية",
      orderDetails: "طلب آلة حاسبة",
      orderDate: "21/12/2018",
      issuerName: "فادي محمد احمد",
      orderStatus: "تم الإغلاق",
    },
    {
      orderNumber: "42343",
      orderType: "الصيانة لمكتبي",
      orderDetails: "إنارة",
      orderDate: "25/12/2018",
      issuerName: "مصطفى خالد ايماعيل",
      orderStatus: "تحت الإجراء ",
    },
    {
      orderNumber: "34342",
      orderType: "طلبات متنوعة",
      orderDetails: "حجز عزبة عوافي",
      orderDate: "01/11/2018",
      issuerName: "محمد علي باشا",
      orderStatus: "منجز ",
    },
    {
      orderNumber: "32131",
      orderType: "الموارد البشرية",
      orderDetails: "شهادة راتب",
      orderDate: "05/11/2018",
      issuerName: "يزن محمد احمد",
      orderStatus: "تحت الإجراء ",
    },
    {
      orderNumber: "32131",
      orderType: "القرطاسية",
      orderDetails: "طلب آلة حاسبة",
      orderDate: "21/12/2018",
      issuerName: "فادي محمد احمد",
      orderStatus: "تم الإغلاق ",
    },
    {
      orderNumber: "42343",
      orderType: "الصيانة لمكتبي",
      orderDetails: "إنارة",
      orderDate: "25/12/2018",
      issuerName: "مصطفى خالد ايماعيل",
      orderStatus: "تحت الإجراء ",
    },
    {
      orderNumber: "34342",
      orderType: "طلبات متنوعة",
      orderDetails: "حجز عزبة عوافي",
      orderDate: "01/11/2018",
      issuerName: "محمد علي باشا",
      orderStatus: "منجز ",
    },
    {
      orderNumber: "32131",
      orderType: "الموارد البشرية",
      orderDetails: "شهادة راتب",
      orderDate: "05/11/2018",
      issuerName: "يزن محمد احمد",
      orderStatus: "تحت الإجراء ",
    },
    {
      orderNumber: "32131",
      orderType: "القرطاسية",
      orderDetails: "طلب آلة حاسبة",
      orderDate: "21/12/2018",
      issuerName: "فادي محمد احمد",
      orderStatus: "تم الإغلاق ",
    },
    {
      orderNumber: "42343",
      orderType: "الصيانة لمكتبي",
      orderDetails: "إنارة",
      orderDate: "25/12/2018",
      issuerName: "مصطفى خالد ايماعيل",
      orderStatus: "تحت الإجراء",
    },
    {
      orderNumber: "34342",
      orderType: "طلبات متنوعة",
      orderDetails: "حجز عزبة عوافي",
      orderDate: "01/11/2018",
      issuerName: "محمد علي باشا",
      orderStatus: "منجز",
    },
    {
      orderNumber: "32131",
      orderType: "الموارد البشرية",
      orderDetails: "شهادة راتب",
      orderDate: "05/11/2018",
      issuerName: "يزن محمد احمد",
      orderStatus: "تحت الإجراء ",
    },
  ],
  en: [
    {
      orderNumber: "32131",
      orderType: "stationery",
      orderDetails: "Order Calculator",
      orderDate: "12/21/2018",
      issuerName: "Fadi Mohamed Ahmed",
      orderStatus: "closed",
    },
    {
      orderNumber: "42343",
      orderType: "Maintenance for my office",
      orderDetails: "Lighting",
      orderDate: "25/12/2018",
      issuerName: "Mustafa Khaled Ismail",
      orderStatus: "Under Action",
    },
    {
      orderNumber: "34342",
      orderType: "Miscellaneous Orders",
      orderDetails: "Awafi Izbat Reservation",
      orderDate: "01/11/2018",
      issuerName: "Muhammad Ali Pasha",
      orderStatus: "Completed",
    },
    {
      orderNumber: "32131",
      orderType: "Human Resources",
      orderDetails: "Salary Certificate",
      orderDate: "05/11/2018",
      issuerName: "Muhammad Ahmad weighs",
      orderStatus: "Under Action",
    },
    {
      orderNumber: "32131",
      orderType: "stationery",
      orderDetails: "Order Calculator",
      orderDate: "12/21/2018",
      issuerName: "Fadi Mohamed Ahmed",
      orderStatus: "closed",
    },
    {
      orderNumber: "42343",
      orderType: "Maintenance for my office",
      orderDetails: "Lighting",
      orderDate: "25/12/2018",
      issuerName: "Mustafa Khaled Ismail",
      orderStatus: "Under Action",
    },
    {
      orderNumber: "34342",
      orderType: "Miscellaneous Orders",
      orderDetails: "Awafi Izbat Reservation",
      orderDate: "01/11/2018",
      issuerName: "Muhammad Ali Pasha",
      orderStatus: "Completed",
    },
    {
      orderNumber: "32131",
      orderType: "Human Resources",
      orderDetails: "Salary Certificate",
      orderDate: "05/11/2018",
      issuerName: "Muhammad Ahmad weighs",
      orderStatus: "Under Action",
    },
    {
      orderNumber: "32131",
      orderType: "stationery",
      orderDetails: "Order Calculator",
      orderDate: "12/21/2018",
      issuerName: "Fadi Mohamed Ahmed",
      orderStatus: "closed",
    },
    {
      orderNumber: "42343",
      orderType: "Maintenance for my office",
      orderDetails: "Lighting",
      orderDate: "25/12/2018",
      issuerName: "Mustafa Khaled Ismail",
      orderStatus: "Under Action",
    },
    {
      orderNumber: "34342",
      orderType: "Miscellaneous Orders",
      orderDetails: "Awafi Izbat Reservation",
      orderDate: "01/11/2018",
      issuerName: "Muhammad Ali Pasha",
      orderStatus: "Completed",
    },
    {
      orderNumber: "32131",
      orderType: "Human Resources",
      orderDetails: "Salary Certificate",
      orderDate: "05/11/2018",
      issuerName: "Muhammad Ahmad weighs",
      orderStatus: "Under Action",
    },
  ],
};