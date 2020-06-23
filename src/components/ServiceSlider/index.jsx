import React, { useRef } from "react";
import styled from "styled-components";
import "react-multi-carousel/lib/styles.css";
import ServicesCarousel from "./Carousel";
import CarouselSection from "./CarouselSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import artBag from "../../assets/serviceImgs/art-bag.png";
import desk from "../../assets/serviceImgs/desk.png";
import docBlue from "../../assets/serviceImgs/doc-blue.png";
import docDarkGreen from "../../assets/serviceImgs/doc-dark-green.png";
import dockGreen from "../../assets/serviceImgs/doc-green.png";
import dockYellow from "../../assets/serviceImgs/doc-yellow.png";
import paperTime from "../../assets/serviceImgs/paper-time.png";

const MemoizedServicesCarousel = React.memo(({services}) => {
  return <ServicesCarousel list={services} />;
});

const ServiceSlider = ({services}) => {
  console.log("ServicesSlider rerendred");
  const minimizeRef = useRef();
  const carouselRef = useRef();

  const handleMinimize = () => {
    if (carouselRef.current.style.opacity === "") {
      minimizeRef.current.style.height = "35px";
      minimizeRef.current.style.padding = "0";
      carouselRef.current.style.transition = "opacity 0.22s ease-in";
      carouselRef.current.style.opacity = "0";
      carouselRef.current.style.visibility = "hidden";
    } else {
      minimizeRef.current.style.height = "";
      minimizeRef.current.style.padding = "";
      carouselRef.current.style.transition = "opacity 0.7s ease-in";
      carouselRef.current.style.visibility = "";
      carouselRef.current.style.opacity = "";
    }
  };
  return (
    <StyledServicesContainer ref={minimizeRef}>
      <CarouselSection ref={carouselRef}>
        <MemoizedServicesCarousel services={services ? services : servicesList }/>
      </CarouselSection>
      <StyledMinimize onClick={handleMinimize}>
        <FontAwesomeIcon size="1x" icon={faBars} />
      </StyledMinimize>
    </StyledServicesContainer>
  );
};
export default ServiceSlider;

const StyledServicesContainer = styled.div`
  position: relative;
  margin: 15px 25px 22px 25px;
  background-color: #f6f4f5;
  padding: 10px 0px 0px 0px;
  transition: all 0.5s ease-in-out;
  height: 230px;
`;
const StyledMinimize = styled.div`
  position: absolute;
  font-size: 20px;
  bottom: 0;
  text-indent: 5px;
  cursor: pointer;
  color: #3c4652;
  transition: all 0.2s ease-in-out;
  left: 5px;
  &:hover {
    text-shadow: 0 0 5px rgba(81, 203, 238, 1);
    color: rgba(81, 203, 238, 1);
  }
`;

const servicesList = [
  {
    Title: "حالة طلباتي",
    Description:
      "تشمل طلبات القرطاسية صيانة المكتب والمعدات الأخرى في المكتب..",
    Icon: paperTime,
  },
  {
    Title: "طلبات متنوعة",
    Description:
      "تشمل طلبات القرطاسية صيانة المكتب والمعدات الأخرى في المكتب..",
    Icon: artBag,
  },
  {
    Title: "طلبات من مكتب التطوير المؤسسي",
    Description: "",
    Icon: dockGreen,
  },
  {
    Title: "طلبات من قسم الاتصال المؤسسي",
    Description: "",
    Icon: docDarkGreen,
  },
  {
    Title: " طلبات من قسم الموارد البشرية",
    Description: "",
    Icon: dockYellow,
  },
  {
    Title: "طلبات من قسم الخدمات الإدارية",
    Description: "",
    Icon: docBlue,
  },
  {
    Title: "مكتبي",
    Description:
      " تشمل طلبات القرطاسية صيانة المكتب والمعدات الأخرى في المكتب..",
    Icon: desk,
  },
];
