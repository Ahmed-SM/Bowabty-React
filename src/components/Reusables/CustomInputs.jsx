import React from "react";
import styled from "styled-components";
import { Field, useField, useFormikContext } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CustomInput = React.memo(({ label, width, ...props }) => {

  const [field, meta] = useField(props);
  return (
    <StyledColumn width={width}>
      <label htmlFor={props.id || props.name}>{label}</label>
      <StyledInput {...field} {...props} />
      {meta.touched && meta.error ? (
        <StyledError>{meta.error}</StyledError>
      ) : null}
    </StyledColumn>
  );
});

export const CustomSelect = React.memo(({ label, width, type, ...props }) => {
  
  const [field, meta] = useField(props);
  return (
    <StyledColumn width={width}>
      <label htmlFor={props.id || props.name}>{label}</label>
      <StyledSelect as={type} {...field} {...props} />
      {meta.touched && meta.error ? (
        <StyledError>{meta.error}</StyledError>
      ) : null}
    </StyledColumn>
  );
});
export const CustomFile = React.memo(({ label, width,icon, ...props }) => { //This one is going to be used for single file upload without list don't use it now it's not ready 

  const [field, meta] = useField(props);
  return (
    <StyledColumn width={width}>
      <label htmlFor={props.id || props.name}>{label}</label>
      <label className="__custom-file-upload" htmlFor={props.id || props.name}>{label}<span>{<FontAwesomeIcon size="1x" icon={icon} />}</span></label>
      <StyledFile  {...field} {...props} />
      {meta.touched && meta.error ? (
        <StyledError>{meta.error}</StyledError>
      ) : null}
    </StyledColumn>
  );
});
export const CustomRadio= React.memo(({ label, width, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <StyledColumn width={width}>
      <StyledRadio {...field} {...props}></StyledRadio>
  <label htmlFor={props.id || props.name}>{label}</label>
      {meta.touched && meta.error ? (
        <StyledError>{meta.error}</StyledError>
        ) : null}
    </StyledColumn>
  );
});
export const CustomCheckBox= React.memo(({ label, width, children, ...props }) => {
  const [field, meta, helpers] = useField(props.name , 'checkbox');
  const { setValues, setFieldTouched, setFieldValue } = useFormikContext();
  return (
    <StyledColumn width={width}>
      <StyledRadio {...field} {...props}  type="checkbox"
      checked={field.value}
      onChange={() => {
        setFieldValue(field.name, field.value === 1 ? 0 : 1)
      }}
      ></StyledRadio>
      {children}
  <label htmlFor={props.id || props.name}>{label}</label>
      {meta.touched && meta.error ? (
        <StyledError>{meta.error}</StyledError>
        ) : null}
    </StyledColumn>
  );
});

const StyledInput = styled(Field)`
  min-height: 3rem;
  margin-bottom: 0.1rem;
  width: 100%;
  color: #29333f;
  font-size: 1.3rem;
  border-radius: 5px;
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  text-indent: 15px;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  align-items: center;
  white-space: break-spaces;
  cursor: pointer;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(169, 169, 169);
  option{
    font-size: 1.3rem;
  }
`;
const StyledSelect = styled.select`
  min-height: 3rem;
  border-radius: 5px;
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  text-indent: 15px;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  align-items: center;
  white-space: pre;
  cursor: pointer;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(169, 169, 169);

  option{
    font-size: 1.3rem;
  }
`;
const StyledFile = styled.input`
  display: none !important;
`;
const StyledRadio = styled.input`
  
  border-radius: 5px;
  display: inline-block;
  text-align: start;
  align-items: center;
  white-space: pre;
  cursor: pointer;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(169, 169, 169);
  width:3.5rem;

`;
const StyledColumn = styled.div`
display: flex;
margin-left: 6.3px;
margin-right: 6.3px;
flex-direction: column;
flex-wrap: nowrap;
width:${props => props.width};
min-width: 8rem;

& > label {
  justify-content: space-between;
  padding: 0 5px;
  width:fit-content;
}
& > label > span{
  margin-top:5px;
  color:black;
}
.__custom-file-upload {
  border: 1px solid  rgb(169, 169, 169);
  width: 100%;
  display: flex;
  cursor: pointer;
  min-height: 3rem;
 align-items:center;
  text-indent: 5px;
  color: #757575;
  font-size: 1.3rem;
  outline: 0;
  text-indent: 15px;
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  text-shadow: none;
  text-align: start;
  border-radius: 5px;
}
`;
const StyledError = styled.div`
  color:red;
  height: 0px;
  min-height: 0px;
  max-height: 0px;
`;