import React, {useContext, useEffect}  from "react";
import styled from "styled-components";
const Page = ({children}) => {
    return(
        <StyledPage>
            <StyledContainer>{children}</StyledContainer>
        </StyledPage>
    )
}
export default Page;

const StyledPage = styled.section`
margin: 0 20px;
height: 71%;
`;
const StyledContainer = styled.div`
display: inline-flex;
flex-wrap: nowrap;
direction: rtl;
justify-content: space-around;
height: auto;
min-height:69vh;
padding: 50px 10px;
width: 100%;
background-color: #F6F4F5;
box-sizing: border-box;
margin: 0px auto;
`;
