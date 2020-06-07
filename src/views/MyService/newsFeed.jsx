import React, {useContext, useState, useEffect} from "react";
import Carousel from "react-multi-carousel";
import styled from "styled-components";

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
        paritialVisibilityGutter: 30
    },
    tablet: {
        breakpoint: {
            max: 1366,
            min: 464
        },
        items: 2,
        paritialVisibilityGutter: 50
    },
    mobile: {
        breakpoint: {
            max: 800,
            min: 0
        },
        items: 1,
        paritialVisibilityGutter: 70
    }
};
const NewsFeed = ({deviceType, list}) => {
    const [toggle,
        setToggle] = useState(true);
    const itemsList = useContext(list);
    useEffect(() => {
        setTimeout(() => {
            setToggle(false);
        }, itemsList.length * 400)
    });
    return (
        <Carousel
            partialVisible={true}
            autoPlay={toggle}
            autoPlaySpeed={1}
            deviceType="desktop"
            draggable={false}
            responsive={responsive}
            itemClass="image-item"
            sliderClass="feed-slider"
            containerClass="ltr">
            {itemsList
                .slice(0, itemsList.length)
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

export default NewsFeed;