import React from "react";
import {BatLogoWrapper, LandingPageWrapper} from "./LandingPage.styles";
import BatLogoGif from "../../components/assets/bat-logo-gif";

const LandingPage = () => {
    const onBatLogoClick = () => {
        alert(`You're going to the party!`);
    }
    return (
        <LandingPageWrapper>
            <BatLogoWrapper>
                <BatLogoGif 
                    url='assets/images/gothamlogorotationfull.gif'
                    onClick={onBatLogoClick}
                    eventBrightUrl='https://www.google.com'/>
            </BatLogoWrapper>
        </LandingPageWrapper>
    )
};
export default LandingPage;