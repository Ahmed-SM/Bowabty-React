import React, {useContext} from "react";
import Carousel from "react-multi-carousel";
import styled from "styled-components";
import {Link} from "react-router-dom";
import UAParser from "ua-parser-js";
const ServicesCarousel = ({deviceType, list}) => {
    const itemsList = useContext(list);
    return (
        <Carousel
            autoPlay
            infinite={true}
            autoPlaySpeed={2500}
            centerMode={true}
            deviceType={deviceType}
            itemClass="image-item"
            sliderClass="carousel-slider"
            // containerClass="carousel-padding"
            responsive={responsive}>
            {itemsList.slice(0, itemsList.length).map((item, index) => {
                    return (
                        <StyledElement key={index}>
                            <Link to={"/ServiceID=" + index}>
                                <StyledImgFrame>                                
                                    <img src={item.Icon} alt="" width="42"/>
                                </StyledImgFrame>
                                <StyledElementTitle>
                                    <Styledh5>
                                        {item.Title}
                                    </Styledh5>
                                </StyledElementTitle>
                                <StyledDescription>
                                    <Styledh6>
                                        {item.Description}
                                    </Styledh6>
                                </StyledDescription>
                            </Link>
                        </StyledElement>
                    );
                })}
        </Carousel>
    );
};
ServicesCarousel.getInitialProps = ({req}) => {
    let userAgent;
    if (req) {
        userAgent = req.headers["user-agent"];
    } else {
        userAgent = navigator.userAgent;
    }
    const parser = new UAParser();
    parser.setUA(userAgent);
    const result = parser.getResult();
    const deviceType = (result.device && result.device.type) || "desktop";
    return {deviceType};
};

export default ServicesCarousel;

const responsive = {
    desktop: {
        breakpoint: {
            max: 3000,
            min: 1024
        },
        items: 6
    },
    tablet: {
        breakpoint: {
            max: 1366,
            min: 464
        },
        items: 3
    },
    mobile: {
        breakpoint: {
            max: 700,
            min: 0
        },
        items: 1
    }
};
const StyledElement = styled.div`
  width: 135px;
  height: 160px;
  display: block;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 0px 8px 3px rgba(0, 0, 0, 0.05);

  &:hover {
    filter: grayscale(80%);
    transition: all 0.5s;
  }
  .carousel-padding{
    margin: 0 0px 0 0px;
    padding: 0 0px 0 0px;
  }
`;
const StyledElementTitle = styled.div`
  display: inline;
`;
const StyledDescription = styled.div`
  display: inline;
  overflow-wrap: break-word;
`;
const Styledh6 = styled.h6 `
  font-size: calc(4px + 0.4vw);
  opacity: 0.6;
  color: black
`;
const Styledh5 = styled.h5 `
  -webkit-text-stroke: 0.5px black !important;
  -webkit-text-fill-color: black !important;
  font-size: 15px;
`;
const StyledImgFrame = styled.div`
    padding: 30px 30px 0px 30px;
`;