import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronRight, faChevronLeft, faLevelUpAlt, faBars} from '@fortawesome/free-solid-svg-icons';


const StyledServicesContainer = styled.div`
  position: relative;
  margin: 22px 25px;
  background-color: #F6F4F5;
  padding: 35px 0px;
  transition: all 0.5s ease-in-out;
  height: 250px;

`;
const StyledItemElement =  styled.div`
  float: right;
  width: 14.2857143%;
  min-width: 14.2857143%;
  padding: 5px 0;
  text-align: center;

  & > a {
    text-decoration: none;
    user-select: none;
}
`;
const StyledElement = styled.div`
  width: 135px;
  height: 160px;
  display: block;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 0px 8px 3px rgba(0, 0, 0, 0.05);

  &:hover {
    filter: grayscale(80%);
    transition: all 0.5s;
  }
`;
const StyledDescription = styled.div`
  display: inline;
  overflow-wrap: break-word;
`;
const Styledh6 = styled.h6`
  font-size: calc(4px + 0.4vw);
  opacity: 0.6;
  color: black
`;
const Styledh5 = styled.h5`
  font-size: 15px;
`;
const CarouselControlRight = styled.div`
  left: 25px;
  width: 40px;
  height: 40px;
  top: 45%;
  border: 7px solid #CACACA;
  border-radius: 23px 23px 23px 23px;
  background: #CACACA;
  background-image: none;
    right: 25px;
`;
const CarouselControlLeft = styled.div`
  left: 25px;
  width: 40px;
  height: 40px;
  top: 45%;
  border: 7px solid #CACACA;
  border-radius: 23px 23px 23px 23px;
  background: #CACACA;
  background-image: none;
`;
const StyledElementTitle= styled.div`
  display: inline;
`;


const ServicesSlider = () => {
  return (
    <StyledServicesContainer>
      <div
        id="carousel"
        class="carousel slide"
        data-ride="carousel"
        data-type="multi"
        data-interval="2500"
      >
        <div class="carousel-inner">
          <div class="item active">
            <div class="carousel-col">
              <div class="block img-responsive">
                <StyledItemElement class="item-element">
                  <a href="/">
                    <StyledElement class="element">
                      <div class="pl30 pr30 pt30">
                        <img src="./imgs/paper-time.png" alt="" width="52" />
                      </div>
                      <StyledElementTitle class="element-title">
                        <Styledh5 data-translate="status-requests" class="bold-text">
                          حالة طلباتي
                        </Styledh5>
                      </StyledElementTitle>
                      <StyledDescription class="element-description">
                        <Styledh6 data-translate="element-description" dir="auto">
                          {" "}
                          تشمل طلبات القرطاسية صيانة المكتب والمعدات الأخرى في
                          المكتب..
                        </Styledh6>
                      </StyledDescription>
                    </StyledElement>
                  </a>
                </StyledItemElement>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="carousel-col">
              <div class="block img-responsive">
                <StyledItemElement class="item-element">
                  <a href="/">
                    <StyledElement class="element">
                      <div class="pl30 pr30 pt30">
                        <img src="./imgs/art-bag.png" alt="" width="38" />
                      </div>
                      <StyledElementTitle class="element-title">
                        <Styledh5 data-translate="varied-requests" class="bold-text">
                          طلبات متنوعة
                        </Styledh5>
                      </StyledElementTitle>
                      <StyledDescription class="element-description">
                        <Styledh6 data-translate="element-description" dir="auto">
                          {" "}
                          تشمل طلبات القرطاسية صيانة المكتب والمعدات الأخرى في
                          المكتب..
                        </Styledh6>
                      </StyledDescription>
                    </StyledElement>
                  </a>
                </StyledItemElement>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="carousel-col">
              <div class="block img-responsive">
                <StyledItemElement class="item-element">
                  <a href="/">
                    <StyledElement class="element">
                      <div class="pl30 pr30 pt30">
                        <img src="./imgs/doc-green.png" alt="" width="40" />
                      </div>
                      <StyledDescription class="element-title">
                        <Styledh5 data-translate="office-requests" class="bold-text">
                          طلبات من مكتب التطوير المؤسسي
                        </Styledh5>
                      </StyledDescription>
                    </StyledElement>
                  </a>
                </StyledItemElement>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="carousel-col">
              <div class="block img-responsive">
                <StyledItemElement class="item-element">
                    <a href="/">
                  <StyledElement class="element">
                      <div class="pl30 pr30 pt30">
                        <img
                          src="./imgs/doc-dark-green.png"
                          alt=""
                          width="40"
                        />
                      </div>
                      <StyledElementTitle class="element-title">
                        <Styledh5
                          data-translate="communication-requests"
                          class="bold-text"
                        >
                          طلبات من قسم الاتصال المؤسسي
                        </Styledh5>
                      </StyledElementTitle>
                      <div />
                  </StyledElement>
                    </a>
                </StyledItemElement>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="carousel-col">
              <div class="block img-responsive">
                <StyledItemElement class="item-element">
                  <a href="/">
                    <StyledElement class="element">
                      <div class="pl30 pr30 pt30">
                        <img src="./imgs/doc-yellow.png" alt="" width="40" />
                      </div>
                      <StyledElementTitle class="element-title">
                        <Styledh5 data-translate="human-requests" class="bold-text">
                          طلبات من قسم الموارد البشرية
                        </Styledh5>
                      </StyledElementTitle>
                      <div />
                    </StyledElement>
                  </a>
                </StyledItemElement>
              </div>
            </div>
          </div>
          <div class="item ">
            <div class="carousel-col">
              <div class="block img-responsive">
                <StyledItemElement class="item-element">
                  <a href="/">
                    <StyledElement class="element">
                      <div class="pl30 pr30 pt30">
                        <img src="./imgs/doc-blue.png" alt="" width="40" />
                      </div>
                      <div class="element-title">
                        <Styledh5
                          data-translate="administrative-requests"
                          class="bold-text"
                        >
                          طلبات من قسم الخدمات الإدارية
                        </Styledh5>
                      </div>
                      <div />
                    </StyledElement>
                  </a>
                </StyledItemElement>
              </div>
            </div>
          </div>

          <div class="item">
            <div class="carousel-col">
              <div class="block img-responsive">
                <StyledItemElement class="item-element">
                  <a href="/">
                    <StyledElement class="element">
                      <div class="pl30 pr30 pt30">
                        <img src="./imgs/desk.png" alt="" width="45" />
                      </div>
                      <StyledElementTitle class="element-title">
                        <Styledh5 data-translate="my-office" class="bold-text">
                          مكتبي
                        </Styledh5>
                      </StyledElementTitle>
                      <StyledDescription class="element-description">
                        <Styledh6 data-translate="element-description" dir="auto">
                          {" "}
                          تشمل طلبات القرطاسية صيانة المكتب والمعدات الأخرى في
                          المكتب..
                        </Styledh6>
                      </StyledDescription>
                    </StyledElement>
                  </a>
                </StyledItemElement>
              </div>
            </div>
          </div>
        </div>

        <CarouselControlLeft
          role="button"
          href="#carousel"
          data-slide="prev"
          class="left carousel-control"
        >
          <FontAwesomeIcon size="2x" icon={faChevronLeft} />
        </CarouselControlLeft>
        <CarouselControlRight
          role="button"
          href="#carousel"
          data-slide="next"
          class=""
        >
        <FontAwesomeIcon size="2x" icon={faChevronRight} />
        </CarouselControlRight>
      </div>
      <div id="minimize" class="minimize-left">
      <FontAwesomeIcon size="2x" icon={faBars} />
      </div>
    </StyledServicesContainer>
  );
};
export default ServicesSlider;
