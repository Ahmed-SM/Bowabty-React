import React, { useContext } from "react";
import styled from "styled-components";
import "react-multi-carousel/lib/styles.css";
import { DiractionContext } from "../../contexts/DiractionContext";

const LargeBox = ({ children, ...rest }) => {
  const [isLTR] = useContext(DiractionContext);
  console.log("LargeBox rerendred");
  return (
    <StyledInner {...rest} isLTR={isLTR}>
      {children}
    </StyledInner>
  );
};
export default LargeBox;

const StyledInner = styled.div`
  height: 560px;
  min-height: 540px;
  padding: 20px 20px 0 20px;
  margin-top: 40px;
  box-shadow: 0px 0px 8px 3px rgba(0, 0, 0, 0.09);
  background-color: white;
  border-radius: 15px;
  z-index: 0;
  border-bottom: 6px solid ${(props) => (props.primary ? "#3497DB" : "#000000")};
`;
