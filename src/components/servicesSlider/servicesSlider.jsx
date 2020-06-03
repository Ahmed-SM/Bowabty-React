import React from "react";
import styled from "styled-components";
import 'react-multi-carousel/lib/styles.css';
import ServicesCarousel from "./Carousel";
import CarouselSection from "./CarouselSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronRight, faChevronLeft, faLevelUpAlt, faBars} from '@fortawesome/free-solid-svg-icons';



const StyledServicesContainer = styled.div`
  position: relative;
  margin: 22px 25px;
  background-color: #F6F4F5;
  padding: 35px 0px;
  transition: all 0.5s ease-in-out;
  height: 250px;
`;
const StyledDescription = styled.div`
  display: inline;
  overflow-wrap: break-word;
`;
const Styledh6 = styled.h6`
  font-size: calc(4px + 0.4vw);
  opacity: 0.6;
  color: black
`;
const Styledh5 = styled.h5`
  -webkit-text-stroke: 0.5px black !important;
  -webkit-text-fill-color: black !important;
  font-size: 15px;
`;
const CarouselControlRight = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  top: 45%;
  border: 7px solid #CACACA;
  border-radius: 23px 23px 23px 23px;
  background: #CACACA;
  background-image: none;
  right: 25px;
`;
const CarouselControlLeft = styled.div`
    position: absolute;
    left: 25px;
    width: 40px;
    height: 40px;
    top: 45%;
    border: 7px solid #CACACA;
    border-radius: 23px 23px 23px 23px;
    background: #CACACA;
    background-image: none;

    &  .active{
      background: #CACACA;
    }
`;
const StyledElementTitle= styled.div`
  display: inline;
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
const StyledCarouselCol = styled.div`
  position: relative;
  min-height: 1px;
  padding: 5px;
  float: left;
  width: 33%;

  & .active>div {
    display: none;
}

  & .active>div:first-child {
    display: block;
}

  & .active>div:first-child+div {
    display: block;
}
`;


const ServicesSlider = () => {
  return (
    <StyledServicesContainer>
      <CarouselSection>
          <ServicesCarousel deviceType={"desktop"}/>
       </CarouselSection>
      <StyledMinimize id="minimize" class="minimize-left">
      <FontAwesomeIcon size="1x" icon={faBars} />
      </StyledMinimize>
    </StyledServicesContainer>
  );
};
export default ServicesSlider;
