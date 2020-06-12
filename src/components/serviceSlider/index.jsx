import React, {useRef, useState} from "react";
import styled from "styled-components";
import 'react-multi-carousel/lib/styles.css';
import ServicesCarousel from "./Carousel";
import CarouselSection from "./CarouselSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {ServiceContext} from "../../contexts/ServiceContext"


const ServiceSlider = () => {
  console.log("ServicesSlider rerendred")
  const [isOpen, setIsOpen] = useState(true);

  const minimizeRef = useRef();
  const carouselRef = useRef();

  const handleMinimize = () =>{
    if (isOpen){
      minimizeRef.current.style.height = "35px";
      minimizeRef.current.style.padding = "0";
      carouselRef.current.style.display = 'none';
    }else{
      minimizeRef.current.style.height = '';
      minimizeRef.current.style.padding = '';
      carouselRef.current.style.display = '';
    }
    setIsOpen(!isOpen);
  }
  return (
    <StyledServicesContainer ref={minimizeRef} >
      <CarouselSection ref={carouselRef}>
          <ServicesCarousel list={ServiceContext}/>
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
  background-color: #F6F4F5;
  padding: 30px 0px 0px 0px;
  transition: all 0.5s ease-in-out;
  height: 230px;
`;
const StyledMinimize= styled.div`
  position: absolute;
  font-size: 20px;
  bottom: 0;
  text-indent: 5px;
  cursor: pointer;
  color: #3C4652;
  transition: all 0.2s ease-in-out;
  left: 5px;
  &:hover{
    text-shadow: 0 0 5px rgba(81, 203, 238, 1);
    color: rgba(81, 203, 238, 1);
  }
`;