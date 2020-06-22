import React, {useContext, useEffect}  from "react";
import {TitleContext} from "../../contexts/TitleContext";
import {useTranslation} from "react-i18next";
import SmallBox from "../Reusables/SmallBox";



const ServicesBox = () => {
    const [Title, setTitle] = useContext(TitleContext);
    const {t} = useTranslation();  
    useEffect(() => {
    console.log("MyService rerendred use effect")
        setTitle(Title =>({...Title, Title: t("LegalAffairs:title"), SubTitle: t("userContent:lorem")}));
},[t, setTitle]);
    return (
        <>
            <SmallBox key={"index"} index={"index"} icon={"item.Icon"} title={"item.Title"} description={"item.Description"} width={"200px"}/>
            <SmallBox key={"index"} index={"index"} icon={"item.Icon"} title={"item.Title"} description={"item.Description"} width={"200px"}/>
            <SmallBox key={"index"} index={"index"} icon={"item.Icon"} title={"item.Title"} description={"item.Description"} width={"200px"}/>
            <SmallBox key={"index"} index={"index"} icon={"item.Icon"} title={"item.Title"} description={"item.Description"} width={"200px"}/>
            <SmallBox key={"index"} index={"index"} icon={"item.Icon"} title={"item.Title"} description={"item.Description"} width={"200px"}/>
        </>
    );
  }
export default ServicesBox;
