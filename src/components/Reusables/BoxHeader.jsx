import React from "react";
import styled from "styled-components";

const BoxHeader = ({ children }) => {
  return (
    <StyledHeader>
      <Styledh3>{children}</Styledh3>
      <StyledContainerDivider />
    </StyledHeader>
  );
};
export default BoxHeader;

const StyledHeader = styled.div`
  padding: 5px 5px 5px 5px;
  -webkit-text-stroke: 0.4px black;
  -webkit-text-fill-color: black;
  overflow: hidden;
  white-space: nowrap;
`;
const Styledh3 = styled.h3`
  text-overflow: ellipsis;
  margin:0;
`;
const StyledContainerDivider = styled.hr`
  margin: 10px 0px;
  border: 0;
  border-top: 1px solid #eee;
`;
