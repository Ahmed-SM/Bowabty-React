import React from "react";
import styled from "styled-components";
import 'react-multi-carousel/lib/styles.css';
import ServicesCarousel from "./Carousel";
import CarouselSection from "./CarouselSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {ServiceContext} from "../../contexts/ServiceContext"

const StyledServicesContainer = styled.div`
  position: relative;
  margin: 22px 25px;
  background-color: #F6F4F5;
  padding: 35px 0px;
  transition: all 0.5s ease-in-out;
  height: 250px;
`;
const StyledMinimize= styled.div`
  position: absolute;
  font-size: 20px;
  bottom: 0;
  text-indent: 5px;
  cursor: pointer;
  color: #3C4652;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  left: 5px;
  &:hover{
    text-shadow: 0 0 5px rgba(81, 203, 238, 1);
    color: rgba(81, 203, 238, 1);
  }
`;
const ServicesSlider = () => {
  return (
    <StyledServicesContainer>
      <CarouselSection>
          <ServicesCarousel deviceType={"desktop"} list={ServiceContext}/>
       </CarouselSection>
      <StyledMinimize id="minimize" class="minimize-left">
      <FontAwesomeIcon size="1x" icon={faBars} />
      </StyledMinimize>
    </StyledServicesContainer>
  );
};
export default ServicesSlider;
