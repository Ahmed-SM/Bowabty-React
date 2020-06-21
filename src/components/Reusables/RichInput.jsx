import React from "react";
import styled from "styled-components";

const RichInput = ({children, height}) => {
  return(
<StyledInputGroup height={height}>
    {children}
</StyledInputGroup>)};
export default RichInput;


const StyledInputGroup = styled.div`
  width: 100%;
  align-items:center;
  height:${props => props.height};
  margin-bottom: 13px;
  display: flex;
  flex-wrap: nowrap;
`;
RichInput.defaultProps = {
  height: "100%",
};