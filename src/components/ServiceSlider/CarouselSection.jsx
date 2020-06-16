import React from "react";
import styled from "styled-components";

const CarouselSection = ({ children }, ref) => {
  return <StyledElementSection ref={ref}>{children}</StyledElementSection>;
};
export default React.forwardRef(CarouselSection);

const StyledElementSection = styled.section`
  text-align: center;
    margin: 0px auto;
    padding: 0px 10px;
}
`;
