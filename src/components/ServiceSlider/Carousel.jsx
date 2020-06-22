import React from "react";
import Carousel from "react-multi-carousel";
import UAParser from "ua-parser-js";
import SmallBox from "../Reusables/SmallBox";
const ServicesCarousel = ({ deviceType, list }) => {
  console.log(
    "%c ServicesCarousel rerendred. ",
    "background:red; color: white;"
  );
  return (
    <Carousel
      autoPlay
      infinite={true}
      autoPlaySpeed={3500}
      centerMode={true}
      deviceType={deviceType}
      itemClass="image-carousel"
      sliderClass="carousel-slider"
      // containerClass="carousel-padding"
      responsive={responsive}
    >
      {list.slice(0, list.length).map((item, index) => {
        return (
          <SmallBox key={index} index={index} icon={item.Icon} title={item.Title} description={item.Description} />
        );
      })}
    </Carousel>
  );
};
ServicesCarousel.getInitialProps = ({ req }) => {
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
  return { deviceType };
};

export default ServicesCarousel;

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 6,
  },
  tablet: {
    breakpoint: {
      max: 1366,
      min: 464,
    },
    items: 4,
  },
  mobile: {
    breakpoint: {
      max: 700,
      min: 0,
    },
    items: 1,
  },
};
