import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const SmallBox = ({index, icon, title, description, width}) => (
<StyledElement width={width}>
  <Link to={"/ServiceID=" + index}>
    <StyledImgFrame>
      <img src={icon} alt="" width="42" />
    </StyledImgFrame>
    <StyledElementTitle>
      <Styledh5>{title}</Styledh5>
    </StyledElementTitle>
    <StyledDescription>
      <Styledh6>{description}</Styledh6>
    </StyledDescription>
  </Link>
</StyledElement>);
export default SmallBox;
SmallBox.defaultProps = {
    width: "135px",
  };
const StyledElement = styled.div`
  width: ${props => props.width};
  height: 160px;
  display: block;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 0px 8px 3px rgba(0, 0, 0, 0.05);

  &:hover {
    filter: grayscale(80%);
    transition: all 0.5s;
  }
  .carousel-padding {
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
const Styledh6 = styled.h6`
  font-size: calc(4px + 0.4vw);
  opacity: 0.6;
  color: black;
`;
const Styledh5 = styled.h5`
  -webkit-text-stroke: 0.5px black !important;
  -webkit-text-fill-color: black !important;
  font-size: 15px;
`;
const StyledImgFrame = styled.div`
  padding: 30px 30px 0px 30px;
`;
