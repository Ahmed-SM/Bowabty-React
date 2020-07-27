import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import { TitleContext } from "../../contexts/TitleContext";
import { useTranslation } from "react-i18next";
import { Column } from "devextreme-react/data-grid";
import CustomGrid from "../Reusables/CustomGrid";
import GridRequests from "../../services/Api/gridRequests";


const UserType = () => {
    const [testData,setTestData] = useState()
    const { setTitle } = useContext(TitleContext);
    const { t, i18n } = useTranslation();
    const componentName = "Departements";
    const [girdAligment, SetGirdAligment] = useState(
        i18n.language === "ar" ? "right " : "left",
    );

    useEffect(() => {
        setTitle((Title) => ({
            ...Title,
            Title: t("userType:title"),
            // SubTitle: t("userContent:lorem"),
        }));
    }, [t, setTitle]);
    useEffect(() => {
        SetGirdAligment(i18n.language === "ar" ? "right " : "left");
    }, [i18n.language, SetGirdAligment]);

    useEffect(() => {
        GridRequests.index(null, "ADMIN/SYSTEM/USER_TYPES/USER_TYPES_LIST", setTestData, null);
    }, []);

    return (
        <CustomGrid sourceData={testData} addPath={"UserType"} editPath={"UserType"} viewPath={"UserType"}>
            <Column
                caption={t("userType:User_Type_Id")}
                alignment={girdAligment}
                dataField="User_Type_Id"
                dataType="number"
            />
            <Column
                caption={t("userType:User_Type_Name_AR")}
                alignment={girdAligment}
                dataField="User_Type_Name_AR"
                dataType="string"
            />
            <Column
                caption={t("userType:User_Type_Name_EN")}
                alignment={girdAligment}
                dataField="User_Type_Name_EN"
                dataType="string"
            />
        </CustomGrid>
    );
};
export default UserType;


