import React  from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation, Trans } from "react-i18next";

export const CustomFileView = ({ children, acceptedFileslength }) => {
  const { t } = useTranslation();
    return (
      <React.Fragment>
        {acceptedFileslength > 0 && (
          <StyledTable>
            <Styledthead>
              <StyledTr>
                <StyledTh><Trans i18nKey={"customFile:fileName"}></Trans></StyledTh>
                <StyledTh><Trans i18nKey={"customFile:fileType"}></Trans></StyledTh>
                <StyledTh><Trans i18nKey={"customFile:fileSize"}></Trans></StyledTh>
                <StyledTh></StyledTh>
              </StyledTr>
            </Styledthead>
            <tbody>{children}</tbody>
          </StyledTable>
        )}
      </React.Fragment>
    );
  };
export const CustomFileContent = ({icon, color, callBack, file}) =>{
    return (
        <StyledTr className={"__item"}>
          <StyledTd>{file.name}</StyledTd>
          <StyledTd>{file.type}</StyledTd>
          <StyledTd>{file.size} B</StyledTd>
          <StyledTd className={"__last"} onClick={callBack}>
            <FontAwesomeIcon size="1x" color={color} icon={icon}/>
          </StyledTd>
        </StyledTr>
    )
}

  const StyledError = styled.div`
  color: red;
  height: 0px;
  min-height: 0px;
  max-height: 0px;
`;
const Styledthead = styled.thead`
  border-bottom: 2px solid black !important;
`;
const StyledTh = styled.th`
  text-align: center;
`;
const StyledTable = styled.table`
    width: 680px;
  margin-top: 15px;
  border-collapse: collapse;
  
`;
const StyledTr = styled.tr`
  text-align: center;
  margin: 5px 0;

  &.__item:hover {

    transform: scale(1.01);
    transition: all 0.2s ease-in-out;
  }

`;
const StyledTd = styled.td`
    border-bottom: 10px solid white !important;s
  width: 20px;
  padding: 5px 0 0 0;
  background-color: rgb(245, 245, 245);
  
  &.__last{
    padding: 5px 2px 0 2px !important;
  }


`;