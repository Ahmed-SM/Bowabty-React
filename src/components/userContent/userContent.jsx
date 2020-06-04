import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard, faCircle, faAddressBook} from '@fortawesome/free-solid-svg-icons';

const StyledUserInfo = styled.div`
    margin: 0;
    padding: 25px 50px 0px 50px;
    height: fit-content;
    width: 100%;
    justify-content: space-around;
    text-align: center;
    display: inline-flex;
    flex-direction: row-reverse;
    flex-wrap: nowrap;
    box-sizing: border-box;
`;
const StyledUserDetails = styled.div`
    justify-content: space-around;
    display: inline-flex;
    flex-direction: row-reverse;
    flex-wrap: nowrap;
    & > img {
        width: 70px;
    }
`;
const StyledH1 = styled.h1`
    margin: 0; 
    font-weight: bold;
    color: #3C4652;
    text-stroke: 0.1px #3C4652;
    text-fill-color: #3C4652;
    white-space: nowrap;
`; 
const StyledH3 = styled.h3`
    margin: 0;
    font-weight: bold;
    color: black;
    white-space: nowrap;
`; 
const StyledH4 = styled.h4`
    margin: 0;
    color: #6D6D6D;
    font-size: 19.8px;
    width: 100%;
    white-space: nowrap;
`; 
const StyledTitle = styled.div`
    margin-top:8px;
    flex-grow: 1;
`;
const StyledSideBtns  = styled.div`
    justify-content: space-around;
    text-align: center;
    display: inline-flex;
    flex-direction: row-reverse;
    flex-wrap: nowrap;
    margin-top:8px;
`;
const StyledInfo = styled.div`
    margin:14px 20px 0px 0px;
    & > user-role-h4 {
        text-align: right;
        color: #6D6D6D;
    }
    & > user-role-h3 {
        text-align: right;
        color: #6D6D6D;
    }
`;
const StyledSpace = styled.div`
    margin: 0 80px 0 0 ;
`;
const StyledSideBtn = styled.div`
    margin: 0px 10px;
    position: relative;
    -webkit-text-stroke: 0.5px #3C4652;
    -webkit-text-fill-color: #3C4652;
    cursor: pointer;
    & > div{
        min-width: 57px;
    }

    &:hover {
        filter: contrast(150%);
        transform: scale(1.05);
        transition: all 0.2s;
    }
`;


const UserContent = ({isVisible}) => {
  return (
    <>
    {isVisible ? 
      <StyledUserInfo>
        <StyledUserDetails>
          <div class="user-picture">
          <FontAwesomeIcon size="5x" icon={faCircle} color={"#C4C4C4"} />  
          </div>
          <StyledInfo>
            <div class="user-name">
              <StyledH3 id="logged-user">
                علياء أحمد مصطفى
              </StyledH3>
            </div>
            <div class="user-role user-role-h4 user-role-h3">
              <h4 id="logged-role">اخصائي تطوير مؤسس</h4>
            </div>
          </StyledInfo>
        </StyledUserDetails>
        <StyledTitle>
          <div>
            <StyledH1 data-translate="title">
              خدماتي
            </StyledH1>
          </div>
          <div>
            <StyledH4
              id="title-child"
              data-translate="title-child"
            >
              لوريم إيبسوم هو ببساطة نص شكلي
            </StyledH4>
          </div>
        </StyledTitle>
        <StyledSideBtns>
          <StyledSideBtn>
            <a href="/">
            <FontAwesomeIcon size="3x" icon={faAddressBook} color={"#3C4652"} />  
            </a>
            <div data-translate="contact">التحويلات</div>
          </StyledSideBtn>
          <StyledSideBtn >
            <a href="/">
            <FontAwesomeIcon size="3x" icon={faClipboard} color={"#3C4652"}/>  
            </a>
            <div data-translate="note">ملاحظاتي</div>
          </StyledSideBtn>
        </StyledSideBtns>
      </StyledUserInfo>
    :<></>
    }</>);
}
export default UserContent;