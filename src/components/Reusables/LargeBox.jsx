import React, { useContext } from "react";
import styled from "styled-components";
import "react-multi-carousel/lib/styles.css";
import { DiractionContext } from "../../contexts/DiractionContext";

const LargeBox = ({ children, ...rest }) => {
  const {IsLTR} = useContext(DiractionContext);
  return (
    <StyledInner {...rest} IsLTR={IsLTR}>
      {children}
    </StyledInner>
  );
};
export default LargeBox;

const StyledInner = styled.div`
  width: 760px;
  height: fit-content;
  padding: 20px 40px 0 40px;
  margin-top: 40px;
  box-shadow: 0px 0px 8px 3px rgba(0, 0, 0, 0.09);
  background-color: white;
  border-radius: 15px;
  z-index: 0;
  ${({ IsLTR }) =>
      IsLTR &&
      ` direction: ltr;
        `}
  border-bottom: 6px solid ${(props) => (props.primary ? "#3497DB" : props.green ? "#008B38" : props.lightgreen ? "#1BBC9B" : props.purple ? "#902577" : "#000000")};
`;
