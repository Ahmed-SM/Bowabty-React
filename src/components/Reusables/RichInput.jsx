import React from "react";
import styled from "styled-components";

const RichInput = ({children}) => {
  return(
<StyledInputGroup>
    {children}
</StyledInputGroup>)};
export default RichInput;


const StyledInputGroup = styled.div`
  width: 100%;
  align-items:center;
  margin-bottom: 13px;
  display: flex;
  flex-wrap: nowrap;
`;