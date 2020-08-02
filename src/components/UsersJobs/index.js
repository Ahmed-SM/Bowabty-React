import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import { TitleContext } from "../../contexts/TitleContext";
import { useTranslation } from "react-i18next";
import DataGrid, { Column, GroupPanel, Paging, FilterRow, Grouping, Editing, Button } from "devextreme-react/data-grid";
import LargeBox from "../Reusables/LargeBox";
import CustomGrid from "../Reusables/CustomGrid";
import { get } from "../../services/Api/base";
import GridRequests from "../../services/Api/gridRequests";
var session={data:[]};
const UsersJobs = () => {
  
  const [testData,setTestData] = useState(session);
    const { setTitle } = useContext(TitleContext);
    const { t, i18n } = useTranslation();
    const componentName = "UsersJobs";
  const [girdAligment, SetGirdAligment] = useState(
    i18n.language === "ar" ? "right " : "left"
  );
    useEffect(() => {
        setTitle(Title => ({ ...Title, Title: t("UsersJobs:title"), SubTitle: t("userContent:lorem") }));
    }, [t, setTitle]) 
    // useEffect(()=>{
    //   getData(setTestData)
    // } , []);
    useEffect(() => {
      SetGirdAligment(i18n.language === "ar" ? "right " : "left");
    }, [i18n.language, SetGirdAligment]);
  
    useEffect(() => {
       
        setTestData(GridRequests.index(null, "/ADMIN/USERS_JOBS/USERSJOB_LIST", setTestData, session));
      }, []);
    return (
      <CustomGrid sourceData={testData.data} addPath={componentName} editPath={componentName} addEnabled={false} viewPath={componentName}>
          <Column
            caption={t('UsersJobs:JobId')}
            alignment={girdAligment}
            dataField="Job_Id"
            dataType="string"
          /> 
          
          <Column
            caption={t('UsersJobs:JobName_AR')}
            alignment={girdAligment}
            dataField="Job_Name_AR"
            dataType="string"
          />
           <Column
            caption={t('UsersJobs:JobName_EN')}
            alignment={girdAligment}
            dataField="Job_Name_EN"
            dataType="string"
          />
    </CustomGrid>
    );
}
export default UsersJobs;

// const getData =(setTestData) => {
//   get("ADMIN/USERS_JOBS/USERSJOB_LIST")
//       .then((response) => {
//           let temp = Object.values(response.data.Data);
//           var testdata = {ar:[] , en:[]};
//           debugger
//           for (let i = 0; i < temp.length; i++) {
//               testdata.ar.push(
//                   {
//                     Job_Name_AR: temp[i].Job_Name_AR,
//                     Job_Name_EN: temp[i].Job_Name_EN,
//                     Job_Id: temp[i].Job_Id,
//                   });
//               testdata.en.push(
//                   {
//                     Job_Name_AR: temp[i].Job_Name_AR,
//                     Job_Name_EN: temp[i].Job_Name_EN,
//                     Job_Id: temp[i].Job_Id,
//                   });
//           }
//           setTestData(testdata);
//           console.log(testdata);

//       });
// }

const StyledMdContainer = styled(LargeBox)`
    width:fit-content;
    height: 560px;
    padding: 20px 20px 0 20px !important;
    .dx-pages, .dx-group-panel-message, .dx-texteditor-input, .dx-placeholder, .dx-datagrid-action, .dx-datagrid-drag-action{
      font-family: 'CoconNextArabic-Bold', Sans-Serif;
    }
    .x-datagrid-headers{
      border: none !important;
    }
    .dx-datagrid-nowrap{
      border: none !important;
    }
    .dx-datagrid-headers .dx-datagrid-table .dx-row > td {
      border: none !important;
      border-bottom: #333 solid 1px !important;
    }
    .dx-datagrid-header-panel {
      border: none !important;
      margin-bottom: 10px;
    }
    .dx-datagrid-header-panel .dx-toolbar {
      margin-bottom: 0px !important;
    }
    .dx-datagrid .dx-row > td{
      padding: 7px 0;
    }
    .dx-datagrid .dx-row > td {
      padding: 7px 0; 
    } 
    .dx-datagrid-headers .dx-datagrid-table .dx-row > td { 
      padding-bottom:0;
    }
    .demo-container{
      direction: ltr;
    }

`;
