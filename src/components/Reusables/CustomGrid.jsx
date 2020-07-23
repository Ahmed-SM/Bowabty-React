import React, { useContext, useEffect, useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus,faExpandAlt } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
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

const CustomGrid = ({children , sourceData , addPath, editPath, viewPath, customWidth, addEnabled, editEnabled}) => {
  const history = useHistory();
  const [width, setWidth] = useState(customWidth);
  const { t, i18n } = useTranslation();
  const handleResize = useCallback(() => {
    setWidth(width === customWidth ? "100%" : customWidth);
  },[width]);
  const handleEdit = useCallback((data) => {
      console.log(data.row.data);
    history.push(editPath+"/edit", data.row.data);
  });
  const handleView = useCallback((data) => {
    history.push(viewPath+"/view", data.row.data);
});
  return (
    <StyledMdContainer className="dx-viewport">
      <div className="demo-container">
        <StyledResize diraction={i18n.language} >
          <div onClick={handleResize}>
            <span> تكبير </span>
            <FontAwesomeIcon size="1x" icon={faExpandAlt} rotation={90}/>
          </div>
          { addEnabled ?
          <Link to={addPath +"/add"} >
            <span> إضافة </span>
            <FontAwesomeIcon size="1x" icon={faPlus}/>
          </Link> : <></>
          }
        </StyledResize>
        <DataGrid
          width={width}
          height={532}
          dataSource={ sourceData ? i18n.language === 'ar' ? sourceData.ar : sourceData.en : null }
          showColumnLines={false}
          showScrollbar={false}
          hoverStateEnabled={true}
          // showRowLines={true}
          allowColumnReordering={true}
          // showBorders={true}
          rtlEnabled={i18n.language === 'ar' ? true : false}
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
          { editEnabled ? 
          <Column type="buttons" 
          buttons={[{
            hint: t("edit"),
            icon: 'edit',
            visible: true,
            onClick:handleEdit,
          },
          {
            hint: t("view"),
            icon: 'find',
            visible: true,
            onClick:handleView,
          }]} 
          caption={t("details")}
          alignment={"center"}
          />
          :
          <Column type="buttons" 
          buttons={[
          {
            hint: t("view"),
            icon: 'find',
            visible: true,
            onClick:handleView,
          }]} 
          caption={t("details")}
          alignment={"center"}
          />
          }
          
          {/* <Pager allowedPageSizes={pageSizes} showPageSizeSelector={true} /> */}
          <Paging defaultPageSize={8} />
        </DataGrid>
      </div>
    </StyledMdContainer>
  );
};
CustomGrid.defaultProps = {
  customWidth:"870",
  addEnabled:true,
  editEnabled:true, 
}
export default CustomGrid;

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
 td:last-child{
    margin: 0 auto !important;
    border-right: 10px solid white !important;
    border-left: 10px solid white !important;
    &> *{
        color:#6F6F6F !important;
        &:hover{
        color:black !important;
        }
    }
  }
  td:first-child{
    text-indent:1px !important;
  }
`;
const StyledResize = styled.div`
  position: absolute;
  z-index:100;
  cursor:pointer;
  top:4px;
  left:${props => props.diraction !== 'ar' ?  "unset" : " " };
  right:${props => props.diraction === 'ar'? "unset" : "20px"};
  display:flex;
  flex-direction: ${props => props.diraction === 'ar' ?  "row" : "row-reverse" };
  &>*{
    width:35px;
    height:35px;
    text-align:center;
    margin:0 10px;
    border: 1px solid #ddd;
    border-radius:5px;
    padding:8px;
    color:#333;
    display:flex;
    justify-content:center;
    transition: width 0.05s ease-in-out;
    &:hover {
        width: 100px;
        color:#333;
        text-decoration: none;
        span{
            display:inline;
            opacity:1;
        }
      }
    span{
        display:none;
        opacity:0;
    }
    &> *{
        margin: 0 auto;
    }
  }
`;