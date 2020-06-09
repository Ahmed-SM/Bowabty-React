import React from "react";
import styled from "styled-components";
import {useField} from "formik";

const CustomInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <>
        <label htmlFor={props.id || props.name}>{label}</label>
        <StyledInput {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </>
    );
  };
  export default CustomInput; 

  const StyledInput = styled.input`
 height: 3rem;
  min-height: 3rem;
  margin-bottom: 0.1rem;
  border-color: black;
  width: 100%;
  color: #29333f;
  font-size: 1.3rem;
  outline: 0;
  transition: all 0.3s ease-in-out;
  height: 30px;
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
  -webkit-rtl-ordering: logical;
  cursor: pointer;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(169, 169, 169);
`;