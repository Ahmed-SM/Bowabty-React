import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const SmallBox = ({index, icon, title, description, width, height, selectionEnabled}) => {
console.log(typeof({icon}))

return (
<StyledElement width={width} height={height} selectionEnabled={selectionEnabled}>
  <StyledLink to={"/ServiceID=" + index}>
    <StyledImgFrame>
    {icon === Object(icon) ? 
      icon
    :
    <img src={icon} alt="" width="42" />
    }
    </StyledImgFrame>
    <StyledElementTitle>
      <Styledh5>{title}</Styledh5>
    </StyledElementTitle>
    <StyledDescription>
      <Styledh6>{description}</Styledh6>
    </StyledDescription>
  </StyledLink>
</StyledElement>)};
export default SmallBox;
SmallBox.defaultProps = {
    width: "135px",
    height: "160px",
    selectionEnabled:0,
  };
const StyledElement = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  opacity: calc(1 - ${props => props.selectionEnabled});
  display: flex;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 0px 8px 3px rgba(0, 0, 0, 0.05);
  flex-wrap: nowrap;
  justify-content: space-around;
  flex-flow:row;
  text-align: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
    opacity:1;

  }
  .carousel-padding {
    margin: 0 0px 0 0px;
    padding: 0 0px 0 0px;
  }
`;
const StyledElementTitle = styled.div`
  display: inline;
  text-align:center;
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
const StyledLink = styled(Link)`
&:hover {
    text-decoration: none;
}
`;