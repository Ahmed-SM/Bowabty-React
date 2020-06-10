import React from "react";
import styled from "styled-components";
const StickyLabel = ({Title, Icon, Color}) =>{
    return(
        <StyledStickyLabel Color={Color}>
            <StyledContainer>
            {Icon}
            </StyledContainer>
            <StyledContainer>
            {Title}
            </StyledContainer>
        </StyledStickyLabel>
    )
}
export default StickyLabel;

const StyledStickyLabel= styled.div`
    font-family: 'Cocon Next Arabic', Sans-Serif;
    letter-spacing: 0.2px;
    display: inline-table;
    margin: 5px 5px 0 5px;
    padding: 6px 0;
    height: 73px;
    width:60px;
    text-align:center;
    background: ${({ Color }) => Color}; 
`;
const StyledContainer= styled.div`
    max-width:20px;
    margin: 5px auto;
    display: table;
    text-align:center;
    font-size:9px;
    color:white;
`;