import React from "react";
import styled from "styled-components";
import { Field, useField } from "formik";

export const CustomInput = React.memo(({ label, ...props }) => {
  console.log("%c CustomInput rerendred ", "background:red; color: white;");
  const [field, meta] = useField(props);
  return (
    <React.Fragment>
      <label htmlFor={props.id || props.name}>{label}</label>
      <StyledInput {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </React.Fragment>
  );
});

export const CustomSelect = React.memo(({ label, type, ...props }) => {
  console.log("%c CustomSelect rerendred ", "background:red; color: white;");
  const [field, meta] = useField(props);
  return (
    <React.Fragment>
      <label htmlFor={props.id || props.name}>{label}</label>
      <StyledSelect as={type} {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </React.Fragment>
  );
});
export const CustomFile = React.memo(({ label, ...props }) => {
  console.log("%c CustomSelect rerendred ", "background:red; color: white;");
  const [field, meta] = useField(props);
  return (
    <React.Fragment>
      <label className="custom-file-upload" htmlFor={props.id || props.name}>{label}</label>
      <StyledFile type="file" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </React.Fragment>
  );
});
export const CustomRadio= React.memo(({ label, ...props }) => {
  console.log("%c CustomRadio rerendred ", "background:red; color: white;");
  const [field, meta] = useField(props);
  return (
    <React.Fragment>
      <StyledRadio {...field} {...props}></StyledRadio>
      <label htmlFor={props.id || props.name}>{label}</label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
        ) : null}
    </React.Fragment>
  );
});

const StyledInput = styled(Field)`
  min-height: 3rem;
  margin-bottom: 0.1rem;
  border-color: black;
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
