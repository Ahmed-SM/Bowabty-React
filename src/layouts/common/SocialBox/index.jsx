import React from "react";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faYoutube, faFacebookF, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons';
import {Link} from "react-router-dom";

const SocialBox = () => {
    console.log("%c Navigation socialBox rerendred ", "background:red; color: white;");
    return (
        <StyledSocialBox>
            <StyledSocialPosition>
                <Link className="social-icon" to="/">
                    <FontAwesomeIcon size="1x" icon={faYoutube}></FontAwesomeIcon>
                </Link>
            </StyledSocialPosition>
            <StyledSocialPosition>
                <Link className="social-icon" to="/">
                    <FontAwesomeIcon size="1x" icon={faInstagram}/>
                </Link>
            </StyledSocialPosition>
            <StyledSocialPosition>
                <Link className="social-icon" to="/">
                    <FontAwesomeIcon size="1x" icon={faTwitter}/>
                </Link>
            </StyledSocialPosition>
            <StyledSocialPosition>
                <Link className="social-icon" to="/">
                    <FontAwesomeIcon size="1x" icon={faFacebookF}/>
                </Link>
            </StyledSocialPosition>
        </StyledSocialBox>
    );
}
export default SocialBox;

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
    line-height: 4.5;
    & > i {
        font-size: 25px;  
    }
    & > * {
        color: white;
    }
`;