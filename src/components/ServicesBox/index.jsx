import React, {useContext, useEffect}  from "react";
import {TitleContext} from "../../contexts/TitleContext";
import {useTranslation} from "react-i18next";
import SmallBox from "../Reusables/SmallBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCar, faUser, faBox, faGift, faHotel} from '@fortawesome/free-solid-svg-icons';



const ServicesBox = () => {
    const [Title, setTitle] = useContext(TitleContext);
    const {t} = useTranslation();  
    useEffect(() => {
    console.log("MyService rerendred use effect")
        setTitle(Title =>({...Title, Title: t("LegalAffairs:title"), SubTitle: t("userContent:lorem")}));
},[t, setTitle]);
    return (
        <>
            <SmallBox index={"index"} icon={<FontAwesomeIcon size="3x" icon={faCar} color={"#902577"}/>} title={"طلب مركبة مهمة رسمية"}  width={"200px"}  height={"130px"} selectionEnabled={0.5}/>
            <SmallBox index={"index"} icon={<FontAwesomeIcon size="3x" icon={faUser} color={"#F1C40F"} />} title={"طلب مستخدم"}  width={"200px"} height={"130px"} selectionEnabled={0.5}/>
            <SmallBox index={"index"} icon={<FontAwesomeIcon size="3x" icon={faBox} color={"#9A59B5"} />} title={"طلب مراسلة"} width={"200px"} height={"130px"} selectionEnabled={0.5}/>
            <SmallBox index={"index"} icon={<FontAwesomeIcon size="3x" icon={faGift} color={"#F05261"} />} title={"طلب هدايا"}  width={"200px"} height={"130px"} selectionEnabled={0.5}/>
            <SmallBox index={"index"} icon={<FontAwesomeIcon size="3x" icon={faHotel} color={"#008B38"}/>} title={"طلب حجز فندق"}  width={"200px"} height={"130px"} selectionEnabled={0.5}/>
        </>
    );
  }
export default ServicesBox;
