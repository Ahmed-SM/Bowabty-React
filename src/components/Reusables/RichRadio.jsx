import React from "react";
import CustomRadio from "./CustomInputs";

const RichInput = ({InputLabel, Inputname, InputPlaceholder, InputType}) => (
<StyledInputGroup>
  <StyledColumn>
    <CustomRadio
      label={InputLabel}
      id={Inputname}
      name={Inputname}
      type={InputType}
      placeholder={InputPlaceholder}
    />
  </StyledColumn>
</StyledInputGroup>);
 export default RichInput;



const StyledRow = styled.div`
  width: 28%;
  background:#F6F4F5;
  padding:6px 0;
  border-radius:0px 4px 4px 0px;
  text-indent: 10px;
  font-weight:900;
  color:black;
  -webkit-text-stroke: 0.2px black;
  -webkit-font-smoothing: antialiased;
  
  &.__center{
    text-align:center;
    width: 24%;
  };
  &.__border{
    border-right: 1px solid #ddd;
    border-radius:4px 0px 0px 4px;
  };
`;
