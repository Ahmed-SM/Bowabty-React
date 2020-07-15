import React, {useContext, useEffect}  from "react";
import styled from "styled-components";
import {TitleContext} from "../../contexts/TitleContext";
import {useTranslation} from "react-i18next";
import SmallBox from "../Reusables/SmallBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCar, faUser, faBox, faGift, faHotel} from '@fortawesome/free-solid-svg-icons';



const ServicesBox = () => {
    const {setTitle}  = useContext(TitleContext);
    const {t} = useTranslation();  
    useEffect(() => {
        setTitle(Title =>({...Title, Title: t("LegalAffairs:title"), SubTitle: t("userContent:lorem")}));
},[t, setTitle]);
    return (
        <StyledContact>
            {servicelist.map((service, index)=>{
                return (
                <SmallBox key={index} index={service.index} icon={<FontAwesomeIcon size="3x" icon={service.icon} color={service.color}/>} title={service.title}  width={"200px"}  height={"130px"}/>
                )
            })}
        </StyledContact>
    );
  }
export default ServicesBox;
const StyledContact= styled.div`
    display: flex;
    width:100%;
    justify-content: center;
    flex-wrap: wrap;
    margin:0 30px;
    height:fit-content;
    &>div{
        margin:20px 25px;
    }
`;

const servicelist = [
    {index:"2/ServiceID=1", icon:faCar, color:"#902577", title:"طلب مركبة مهمة رسمية"},
    {index:"2/ServiceID=1", icon:faUser, color:"#F1C40F", title:"طلب مستخدم"},
    {index:"2/ServiceID=1", icon:faBox, color:"#9A59B5", title:"طلب مراسلة"},
    {index:"2/ServiceID=1", icon:faGift, color:"#F05261", title:"طلب هدايا"},
    {index:"2/ServiceID=1", icon:faHotel, color:"#008B38", title:"طلب حجز فندق"}
]