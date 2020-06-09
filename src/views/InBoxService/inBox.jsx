import React, {useContext, useEffect}  from "react";
import ODataStore from "devextreme/data/odata/store";
import styled from "styled-components";
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import {TitleContext} from "../../contexts/TitleContext";
import {useTranslation} from "react-i18next";

import DataGrid, {
    Column,
    Grouping,
    GroupPanel,
    Pager,
    Paging,
    SearchPanel
  } from "devextreme-react/data-grid";
  const pageSizes = [10, 25, 50, 100];
  const dataSourceOptions = {
    store: new ODataStore({
      url: "https://js.devexpress.com/Demos/SalesViewer/odata/DaySaleDtoes",
      beforeSend: function(request) {
        request.params.startDate = "2018-05-10";
        request.params.endDate = "2018-05-15";
      }
    })
  };
  const StyledPage = styled.div`
    margin: 0 20px;
    height: 71%;
`;
  const StyledContainer = styled.div`
    display: inline-flex;
    flex-wrap: nowrap;
    direction: rtl;
    justify-content: space-around;
    height: 100%;
    min-height:670px;
    max-height:670px;
    padding: 50px 10px;
    width: 100%;
    background-color: #F6F4F5;
    box-sizing: border-box;
    margin 0 auto;
  `;
  const StyledMdContainer = styled.div`
    height: fit-content;
    min-height: 300px;
    width: 60%;
    padding: 20px;
    min-width: 45%;
    height:inherit;
    box-shadow: 0px 0px 8px 3px rgba(0, 0, 0, 0.09);
    background-color: white;
    border-radius: 15px;
    z-index: 0;
    border-bottom: 6px solid ${props => props.primary
        ? "#3497DB"
        : "#000000"};
  `;
  const Inbox = () => {
    const [Title, setTitle] = useContext(TitleContext);
    const {t} = useTranslation();   
          useEffect(()=>{
            if(Title !==t("myOrders:title")){
                setTitle(t("myOrders:title"))
            }
        })
      return (
          <StyledPage>
          <StyledContainer>
            <StyledMdContainer  className="dx-viewport">
            <div className="demo-container">
                <DataGrid
                dataSource={dataSourceOptions}
                allowColumnReordering={true}
                showBorders={true}
                rtlEnabled={true}
                >
                <GroupPanel visible={true} />
                <SearchPanel visible={true} highlightCaseSensitive={true} placeholder={"بحث"}/>
                <Grouping autoExpandAll={false} />
    
                <Column dataField="الطلب" groupIndex={0} />
                <Column
                    dataField="حالة الطلب"
                    caption="حالة الطلب"
                    dataType="number"
                />
                <Column dataField="اسم مقدم الطلب" dataType="date" />
                <Column dataField="تاريخ تقديم الطلب" dataType="string" />
                <Column dataField="تفاصيل الطلب" dataType="string" />
                <Column dataField="نوع الطلب" dataType="string" />
                <Column dataField="رقم الطلب" dataType="string" width={150} />
    
                <Pager allowedPageSizes={pageSizes} showPageSizeSelector={true} />
                <Paging defaultPageSize={10} />
                </DataGrid>
            </div>
            </StyledMdContainer>
        </StyledContainer>
        </StyledPage>
      );
    }
  export default Inbox;
  