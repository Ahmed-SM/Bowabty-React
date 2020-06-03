import React from "react";
import Carousel from "react-multi-carousel";
import styled from "styled-components";

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
      paritialVisibilityGutter: 60
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      paritialVisibilityGutter: 50
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      paritialVisibilityGutter: 30
    }
  };
  const servicesList = [
    {Title: 'حالة طلباتي', Description: 'تشمل طلبات القرطاسية صيانة المكتب والمعدات الأخرى في المكتب..'},
    {Title: 'طلبات متنوعة', Description: 'تشمل طلبات القرطاسية صيانة المكتب والمعدات الأخرى في المكتب..'},
    {Title: 'طلبات من مكتب التطوير المؤسسي', Description: ''},
    {Title: 'طلبات من قسم الاتصال المؤسسي', Description: ''},
    {Title: ' طلبات من قسم الموارد البشرية', Description: ''},
    {Title: 'طلبات من قسم الخدمات الإدارية', Description: ''},
    {Title: 'مكتبي', Description: ' تشمل طلبات القرطاسية صيانة المكتب والمعدات الأخرى في المكتب..'}
  ]
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
`;
const StyledElementTitle= styled.div`
  display: inline;
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
const ServicesCarousel = ({ deviceType }) => {
    return (
      <Carousel
        autoPlay
        infinite={true}
        autoPlaySpeed={1500}
        centerMode={true}
        deviceType="desktop"
        itemClass="image-item"
        responsive={responsive}
      >
        {servicesList.slice(0, servicesList.length).map((service, index) => {
          return (    
            <StyledElement key={index}>
                <div class="pl30 pr30 pt30">
                <img src="./imgs/paper-time.png" alt="" width="52" />
                </div>
            <StyledElementTitle class="element-title">
              <Styledh5 data-translate="status-requests" class="bold-text">
                 {service.Title}
               </Styledh5>
             </StyledElementTitle>
            <StyledDescription class="element-description">
              <Styledh6 data-translate="element-description" dir="auto">
              {service.Description}
               </Styledh6>
             </StyledDescription> 
            </StyledElement>
          );
        })}
      </Carousel>
    );
  };
  
  export default ServicesCarousel;