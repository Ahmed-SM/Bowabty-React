import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSortDown} from '@fortawesome/free-solid-svg-icons';
import {UncontrolledDropdown, DropdownToggle, DropdownMenu} from 'reactstrap';
const Dropdown = ({icon, text, children, diraction}) => {
    return (
        <UncontrolledDropdown>
            <DropdownToggle className="dropdown">
                <FontAwesomeIcon size="2x" icon={icon}/>
                <div>
                    <span>{text}</span>
                    <FontAwesomeIcon size="1x" icon={faSortDown}/>
                </div>
            </DropdownToggle>
            { diraction ? 
            <DropdownMenu style={DropMenu} left>
                {children}
            </DropdownMenu>
            :
            <DropdownMenu style={DropMenu} right>
                {children}
            </DropdownMenu>
            }
        </UncontrolledDropdown>
    )
}
export default Dropdown;

const DropMenu = {
    padding: '0',
    border:'none',
}