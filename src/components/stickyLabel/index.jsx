import React from "react";
import styled from "styled-components";
import StickyLabel from "./stickyLabel";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSmile} from '@fortawesome/free-regular-svg-icons';
import {faHeadset} from '@fortawesome/free-solid-svg-icons';
import { useTranslation, Trans } from "react-i18next";
const StickyBox = () =>{
    const { t } = useTranslation();
    return(
        <StyledStickyBox >
            <StickyLabel Title={<Trans i18nKey={"support"} t={t}>مؤشر السعادة</Trans>} Color={'#F1C210'} Icon={<FontAwesomeIcon  size="2x" icon={faSmile}/>}/>
            <StickyLabel Title={<Trans i18nKey={"happiness"} t={t}>الدعم الفني</Trans> } Color={'#3C4652'} Icon={<FontAwesomeIcon  size="2x" icon={faHeadset}/>}/>
        </StyledStickyBox>
    )
}
export default StickyBox;

const StyledStickyBox= styled.div`
    postion:relative;
    margin -27px 20px;
    width:150px;
    
`;