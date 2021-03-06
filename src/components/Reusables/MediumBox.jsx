import React, { useContext } from "react";
import styled from "styled-components";
import "react-multi-carousel/lib/styles.css";
import { DiractionContext } from "../../contexts/DiractionContext";

const MediumBox = ({ children, ...rest }) => {
  const {IsLTR} = useContext(DiractionContext);
  return (
    <StyledInner {...rest} IsLTR={IsLTR}>
      {children}
    </StyledInner>
  );
};
export default MediumBox;

const StyledInner = styled.div`
    height: 320px;
    margin: 20px auto;
    padding: 20px 50px 0px 50px;
    width: 46%;
    min-width: 46%;
    max-width:50%;
    direction: rtl;
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
