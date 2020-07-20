import React, { useContext, useEffect, useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus,faExpandAlt } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import { TitleContext } from "../../contexts/TitleContext";
import { useTranslation } from "react-i18next";
import DataGrid, {
  Column,
  GroupPanel,
  Paging,
  FilterRow,
  Grouping,
} from "devextreme-react/data-grid";
import {Link} from "react-router-dom";
import LargeBox from "../Reusables/LargeBox";

const CustomGrid = ({children , data , addPath, editPath, viewPath}) => {
  const [width, setWidth] = useState("870");
  const { t, i18n } = useTranslation();
  const [langauge, setLangauge] = useState(i18n.language);
  const [girdAligment, SetGirdAligment] = useState(
    i18n.language === "ar" ? "right " : "left"
  );

  useEffect(() => {
    setLangauge(i18n.language);
  },[i18n.language]);

  useEffect(() => {
    SetGirdAligment(i18n.language === "ar" ? "right " : "left");
  }, [i18n.language, SetGirdAligment]);

  const handleResize = useCallback(() => {
    setWidth(width === "870" ? "100%" : "870");
  },[width]);


  return (
    <StyledMdContainer className="dx-viewport">
      <div className="demo-container">
        <StyledResize >
          <div onClick={handleResize}>
            <FontAwesomeIcon size="1x" icon={faExpandAlt} rotation={90}/>
          </div>
          <Link to={addPath +"/add"} >
            <FontAwesomeIcon size="1x" icon={faPlus}/>
          </Link>
        </StyledResize>
        <DataGrid
          width={width}
          height={532}
          dataSource={langauge === "ar" ? data.ar : data.en}
          showColumnLines={false}
          showScrollbar={false}
          hoverStateEnabled={true}
          // showRowLines={true}
          allowColumnReordering={true}
          // showBorders={true}
          rtlEnabled={langauge === "ar" ? true : false}
          ShowHorizontalLines={false}
          // rowAlternationEnabled={true}
        >
          <FilterRow visible={true} applyFilter={"auto"} />
          <Grouping contextMenuEnabled={true} />
          <GroupPanel
            visible={true}
            emptyPanelText={t("myOrders:emptyPanelText")}
          />
          {/* <SearchPanel visible={true} highlightCaseSensitive={true} placeholder={t('myOrders:placeholder')}/> */}
          {/* <Grouping autoExpandAll={true} /> */}

          {/* <Column dataField="الطلب" groupIndex={0} /> */}
          {children}
          <Column type="buttons" 
          
          buttons={[{
            hint: 'Clone',
            icon: 'edit',
            visible: true,
            onClick:true,
          },
          {
            hint: 'Clone',
            icon: 'find',
            visible: true,
            onClick:true,
          }]} 
          caption={"التفاصيل"}
          alignment={"center"}
          />
          
          {/* <Pager allowedPageSizes={pageSizes} showPageSizeSelector={true} /> */}
          <Paging defaultPageSize={8} />
        </DataGrid>
      </div>
    </StyledMdContainer>
  );
};
export default CustomGrid;

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
const StyledMdContainer = styled(LargeBox)`
  position: relative;
  width: fit-content;
  height: 560px;
  padding: 12px 20px 0 20px !important;
  .dx-pages,
  .dx-group-panel-message,
  .dx-texteditor-input,
  .dx-placeholder,
  .dx-datagrid-action,
  .dx-datagrid-drag-action {
    font-family: "CoconNextArabic-Bold", Sans-Serif;
  }
  .x-datagrid-headers {
    border: none !important;
  }
  .dx-datagrid-nowrap {
    border: none !important;
  }
  .dx-datagrid-headers .dx-datagrid-table .dx-row > td {
    border: none !important;
    border-bottom: #333 solid 1px !important;
  }
  .dx-datagrid-header-panel {
    border: none !important;
  }
  .dx-datagrid-header-panel .dx-toolbar {
    margin-bottom: 0px !important;
  }
  .dx-datagrid .dx-row > td {
    padding: 7px 0;
  }
  .dx-datagrid .dx-row > td {
    padding: 7px 0;
  }
  .dx-datagrid-headers .dx-datagrid-table .dx-row > td {
    padding-bottom: 0;
  }
  .demo-container {
    direction: ltr;
  }
  .dx-pager {
     padding-top: 9px;
     padding-bottom: 0px;
}
`;
const StyledResize = styled.div`
  position: absolute;
  z-index:100;
  cursor:pointer;
  top:4px;
  left:5px;
  display:flex;

  &>*{
    width:35px;
    height:35px;
    text-align:center;
    margin:0 10px;
    border: 1px solid #ddd;
    border-radius:5px;
    padding:8px;
  }
`;