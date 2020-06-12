import React from "react";
import styled from "styled-components";
const View = ({children}) => {
    return(
        <StyledView>{children}</StyledView>
    )
}
export default View;
const StyledView = styled.section`
  margin 0 20px;
  height: 46%;
`;
