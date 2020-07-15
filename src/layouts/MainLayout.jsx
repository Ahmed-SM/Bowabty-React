import React from "react";
import styled from "styled-components";
// import {Header} from "./common";
import { StyledHeader, StyledNavigation } from "./LoadLayout";

const Header = React.lazy(() => import("./common/Header"));
const MainNav = React.lazy(() => import("./common/MainNav"));

const mainLayout = ({ children }) => {
  
  return (
    <MainLayout>
      <React.Suspense fallback={<StyledHeader />}>
        <Header />
      </React.Suspense>
      <React.Suspense fallback={<StyledNavigation />}>
        <MainNav />
      </React.Suspense>
      {children}
    </MainLayout>
  );
};
export default mainLayout;

const MainLayout = styled.main`
  letter-spacing: 0.2px;
  background-color: transparent;
  box-sizing: border-box;
  min-height: 92%;
  
`;
