import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSortDown} from '@fortawesome/free-solid-svg-icons';
import styled from "styled-components";
import {UncontrolledDropdown, DropdownToggle, DropdownMenu} from 'reactstrap';
const DropMenu = {
    padding: '0',
    border:'none',
}
const DropdToggle = {
    background: 'transparent',
    color: 'white',
    outline: 'none',
    '&:hover':{
        backgroundColor: '#fff',
        color: 'black',
        borderRadius: '8px',
        transition: 'all 1s',
    }
}
const ExtendedDropdownToggle = styled(DropdownToggle)`
    background: transparent,
    color: white,
    outline: none,
    &:hover {
        backgroundColor: #fff,
        color: black,
        borderRadius: 8px,
        transition: all 1s,
    }
`
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