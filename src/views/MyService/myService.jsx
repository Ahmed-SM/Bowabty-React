import React, {useContext} from "react";
import styled from "styled-components";
import 'react-multi-carousel/lib/styles.css';
import {NewsFeedContext} from "../../contexts/NewsFeedContext"
import NewsFeed from "./newsFeed";
import NewsFeedSection from "./newsFeedSection";
import {useTranslation, Trans} from "react-i18next";
import {DiractionContext} from "../../contexts/DiractionContext";
import {TitleContext} from "../../contexts/TitleContext";

const StyledServiceContainer = styled.div `
  margin 0 20px;
`;
const StyledMyService = styled.div `
  display: inline-flex;
  flex-wrap: nowrap;
  direction: rtl;
  justify-content: space-around;
  height: 380px;
  padding: 50px 10px;
  width: 100%;
  background-color: #F6F4F5;
  box-sizing: border-box;
  ${ ({
    isLTR}) => isLTR && ` direction: ltr;
    `}
  `;
    const StyledMdContainer = styled.div `
    height: 300px;
    width: 45%;
    min-width: 45%;
    box-shadow: 0px 0px 8px 3px rgba(0, 0, 0, 0.09);
    background-color: white;
    border-radius: 15px;
    z-index: 0;
    border-bottom: 6px solid ${props => props.primary
        ? "#3497DB"
        : "#000000"};
  `;
    const StyledHeader = styled.div `
    padding: 25px 40px 10px 40px;
    -webkit-text-stroke: 0.4px black;
    -webkit-text-fill-color: black;
    overflow: hidden;
    white-space: nowrap;
`;
    const Styledh3 = styled.h3 `
    text-overflow: ellipsis;
`;
    const StyledContainerDivider = styled.hr `
  margin: 10px 0px ;
  border: 0;
  border-top: 1px solid #eee;
`;
    const StyledColumn = styled.div `
  display: flex;
  margin-left: 1.3px;
    margin-right: 1.30px;
  flex-direction: column;
  flex-wrap: nowrap;

  & > label{
    width: fit-content;
    padding: 0 5px;
  }
`;
    const StyledSendButton = styled.button `
    display: inline-block;
    margin-bottom: 0;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    padding: 3px 32px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 4px;
    user-select: none;
    color: #fff;
    background-color: #3C4652;
    outline: 0;

    &:hover{
      box-shadow: 0 0 5px rgba(81, 203, 238, 1);
      background: rgba(81, 203, 238, 1);
      border: 1px solid rgba(81, 203, 238, 1);
    }
`;
    const StyledGroup = styled.div `
    display: block;
    padding: 0px 40px;
`;
    const StyledInputGroup = styled.div `
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    flex-wrap: nowrap;
`;
    const StyledInput = styled.input `
    padding-right: 10px;
    height: 30px;
    border-radius: 5px;
    text-rendering: auto;
    letter-spacing: normal;
    word-spacing: normal;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    align-items: center;
    white-space: pre;
    rtl-ordering: logical;
    cursor: default;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(169, 169, 169);
    cursor: pointer !important;
    outline: 0;
`;
    const StyledFile = styled.div `
    padding-right: 10px;
    
    height: 30px;
    border-radius: 5px;
    text-rendering: auto;
    letter-spacing: normal;
    word-spacing: normal;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    align-items: center;
    white-space: pre;
    rtl-ordering: logical;
    cursor: default;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(169, 169, 169);
    display: flex;
    flex-direction: row-reverse;
    background-color: transparent;
    & input[type=file] {
      font-size: calc(1px + 0.65vw);
      padding-left: 10px;
      opacity: 0;
  }
`;
    const StyledSelect = styled.select `
    padding-right: 10px;
    height: 30px;
    border-radius: 5px;
    text-rendering: auto;
    letter-spacing: normal;
    word-spacing: normal;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    align-items: center;
    white-space: pre;
    rtl-ordering: logical;
    cursor: default;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(169, 169, 169);
`;
const StyledFileLabel = styled.label `
    color: #757575;
    margin: -25px 0px 0 0;
    padding:0 15px;
`;
const StyledSVG = styled.svg`
  position: absolute;
  width: 15px;
  margin: 1px 10px 0 10px;
  z-index: -1;
  ${ ({
    isLTR}) => isLTR && `margin: 1px 10px 0 0px;
    `}
  `;
    const MyService = () => {
        const {t} = useTranslation();
        const [isLTR] = useContext(DiractionContext);
        const [Title, setTitle] = useContext(TitleContext);
        if(Title !== "خدماتي"){
            setTitle("خدماتي")
        }
        console.log("MyService rerendred")
        return (
            <StyledServiceContainer>
                <StyledMyService isLTR={isLTR}>
                    <StyledMdContainer primary>
                        <StyledHeader className="d-header ">
                            <Styledh3>
                                <Trans i18nKey={"navigation.decision"} t={t}>قرارات داخلية جديدة</Trans>
                            </Styledh3>
                            <StyledContainerDivider className="hr-d-container"/>
                        </StyledHeader>
                        <NewsFeedSection >
                            <NewsFeed list={NewsFeedContext}/>
                        </NewsFeedSection>
                    </StyledMdContainer>
                    <StyledMdContainer className="border-bottom-black">
                        <StyledHeader className="d-header">
                            <Styledh3>
                                <Trans i18nKey={"navigation.suggestion"} t={t}>تقديم مقترح</Trans>
                            </Styledh3>
                            <StyledContainerDivider className="hr-d-container"/>
                        </StyledHeader>
                        <StyledGroup className="d-content group">
                            <form action="/">
                                <StyledInputGroup className="input-group-a">
                                    <StyledColumn className="col-md-12">
                                        <label htmlFor="">
                                            <Trans i18nKey={"navigation.suggestedTitle"} t={t}>عنوان المقترح</Trans>
                                        </label>
                                        <StyledInput
                                            className=" col-md-10"
                                            type="text"
                                            placeholder={t('navigation.suggestedTitlePlaceholder')}/>
                                    </StyledColumn>
                                </StyledInputGroup>
                                <StyledInputGroup className="input-group-b ">
                                    <StyledColumn className="col-md-5  selectdiv">
                                        <label htmlFor="">
                                            <Trans i18nKey={"navigation.suggestionOrigin"} t={t}>مصدر الاقتراح</Trans>
                                        </label>
                                        <StyledSelect className=" col-md-12 " name="">
                                            <option value="فكرة شخصية">
                                                {t('navigation.suggestionOriginOption1')}
                                            </option>
                                        </StyledSelect>
                                    </StyledColumn>
                                    <StyledColumn className="col-md-5 ">
                                        <label htmlFor="file">
                                            <Trans i18nKey={"navigation.attachemnt"} t={t}>المرفقات</Trans>
                                        </label>
                                        <StyledFile className="col-md-12">
                                            <div className="user-select">
                                                <input name="file" type="file"/>
                                            </div>
                                            <StyledSVG
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="far"
                                                data-icon="file"
                                                className="svg-inline--fa fa-file fa-w-12"
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 384 512">
                                                <path
                                                    fill="currentColor"
                                                    d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48z"/>

                                                <svg width="250" height="300" viewBox="0 0 600 600" y="200" x="100">
                                                    <path
                                                        fill="currentColor"
                                                        d="M43.246 466.142c-58.43-60.289-57.341-157.511 1.386-217.581L254.392 34c44.316-45.332 116.351-45.336 160.671 0 43.89 44.894 43.943 117.329 0 162.276L232.214 383.128c-29.855 30.537-78.633 30.111-107.982-.998-28.275-29.97-27.368-77.473 1.452-106.953l143.743-146.835c6.182-6.314 16.312-6.422 22.626-.241l22.861 22.379c6.315 6.182 6.422 16.312.241 22.626L171.427 319.927c-4.932 5.045-5.236 13.428-.648 18.292 4.372 4.634 11.245 4.711 15.688.165l182.849-186.851c19.613-20.062 19.613-52.725-.011-72.798-19.189-19.627-49.957-19.637-69.154 0L90.39 293.295c-34.763 35.56-35.299 93.12-1.191 128.313 34.01 35.093 88.985 35.137 123.058.286l172.06-175.999c6.177-6.319 16.307-6.433 22.626-.256l22.877 22.364c6.319 6.177 6.434 16.307.256 22.626l-172.06 175.998c-59.576 60.938-155.943 60.216-214.77-.485z"/>
                                                </svg>
                                            </StyledSVG>
                                        </StyledFile>
                                        <StyledFileLabel className="file-placeholder" htmlFor="file">
                                            <Trans i18nKey={"navigation.attachemnt"} t={t}>المرفقات</Trans>

                                        </StyledFileLabel>
                                    </StyledColumn>
                                </StyledInputGroup>
                                <div>
                                    <StyledSendButton type="submit" className="send-btn">
                                        <Trans i18nKey={"navigation.sendBtn"} t={t}>ارسال</Trans>
                                    </StyledSendButton>
                                </div>
                            </form>
                        </StyledGroup>
                    </StyledMdContainer>
                </StyledMyService>
            </StyledServiceContainer>
        );
    }
    export default MyService;