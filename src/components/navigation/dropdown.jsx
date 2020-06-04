import React from "react";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSortDown} from '@fortawesome/free-solid-svg-icons';
import {UncontrolledDropdown, DropdownToggle, DropdownMenu} from 'reactstrap';

const Dropdown = ({icon, text, children}) => {
    return (
        <UncontrolledDropdown>
            <DropdownToggle
                style={{
                background: `transparent`,
                color: `white`,
                outline: 'none'
            }}>
                <FontAwesomeIcon size="2x" icon={icon}/>
                <div>
                    <FontAwesomeIcon size="1x" icon={faSortDown}/>
                    <span data-translate="task">{text}</span>
                </div>
            </DropdownToggle>
            <DropdownMenu right>
                {children}
            </DropdownMenu>
        </UncontrolledDropdown>
    )
}
export default Dropdown;