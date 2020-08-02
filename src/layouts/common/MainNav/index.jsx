import React, {useContext} from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import {faLifeRing,faTasks,faBatteryHalf,faCog,faInfo,faSlidersH} from '@fortawesome/free-solid-svg-icons';
import {faFileAlt} from '@fortawesome/free-regular-svg-icons';
import LanguageBox from "../LanguageBox";
import SocialBox from "../SocialBox";
import {Link} from "react-router-dom";
import Tab from "./tab";
import Dropdown from "./dropdown";
import {DropdownItem} from 'reactstrap';
import {DiractionContext} from "../../../contexts/DiractionContext";


const DropdownComponent = ({icon, btnText, items, diraction})=>{
    return(
        <StyledDropdown>
            <Dropdown icon={icon} text={btnText} toRight={diraction}>
                {items.map((item,index)=>{
                    return(
                    <DropdownItem style={DropItem} tag={Link} to={item.path} key={index}>
                        {item.text}
                    </DropdownItem>
                    )})}
            </Dropdown>
        </StyledDropdown>
    )
}
DropdownComponent.propTypes ={
    items: PropTypes.array
}
const MainNav = () => {
    const { t } = useTranslation();
    const {IsLTR} = useContext(DiractionContext);
    return (
        <StyledNavigation IsLTR={IsLTR}>
            <StyledRightSection>
                <Tab path={"/"} icon={faLifeRing} text={ t("navigation:meetings")}/>
                <DropdownComponent icon={faTasks} btnText={t("navigation:tasks.name")} items={[{path:"/incomingrequest", text:t("IncomingRequest:title")}]} diraction={!IsLTR} />
                <Tab path={"/myorders"} icon={faBatteryHalf} text={t("navigation:myOrders")}/>
                <DropdownComponent icon={faCog} btnText={t("navigation:tasks.name")} items={[{path:"/incomingrequest", text:t("IncomingRequest:title")}]} diraction={!IsLTR}/>
                <DropdownComponent icon={faInfo} btnText={t("navigation:others.name")} items={[{path:"/services", text:t("Services:title")}, {path:"/departement", text:t("departement:title")}, {path:"/userType", text:t("userType:title")}, {path:"/incomingrequest", text:t("IncomingRequest:title")}]} diraction={!IsLTR}/>
                <DropdownComponent icon={faFileAlt} btnText={t("navigation:reports.name")} items={[{path:"/incomingrequest", text:t("IncomingRequest:title")}]} diraction={!IsLTR} />
            </StyledRightSection>
            <StyledLeftSection>
                <SocialBox/>
                <LanguageBox/>
                <DropdownComponent icon={faSlidersH} btnText={t("navigation:settings")} items={[{path:"/", text:t("IncomingRequest:title")}]} diraction={IsLTR} />
            </StyledLeftSection>
        </StyledNavigation>
    );
}
export default MainNav;

const StyledNavigation = styled.nav`
    justify-content: space-between;
    width: 100%;
    background-color: #3C4652;
    height: 6.3rem;
    box-shadow: 0px 7px 5px 0px rgba(0, 0, 0, 0.31);
    text-align: center;
    display: inline-flex;
    flex-direction: row;
    flex-wrap: nowrap;
    ${({ IsLTR }) => !IsLTR && `
    direction: rtl;
  `}
`;
const StyledRightSection = styled.div`
    display: inline-flex;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    
`;
const StyledLeftSection = styled.div`
    clear: both;
    display: inline-flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
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
    textAlign: 'start',
    border:'none',
    outline:'none',
    borderBottom: '2px dashed #C0C0C0',
    background:'#F6F4F5',

}