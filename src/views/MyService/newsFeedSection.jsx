import React from "react";
import styled from "styled-components";
const StyledElementSection =  styled.section`
  text-align: center;

}
`;
const NewsFeedSection = ({ children }) => {
  return (
    <StyledElementSection > 
      {children}
    </StyledElementSection>
  );
};

export default NewsFeedSection;