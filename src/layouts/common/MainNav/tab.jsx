import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Tab = ({ path, icon, text }) => {
  return (
    <Link className="defaultLink" to={path}>
      <StyledNavTab>
        <FontAwesomeIcon size="2x" icon={icon} />
        <div>{text}</div>
      </StyledNavTab>
    </Link>
  );
};
export default Tab;

const StyledNavTab = styled.div`
  margin: 1px 7px;
  background: transparent;
  text-decoration: none;
  color: white;
  outline: none !important;
  border: none !important;
  min-width: 90px;
  transition: all 0.5s;
  padding: 6px 12px;
  font-size: 10pt;
  & > * {
    color: white;
    outline: none;
    border: none;
  }
  &:hover {
    outline: none;
    border: none;
    background-color: #fff;
    border-radius: 5px;
  }
  &:hover > * {
    color: black !important;
  }
  &:focus {
    background-color: #fff !important;
    color: black !important;
    border-radius: 5px;
    outline: none !important;
    border: none !important;
  }
`;
