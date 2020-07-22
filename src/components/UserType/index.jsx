import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import { TitleContext } from "../../contexts/TitleContext";
import { useTranslation } from "react-i18next";
import { Column } from "devextreme-react/data-grid";
import CustomGrid from "../Reusables/CustomGrid";
import { get } from "../../services/Api/base";

const UserType = () => {

    const testdata = {
        ar: [
        ],
        en: [
        ],
      };
    const { setTitle } = useContext(TitleContext);
    const { t, i18n } = useTranslation();
    const componentName = "Departements";
    const [girdAligment, SetGirdAligment] = useState(
        i18n.language === "ar" ? "right " : "left",
    );
    function getData() {
        get("ADMIN/SYSTEM/USER_TYPES/USER_TYPES_LIST")
            .then((response) => {
                let temp = Object.values(response.data.Data);
                for (let i = 0; i < temp.length; i++) {
                    testdata.ar.push(
                        {
                            User_Type_Name: temp[i].User_Type_Name_AR,
                            User_Type_Id: temp[i].User_Type_Id,
                        });
                    testdata.en.push(
                        {
                            User_Type_Name: temp[i].User_Type_Name_EN,
                            User_Type_Id: temp[i].User_Type_Id,
                        });
                }
                console.log(testdata);

            })
            .catch((e) => { console.log(e); });;
    }
    getData();
    useEffect(() => {
        setTitle((Title) => ({
            ...Title,
            Title: t("Departement:title"),
            SubTitle: t("userContent:lorem"),
        }));
    }, [t, setTitle]);
    useEffect(() => {
        SetGirdAligment(i18n.language === "ar" ? "right " : "left");
    }, [i18n.language, SetGirdAligment]);
    useEffect(() => {
        SetGirdAligment(i18n.language === "ar" ? "right " : "left");
    }, [i18n.language, SetGirdAligment]);
    return (
        <CustomGrid data={testdata} addPath={"UserType"} editPath={componentName} viewPath={componentName}>
            <Column
                caption={t("IncomingRequest:Id")}
                alignment={girdAligment}
                dataField="User_Type_Id"
                dataType="number"
            />
            <Column
                caption={t("IncomingRequest:User Type Name")}
                alignment={girdAligment}
                dataField="User_Type_Name"
                dataType="string"
            />
        </CustomGrid>
    );
};
export default UserType;
