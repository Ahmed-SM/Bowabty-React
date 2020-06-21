import React from "react";
import styled from "styled-components";
const NewsFeedSection = ({ children }) => {
  return <StyledElementSection>{children}</StyledElementSection>;
};

export default NewsFeedSection;

const StyledElementSection = styled.section`
  text-align: center;
  margin: 20px 0px;
}
`;
