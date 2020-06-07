import React from "react";
import styled from "styled-components";

const StyledStickyLabel= styled.div `
    display: inline-table;
    margin: 5px 5px 0 5px;
    color:white;
    padding: 6px 10px;
    height: 63px;
    width:55px;
    max-width:55px;
    min-width:55px;
    text-align:center;
    background: ${({ Color }) => Color}; 
    font-size:10px;
`;
const StickyLabel = ({Title, Icon, Color}) =>{
    return(
        <StyledStickyLabel Color={Color}>
            {Icon}
            {Title}
        </StyledStickyLabel>
    )
}
export default StickyLabel;