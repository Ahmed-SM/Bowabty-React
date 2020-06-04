import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';


const StyledServiceContainer = styled.div`
  margin 0 20px;
`;
const StyledMyService = styled.div`
  display: inline-flex;
  flex-wrap: nowrap;
  direction: rtl;
  justify-content: space-around;
  height: 380px;
  padding: 50px 10px;
  width: 100%;
  background-color: #F6F4F5;
  box-sizing: border-box;
  `;
  const StyledMdContainer = styled.div`
    height: 300px;
    width: 45%;
    min-width: 45%;
    box-shadow: 0px 0px 8px 3px rgba(0, 0, 0, 0.09);
    background-color: white;
    border-radius: 15px;
    z-index: 0;
    border-bottom: 6px solid ${props => props.primary  ? "#3497DB" : "#000000"};
  `;
const StyledHeader = styled.div`
    padding: 25px 40px 10px 40px;
    -webkit-text-stroke: 0.4px black;
    -webkit-text-fill-color: black;
    overflow: hidden;
    white-space: nowrap;
`;
const Styledh3 = styled.h3`
    text-overflow: ellipsis;
`;
const Styledh6 = styled.h6`
    font-size: 13px;
    margin-bottom:0.3em;
`;
const StyledContainerDivider = styled.hr`
  margin: 10px 0px ;
  border: 0;
  border-top: 1px solid #eee;
`;
const StyledCard = styled.div`
  padding: 10px 15px;
  border-radius: 5px;
  width: 125px;
  height: 165px;
  margin-right: auto;
  background-color: #F5F5F5;

  & > div >  a{
    color: black ;
    font-size: 10px;
    text-stroke: 0.4px black;
    text-fill-color: black;
    text-decoration:none;
  }
`;
const StyledCardHeader = styled.div`
    text-stroke: 0.4px black;
    text-fill-color: black;
    min-height: 30px;
`;
const StyledColumn= styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;

  & > label{
    width: fit-content;
  }
`;
const StyledItemAlign= styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;

  & > label{
    width: fit-content;
  }
`;

const StyledSendButton = styled.button`
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
const StyledSliderInner = styled.div`
      display: inline-flex ;
      width: 80%;
`;
const StyledJustifiedTextArea = styled.div`
    max-height: 80px;
    overflow: hidden;
`;
const StyledJustifiedParagraph = styled.p`
    font-size: 8.5px;
    text-align: justify;
    text-align-last: justify;
    opacity: 0.7;
    min-height: 78px;
    word-spacing: 0px;
    text-stroke: 0.1px #333;
`;
const StyledCardDate = styled.p`
    font-size: 8px;
    margin: 0;
`;
const StyledCardDivider = styled.hr`
    margin: 0;
`;
const StyledGroup = styled.div`
    display: block;
    padding: 0px 40px;
`;
const StyledInputGroup = styled.div`
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    flex-wrap: nowrap;
    
`;
const StyledInput = styled.input`
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
    border-color: rgb(169, 169, 169)
    cursor: pointer !important;
    outline: 0;
`;
const StyledFile = styled.div`
    padding-right: 10px;
    margin-left: 5px;
    margin-right: 5px;
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
const StyledSelect = styled.select`
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
const StyledFileLabel = styled.label`
    color: #757575;
    margin: -25px 15px 0 0;
`;


const MyService = () => {
  return (
    <StyledServiceContainer>
    <StyledMyService>
      <StyledMdContainer primary>
        <StyledHeader class="d-header ">
          <Styledh3 id="d-header-box1" data-translate="decision">
            قرارات داخلية جديدة
          </Styledh3>
          <StyledContainerDivider class="hr-d-container" />
        </StyledHeader>
        <div id="carousel-2" class="carousel carousel-2 slide">
          <div id="d-content" class="d-content carousel-inner">
            <StyledItemAlign id="slider" class="item active item-align">
              <StyledSliderInner class="slider-inner">
                <StyledCard id="d-card" class="d-card">
                  <StyledCardHeader class="d-card-header">
                    <Styledh6 dir="auto">اليوم العالمي للعدالة الاجتماعية</Styledh6>
                  </StyledCardHeader>
                  <StyledJustifiedTextArea class="justified-container">
                    <StyledJustifiedParagraph class="justified" dir="auto">
                      لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل
                      وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر.
                    </StyledJustifiedParagraph>
                  </StyledJustifiedTextArea>
                  <div>
                    <StyledCardDate class="d-card-date" dir="auto">
                      الأربعاء 20 , فبراير 2019
                    </StyledCardDate>
                  </div>
                  <StyledCardDivider class="d-card-line" />
                  <div class="text-center">
                    <a data-translate="read-more" href="#">
                      اقرأ المزيد
                    </a>
                  </div>
                </StyledCard>
                <StyledCard class="d-card">
                  <StyledCardHeader class="d-card-header">
                    <Styledh6 dir="auto">اليوم العالمي للعدالة الاجتماعي</Styledh6>
                  </StyledCardHeader>
                  <StyledJustifiedTextArea class="justified-container">
                    <StyledJustifiedParagraph class="justified" dir="auto">
                      لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل
                      وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر.
                    </StyledJustifiedParagraph>
                  </StyledJustifiedTextArea>
                  <div>
                    <StyledCardDate class="d-card-date" dir="auto">
                      الأربعاء 20 , فبراير 2019
                    </StyledCardDate>
                  </div>
                  <StyledCardDivider class="d-card-line" />
                  <div class="text-center">
                    <a data-translate="read-more" href="#">
                      اقرأ المزيد
                    </a>
                  </div>
                </StyledCard>
              </StyledSliderInner>
            </StyledItemAlign>
          </div>
          <a
            role="button"
            href="#carousel-2"
            data-slide="next"
            id="slider-arrow"
            class="carousel-control carousel-control-2"
            style={{ left: `1.4vw` }}
          >
            <FontAwesomeIcon size="2x" icon={faChevronLeft}  color={"#C0C0C0"}/>
            <i class="fas fa-chevron-left C0C0C0" />
          </a>
        </div>
      </StyledMdContainer>

      <StyledMdContainer class="border-bottom-black">
        <StyledHeader class="d-header">
          <Styledh3 id="d-header-box2" data-translate="suggestion">
            تقديم مقترح
          </Styledh3>
          <StyledContainerDivider class="hr-d-container" />
        </StyledHeader>
        <StyledGroup class="d-content group">
          <form id="feedback-form" action="/">
            <StyledInputGroup class="input-group-a">
              <StyledColumn className="col-md-12">
                <label data-translate="suggested-title" for="">
                  عنوان المقترح
                </label>
                <StyledInput
                  id="suggestion-title-placeholder"
                  className="input-border col-md-10"
                  type="text"
                  data-translate="suggested-title"
                  placeholder="عنوان المقترح"
                />
              </StyledColumn>
            </StyledInputGroup>
            <StyledInputGroup class="input-group-b ">
              <StyledColumn className="col-md-5  selectdiv">
                <label data-translate="suggestion-origin" for="">
                  مصدر الاقتراح
                </label>
                <StyledSelect className="input-border col-md-12 " name="" id="">
                  <option
                    value="فكرة شخصية"
                    data-translate="suggestion-origin-option-1"
                    selected
                  >
                    فكرة شخصية
                  </option>
                </StyledSelect>
              </StyledColumn>
              <StyledColumn className="col-md-5 ">
                <label data-translate="attachemnt" for="file">
                  المرفقات
                </label>
                <StyledFile className="input-border col-md-12 input-file ">
                  <div class="user-select">
                    <input name="file" type="file" id="file" />
                  </div>
                  <svg
                    class="svg-size"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="file"
                    class="svg-inline--fa fa-file fa-w-12"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <path
                      fill="currentColor"
                      d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48z"
                    />

                    <svg
                      width="250"
                      height="300"
                      viewBox="0 0 600 600"
                      y="200"
                      x="100"
                    >
                      <path
                        fill="currentColor"
                        d="M43.246 466.142c-58.43-60.289-57.341-157.511 1.386-217.581L254.392 34c44.316-45.332 116.351-45.336 160.671 0 43.89 44.894 43.943 117.329 0 162.276L232.214 383.128c-29.855 30.537-78.633 30.111-107.982-.998-28.275-29.97-27.368-77.473 1.452-106.953l143.743-146.835c6.182-6.314 16.312-6.422 22.626-.241l22.861 22.379c6.315 6.182 6.422 16.312.241 22.626L171.427 319.927c-4.932 5.045-5.236 13.428-.648 18.292 4.372 4.634 11.245 4.711 15.688.165l182.849-186.851c19.613-20.062 19.613-52.725-.011-72.798-19.189-19.627-49.957-19.637-69.154 0L90.39 293.295c-34.763 35.56-35.299 93.12-1.191 128.313 34.01 35.093 88.985 35.137 123.058.286l172.06-175.999c6.177-6.319 16.307-6.433 22.626-.256l22.877 22.364c6.319 6.177 6.434 16.307.256 22.626l-172.06 175.998c-59.576 60.938-155.943 60.216-214.77-.485z"
                      />
                    </svg>
                  </svg>
                </StyledFile>
                <StyledFileLabel
                  id="file-placeholder"
                  class="file-placeholder"
                  data-translate="attachemnt"
                  for="file"
                >
                  المرفقات
                </StyledFileLabel>
              </StyledColumn>
            </StyledInputGroup>
            <div>
              <StyledSendButton
                type="submit"
                id="submit-btn"
                data-translate="send-btn"
                class="send-btn"
              >
                ارسال
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