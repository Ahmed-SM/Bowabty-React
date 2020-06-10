import React, {useContext} from "react";
import styled from "styled-components";
import { useTranslation, Trans } from "react-i18next";
import {faLifeRing,faTasks,faBatteryHalf,faCog,faInfo,faSlidersH} from '@fortawesome/free-solid-svg-icons';
import {faFileAlt} from '@fortawesome/free-regular-svg-icons';
import LanguageBox from "./languageBox";
import SocialBox from "./socialBox";
import {Link} from "react-router-dom";
import Tab from "./tab";
import Dropdown from "./dropdown";
import {DropdownItem} from 'reactstrap';
import {DiractionContext} from "../../contexts/DiractionContext";

const Navigation = () => {
    console.log("Navigation rerendred")
    const { t } = useTranslation();
    const [isLTR] = useContext(DiractionContext);

    return (
        <StyledNavigation isLTR={isLTR}>
            <StyledRightSection>
                    <Tab path={"/meeting"} icon={faLifeRing} text={ <Trans i18nKey={"navigation:meetings"} t={t} >الإجتماعات</Trans>}/>
                <StyledDropdown>
                    <Dropdown icon={faTasks}  text={ <Trans i18nKey={"navigation:tasks.name"} t={t}>المهام</Trans>} diraction={isLTR}>
                        <DropdownItem style={DropItem}>
                            <Link style={LinkStyles} to="/incomingrequest" ><Trans i18nKey={"IncomingRequest:title"} t={t}>الطلبات الواردة</Trans></Link>
                        </DropdownItem>
                        <DropdownItem divider/>
                        <DropdownItem style={DropItem}>
                            <Link style={LinkStyles} to="/1" >اختيار</Link>
                        </DropdownItem>
                        <DropdownItem divider/>
                        <DropdownItem style={DropItem}>
                            <Link style={LinkStyles} to="/1" >اختيار</Link>
                        </DropdownItem>
                        <DropdownItem divider/>
                    </Dropdown>
                </StyledDropdown>
                    <Tab path={"/myorders"} icon={faBatteryHalf} text={ <Trans i18nKey={"navigation:myOrders"} t={t} >طلباتي</Trans>}/>
                <StyledDropdown >
                    <Dropdown icon={faCog} text={ <Trans i18nKey={"navigation:administration.name"} t={t}>إدارة النظام</Trans>} diraction={isLTR}>
                        <DropdownItem style={DropItem}>
                            <Link style={LinkStyles} to="/user" >المستخدم</Link>
                        </DropdownItem >
                        <DropdownItem divider/>
                        <DropdownItem style={DropItem}>
                            <Link style={LinkStyles} to="/useroles" >صلاحيات المستخدم</Link>
                        </DropdownItem>
                        <DropdownItem divider/>
                    </Dropdown>
                </StyledDropdown>
                <StyledDropdown >
                    <Dropdown icon={faInfo} text={ <Trans i18nKey={"navigation:others.name"} t={t}>أخرى</Trans>} diraction={isLTR}>
                        <DropdownItem style={DropItem}>
                            <Link style={LinkStyles} to="/user" >المستخدم</Link>
                        </DropdownItem>
                        <DropdownItem divider/>
                        <DropdownItem style={DropItem}>
                            <Link style={LinkStyles} to="/useroles" >صلاحيات المستخدم</Link>
                        </DropdownItem>
                    </Dropdown>
                </StyledDropdown>
                <StyledDropdown>
                    <Dropdown icon={faFileAlt} text={ <Trans i18nKey={"navigation:reports.name"} t={t}>التقارير</Trans>} diraction={isLTR}>
                        <DropdownItem style={DropItem}>
                            <Link style={LinkStyles} to="/user" >المستخدم</Link>
                        </DropdownItem>
                        <DropdownItem divider/>
                        <DropdownItem style={DropItem}>
                            <Link style={LinkStyles} to="/useroles" >صلاحيات المستخدم</Link>
                        </DropdownItem>
                    </Dropdown>
                </StyledDropdown>
            </StyledRightSection>
            <StyledLeftSection>
                <SocialBox/>
                <LanguageBox/>
                <StyledDropdown>
                    <Dropdown icon={faSlidersH} text={ <Trans i18nKey={"navigation:settings"} t={t}>الاعدادات</Trans>} diraction={ !isLTR }>
                        <DropdownItem style={DropItem}>
                            <Link style={LinkStyles} to="/" >المستخدم</Link>
                        </DropdownItem>
                        <DropdownItem divider/>
                        <DropdownItem style={DropItem}>
                            <Link style={LinkStyles} to="/" >صلاحيات المستخدم</Link>
                        </DropdownItem>
                    </Dropdown>
                </StyledDropdown>
            </StyledLeftSection>
        </StyledNavigation>
    );
}
export default Navigation;

const StyledNavigation = styled.nav `
    justify-content: space-between;
    width: 100%;
    background-color: #3C4652;
    height: 66px;
    box-shadow: 0px 7px 5px 0px rgba(0, 0, 0, 0.31);
    text-align: center;
    display: inline-flex;
    flex-direction: row;
    flex-wrap: nowrap;
    ${({ isLTR }) => !isLTR && `
    direction: rtl;
  `}
`;
const StyledRightSection = styled.div`
    display: inline-flex;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: nowrap;
    
`;
const StyledLeftSection = styled.div`
    clear: both;
    display: inline-flex;
    flex-direction: row;
    flex-wrap: nowrap;
`;
const StyledDropdown = styled.div`
    margin: 1px 7px;
`;
const DropItem ={
    color: 'black',
    width: '100%',
    padding: '12px 16px',
    textDecoration: 'none',
    display: 'block',
    textAlign: 'right',
    border:'none',
    outline:'none',
    borderBottom: '2px dashed #C0C0C0',
}
const LinkStyles = {
    textDecoration: 'none',
    color: 'black',
}