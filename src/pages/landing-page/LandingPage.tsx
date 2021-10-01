import React from "react";
import {BatLogoWrapper, LandingPageWrapper} from "./LandingPage.styles";
import BatLogoGif from "../../components/assets/bat-logo-gif";

const LandingPage = () => {
    const eventBrightUrl = 'https://www.eventbrite.com/e/gotham-tickets-182197095417?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=cp&aff=escb';
    const onBatLogoClick = () => {
        alert(`You're going to the party!`);
    }
    return (
        <LandingPageWrapper>
            <BatLogoWrapper>
                <BatLogoGif 
                    url='assets/images/gothamlogorotationfull.gif'
                    onClick={onBatLogoClick}
                    eventBrightUrl={eventBrightUrl}/>
            </BatLogoWrapper>
        </LandingPageWrapper>
    )
};
export default LandingPage;