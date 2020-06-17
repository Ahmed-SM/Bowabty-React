import React from "react";
import styled from "styled-components";
const View = ({ children }) => {
  return <StyledView>{children}</StyledView>;
};
export default View;
const StyledView = styled.section`
  display: flex;
  justify-content: space-between;
  margin 0 25px;
  padding: 20px 0px;
  height: fit-content;
  min-height:400px;
  align-items: center;
  background-color: #F6F4F5;
  flex-wrap: wrap;
`;
