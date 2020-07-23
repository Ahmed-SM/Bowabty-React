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

    const [testData, setTestData] = useState({ ar: [], en: [], })

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
        getData(setTestData)
    }, []);


    return (
        <CustomGrid data={testData} addPath={"UserType"} editPath={componentName} viewPath={componentName}>
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

const getData =(setTestData) => {
    get("ADMIN/SYSTEM/USER_TYPES/USER_TYPES_LIST")
        .then((response) => {
            let temp = Object.values(response.data.Data);
            var testdata = {ar:[] , en:[]};
            for (let i = 0; i < temp.length; i++) {
                testdata.ar.push(
                    {
                        User_Type_Name_AR: temp[i].User_Type_Name_AR,
                        User_Type_Name_EN: temp[i].User_Type_Name_EN,
                        User_Type_Id: temp[i].User_Type_Id,
                    });
                testdata.en.push(
                    {
                        User_Type_Name_AR: temp[i].User_Type_Name_AR,
                        User_Type_Name_EN: temp[i].User_Type_Name_EN,
                        User_Type_Id: temp[i].User_Type_Id,
                    });
            }
            setTestData(testdata);
            console.log(testdata);

        });
}

const test = {
    ar: [
      {
        User_Type_Id:"1",
        User_Type_Name:"برمجة"
      },
      {
        User_Type_Id:"1",
        User_Type_Name:"برمجة"
      },
      {
        User_Type_Id:"1",
        User_Type_Name:"برمجة"
      },
    ],
    en: [
      {
        User_Type_Id:"1",
        User_Type_Name:"Programmer"
      },
      {
        User_Type_Id:"1",
        User_Type_Name:"Programmer"
      },
      {
        User_Type_Id:"1",
        User_Type_Name:"Programmer"
      },
    ]
  }
