import React, { useContext } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboard,
  faCircle,
  faAddressBook,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation, Trans } from "react-i18next";
import { DiractionContext } from "../../contexts/DiractionContext";
import { TitleContext } from "../../contexts/TitleContext";
import { Link } from "react-router-dom";
import { UserContext} from "../../contexts/UserContext";

const data = {
  ar: { userName: "علياء أحمد مصطفى", userRole: "اخصائي تطوير مؤسس" },
  en: { userName: "Alia Ahmed Mustafa", userRole: "Development Specialist" },
};


const UserContent = ({ isVisible }) => {
  const { t } = useTranslation();
  const {IsLTR} = useContext(DiractionContext);
  const {Title} = useContext(TitleContext);
  const {SetIsAuthenticated} = useContext(UserContext);
  const Logout = () => {
    localStorage.removeItem('accessToken');
      SetIsAuthenticated(localStorage.getItem("accessToken") !== null);
  }

  return (
    <StyledUserContent IsLTR={IsLTR}>
      <StyledUserDetails IsLTR={IsLTR}>
        <div className="user-picture">
          <FontAwesomeIcon size="5x" icon={faCircle} color={"#C4C4C4"} />
        </div>
        <StyledInfo>
          <div className="user-name">
            <StyledH3 id="logged-user">
              {/* <FontAwesomeIcon size="1x" icon={faSortDown}  />   */}
              {IsLTR ? data.en.userName : data.ar.userName}
            </StyledH3>
          </div>
          <div className="user-role user-role-h4 user-role-h3">
            <h4 id="logged-role">
              {IsLTR ? data.en.userRole : data.ar.userRole}
            </h4>
          </div>
        </StyledInfo>
      </StyledUserDetails>
      <StyledTitle>
        <div>
          {Title ? <StyledH1>{Title.Title}</StyledH1> : <StyledTextFallback />}
        </div>
        <div>
          <StyledH4>
            {Title.SubTitle}
          </StyledH4>
        </div>
      </StyledTitle>
      <StyledSideBtns  IsLTR={IsLTR}>
        <StyledSideBtn>
          <Link  to={"/"} >
            <FontAwesomeIcon size="3x" icon={faBell} color={"#3C4652"} />
          </Link >
          <div>
            {" "}
            <Trans i18nKey={"userContent:notifications"} t={t}>
              الإشعارات
            </Trans>
          </div>
        </StyledSideBtn>
        <StyledSideBtn>
          <Link  to={"/Contacts"} >
            <FontAwesomeIcon size="3x" icon={faAddressBook} color={"#3C4652"} />
          </Link>
          <div>
            <Trans i18nKey={"userContent:contacts"} t={t}>
              التحويلات
            </Trans>
          </div>
        </StyledSideBtn>
        <StyledSideBtn>
          <a onClick={Logout}>
            <FontAwesomeIcon size="3x" icon={faClipboard} color={"#3C4652"} />
          </a>
          <div>
            <Trans i18nKey={"userContent:myNotes"} t={t}>
              ملاحظاتي
            </Trans>
          </div>
        </StyledSideBtn>
      </StyledSideBtns>
    </StyledUserContent>
  );
};
export default UserContent;

const StyledUserContent = styled.section`
  margin: 0;
  padding: 20px 50px 0px 50px;
  height: fit-content;
  width: 100%;
  justify-content: space-around;
  text-align: center;
  display: inline-flex;
  flex-direction: row-reverse;
  flex-wrap: nowrap;
  box-sizing: border-box;
  ${({ IsLTR }) =>
    IsLTR &&
    `
    flex-direction: row;
  `};
`;
const StyledUserDetails = styled.div`
  justify-content: space-around;
  display: inline-flex;
  flex-direction: row-reverse;
  flex-wrap: nowrap;
  box-sizing: border-box;
  & > img {
    width: 70px;
  }
  ${({ IsLTR }) =>
    IsLTR &&
    `
    flex-direction: row;
  `}
`;
const StyledH1 = styled.h1`
  margin: 0;
  font-weight: bold;
  color: #3c4652;
  -webkit-text-stroke: 0.1px #3c4652;
  -webkit-text-fill-color: #3c4652;
  white-space: nowrap;
`;
const StyledH3 = styled.h3`
  margin: 0;
  font-weight: bold;
  color: black;
  white-space: nowrap;
`;
const StyledH4 = styled.h4`
  margin: 5px 0 0 0;
  color: #6d6d6d;
  font-size: 19.8px;
  width: 100%;
  white-space: nowrap;
`;
const StyledTitle = styled.div`
  margin-top: 5px;
  flex-grow: 1;
`;
const StyledSideBtns = styled.div`
  justify-content: space-around;
  text-align: center;
  display: inline-flex;
  flex-direction: row-reverse;
  ${({ IsLTR }) =>
  IsLTR &&
  `
  flex-direction: row;
`}
  flex-wrap: nowrap;
  margin-top: 8px;
`;
const StyledInfo = styled.div`
  margin: 14px 20px 0px 0px;
  & > user-role-h4 {
    text-align: right;
    color: #6d6d6d;
  }
  & > user-role-h3 {
    text-align: right;
    color: #6d6d6d;
  }
`;
const StyledTextFallback = styled.h1`
  height: 10px;
  background: #ddd;
  border-radius: 5px;
  margin: 17px auto;
  width: 100px;
`;
const StyledSideBtn = styled.div`
  margin: 0px 10px;
  position: relative;
  -webkit-text-stroke: 0.5px #3c4652;
  -webkit-text-fill-color: #3c4652;
  cursor: pointer;
  & > div {
    min-width: 57px;
  }

  &:hover {
    filter: contrast(150%);
    transform: scale(1.05);
    transition: all 0.2s;
  }
`;
