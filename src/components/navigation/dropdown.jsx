import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSortDown} from '@fortawesome/free-solid-svg-icons';
import {UncontrolledDropdown, DropdownToggle, DropdownMenu} from 'reactstrap';
const DropMenu = {
    padding: '0',
    border:'none',
}

const Dropdown = ({icon, text, children}) => {
    return (
        <UncontrolledDropdown>
            <DropdownToggle className="dropdown">
                <FontAwesomeIcon size="2x" icon={icon}/>
                <div>
                    <FontAwesomeIcon size="1x" icon={faSortDown}/>
                    <span>{text}</span>
                </div>
            </DropdownToggle>
            <DropdownMenu style={DropMenu} right>
                {children}
            </DropdownMenu>
        </UncontrolledDropdown>
    )
}
export default Dropdown;