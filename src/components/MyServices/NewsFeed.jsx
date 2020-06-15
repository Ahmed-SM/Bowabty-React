import React,{useContext} from "react";
import Carousel from "react-multi-carousel";
import styled from "styled-components";
import UAParser from "ua-parser-js";
import {DiractionContext} from "../../contexts/DiractionContext";

const CustomLeftArrow = ({ onClick, classLeft, ...rest }) => {
    return <button className={classLeft} onClick={() => onClick()} />;
  };
const CustomRightArrow = ({ onClick, classRight, ...rest }) => {
    return <button className={classRight} onClick={() => onClick()} />;
  };

const NewsFeed = ({deviceType, list}) => {
    const [isLTR] = useContext(DiractionContext);
    console.log("%c NewsFeed rerendred. ", "background:red; color: white;");
    return (
        <Carousel 
            autoPlay={true}
            autoPlaySpeed={10000}
            deviceType={deviceType}
            draggable={true}
            infinite={true}
            focusOnSelect={true}
            customRightArrow={<CustomRightArrow classRight="custom-right-arrow"/> }
            customLeftArrow={!isLTR ? <CustomLeftArrow  classLeft="custom-left-arrow" /> : <CustomLeftArrow  classLeft="custom-left-arrow"  /> }
            responsive={responsive}
            itemClass="image-item"
            sliderClass="feed-slider"
            containerClass= "left-to-right" >
            {list
                .slice(0, list.length)
                .map((item, index) => {
                    return (
                        <StyledCard key={index}>
                            <StyledCardHeader>
                                <Styledh6 dir="auto">{item.header}</Styledh6>
                            </StyledCardHeader>
                            <StyledJustifiedTextArea>
                                <StyledJustifiedParagraph>
                                    {item.Paragraph}
                                </StyledJustifiedParagraph>
                            </StyledJustifiedTextArea>
                            <div>
                                <StyledCardDate className="d-card-date" dir="auto">
                                    {item.PostDate}
                                </StyledCardDate>
                            </div>
                            <StyledCardDivider className="d-card-line"/>
                            <div className="text-center">
                                <a href="/">
                                    اقرأ المزيد
                                </a>
                            </div>
                        </StyledCard>
                    );
                })}
        </Carousel>
    );
};
NewsFeed.getInitialProps = ({ req }) => {
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
export default NewsFeed;
const StyledCard = styled.div`
  padding: 10px 15px;
  border-radius: 5px;
  width: 125px;
  height: 165px;
  margin-right: auto;
  background-color: #F5F5F5;

  & > div >  a{
    color: black ;
    font-size: 10px;
    text-stroke: 0.4px black;
    text-fill-color: black;
    text-decoration:none;
  }
`;
const Styledh6 = styled.h6`
    font-size: 13px;
    margin-bottom:0.3em;
`;
const StyledCardHeader = styled.div`
    text-stroke: 0.4px black;
    text-fill-color: black;
    min-height: 30px;
`;
const StyledJustifiedTextArea = styled.div`
    max-height: 80px;
    overflow: hidden;
`;
const StyledJustifiedParagraph = styled.p`
    font-size: 8.5px;
    text-align: justify;
    text-align-last: justify;
    opacity: 0.7;
    min-height: 78px;
    word-spacing: 0px;
    text-stroke: 0.1px #333;
`;
const StyledCardDate = styled.p`
    font-size: 8px;
    margin: 0;
`;
const StyledCardDivider = styled.hr`
    margin: 0;
`;
const responsive = {
    desktop: {
        breakpoint: {
            max: 3000,
            min: 1024
        },
        items: 3,
    },
    tablet: {
        breakpoint: {
            max: 1366,
            min: 464
        },
        items: 2,
    },
    mobile: {
        breakpoint: {
            max: 813,
            min: 0
        },
        items: 1,
    }
};
