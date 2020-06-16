import React from "react";
import styled from "styled-components";
const StickyLabel = ({ Title, Icon, Color }) => {
  console.log("%c StickyLabel rerendred ", "background:red; color: white;");
  return (
    <StyledStickyLabel Color={Color}>
      <StyledContainer>{Icon}</StyledContainer>
      <StyledContainer>{Title}</StyledContainer>
    </StyledStickyLabel>
  );
};
export default StickyLabel;

const StyledStickyLabel = styled.div`
  letter-spacing: 0.2px;
  display: inline-table;
  margin: 5px 5px 0 5px;
  padding: 6px 0 0 0;
  min-height: 70px;
  width: 50px;
  text-align: center;
  background: ${({ Color }) => Color};
`;
const StyledContainer = styled.div`
  max-width: 20px;
  margin: 5px auto;
  display: table;
  text-align: center;
  font-size: 9px;
  color: white;
`;
