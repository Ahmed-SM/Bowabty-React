import React, {useRef, useContext, useEffect} from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import {TitleContext} from "../../contexts/TitleContext";
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactBox = ({title, groupName, list, labelColor}) => {

  const toggleRef = useRef();
  const expandablelRef = useRef();
  const arrowRef = useRef();

  const handleToggle = () => {
    if (expandablelRef.current.style.display === "block") {
        toggleRef.current.style.borderRadius = "";
        expandablelRef.current.style.display ="none";
        arrowRef.current.style.transform = "";
    } else {
        toggleRef.current.style.borderRadius = "10px 10px 0px 0px";
        expandablelRef.current.style.display = "block";
        arrowRef.current.style.transform = "rotate(90deg)";
    }
  };
 
  return (
    <StyledContianer >
        <StyledContacts background={labelColor} ref={toggleRef}  onClick={handleToggle}>
            <span/>
            {title}
            <span ref={arrowRef}>
            <FontAwesomeIcon size="1x" icon={faChevronRight}  />
            </span>
        </StyledContacts>
        <StyledInner background={"white"} ref={expandablelRef} >
        <StyledContent background={"#F6F4F5"}>
            {groupName}
        </StyledContent>
        { list.map((item, index) =>{
            return(
            <StyledContent background={"white"} key={index}>
                {item}
            </StyledContent>
            );
        })}
        </StyledInner>
    </StyledContianer>
  );
};

const StyledContacts = styled.div`
width:33rem;
height:5rem;
color:white;
padding:0 25px;
background:${props => props.background};
text-align:center;
border-radius:10px;
display:flex;
justify-content:space-between;
align-items:center; 

`;
const StyledContent= styled.div`
width:100%;
height:2.5rem;
padding:0 15px;
color:black;
background:${props => props.background};
text-align:center;
display:flex;
justify-content:space-between;
align-items:center;
border-bottom: 0.2px solid #F6F4F5;
transition: all 0.22s ease-in;
`;
const StyledInner= styled.div`
display:none;
border-radius:10px;
background:${props => props.background};
`;
const StyledContianer= styled.div`
box-shadow: 0px 0px 8px 3px rgba(0, 0, 0, 0.09);
height:fit-content;
border-radius:10px;
margin:30px 30px;
`;

const Contact = () => {
    const { t } = useTranslation();
    const {setTitle}  = useContext(TitleContext);

    useEffect(()=>{
        setTitle(Title =>({...Title, Title: "التحويلات", SubTitle: t("userContent:lorem")}));
    },[t, setTitle])
   
    return (
        <StyledContact>
        <StyledContactGroup>
        <ContactBox title={"الإدارة العليا"} groupName={<><span>الاسم</span><span>التحويلة</span></>} list={testdata} labelColor={"#902577"}></ContactBox>
        <ContactBox title={"إدارة دعم وتطوير الأعمال"} groupName={<><span>الاسم</span><span>التحويلة</span></>}  list={testdata} labelColor={"#F05261"}></ContactBox>
        <ContactBox title={"مركز الدراسات والاحصاء"} groupName={<><span>الاسم</span><span>التحويلة</span></>}  list={testdata} labelColor={"#2D3E50"}></ContactBox>
        </StyledContactGroup>
        <StyledContactGroup>
        <ContactBox title={"إدارة الشؤون التجارية"} groupName={<><span>الاسم</span><span>التحويلة</span></>}  list={testdata} labelColor={"#1BBC9B"}></ContactBox>
        <ContactBox title={"الأفرع"} groupName={<><span>الاسم</span><span>التحويلة</span></>}  list={testdata} labelColor={"#3497DB"}></ContactBox>
        </StyledContactGroup>
        <StyledContactGroup>
        <ContactBox title={"إدراة الخدمات المساندة"} groupName={<><span>الاسم</span><span>التحويلة</span></>}  list={testdata} labelColor={"#008B38"}></ContactBox>
        <ContactBox title={"إدارة الرقابة و الحماية التجارية"} groupName={<><span>الاسم</span><span>التحويلة</span></>}  list={testdata} labelColor={"#2D3E50"}></ContactBox>
        <ContactBox title={"المطابخ"} groupName={<><span>الاسم</span><span>التحويلة</span></>}  list={testdata} labelColor={"#F1C40F"}></ContactBox>
        </StyledContactGroup>
        </StyledContact>
    );
  };
export default Contact;

const StyledContact= styled.div`
    display: flex;
    width:100%;
    justify-content: space-between;
    flex-wrap: wrap;
`;
const StyledContactGroup= styled.div`

`;


const testdata = [<><span>الاسم</span><span>التحويلة</span></>, <><span>الاسم</span><span>التحويلة</span></>,<><span>الاسم</span><span>التحويلة</span></>,<><span>الاسم</span><span>التحويلة</span></>];