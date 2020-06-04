import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLifeRing,  faTasks, faSortDown, faBatteryHalf, faCog, faInfo, faFileAlt, faSlidersH} from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  } from 'reactstrap';
  
const StyledNavigation = styled.nav`
    justify-content: space-between;
    width: 100%;
    background-color: #3C4652;
    height: 70px;
    box-shadow: 0px 7px 5px 0px rgba(0, 0, 0, 0.31);
    text-align: center;
    display: inline-flex;
    flex-direction: row-reverse;
    flex-wrap: nowrap;

`;
const StyledRightSection = styled.div`
    display: inline-flex;
    justify-content: space-around;
    flex-direction: row-reverse;
    flex-wrap: nowrap;
    
`;
const StyledLeftSection = styled.div`
    clear: both;
    display: inline-flex;
    flex-direction: row-reverse;
    flex-wrap: nowrap;
`;
const StyledNavTab = styled.div`
    margin: 1px 7px;
    
    & > a {
        display: block;
        direction: rtl;
        width: 85px;
        padding: 9.2px 2px;
        color:white;
        text-decoration: none;
        user-select: none;
    }
    & > a:hover,
    .dropdown:hover .dropbtn, .dropbtn:focus  {
        background-color: #fff;
        color: black !important;
        border-radius: 8px;
        transition: all 1s;
    }
    & > .dropdown {
        list-style-type: none;
        text-decoration: none;
        float: right;
    }
    
    & > .dropbtn {
        display: inline-block;
        color: white;
        text-decoration: none;
    
    }
    & > .dropdown-content {
        right: calc(1px + -3%);
        top: calc(65px + 3%);
        display: none;
        position: absolute;
        direction: rtl;
        background-color: #eee;
        border-radius: 4px;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 1;
        text-indent: 5px;
    }
    
    & > .dropdown-content a {
        color: black !important;
        width: 100%;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        text-align: right;
        border-bottom: 2px dashed #C0C0C0;
    }
    
    & > .dropdown-content a:hover {
        background-color: white;
        transition: all 1s;
    
    }
    
    & > .dropdown:hover .dropdown-content {
        display: block;
        transition: all 0.5s;
    }
`;
const StyledSocialBox = styled.div`
    justify-content: space-around;
    display: inline-flex;
    flex-direction: row-reverse;
    flex-wrap: nowrap;
    width: 200px;
    & > div {
        max-width: 35px;
    }
`;
const StyledSocialPosition = styled.div`
    display: block;
    width: 70px;
    color: white;
    line-height: 5;
    & > i {
        font-size: 25px;  
    }
    & > * {
        color: white;
    }
`;
const StyledLangaugeBox = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    min-width: 110px;

    & > i{
        font-size: 16.2px;
        transition: all 0.1s;
        box-shadow: -10px 35px 46px -12px rgba(0,0,0,0.75);
    }
`;
const StyledVerticalLine = styled.div`
    margin-top: 20px;
    opacity: 0.4;
    border-left: 1px solid #F6F4F5;
    height: 30px;
`;
const StyledLangaugePosition = styled.div`
    line-height: 4.6 !important;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    & > * {
        color: white;
    }
`;



const Navigation = () => {
    return (
        <StyledNavigation>
            <StyledRightSection>
                <StyledNavTab>
                    <Link to="/meeting">
                        <FontAwesomeIcon size="2x" icon={faLifeRing} />
                        <div data-translate="meeting">الإجتماعات</div>
                    </Link>
                </StyledNavTab>
                <StyledNavTab>
                    <UncontrolledDropdown>
                        <DropdownToggle style={{background:`transparent`, color:`white`, outline:'none'}}>
                        <FontAwesomeIcon size="2x" icon={faTasks} />
                        <div>
                            <FontAwesomeIcon size="1x" icon={faSortDown} />
                            <span data-translate="task">المهام</span>
                        </div>
                        </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem><Link to="/1" data-translate="select">اختيار</Link></DropdownItem> 
                        <DropdownItem divider />
                        <DropdownItem><Link to="/1" data-translate="select">اختيار</Link></DropdownItem> 
                        <DropdownItem divider />
                       <DropdownItem><Link to="/1" data-translate="select">اختيار</Link></DropdownItem> 
                    </DropdownMenu>
                    </UncontrolledDropdown>
                </StyledNavTab>
                <StyledNavTab>
                    <Link to="myorders">
                        <FontAwesomeIcon size="2x" icon={faBatteryHalf} />
                        <div data-translate="order-status">طلباتي</div>
                    </Link>
                </StyledNavTab>
                <StyledNavTab >
                    <UncontrolledDropdown>
                        <DropdownToggle style={{background:`transparent`, color:`white`, outline:'none'}}>
                            <FontAwesomeIcon size="2x" icon={faCog} />
                            <div>
                                <FontAwesomeIcon size="1x" icon={faSortDown} />
                                <span data-translate="administration">إدارة النظام</span>
                            </div>
                        </DropdownToggle>
                        <DropdownMenu >
                            <DropdownItem> <Link to="/user" data-translate="select">المستخدم</Link> </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem><Link to="/useroles" data-translate="select2">صلاحيات المستخدم</Link> </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </StyledNavTab>
                <StyledNavTab className="dropdown">
                <UncontrolledDropdown>
                        <DropdownToggle style={{background:`transparent`, color:`white`, outline:'none'}}>
                        <FontAwesomeIcon size="2x" icon={faInfo} />
                        <div>
                            <FontAwesomeIcon size="1x" icon={faSortDown} />
                            <span data-translate="other">أخرى</span>
                        </div>
                        </DropdownToggle>
                    <DropdownMenu>
                    <DropdownItem><Link to="/1" data-translate="select">اختيار</Link></DropdownItem> 
                        <DropdownItem divider />
                        <DropdownItem><Link to="/1" data-translate="select">اختيار</Link></DropdownItem> 
                        <DropdownItem divider />
                       <DropdownItem><Link to="/1" data-translate="select">اختيار</Link></DropdownItem> 
                    </DropdownMenu>
                    </UncontrolledDropdown>
                </StyledNavTab>
                <StyledNavTab className="dropdown">
                <UncontrolledDropdown>
                        <DropdownToggle style={{background:`transparent`, color:`white`, outline:'none'}}>
                        <FontAwesomeIcon size="2x" icon={faFileAlt} />
                        <div>
                            <FontAwesomeIcon size="1x" icon={faSortDown} />
                            <span data-translate="report">التقارير</span>
                        </div>
                        </DropdownToggle>
                    <DropdownMenu className="dropdown-content">
                        <DropdownItem><Link to="/1" data-translate="select">اختيار</Link></DropdownItem> 
                        <DropdownItem divider />
                        <DropdownItem><Link to="/1" data-translate="select">اختيار</Link></DropdownItem> 
                        <DropdownItem divider />
                       <DropdownItem><Link to="/1" data-translate="select">اختيار</Link></DropdownItem> 
                    </DropdownMenu>
                    </UncontrolledDropdown>
                </StyledNavTab>
            </StyledRightSection>
            <StyledLeftSection>
                <StyledSocialBox>
                    <StyledSocialPosition>
                        <Link to="/">
                            <FontAwesomeIcon size="1x" icon={faYoutube} />
                        </Link>
                    </StyledSocialPosition>
                    <StyledSocialPosition>
                        <Link to="/">
                            <FontAwesomeIcon size="1x" icon={faInstagram} />
                        </Link>
                    </StyledSocialPosition>
                    <StyledSocialPosition>
                        <Link to="/">
                            <FontAwesomeIcon size="1x" icon={faTwitter} />
                        </Link>
                    </StyledSocialPosition>
                    <StyledSocialPosition>
                        <Link to="/">
                            <FontAwesomeIcon size="1x" icon={faFacebookF} />  
                        </Link>
                    </StyledSocialPosition>
                </StyledSocialBox>
                <StyledLangaugeBox>
                    <StyledVerticalLine/>
                    <StyledLangaugePosition>
                        <Link to="/">
                            <i id="language-choice">English</i>
                        </Link>
                    </StyledLangaugePosition>
                    <StyledVerticalLine/>
                </StyledLangaugeBox>
                <StyledNavTab>
                    <Link to="/">
                        <FontAwesomeIcon size="2x" icon={faSlidersH} />  
                        <i className="fa fa-sliders-h"></i>
                        <div data-translate="setting">
                            الاعدادات</div>
                    </Link>
                </StyledNavTab>
            </StyledLeftSection>
        </StyledNavigation>
    );
}
export default Navigation;