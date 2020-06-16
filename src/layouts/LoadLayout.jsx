import React from "react";
import styled from "styled-components";

const LoadLayout = () => {
  return (
    <StyledLoadLayout>
      <StyledHeader />
      <StyledNavigation />
      <StyledUserContent />
      <StyledPage />
    </StyledLoadLayout>
  );
};
export default LoadLayout;

export const StyledPage = styled.section`
  margin: 15px 25px;
  height: 71vh;
  background-color: #f6f4f5;
`;
export const StyledLoadLayout = styled.main`
  letter-spacing: 0.2px;
  background-color: transparent;
  box-sizing: border-box;
  min-height: 92%;
`;
export const StyledHeader = styled.header`
  width: 100%;
  height: 65px;
  box-sizing: border-box;
  padding: 0px 30px;
  display: inline-flex;
`;
export const StyledNavigation = styled.nav`
  width: 100%;
  background-color: #3c4652;
  height: 6.3rem;
  box-shadow: 0px 7px 5px 0px rgba(0, 0, 0, 0.31);

`;
export const StyledUserContent = styled.section`
  margin: 0;
  padding: 20px 50px 0px 50px;
  height: 99px;
  width: 100%;

`;
export const StyledServicesContainer = styled.div`
  margin: 15px 25px 22px 25px;
  background-color: #f6f4f5;
  padding: 30px 0px 0px 0px;
  height: 230px;
`;
export const StyledMyService = styled.div`
  height: 100%;
  min-height: 400px;
  max-height: 400px;
  padding: 50px 10px;
  width: 100%;
  background-color: #f6f4f5;
 
`;
export const StyledView = styled.section`
  margin 0 25px;
  height: 45%;
`;
