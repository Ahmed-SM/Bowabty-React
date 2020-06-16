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
    align-items: center;
    width: 180px;
  
`;
const StyledSocialPosition = styled.div`
    display: block;
    width: 70px;
    & > * {
        color: white;
    }
    .social-icon{
        font-size: 14px;
    }
    .social-icon:hover{
    text-decoration: none !important;
    font-size: 17.5px !important;
    transition: all 0.2s !important;
    color: white !important;
    }
    .social-icon:focus{
      text-decoration: none !important;
      color: white !important;
    }
`;