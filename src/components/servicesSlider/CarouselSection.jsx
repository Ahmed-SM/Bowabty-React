import React from "react";
import styled from "styled-components";
const StyledElementSection =  styled.section`
  text-align: center;
    margin: 0px auto;
    padding: 0px 10px;
}
`;
const CarouselSection = ({ children }) => {
  return (
    <StyledElementSection>
      {children}
    </StyledElementSection>
  );
};

export default CarouselSection;