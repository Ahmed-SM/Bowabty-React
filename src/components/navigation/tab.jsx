import React from "react";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
const Tab = ({path, icon, text}) => {
    return (
        <Link to={path}>
            <FontAwesomeIcon size="2x" icon={icon}/>
            <div data-translate="meeting">{text}</div>
        </Link>
    )
}
export default Tab;