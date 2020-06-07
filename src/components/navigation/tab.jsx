import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
const Tab = ({path, icon, text}) => {
    return (
        <Link className="defaultLink" to={path}>
            <FontAwesomeIcon size="2x" icon={icon}/>
            <div>{text}</div>
        </Link>
    )
}
export default Tab;